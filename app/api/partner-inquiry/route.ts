import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ---------------------------------------------------------------------------
// In-memory sliding-window rate limiter (per serverless instance).
// This is a basic threshold, not a hard guarantee: each cold-start spins up a
// fresh instance with an empty map, so bursts across instances are possible.
// Good enough to stop casual spam / Resend-quota abuse.
// ---------------------------------------------------------------------------
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3;
const ipLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (ipLog.get(ip) ?? []).filter(t => t > windowStart);
  if (timestamps.length >= MAX_REQUESTS) {
    ipLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  ipLog.set(ip, timestamps);
  return false;
}

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, website } = body ?? {};

    // Honeypot: if the hidden `website` field is filled in, silently drop the
    // request without sending anything.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // Rate limit
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Te veel aanvragen, probeer het later opnieuw" },
        { status: 429 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.PARTNER_INQUIRY_TO ?? "contact@aimly.nl";
    const from = process.env.PARTNER_INQUIRY_FROM ?? "Re:view <noreply@aimly.nl>";

    if (resendKey) {
      const subject = `Nieuwe partner aanvraag — ${name}`;
      const html = `
        <div style="font-family:system-ui,sans-serif;color:#1c1917;max-width:520px">
          <h2 style="margin:0 0 12px">Nieuwe partner aanvraag</h2>
          <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
            <tr><td style="color:#78716c">Naam</td><td><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="color:#78716c">E-mail</td><td>${escapeHtml(email)}</td></tr>
            <tr><td style="color:#78716c">Telefoon</td><td>${escapeHtml(phone ?? "—")}</td></tr>
          </table>
          <p style="margin-top:16px;white-space:pre-wrap;background:#f5f5f4;padding:12px;border-radius:8px;font-size:14px">${escapeHtml(message)}</p>
        </div>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to, subject, html, reply_to: email }),
      });

      if (!res.ok) {
        const txt = await res.text();
        console.error("[partner-inquiry] resend failed:", txt);
      }
    } else {
      console.log("[partner-inquiry] (no RESEND_API_KEY) submission:", { name, email, phone, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[partner-inquiry] error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

"use client";

import { useLanguage } from "@/lib/i18n";

export default function HBR() {
  const { t } = useLanguage();
  const h = t.hbr;

  return (
    <section className="py-14 sm:py-20 border-y border-border-soft bg-surface-2/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Quote */}
          <figure>
            <div className="flex items-center gap-3 mb-5">
              <HBRLogo />
              <span className="text-[11px] uppercase tracking-widest text-text-subtle font-semibold">{h.eyebrow}</span>
            </div>
            <blockquote className="text-foreground text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
              <span className="text-green-500">&ldquo;</span>{h.quote}<span className="text-green-500">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-4 text-sm text-text-muted">
              — <cite className="not-italic font-semibold text-foreground">{h.source}</cite>
              <span className="mx-2 text-text-subtle">·</span>
              <span className="text-text-subtle">Michael Luca study, 2016</span>
            </figcaption>
          </figure>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { v: h.stat1Value, l: h.stat1Label },
              { v: h.stat2Value, l: h.stat2Label },
              { v: h.stat3Value, l: h.stat3Label },
            ].map((s, i) => (
              <div key={i} className="bg-surface border border-border-soft rounded-xl p-4 text-center">
                <div className="text-green-500 font-extrabold text-xl sm:text-2xl leading-none tracking-tight mb-2">{s.v}</div>
                <div className="text-[10px] sm:text-[11px] text-text-muted leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HBRLogo() {
  // Stylized HBR wordmark — recognizable but not the trademarked PNG
  return (
    <div className="inline-flex items-center gap-2">
      <div className="bg-foreground text-background text-[10px] font-extrabold tracking-tight px-2 py-1 rounded">
        HBR
      </div>
      <div className="hidden sm:block text-[10px] text-text-subtle font-semibold uppercase tracking-widest leading-tight">
        Harvard<br/>Business Review
      </div>
    </div>
  );
}

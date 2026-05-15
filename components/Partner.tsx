"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Partner() {
  const { t } = useLanguage();
  const p = t.partner;
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/partner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  }

  return (
    <>
      <section id="partner" className="py-20 sm:py-28 bg-stone-900 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 1L7 4l3 .5L7.75 6.75 8.5 10 5.5 8.25 2.5 10l.75-3.25L1 4.5 4 4z" fill="currentColor"/>
            </svg>
            {p.eyebrow}
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            {p.title}
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            {p.desc}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-900 text-base font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            {p.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => !submitting && setOpen(false)}>
          <div className="bg-surface rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-border-soft" onClick={e => e.stopPropagation()}>
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-foreground font-bold text-xl mb-2">{p.sent}</h3>
                <p className="text-text-muted text-sm mb-6">{p.sentSub}</p>
                <button
                  onClick={() => { setOpen(false); setSubmitted(false); setName(""); setEmail(""); setPhone(""); setMessage(""); }}
                  className="text-text-muted hover:text-foreground text-sm font-medium"
                >
                  {p.close}
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-foreground font-bold text-xl mb-1">{p.formTitle}</h3>
                  <p className="text-text-muted text-sm">{p.formSub}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-foreground text-sm font-medium mb-1.5">{p.nameLabel}</label>
                    <input
                      type="text" required value={name} onChange={e => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border-soft focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm text-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-sm font-medium mb-1.5">{p.emailLabel}</label>
                    <input
                      type="email" required value={email} onChange={e => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border-soft focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm text-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-sm font-medium mb-1.5">{p.phoneLabel}</label>
                    <input
                      type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border-soft focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm text-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-sm font-medium mb-1.5">{p.messageLabel}</label>
                    <textarea
                      required rows={3} value={message} onChange={e => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border-soft focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm text-foreground transition-colors resize-none"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit" disabled={submitting}
                      className="flex-1 bg-foreground hover:opacity-90 disabled:opacity-60 text-background text-sm font-semibold py-3 rounded-full transition-opacity"
                    >
                      {submitting ? "..." : p.submit}
                    </button>
                    <button
                      type="button" onClick={() => setOpen(false)} disabled={submitting}
                      className="px-5 text-text-muted hover:text-foreground text-sm font-medium"
                    >
                      {p.cancel}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

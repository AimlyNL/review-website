"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-2/60 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 mb-10">
          <div className="sm:col-span-2 max-w-sm">
            <a href="/" className="inline-flex items-center gap-0.5 mb-3">
              <span className="text-foreground font-bold text-xl tracking-tight">Re</span>
              <span className="text-green-500 font-bold text-xl">:</span>
              <span className="text-foreground font-bold text-xl tracking-tight">view</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-4">{f.tagline}</p>
            <div className="flex items-center gap-3 text-[11px] text-text-subtle">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>Operational</span>
              </div>
              <span>·</span>
              <span>GDPR / AVG</span>
              <span>·</span>
              <span>SSL</span>
            </div>
          </div>

          <div>
            <p className="text-foreground font-semibold text-sm mb-3">{f.product}</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-text-muted hover:text-foreground transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#get-reviews" className="text-text-muted hover:text-foreground transition-colors">{t.nav.getReviews}</a></li>
              <li><a href="#pricing" className="text-text-muted hover:text-foreground transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#partner" className="text-text-muted hover:text-foreground transition-colors">{t.nav.partner}</a></li>
              <li><a href="#faq" className="text-text-muted hover:text-foreground transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <p className="text-foreground font-semibold text-sm mb-3">{f.legal}</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-text-muted hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-text-muted hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="mailto:contact@aimly.nl" className="text-text-muted hover:text-foreground transition-colors">contact@aimly.nl</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border-soft flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-subtle text-xs">
            {f.copyright.replace("{year}", String(year))}
          </p>
          <div className="flex items-center gap-2 text-text-subtle text-xs">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 7c0 3.3-2.7 6-6 6S1 10.3 1 7s2.7-6 6-6 6 2.7 6 6z" stroke="currentColor" strokeWidth="1"/>
              <path d="M7 1c1.5 1.7 2.3 3.8 2.3 6S8.5 11.3 7 13M7 1C5.5 2.7 4.7 4.8 4.7 7S5.5 11.3 7 13M1 7h12" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <span>Made in Nederland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

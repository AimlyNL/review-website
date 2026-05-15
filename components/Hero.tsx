"use client";

import { useLanguage } from "@/lib/i18n";

function GoogleLogo({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-surface border border-border-soft shadow-sm text-text-muted text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <GoogleLogo />
              {h.badge}
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
            </div>

            <h1 className="animate-fade-up delay-100 text-foreground font-extrabold text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.05] tracking-tight">
              {h.headline1}
              <br />
              <span className="text-green-500">{h.headline2}</span>
            </h1>

            <p className="animate-fade-up delay-200 text-text-muted text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
              {h.sub}
            </p>

            <div className="animate-fade-up delay-300 mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="https://review-app-lyart-ten.vercel.app/signup"
                className="group inline-flex items-center gap-2 bg-foreground hover:opacity-90 text-background text-base font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                {h.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-foreground text-sm font-medium px-3 py-2"
              >
                {t.nav.howItWorks}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-6 text-xs text-text-subtle">
              {[h.trust1, h.trust2, h.trust3].map(label => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9l5.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-up delay-200 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-green-400/20 via-emerald-400/10 to-blue-400/20 rounded-3xl blur-2xl" />
            <div className="relative bg-surface rounded-2xl border border-border-soft card-shadow overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2.5 bg-surface-2 border-b border-border-soft">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <div className="flex-1 text-center text-[10px] text-text-subtle font-mono">app.review.nl/dashboard</div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="mb-4">
                  <div className="text-base font-bold text-foreground">Welcome back, Wieger</div>
                  <div className="text-xs text-text-subtle">Aimly · 2 locations</div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { name: "Aimly Utrecht", rating: "4.8", count: 24, points: "M0 14 L8 11 L16 9 L24 6 L32 5 L40 3" },
                    { name: "Aimly Amsterdam", rating: "4.6", count: 18, points: "M0 12 L8 10 L16 7 L24 9 L32 6 L40 4" },
                  ].map(l => (
                    <div key={l.name} className="bg-surface border border-border-soft rounded-xl p-3">
                      <div className="text-[10px] text-text-subtle mb-1 truncate flex items-center gap-1">
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M6 1C3.79 1 2 2.79 2 5c0 3 4 6 4 6s4-3 4-6c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 116 3.5a1.5 1.5 0 010 3z" fill="#22c55e"/></svg>
                        {l.name}
                      </div>
                      <div className="flex items-end justify-between gap-2">
                        <div>
                          <div className="text-xl font-extrabold text-foreground leading-none">{l.rating}</div>
                          <div className="text-[9px] text-text-subtle mt-1">{l.count} reviews</div>
                        </div>
                        <svg width="44" height="22" viewBox="0 0 44 22" fill="none" className="shrink-0">
                          <path d={l.points} stroke="#22c55e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                          <circle cx="40" cy="3" r="2" fill="#22c55e"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-surface-2 rounded-xl p-3 border border-border-soft">
                  <div className="flex items-center gap-1.5 mb-2">
                    <GoogleLogo size={10} />
                    <span className="text-[9px] text-text-subtle font-medium">via Google · 2h ago</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#4285F4] flex items-center justify-center text-white text-[11px] font-bold shrink-0">S</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                        <span className="text-xs font-semibold text-foreground">Sophie van den Berg</span>
                        <div className="flex gap-px">
                          {[1,2,3,4,5].map(i => (
                            <svg key={i} width="8" height="8" viewBox="0 0 12 12" fill="#fbbf24"><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/></svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-[11px] text-text-muted line-clamp-1">Lovely meal! Pasta was perfect and service was great.</p>
                    </div>
                    <button className="bg-foreground text-background text-[10px] font-medium px-2.5 py-1 rounded-md shrink-0">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

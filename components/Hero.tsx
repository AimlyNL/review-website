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

function MapsPinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5C5.24 1.5 3 3.74 3 6.5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5z" fill="#EA4335"/>
      <circle cx="8" cy="6.5" r="2" fill="white"/>
    </svg>
  );
}

// Stylized OpenAI-style flower/swirl mark
function ChatGPTMark({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.52-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-3.99 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.52 2.9 5.98 5.98 0 0 0 4.51 2.01 6.05 6.05 0 0 0 5.76-4.18 5.98 5.98 0 0 0 3.99-2.9 6.05 6.05 0 0 0-.75-7.1zm-9.06 12.67a4.49 4.49 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.68v-6.74l2.02 1.17.02.05v5.58a4.5 4.5 0 0 1-4.47 4.5zM3.6 18.39a4.48 4.48 0 0 1-.54-3.02l.14.08 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.33l-.02.05-4.84 2.79a4.5 4.5 0 0 1-6.14-1.62zM2.34 8.07a4.48 4.48 0 0 1 2.34-1.97V11.78c0 .28.15.54.39.68l5.81 3.35-2.02 1.17-.04.01L4 14.21a4.5 4.5 0 0 1-1.66-6.14zm16.6 3.87L13.13 8.57l2.02-1.17.04-.01 4.83 2.79a4.5 4.5 0 0 1-.68 8.11v-5.69a.77.77 0 0 0-.4-.66zm2.01-3.03l-.14-.09-4.78-2.76a.78.78 0 0 0-.79 0L9.4 9.43V7.1l.02-.05 4.84-2.79a4.5 4.5 0 0 1 6.68 4.65zm-12.65 4.16l-2.02-1.17-.02-.06V6.27a4.5 4.5 0 0 1 7.39-3.46l-.14.08-4.78 2.76a.78.78 0 0 0-.39.68l-.04 6.74zm1.1-2.37l2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-12 items-center">
          {/* LEFT — copy */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-surface border border-border-soft shadow-sm text-text-muted text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <GoogleLogo />
              {h.badge}
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
            </div>

            <h1
              className="animate-fade-up delay-100 text-foreground font-extrabold text-[2.6rem] sm:text-5xl md:text-[3.6rem] leading-[0.98]"
              style={{ letterSpacing: "-0.035em" }}
            >
              <span className="block">{h.headline1} <span className="text-green-500">{h.headline2}</span></span>
              <span className="block italic font-medium text-text-muted text-[1.6rem] sm:text-3xl md:text-4xl mt-2 sm:mt-3" style={{ letterSpacing: "-0.02em" }}>
                {h.headline3}
              </span>
            </h1>

            <p className="animate-fade-up delay-200 text-text-muted text-base sm:text-lg leading-relaxed mt-5 max-w-lg mx-auto lg:mx-0">
              {h.sub}
            </p>

            <div className="animate-fade-up delay-300 mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
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

            <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-5 text-xs text-text-subtle">
              {[h.trust1, h.trust2, h.trust3].map(label => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9l5.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — layered: big dashboard backdrop + 2 overlapping corner cards */}
          <div className="relative w-full h-[420px] sm:h-[460px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/10 to-blue-400/15 rounded-3xl blur-3xl" />

            {/* DASHBOARD — backdrop, dominant */}
            <div
              className="absolute top-[10%] left-[6%] w-[88%] rotate-[1.5deg] animate-fade-up delay-200"
              style={{ zIndex: 10 }}
            >
              <div className="bg-surface rounded-2xl border border-border-soft card-shadow overflow-hidden">
                {/* Chrome with Re:view wordmark */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-surface-2 border-b border-border-soft">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-400/70"/>
                    <div className="w-2 h-2 rounded-full bg-amber-400/70"/>
                    <div className="w-2 h-2 rounded-full bg-green-400/70"/>
                  </div>
                  <div className="flex items-center gap-0.5 ml-2">
                    <span className="text-foreground font-bold text-sm tracking-tight">Re</span>
                    <span className="text-green-500 font-bold text-sm">:</span>
                    <span className="text-foreground font-bold text-sm tracking-tight">view</span>
                  </div>
                  <span className="text-[10px] text-text-subtle ml-1.5">/ dashboard</span>
                  <div className="flex-1"/>
                  <span className="text-[10px] text-text-subtle font-medium hidden sm:inline">Aimly Utrecht</span>
                </div>

                {/* Dashboard body */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[10px] text-text-subtle uppercase tracking-wider font-semibold mb-0.5">Last 30 days</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-foreground font-extrabold text-2xl sm:text-3xl leading-none tracking-tight">4.8</span>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(i => (
                            <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#fbbf24"><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/></svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full">
                      <svg width="9" height="9" viewBox="0 0 8 8" fill="none"><path d="M1 5l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      +0.3 this month
                    </div>
                  </div>

                  {/* Sparkline */}
                  <div className="bg-surface-2/40 border border-border-soft rounded-xl p-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-text-subtle uppercase tracking-wider font-semibold">Rating trend</span>
                      <span className="text-[10px] text-text-subtle">124 reviews</span>
                    </div>
                    <svg viewBox="0 0 240 50" className="w-full h-12" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0 40 L30 38 L60 34 L90 30 L120 26 L150 22 L180 18 L210 12 L240 8 L240 50 L0 50 Z" fill="url(#trendGrad)"/>
                      <path d="M0 40 L30 38 L60 34 L90 30 L120 26 L150 22 L180 18 L210 12 L240 8" stroke="#22c55e" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="240" cy="8" r="3" fill="#22c55e"/>
                      <circle cx="240" cy="8" r="6" fill="#22c55e" opacity="0.25"/>
                    </svg>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "New", val: "+12", sub: "this week" },
                      { label: "Replied", val: "98%", sub: "AI auto" },
                      { label: "1–3★", val: "2", sub: "private" },
                    ].map((m, i) => (
                      <div key={i} className="bg-surface-2/40 border border-border-soft rounded-lg p-2">
                        <div className="text-[8px] text-text-subtle uppercase tracking-wider mb-0.5">{m.label}</div>
                        <div className="text-base font-extrabold text-foreground leading-none">{m.val}</div>
                        <div className="text-[8px] text-text-subtle mt-0.5">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* MAPS — top-left overlay */}
            <div
              className="absolute top-0 left-0 sm:-left-3 w-[44%] sm:w-[42%] -rotate-[5deg] animate-fade-up delay-300"
              style={{ zIndex: 20 }}
            >
              <div className="bg-surface rounded-xl border border-border-soft card-shadow overflow-hidden">
                <div className="relative h-14 bg-[#e8eaed] dark:bg-stone-800 overflow-hidden">
                  <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 30 Q40 10, 80 25 T160 20 L200 30 L200 60 L0 60 Z" fill="#c8e6c9" className="dark:opacity-50"/>
                    <path d="M0 45 L60 40 L120 48 L200 42" stroke="#fbbc05" strokeWidth="1.5" fill="none" opacity="0.7"/>
                    <path d="M30 0 L40 60M120 0 L130 60" stroke="#fff" strokeWidth="2" className="dark:stroke-stone-700"/>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <MapsPinIcon size={20}/>
                      <span className="absolute -inset-2 rounded-full bg-red-500/20 animate-pulse-dot"/>
                    </div>
                  </div>
                  {/* Google Maps chip */}
                  <div className="absolute top-1.5 right-1.5 bg-white dark:bg-stone-900 rounded-md pl-1 pr-1.5 py-0.5 flex items-center gap-1 border border-stone-200 dark:border-stone-700 shadow-sm">
                    <GoogleLogo size={9}/>
                    <span className="text-[8px] font-semibold text-stone-700 dark:text-stone-200">Maps</span>
                  </div>
                </div>
                <div className="p-2.5">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
                    #1 Top rated nearby
                  </span>
                  <div className="text-[12px] font-bold text-foreground leading-tight mt-1">Aimly Utrecht</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[11px] font-bold text-foreground">4.8</span>
                    <div className="flex gap-px">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} width="8" height="8" viewBox="0 0 12 12" fill="#fbbf24"><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/></svg>
                      ))}
                    </div>
                    <span className="text-[9px] text-text-subtle">(124)</span>
                  </div>
                  <div className="text-[9px] text-text-subtle">Italian · €€ · 0.4 km</div>
                </div>
              </div>
            </div>

            {/* CHATGPT — bottom-right overlay */}
            <div
              className="absolute bottom-0 right-0 sm:-right-3 w-[52%] sm:w-[50%] rotate-[3deg] animate-fade-up delay-500 animate-float"
              style={{ zIndex: 20 }}
            >
              <div className="bg-surface rounded-2xl border border-border-soft card-shadow overflow-hidden">
                {/* ChatGPT header */}
                <div className="flex items-center justify-between px-3 py-2 bg-surface-2/60 border-b border-border-soft">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-[#10a37f] flex items-center justify-center text-white">
                      <ChatGPTMark size={12}/>
                    </div>
                    <span className="text-[10px] font-semibold text-foreground">ChatGPT</span>
                  </div>
                  <span className="text-[8px] text-text-subtle">now</span>
                </div>

                <div className="p-2.5 space-y-1.5">
                  {/* User prompt */}
                  <div className="flex justify-end">
                    <div className="bg-surface-2 text-foreground text-[10px] rounded-2xl rounded-tr-sm px-2.5 py-1.5 max-w-[90%] leading-snug">
                      {h.aiPrompt}
                    </div>
                  </div>

                  {/* Assistant reply */}
                  <div className="flex items-start gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-[#10a37f] flex items-center justify-center text-white shrink-0 mt-0.5">
                      <ChatGPTMark size={12}/>
                    </div>
                    <div className="bg-green-500/8 border border-green-500/20 text-foreground text-[10px] rounded-2xl rounded-tl-sm px-2.5 py-1.5 leading-relaxed">
                      {h.aiReply}
                      <div className="mt-1 inline-flex items-center gap-1 text-[8px] text-text-subtle">
                        <GoogleLogo size={7}/>
                        <span>Source: Google reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Typing */}
                  <div className="flex items-center gap-1 pl-7">
                    <span className="w-1 h-1 rounded-full bg-text-subtle animate-pulse"/>
                    <span className="w-1 h-1 rounded-full bg-text-subtle animate-pulse" style={{ animationDelay: "0.15s" }}/>
                    <span className="w-1 h-1 rounded-full bg-text-subtle animate-pulse" style={{ animationDelay: "0.3s" }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar ribbon */}
        <div className="animate-fade-up delay-500 mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: <MapsPillarIcon/>, label: h.pillar1 },
            { icon: <AiPillarIcon/>, label: h.pillar2 },
            { icon: <ShieldPillarIcon/>, label: h.pillar3 },
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-3 bg-surface border border-border-soft rounded-xl px-4 py-3">
              <div className="w-9 h-9 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <span className="text-sm font-semibold text-foreground">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapsPillarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5c-2.76 0-5 2.24-5 5 0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="9" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function AiPillarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l1.6 4 4 .5L11.5 9.5l1 4L9 11.5 5.5 13.5l1-4L3.4 6.5l4-.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}
function ShieldPillarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5L3 4v4.5c0 3.5 2.5 6.5 6 8 3.5-1.5 6-4.5 6-8V4L9 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

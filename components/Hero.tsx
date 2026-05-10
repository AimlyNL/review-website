"use client";

import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-stone-200 shadow-sm text-stone-700 text-xs font-medium px-3.5 py-2 rounded-full mb-6">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {h.badge}
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-stone-900 font-extrabold text-4xl sm:text-6xl md:text-[4.5rem] leading-[1.05] tracking-tight max-w-3xl">
          {h.headline1}{" "}
          <br className="hidden sm:block" />
          <span className="text-green-500">{h.headline2}</span>
        </h1>

        <p className="animate-fade-up delay-200 mt-5 text-stone-500 text-base sm:text-xl leading-relaxed max-w-xl sm:max-w-2xl">
          {h.sub}
        </p>

        {/* Stat pill */}
        <div className="animate-fade-up delay-300 mt-4 inline-flex flex-wrap justify-center items-center gap-2 text-sm text-stone-500">
          <span className="inline-flex items-center gap-1.5 font-semibold text-stone-700">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="#22c55e">
              <path d="M7 1l1.75 3.5L13 5.25l-3 2.92.7 4.08L7 10.25 3.3 12.25l.7-4.08-3-2.92 4.25-.75z"/>
            </svg>
            {t.stats.items[0].prefix} {t.stats.items[0].value} {h.statLabel}
          </span>
          <span className="text-stone-300 hidden sm:inline">·</span>
          <span className="hidden sm:inline">{h.statSource}</span>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-base px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95 green-glow"
          >
            {h.cta1}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 text-stone-700 font-semibold text-base px-6 py-3.5 rounded-full border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all duration-200"
          >
            {h.cta2}
          </a>
        </div>
        <p className="animate-fade-up delay-500 mt-3 text-stone-400 text-xs sm:text-sm px-4 text-center">{h.trust}</p>

        {/* Dashboard mockup — desktop full, mobile simplified */}
        <div className="animate-fade-up delay-600 mt-12 w-full max-w-4xl">
          <div className="relative">
            <div className="absolute inset-x-0 -bottom-6 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-green-500/5 rounded-2xl blur-2xl scale-95 translate-y-4" />

            <div className="relative bg-white rounded-2xl border border-stone-200 card-shadow overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-100 bg-stone-50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white border border-stone-200 rounded-md px-3 py-0.5 text-xs text-stone-400 font-medium">
                    app.review.nl/dashboard
                  </div>
                </div>
              </div>

              {/* Mobile: compact stats only */}
              <div className="block sm:hidden p-4">
                <p className="text-stone-400 text-xs mb-3">Dashboard · Wieger</p>
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {[
                    { label: "REVIEWS", value: "5", sub: "total" },
                    { label: "AVG RATING", value: "3.8", sub: "out of 5" },
                    { label: "PENDING", value: "2", sub: "awaiting reply", amber: true },
                    { label: "RESPONSE", value: "20%", sub: "answered" },
                  ].map((s, i) => (
                    <div key={i} className={`rounded-xl border p-3 ${s.amber ? "bg-amber-50 border-amber-100" : "bg-stone-50 border-stone-100"}`}>
                      <p className="text-[9px] font-bold tracking-wider text-stone-400 mb-1">{s.label}</p>
                      <p className={`text-xl font-bold ${s.amber ? "text-amber-600" : "text-stone-900"}`}>{s.value}</p>
                      <p className="text-[9px] text-stone-400 mt-0.5">{s.sub}</p>
                    </div>
                  ))}
                </div>
                {/* One review item */}
                <div className="rounded-xl border border-stone-100 p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-400 text-white text-xs font-bold flex items-center justify-center shrink-0">S</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-stone-800 text-xs font-semibold">Sophie van den Berg</p>
                    <div className="flex gap-0.5 my-0.5">
                      {[1,2,3,4,5].map(s => <svg key={s} width="8" height="8" viewBox="0 0 12 12" fill="#f59e0b"><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/></svg>)}
                    </div>
                    <p className="text-stone-400 text-[10px] truncate">Heerlijk gegeten! De pasta was perfect...</p>
                  </div>
                  <span className="shrink-0 bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-1 rounded-full">AI ✓</span>
                </div>
              </div>

              {/* Desktop: full dashboard */}
              <div className="hidden sm:flex">
                {/* Sidebar */}
                <div className="flex flex-col w-44 border-r border-stone-100 p-4 gap-1 shrink-0">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 text-green-700 text-xs font-semibold mb-2">
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                      <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <rect x="7" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <rect x="1" y="7" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <rect x="7" y="7" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    Dashboard
                  </div>
                  {["Reviews", "Analytics", "Reviews verzamelen", "Instellingen"].map(item => (
                    <div key={item} className="px-3 py-2 text-xs text-stone-400 font-medium rounded-lg">{item}</div>
                  ))}
                </div>
                {/* Main */}
                <div className="flex-1 p-5">
                  <p className="text-stone-400 text-xs font-medium mb-0.5">Goedemorgen</p>
                  <h3 className="text-stone-900 font-bold text-base mb-4">Wieger · Aimly</h3>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {[
                      { label: "REVIEWS", value: "5", sub: "totaal", bg: "border-stone-100 bg-stone-50/50", color: "text-stone-900" },
                      { label: "GEM. RATING", value: "3.8", sub: "uit 5 sterren", bg: "border-stone-100 bg-stone-50/50", color: "text-stone-900" },
                      { label: "WACHTEN", value: "2", sub: "op reactie", bg: "bg-amber-50 border-amber-100", color: "text-amber-600" },
                      { label: "RESPONSE RATE", value: "20%", sub: "beantwoord", bg: "border-stone-100 bg-stone-50/50", color: "text-stone-900" },
                    ].map((s, i) => (
                      <div key={i} className={`rounded-xl border p-3 ${s.bg}`}>
                        <p className="text-stone-400 text-[9px] font-bold tracking-wider mb-1">{s.label}</p>
                        <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                        <p className="text-stone-400 text-[9px] mt-0.5">{s.sub}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-stone-100 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-stone-100 bg-stone-50/50">
                      <span className="text-stone-700 text-xs font-semibold">Wachten op reactie</span>
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                    </div>
                    {[
                      { name: "Sophie van den Berg", stars: 5, text: "Heerlijk gegeten! De pasta was perfect en de bediening super vriendelijk.", avatar: "S", color: "bg-rose-400" },
                      { name: "Mark Johnson", stars: 4, text: "Great food, nice atmosphere. Service was a bit slow but overall very enjoyable.", avatar: "M", color: "bg-blue-400" },
                      { name: "Thomas Bakker", stars: 5, text: "Beste restaurant van Amsterdam! Altijd top eten en geweldige sfeer.", avatar: "T", color: "bg-green-400" },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-stone-50 last:border-0">
                        <div className={`w-7 h-7 rounded-full ${r.color} text-white text-xs font-bold flex items-center justify-center shrink-0`}>{r.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-stone-800 text-xs font-semibold">{r.name}</span>
                            <div className="flex gap-0.5">
                              {[1,2,3,4,5].map(s => <svg key={s} width="8" height="8" viewBox="0 0 12 12" fill={s <= r.stars ? "#f59e0b" : "#e7e5e4"}><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/></svg>)}
                            </div>
                          </div>
                          <p className="text-stone-400 text-[10px] truncate">{r.text}</p>
                        </div>
                        <button className="shrink-0 bg-green-500 text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg">Reageer</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo bar */}
        <div className="animate-fade-up delay-600 mt-16 sm:mt-20 flex flex-col items-center gap-3">
          <p className="text-stone-400 text-sm text-center">{h.logoBar}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 opacity-35 grayscale">
            {["Bistro Oranje", "Hotel Waterfront", "Café De Hoek", "Brasserie Amici", "Restaurant De Zon"].map(name => (
              <span key={name} className="text-stone-600 text-xs sm:text-sm font-bold whitespace-nowrap">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-24 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
          Nieuw · Google Business Profile integratie live
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
            <path d="M2.5 6h7m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-stone-900 font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.06] tracking-tight max-w-3xl">
          Meer sterren.
          <br />
          <span className="text-green-500">Minder werk.</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up delay-200 mt-6 text-stone-500 text-lg sm:text-xl leading-relaxed max-w-xl font-normal">
          Re:view koppelt aan jouw Google Business profiel en laat AI
          jouw reviews beantwoorden — automatisch, persoonlijk en altijd op tijd.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-base px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 green-glow"
          >
            14 dagen gratis proberen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-stone-700 font-semibold text-base px-6 py-3.5 rounded-full border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all duration-200"
          >
            Hoe het werkt
          </a>
        </div>

        {/* Trust signal */}
        <p className="animate-fade-up delay-500 mt-4 text-stone-400 text-sm">
          Geen creditcard vereist · Opzetten in 2 minuten
        </p>

        {/* Dashboard mockup */}
        <div className="animate-fade-up delay-600 mt-16 w-full max-w-4xl">
          <div className="relative">
            {/* Floating card glow */}
            <div className="absolute inset-0 bg-green-500/5 rounded-2xl blur-2xl scale-95 translate-y-4" />

            {/* Main dashboard card */}
            <div className="relative bg-white rounded-2xl border border-stone-200 card-shadow overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-100 bg-stone-50/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-stone-200/70 rounded-md px-4 py-1 text-xs text-stone-500 font-medium">
                    app.review.nl/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 sm:p-6">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                    <p className="text-stone-400 text-xs font-medium mb-1">Gemiddelde score</p>
                    <div className="flex items-end gap-1">
                      <span className="text-stone-900 text-2xl font-bold">4.8</span>
                      <span className="text-green-500 text-sm font-semibold mb-0.5">▲ 0.3</span>
                    </div>
                    <div className="flex gap-0.5 mt-1.5">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i <= 4 ? "#f59e0b" : "#d6d3d1"} className="shrink-0">
                          <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/>
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                    <p className="text-stone-400 text-xs font-medium mb-1">Beantwoord</p>
                    <div className="flex items-end gap-1">
                      <span className="text-stone-900 text-2xl font-bold">98%</span>
                    </div>
                    <div className="mt-2 bg-stone-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{width: "98%"}} />
                    </div>
                  </div>

                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                    <p className="text-stone-400 text-xs font-medium mb-1">Nieuwe reviews</p>
                    <div className="flex items-end gap-1">
                      <span className="text-stone-900 text-2xl font-bold">24</span>
                      <span className="text-stone-400 text-xs mb-0.5">deze week</span>
                    </div>
                    <p className="text-green-600 text-xs font-medium mt-1">+12 vs vorige week</p>
                  </div>
                </div>

                {/* Review list */}
                <div className="space-y-3">
                  {[
                    {
                      name: "Martijn de V.",
                      stars: 5,
                      text: "Fantastisch eten en super vriendelijk personeel! Absoluut een aanrader.",
                      time: "2u geleden",
                      replied: true,
                      avatar: "M",
                      color: "bg-blue-500",
                    },
                    {
                      name: "Sophie W.",
                      stars: 4,
                      text: "Heerlijk gegeten, sfeer was top. Iets langer wachten maar het was het waard.",
                      time: "5u geleden",
                      replied: true,
                      avatar: "S",
                      color: "bg-purple-500",
                    },
                    {
                      name: "Thijs B.",
                      stars: 5,
                      text: "Al jaren onze stamkroeg. Altijd een warm welkom en geweldige bier selectie.",
                      time: "1d geleden",
                      replied: false,
                      avatar: "T",
                      color: "bg-orange-500",
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-3.5 rounded-xl border border-stone-100 bg-white hover:border-stone-200 transition-colors"
                    >
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {review.avatar}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-stone-800 text-sm font-semibold">{review.name}</span>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(s => (
                              <svg key={s} width="10" height="10" viewBox="0 0 12 12" fill={s <= review.stars ? "#f59e0b" : "#e7e5e4"}>
                                <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-stone-400 text-xs ml-auto">{review.time}</span>
                        </div>
                        <p className="text-stone-500 text-xs leading-relaxed truncate">{review.text}</p>
                      </div>

                      {/* Status */}
                      <div className="shrink-0 flex items-start">
                        {review.replied ? (
                          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path d="M1.5 4l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            AI reactie
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-500 text-xs font-medium px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
                            Nieuw
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos bar */}
        <div className="animate-fade-up delay-600 mt-12 flex flex-col items-center gap-4">
          <p className="text-stone-400 text-sm">Vertrouwd door horecabedrijven in heel Nederland</p>
          <div className="flex items-center gap-8 opacity-40 grayscale">
            {["Restaurant De Zon", "Café 't Hoekje", "Hotel Prins", "Brasserie Amici", "Grand Café Luna"].map((name) => (
              <span key={name} className="text-stone-600 text-sm font-semibold whitespace-nowrap">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

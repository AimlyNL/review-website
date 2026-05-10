const testimonials = [
  {
    name: "Lotte van den Berg",
    role: "Eigenaar · Bistro Oranje, Amsterdam",
    avatar: "L",
    color: "bg-rose-500",
    stars: 5,
    text: "Voor Re:view liet ik reviews maandenlang onbeantwoord. Nu reageert AI binnen een uur op elke review. Mijn gemiddelde score is in twee maanden gestegen van 4.2 naar 4.7.",
    metric: "4.2 → 4.7",
    metricLabel: "sterren in 2 maanden",
  },
  {
    name: "Daan Molenaar",
    role: "Bedrijfsleider · Hotel Waterfront, Rotterdam",
    avatar: "D",
    color: "bg-blue-500",
    stars: 5,
    text: "Wij beheren drie locaties. Re:view bespaart ons minstens 5 uur per week. De reacties klinken altijd menselijk — gasten merken het verschil niet eens.",
    metric: "5 uur",
    metricLabel: "bespaard per week",
  },
  {
    name: "Roos Janssen",
    role: "Eigenaar · Café De Hoek, Utrecht",
    avatar: "R",
    color: "bg-violet-500",
    stars: 5,
    text: "De QR codes op onze tafels hebben ons reviewvolume verdriedubbeld. Nieuwe gasten zien nu meer dan 80 verse reviews. Dat maakt echt verschil.",
    metric: "3×",
    metricLabel: "meer reviews per maand",
  },
];

const stats = [
  { value: "4.8★", label: "Gemiddelde score klanten" },
  { value: "98%", label: "Reviews beantwoord" },
  { value: "+0.4★", label: "Score stijging in 60 dagen" },
  { value: "< 1u", label: "Gemiddelde responstijd" },
];

export default function SocialProof() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-green-400 text-xs font-semibold bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full mb-5">
            Wat onze klanten zeggen
          </div>
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Horecaondernemers die{" "}
            <span className="text-green-400">groeien</span> met Re:view
          </h2>
          <p className="mt-4 text-stone-400 text-lg leading-relaxed">
            Van kleine cafés tot grote hotels — Re:view werkt voor iedere horecaondernemer.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors duration-300 card-shadow-hover"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="#f59e0b">
                    <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Metric */}
              <div className="bg-stone-700/50 rounded-xl px-4 py-3 mb-5 border border-stone-600/40">
                <p className="text-green-400 text-2xl font-bold">{t.metric}</p>
                <p className="text-stone-400 text-xs mt-0.5">{t.metricLabel}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="border-t border-stone-800 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
                <p className="text-white text-3xl font-extrabold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-stone-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

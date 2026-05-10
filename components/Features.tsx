const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 11h2m-12 0H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Google koppeling",
    title: "Direct gesynchroniseerd",
    description:
      "Koppel je Google Business Profile in 30 seconden. Alle nieuwe reviews verschijnen automatisch in je dashboard, realtime.",
    highlight: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 6h16M3 11h10M3 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15.5 15l1 1 1.5-1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "AI reacties",
    title: "Persoonlijk. Altijd raak.",
    description:
      "Onze AI schrijft reacties die klinken alsof jij ze zelf hebt geschreven — afgestemd op je merkstijl en de inhoud van elke review.",
    highlight: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 12l4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 6a9 9 0 11-16 6.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
      </svg>
    ),
    label: "Auto-reply",
    title: "Reageer terwijl jij slaapt",
    description:
      "Zet auto-reply aan en Re:view beantwoordt reviews automatisch. Stel drempelwaarden in per sterrenaantal — jij hebt altijd de controle.",
    highlight: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="13" width="3" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9.5" y="9" width="3" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="5" width="3" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4.5 10l5-4 5 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Analytics",
    title: "Zie trends. Handel slim.",
    description:
      "Bekijk je gemiddelde score door de tijd, responstijden, reviewvolume en sentiment — alles in één helder dashboard.",
    highlight: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 15h2m0-3v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "QR codes",
    title: "Meer reviews. Moeiteloos.",
    description:
      "Genereer gepersonaliseerde QR codes voor op tafel, bon of visitekaartje. Gasten scannen en landen direct op je reviewpagina.",
    highlight: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M18 8a7 7 0 00-14 0c0 5-3 7-3 7h20s-3-2-3-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 19a2 2 0 01-4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="5" r="2.5" fill="currentColor" className="text-green-500"/>
      </svg>
    ),
    label: "Notificaties",
    title: "Niets missen.",
    description:
      "Ontvang een melding bij elke nieuwe review — via e-mail, Slack of WhatsApp. Reageer snel als het er echt toe doet.",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-green-700 text-xs font-semibold bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-5">
            Alles wat je nodig hebt
          </div>
          <h2 className="text-stone-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Van ontvangen tot reageren —{" "}
            <span className="text-green-500">volledig geautomatiseerd</span>
          </h2>
          <p className="mt-4 text-stone-500 text-lg leading-relaxed">
            Re:view neemt het zware werk over, zodat jij je kunt focussen op wat echt telt: je gasten.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl border transition-all duration-300 card-shadow-hover ${
                feature.highlight
                  ? "bg-green-500 border-green-400 text-white"
                  : "bg-white border-stone-200"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-2.5 rounded-xl mb-4 ${
                  feature.highlight
                    ? "bg-white/20 text-white"
                    : "bg-stone-100 text-stone-700"
                }`}
              >
                {feature.icon}
              </div>

              {/* Label */}
              <p
                className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                  feature.highlight ? "text-green-100" : "text-green-600"
                }`}
              >
                {feature.label}
              </p>

              {/* Title */}
              <h3
                className={`font-bold text-lg leading-snug mb-2 ${
                  feature.highlight ? "text-white" : "text-stone-900"
                }`}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  feature.highlight ? "text-green-50" : "text-stone-500"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

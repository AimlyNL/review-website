const manageFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10C2 5.58 5.58 2 10 2s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Google koppeling in 30 sec",
    description: "Verbind je Google Business Profile direct. Alle reviews, realtime gesynchroniseerd.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 9h8M6 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "AI schrijft jouw reacties",
    description: "Persoonlijk, in jouw toon. Instelbaar per vestiging — altijd on-brand.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 5a9 9 0 11-16 5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "Auto-reply of jouw goedkeuring",
    description: "Volledig automatisch, of jij keurt elke reactie goed. Kies per sterrenaantal.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="11" width="3" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="8.5" y="7" width="3" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="15" y="3" width="3" height="15" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3.5 8l5-4 5 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Analytics & score-inzichten",
    description: "Gemiddelde score, reviewvolume en responssnelheid in één dashboard.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16 7A7 7 0 102 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M17 18a2 2 0 10-4 0M11 18h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="16" cy="5" r="2" fill="currentColor" className="text-green-500"/>
      </svg>
    ),
    title: "Realtime notificaties",
    description: "Nieuwe review? Direct een melding via e-mail of Slack. Nooit meer iets missen.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="13" y="13" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Meerdere vestigingen",
    description: "Eén dashboard, al jouw locaties. Elke vestiging met eigen instellingen.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-green-700 text-xs font-semibold bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-5">
              Manage Reviews · €40/maand
            </div>
            <h2 className="text-stone-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Jouw reviews,{" "}
              <span className="text-green-500">professioneel beheerd</span>
            </h2>
          </div>
          <p className="text-stone-500 text-lg leading-relaxed lg:mb-2">
            Re:view neemt het beantwoorden van reviews volledig over.
            AI schrijft reacties die klinken alsof jij ze zelf hebt geschreven —
            zodat jij je kunt focussen op je gasten.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {manageFeatures.map((feature, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl border transition-all duration-300 card-shadow-hover ${
                i === 1
                  ? "bg-green-500 border-green-400 text-white"
                  : "bg-white border-stone-200"
              }`}
            >
              <div
                className={`inline-flex p-2.5 rounded-xl mb-4 ${
                  i === 1
                    ? "bg-white/20 text-white"
                    : "bg-stone-100 text-stone-700"
                }`}
              >
                {feature.icon}
              </div>
              <h3 className={`font-bold text-base leading-snug mb-2 ${i === 1 ? "text-white" : "text-stone-900"}`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${i === 1 ? "text-green-50" : "text-stone-500"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200 hover:shadow-md"
          >
            Probeer Manage Reviews gratis
          </a>
          <a href="#pricing" className="text-stone-500 text-sm hover:text-stone-700 transition-colors">
            Bekijk prijzen →
          </a>
        </div>
      </div>
    </section>
  );
}

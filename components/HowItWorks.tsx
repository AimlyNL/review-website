const steps = [
  {
    number: "01",
    title: "Koppel je Google profiel",
    description:
      "Log in met je Google account en koppel je Business Profile in minder dan een minuut. Re:view importeert al je bestaande reviews direct.",
    detail: "Werkt met enkelvoudige én meerdere locaties",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 14h2M5 14h2M14 21v2M14 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI leert jouw stijl",
    description:
      "Voer een paar woorden in over jouw restaurant of café — toon, sfeer, type keuken. Re:view past hier zijn reacties op aan.",
    detail: "Aanpasbaar per vestiging",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 18l2-6 4 4 2-8 3 4 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Reviews worden beheerd",
    description:
      "Elke nieuwe review krijgt automatisch een persoonlijke reactie. Jij kunt goedkeuren voor verzending of alles volledig automatisch laten gaan.",
    detail: "Inbox zero voor reviews",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 12l4 4 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 14A10 10 0 114 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Zie je score stijgen",
    description:
      "Volg je gemiddelde beoordeling in realtime. Sneller reageren op reviews is bewezen beter voor je positie in Google Maps.",
    detail: "Gemiddeld +0.4 sterren in 60 dagen",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l5-5 4 4 5-7 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-green-700 text-xs font-semibold bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-5">
            Simpel en snel
          </div>
          <h2 className="text-stone-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Klaar in{" "}
            <span className="text-green-500">2 minuten.</span>
            <br />
            Actief voor altijd.
          </h2>
          <p className="mt-4 text-stone-500 text-lg leading-relaxed">
            Geen technische kennis nodig. Re:view is ontworpen voor ondernemers, niet voor IT&apos;ers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative p-7 bg-white rounded-2xl border border-stone-200 hover:border-green-300 transition-all duration-300 card-shadow-hover overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute -right-2 -top-4 text-stone-100 font-black text-7xl leading-none select-none group-hover:text-green-50 transition-colors duration-300">
                {step.number}
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-stone-100 text-stone-700 group-hover:bg-green-50 group-hover:text-green-600 transition-colors duration-300 mb-4">
                  {step.icon}
                </div>

                {/* Step number badge */}
                <div className="inline-flex items-center gap-1.5 mb-3 ml-3 align-middle">
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-stone-400 text-xs font-medium">Stap {i + 1}</span>
                </div>

                <h3 className="text-stone-900 font-bold text-xl mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Detail chip */}
                <div className="inline-flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-full font-medium">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Begin vandaag nog
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

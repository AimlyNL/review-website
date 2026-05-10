const stats = [
  {
    value: "9%",
    prefix: "tot",
    label: "meer omzet per extra ster",
    source: "Harvard Business Review",
    sourceUrl: "https://hbr.org/2011/03/power-of-reviews",
    description: "Eén ster meer op je Google rating heeft direct impact op je omzet.",
  },
  {
    value: "33%",
    label: "past beoordeling aan",
    source: null,
    description: "Van klanten die een reactie krijgen op een negatieve review past een derde hun score aan of komt terug.",
  },
  {
    value: "95%",
    label: "leest reviews voor aankoop",
    source: "BrightLocal",
    sourceUrl: "https://www.brightlocal.com/research/local-consumer-review-survey/",
    description: "En 85% vertrouwt ze net zoveel als een persoonlijke aanbeveling van vrienden.",
  },
  {
    value: "15%",
    label: "hoger klantverloop bij niet reageren",
    source: null,
    description: "Bedrijven die reviews structureel negeren verliezen significant meer klanten.",
  },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 border-y border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-12">
          <p className="text-stone-500 text-base">
            Waarom reviews de meest onderschatte groeifactor zijn voor horeca
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 card-shadow-hover">
              {/* Value */}
              <div className="flex items-baseline gap-1.5 mb-3">
                {stat.prefix && (
                  <span className="text-stone-400 text-sm font-medium">{stat.prefix}</span>
                )}
                <span className="text-stone-900 text-4xl font-extrabold tracking-tight">
                  {stat.value}
                </span>
              </div>

              {/* Label */}
              <p className="text-green-700 text-sm font-semibold mb-2">{stat.label}</p>

              {/* Description */}
              <p className="text-stone-500 text-xs leading-relaxed mb-3">{stat.description}</p>

              {/* Source */}
              {stat.source && stat.sourceUrl ? (
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-stone-400 text-xs hover:text-stone-600 transition-colors"
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1H2a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V6M7 1h2v2M5 5l4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {stat.source}
                </a>
              ) : stat.source ? (
                <span className="text-stone-400 text-xs">{stat.source}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

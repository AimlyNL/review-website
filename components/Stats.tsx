const stats = [
  {
    value: "9%",
    prefix: "tot",
    label: "meer omzet per extra ster",
    description: "Eén ster meer op je Google rating heeft direct impact op je omzet.",
  },
  {
    value: "33%",
    label: "past beoordeling aan",
    description: "Van klanten die een reactie krijgen op een negatieve review past een derde hun score aan of komt terug.",
  },
  {
    value: "95%",
    label: "leest reviews voor aankoop",
    description: "En 85% vertrouwt ze net zoveel als een persoonlijke aanbeveling van vrienden.",
  },
  {
    value: "15%",
    label: "hoger klantverloop bij niet reageren",
    description: "Bedrijven die reviews structureel negeren verliezen significant meer klanten.",
  },
];

function HBRLogo() {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-3 py-1.5 shadow-sm">
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
          <span className="text-white text-[9px] font-black tracking-tight leading-none">HBR</span>
        </div>
        <span className="text-stone-600 text-xs font-semibold">Harvard Business Review</span>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 border-y border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <HBRLogo />
          <p className="text-stone-500 text-base">
            Waarom reviews de meest onderschatte groeifactor zijn voor horeca
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 card-shadow-hover">
              <div className="flex items-baseline gap-1.5 mb-3">
                {stat.prefix && (
                  <span className="text-stone-400 text-sm font-medium">{stat.prefix}</span>
                )}
                <span className="text-stone-900 text-4xl font-extrabold tracking-tight">
                  {stat.value}
                </span>
              </div>
              <p className="text-green-700 text-sm font-semibold mb-2">{stat.label}</p>
              <p className="text-stone-500 text-xs leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

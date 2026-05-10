"use client";

import { useLanguage } from "@/lib/i18n";

function HBRLogo() {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-3 py-1.5 shadow-sm">
      <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center shrink-0">
        <span className="text-white text-[9px] font-black tracking-tight leading-none">HBR</span>
      </div>
      <span className="text-stone-600 text-xs font-semibold">Harvard Business Review</span>
    </div>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const { eyebrow, items } = t.stats;

  return (
    <section className="py-16 sm:py-20 border-y border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <HBRLogo />
          <p className="text-stone-500 text-base">{eyebrow}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 card-shadow-hover">
              <div className="flex items-baseline gap-1.5 mb-3">
                {stat.prefix && <span className="text-stone-400 text-sm font-medium">{stat.prefix}</span>}
                <span className="text-stone-900 text-4xl font-extrabold tracking-tight">{stat.value}</span>
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

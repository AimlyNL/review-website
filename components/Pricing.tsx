"use client";

import { useLanguage } from "@/lib/i18n";

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
      dark ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-600"
    }`}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1.5 4l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [getReviews, manageReviews, compleet] = p.plans;

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-green-700 text-xs font-semibold bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-5">
            {p.badge}
          </div>
          <h2 className="text-stone-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            {p.headline}
          </h2>
          <p className="mt-4 text-stone-500 text-lg">{p.sub}</p>
        </div>

        {/* Two main cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

          {/* Manage Reviews — core, highlighted */}
          <div className="relative rounded-2xl border-2 border-green-500 bg-white p-7 ring-4 ring-green-500/8 card-shadow-hover transition-all duration-300">
            <div className="absolute -top-3 left-6">
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {manageReviews.badge}
              </span>
            </div>

            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-1">{manageReviews.name}</p>
                <p className="text-stone-500 text-sm">{manageReviews.tagline}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <div className="flex items-end gap-1 justify-end">
                  <span className="text-4xl font-extrabold tracking-tight text-stone-900">€{manageReviews.price}</span>
                  <span className="text-stone-400 text-sm mb-1.5">{p.perMonth}</span>
                </div>
                <p className="text-stone-400 text-xs">{p.exclVat}</p>
              </div>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed mb-5 pb-5 border-b border-stone-100">
              {manageReviews.description}
            </p>

            <ul className="space-y-2.5 mb-7">
              {manageReviews.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-stone-600 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://review-app-lyart-ten.vercel.app/signup"
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3.5 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              {p.ctaBtn}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Get Reviews — secondary */}
          <div className="relative rounded-2xl border border-stone-200 bg-white p-7 card-shadow-hover transition-all duration-300 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-1">{getReviews.name}</p>
                <p className="text-stone-500 text-sm">{getReviews.tagline}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <div className="flex items-end gap-1 justify-end">
                  <span className="text-4xl font-extrabold tracking-tight text-stone-900">€{getReviews.price}</span>
                  <span className="text-stone-400 text-sm mb-1.5">{p.perMonth}</span>
                </div>
                <p className="text-stone-400 text-xs">{p.exclVat}</p>
              </div>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed mb-5 pb-5 border-b border-stone-100">
              {getReviews.description}
            </p>

            <ul className="space-y-2.5 mb-7 flex-1">
              {getReviews.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-stone-600 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://review-app-lyart-ten.vercel.app/signup"
              className="w-full flex items-center justify-center gap-2 border border-stone-200 text-stone-700 hover:border-green-400 hover:text-green-700 font-semibold text-sm py-3.5 rounded-full transition-all duration-200"
            >
              {p.ctaBtn}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bundle strip — full width, compact */}
        <div className="relative bg-stone-900 rounded-2xl overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-7 py-6">
            {/* Left: label + description */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="shrink-0">
                <span className="bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg">
                  {compleet.name}
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-snug max-w-sm">
                {compleet.description}
              </p>
            </div>

            {/* Middle: features in a row */}
            <div className="hidden lg:flex items-center gap-5 shrink-0">
              {compleet.features.slice(0, 3).map((f) => (
                <div key={f} className="flex items-center gap-1.5 text-stone-400 text-xs whitespace-nowrap">
                  <CheckIcon dark />
                  {f}
                </div>
              ))}
            </div>

            {/* Right: price + CTA */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <div className="flex items-end gap-1">
                  <span className="text-white text-3xl font-extrabold tracking-tight">€{compleet.price}</span>
                  <span className="text-stone-400 text-sm mb-1">{p.perMonth}</span>
                </div>
                <p className="text-stone-500 text-xs">{compleet.badge}</p>
              </div>
              <a
                href="https://review-app-lyart-ten.vercel.app/signup"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-stone-900 hover:bg-stone-100 font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200 hover:shadow-md"
              >
                {p.ctaBtn}
              </a>
            </div>
          </div>
        </div>

        {/* FAQ row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {p.faq.map((item) => (
            <div key={item.q} className="bg-white border border-stone-200 rounded-2xl p-5">
              <p className="text-stone-800 font-semibold text-sm mb-1.5">{item.q}</p>
              <p className="text-stone-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

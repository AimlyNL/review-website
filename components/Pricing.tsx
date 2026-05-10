"use client";

import { useLanguage } from "@/lib/i18n";

const planStyles = [
  { color: "border-stone-200 bg-white", badge: null, ctaStyle: "border border-stone-200 text-stone-700 hover:border-green-400 hover:text-green-700", dark: false },
  { color: "border-green-500 bg-white ring-2 ring-green-500/10", badge: "most", ctaStyle: "bg-green-500 text-white hover:bg-green-600", dark: false },
  { color: "border-stone-900 bg-stone-900", badge: "best", ctaStyle: "bg-white text-stone-900 hover:bg-stone-100", dark: true },
];

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-green-700 text-xs font-semibold bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-5">
            {p.badge}
          </div>
          <h2 className="text-stone-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            {p.headline}
          </h2>
          <p className="mt-4 text-stone-500 text-lg">{p.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {p.plans.map((plan, i) => {
            const style = planStyles[i];
            const badgeLabel = style.badge === "most" ? plan.badge : style.badge === "best" ? plan.badge : null;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 transition-all duration-300 card-shadow-hover ${style.color}`}
              >
                {badgeLabel && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    style.dark ? "bg-white text-stone-900" : "bg-green-500 text-white"
                  }`}>
                    {badgeLabel}
                  </div>
                )}

                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${style.dark ? "text-stone-400" : "text-green-600"}`}>
                  {plan.name}
                </p>
                <p className={`text-sm font-medium mb-4 ${style.dark ? "text-stone-300" : "text-stone-500"}`}>
                  {plan.tagline}
                </p>

                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-4xl font-extrabold tracking-tight ${style.dark ? "text-white" : "text-stone-900"}`}>
                    €{plan.price}
                  </span>
                  <span className={`mb-1.5 text-sm ${style.dark ? "text-stone-400" : "text-stone-400"}`}>
                    {p.perMonth}
                  </span>
                </div>
                <p className={`text-xs mb-6 ${style.dark ? "text-stone-500" : "text-stone-400"}`}>
                  {p.exclVat}
                </p>

                <p className={`text-sm leading-relaxed mb-6 pb-6 border-b ${
                  style.dark ? "text-stone-400 border-stone-800" : "text-stone-500 border-stone-100"
                }`}>
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        style.dark ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-600"
                      }`}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className={`text-sm ${style.dark ? "text-stone-300" : "text-stone-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://review-app-lyart-ten.vercel.app/signup"
                  className={`w-full flex items-center justify-center gap-2 font-semibold text-sm py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${style.ctaStyle}`}
                >
                  {p.ctaBtn}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
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

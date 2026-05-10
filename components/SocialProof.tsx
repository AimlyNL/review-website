"use client";

import { useLanguage } from "@/lib/i18n";

const avatarColors = ["bg-rose-500", "bg-blue-500", "bg-violet-500"];

export default function SocialProof() {
  const { t } = useLanguage();
  const s = t.socialProof;

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-green-400 text-xs font-semibold bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full mb-5">
            {s.badge}
          </div>
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            {s.headline1}{" "}
            <span className="text-green-400">{s.headline2}</span>{" "}
            {s.headline3}
          </h2>
          <p className="mt-4 text-stone-400 text-lg leading-relaxed">{s.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {s.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors duration-300 card-shadow-hover"
            >
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="#f59e0b">
                    <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/>
                  </svg>
                ))}
              </div>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="bg-stone-700/50 rounded-xl px-4 py-3 mb-5 border border-stone-600/40">
                <p className="text-green-400 text-2xl font-bold">{t.metric}</p>
                <p className="text-stone-400 text-xs mt-0.5">{t.metricLabel}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${avatarColors[i]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {s.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
                <p className="text-white text-3xl font-extrabold tracking-tight">{stat.value}</p>
                <p className="text-stone-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

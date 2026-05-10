"use client";

import { useLanguage } from "@/lib/i18n";

export default function CTA() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative bg-green-500 rounded-3xl overflow-hidden px-8 sm:px-14 py-16 sm:py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
          </div>
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-green-600/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="flex gap-1 mb-5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 12 12" fill="white" opacity="0.9">
                  <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/>
                </svg>
              ))}
              <span className="text-white/70 text-sm ml-2 font-medium">{c.stars}</span>
            </div>

            <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-4">
              {c.headline1}
              <br />
              {c.headline2}
            </h2>
            <p className="text-green-50 text-lg leading-relaxed mb-8 max-w-lg">{c.sub}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://review-app-lyart-ten.vercel.app/signup"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold text-base px-7 py-4 rounded-full hover:bg-green-50 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                {c.ctaMain}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://review-app-lyart-ten.vercel.app"
                className="inline-flex items-center justify-center gap-2 bg-green-600/40 hover:bg-green-600/60 text-white font-semibold text-base px-7 py-4 rounded-full border border-white/20 transition-all duration-200"
              >
                {c.ctaSecondary}
              </a>
            </div>

            <div className="flex flex-wrap gap-5 mt-7">
              {c.trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-green-50 text-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

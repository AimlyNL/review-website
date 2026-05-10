"use client";

import { useLanguage } from "@/lib/i18n";

function GoogleLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const stepIcons = [
  <GoogleLogo key="google" />,
  <svg key="ai" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 14l3-9 4 5 3-7 4 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4"/></svg>,
  <svg key="check" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11l4 4 10-10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 6a9 9 0 11-16 6.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 3"/></svg>,
  <svg key="trend" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 16l5-5 4 4 5-7 5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 6h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-green-700 text-xs font-semibold bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-5">
            {h.badge}
          </div>
          <h2 className="text-stone-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            {h.headline1}{" "}
            <span className="text-green-500">{h.headline2}</span>
            <br />
            {h.headline3}
          </h2>
          <p className="mt-4 text-stone-500 text-lg leading-relaxed">{h.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {h.steps.map((step, i) => (
            <div
              key={i}
              className="group relative p-7 bg-white rounded-2xl border border-stone-200 hover:border-green-300 transition-all duration-300 card-shadow-hover overflow-hidden"
            >
              <div className="absolute -right-2 -top-4 text-stone-100 font-black text-7xl leading-none select-none group-hover:text-green-50 transition-colors duration-300">
                0{i + 1}
              </div>
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-stone-100 text-stone-700 group-hover:bg-green-50 group-hover:text-green-600 transition-colors duration-300 mb-4">
                  {stepIcons[i]}
                </div>
                <div className="inline-flex items-center gap-1.5 mb-3 ml-3 align-middle">
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-stone-400 text-xs font-medium">Step {i + 1}</span>
                </div>
                <h3 className="text-stone-900 font-bold text-xl mb-2 leading-snug">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{step.description}</p>
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

        <div className="mt-14 flex justify-center">
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {h.ctaBtn}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

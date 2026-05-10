"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
        <div className="flex flex-col gap-10">

          {/* Top: brand + links */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
            {/* Brand */}
            <div className="max-w-xs">
              <a href="/" className="inline-flex items-center gap-0.5 mb-3">
                <span className="text-stone-900 font-bold text-xl tracking-tight">Re</span>
                <span className="text-green-500 font-bold text-xl">:</span>
                <span className="text-stone-900 font-bold text-xl tracking-tight">view</span>
              </a>
              <p className="text-stone-500 text-sm leading-relaxed">{f.tagline}</p>
              <a
                href="https://review-app-lyart-ten.vercel.app/signup"
                className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors mt-4"
              >
                {f.ctaBtn}
              </a>
            </div>

            {/* Links */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 text-sm w-full sm:w-auto">
              <div>
                <p className="text-stone-900 font-semibold mb-3">{f.product}</p>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.features}</a></li>
                  <li><a href="#how-it-works" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.howItWorks}</a></li>
                  <li><a href="#pricing" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.reviews}</a></li>
                  <li><a href="https://review-app-lyart-ten.vercel.app" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.dashboard}</a></li>
                </ul>
              </div>
              <div>
                <p className="text-stone-900 font-semibold mb-3">{f.company}</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.about}</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.blog}</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.contact}</a></li>
                </ul>
              </div>
              <div>
                <p className="text-stone-900 font-semibold mb-3">{f.legal}</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.privacy}</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">{f.links.terms}</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-stone-400 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Re:view. {f.copyright}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-stone-400 text-xs">{f.status}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

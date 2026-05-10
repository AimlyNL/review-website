export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="/" className="inline-flex items-center gap-0.5 mb-3">
              <span className="text-stone-900 font-bold text-xl tracking-tight">Re</span>
              <span className="text-green-500 font-bold text-xl">:</span>
              <span className="text-stone-900 font-bold text-xl tracking-tight">view</span>
            </a>
            <p className="text-stone-500 text-sm leading-relaxed">
              Review management voor de horeca. Koppel je Google profiel en laat AI jouw online reputatie beheren.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://review-app-lyart-ten.vercel.app/signup"
                className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Gratis proberen
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-sm">
            <div>
              <p className="text-stone-900 font-semibold mb-3">Product</p>
              <ul className="space-y-2">
                <li><a href="#features" className="text-stone-500 hover:text-stone-700 transition-colors">Functies</a></li>
                <li><a href="#how-it-works" className="text-stone-500 hover:text-stone-700 transition-colors">Hoe het werkt</a></li>
                <li><a href="#reviews" className="text-stone-500 hover:text-stone-700 transition-colors">Reviews</a></li>
                <li><a href="https://review-app-lyart-ten.vercel.app" className="text-stone-500 hover:text-stone-700 transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <p className="text-stone-900 font-semibold mb-3">Bedrijf</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">Over ons</a></li>
                <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">Blog</a></li>
                <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-stone-900 font-semibold mb-3">Juridisch</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">Gebruiksvoorwaarden</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} Re:view. Gemaakt met ❤️ in Nederland.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-stone-400 text-xs">Alle systemen operationeel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

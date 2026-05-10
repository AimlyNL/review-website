export default function GetReviews() {
  return (
    <section id="get-reviews" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 text-green-700 text-xs font-semibold bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-5">
              Reviews verzamelen · Add-on
            </div>
            <h2 className="text-stone-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-5">
              Stuur tevreden gasten{" "}
              <span className="text-green-500">naar Google.</span>
              <br />
              Vang kritiek{" "}
              <span className="underline decoration-stone-300 decoration-2 underline-offset-4">privé op.</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">
              Re:view&apos;s slimme review-pagina stuurt tevreden gasten direct door naar jouw Google profiel. Minder tevreden gasten kunnen privé feedback achterlaten — zodat jij kunt reageren voor het publiek wordt.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "QR code voor op tafel, bon of visitekaartje",
                "Persoonlijke review-link per vestiging",
                "Positieve reviews → Google Business Profile",
                "Kritische feedback → privé inbox, jij reageert eerst",
                "Werkt volledig binnen de Google-richtlijnen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-stone-600 text-sm">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="https://review-app-lyart-ten.vercel.app/signup"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200 hover:shadow-md"
              >
                Probeer Get Reviews
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <span className="text-stone-400 text-sm">Vanaf €10/maand</span>
            </div>
          </div>

          {/* Right: visual flow */}
          <div className="relative">
            {/* QR mockup card */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 mb-4 card-shadow text-center">
              {/* App icon */}
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2l2 4 4.5.65-3.25 3.17.77 4.5L11 12l-4.02 2.32.77-4.5L4.5 6.65 9 6z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-stone-900 font-bold text-xl mb-1">Hoe was je bezoek?</h3>
              <p className="text-stone-400 text-sm mb-6">Jouw mening helpt ons om te verbeteren</p>

              {/* Google option */}
              <div className="bg-white border-2 border-green-400 rounded-xl p-4 mb-3 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-stone-800 font-semibold text-sm">Laat een review achter op Google</p>
                  <p className="text-stone-400 text-xs">Deel je ervaring publiek</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-stone-400">
                  <path d="M2 2h4v4M10 2h2v2M6 8H2v4M10 10h2v2M6 2H2v4" stroke="none"/>
                  <path d="M9 1h4v4M11 8v5H6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Private feedback option */}
              <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3h12a1 1 0 011 1v8a1 1 0 01-1 1H5l-3 3V4a1 1 0 011-1z" stroke="#22c55e" strokeWidth="1.4" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-stone-700 font-semibold text-sm">Stuur ons directe feedback</p>
                  <p className="text-stone-400 text-xs">Vertel het ons persoonlijk</p>
                </div>
              </div>

              <p className="text-stone-400 text-xs mt-4">Allebei wordt gewaardeerd</p>
            </div>

            {/* Flow arrows */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="text-green-500 text-xl mb-1">⭐⭐⭐⭐⭐</div>
                <p className="text-green-700 text-xs font-semibold">Positief → Google</p>
                <p className="text-stone-400 text-xs mt-1">Meer publieke reviews</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                <div className="text-amber-500 text-xl mb-1">💬</div>
                <p className="text-amber-700 text-xs font-semibold">Kritisch → Privé inbox</p>
                <p className="text-stone-400 text-xs mt-1">Jij lost het op</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

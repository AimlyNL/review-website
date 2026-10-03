# Re:view — marketingsite

De publieke website van Re:view. Statische marketingpagina plus privacy- en
voorwaardenpagina's.

**Nieuw in dit project?** Lees eerst de
[ONBOARDING.md in review-app](https://github.com/AimlyNL/review-app/blob/main/ONBOARDING.md).

## Snel starten

```bash
npm install
npm run dev   # http://localhost:3000
```

Geen Supabase nodig: deze site heeft geen database en geen login.

## Goed om te weten

- **Tweetalig** (Engels standaard, Nederlands via de toggle) met een eigen i18n-context in
  `lib/i18n.tsx`. Nieuwe teksten horen in beide talen.
- **Donkere modus** werkt via CSS-variabelen in `app/globals.css`; componenten gebruiken
  tokens als `bg-surface` en `text-foreground` en passen zich vanzelf aan.
- Het partnerformulier post naar `/api/partner-inquiry`. Dat endpoint heeft een
  rate limit en een honeypot-veld tegen spam.
- **Juridische teksten moeten gelijk blijven** met die in review-app en review-partners.
  Pas je privacy of voorwaarden hier aan, pas ze dan ook daar aan.
- Prijzen staan in `lib/i18n.tsx` en moeten overeenkomen met de `plans`-tabel in Supabase.

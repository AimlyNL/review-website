<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project context

Deel van **Re:view** — SaaS voor review-management in de Nederlandse horeca (Aimly VOF).
Vier samenhangende repos: `review-app` (klantdashboard), `review-partners` (affiliates),
`review-admin` (intern operator-dashboard), `review-website` (marketing).

**Lees `ONBOARDING.md` in de review-app repo voordat je substantiële wijzigingen maakt.**
Daar staan architectuur, databaseafspraken, RLS-valkuilen en werkafspraken.

## Kernregels

- Auth-gate zit in `src/proxy.ts`, niet in `middleware.ts`.
- Alle databasemigraties staan in `review-app/supabase/migrations/`, ook die voor de andere
  apps. Ze worden handmatig in de Supabase SQL-editor gedraaid — schrijf ze idempotent en
  vermeld in de commitboodschap dat er een migratie bij hoort.
- De drie apps delen één Supabase-project. RLS is leidend; teamrollen (`owner`, `manager`,
  `viewer`) lopen via de functies `user_owner_id()` en `user_role_for()`.
- `createServiceClient()` mag nooit cookies meekrijgen, anders overschrijft de
  gebruikerssessie de service-role en krijg je ongemerkt RLS-filtering terug.
- Interfaceteksten in het Nederlands, code en commitboodschappen in het Engels.
- Juridische teksten (privacy, voorwaarden) moeten gelijk blijven in review-app,
  review-partners en review-website.
- Push niets dat `npm run typecheck` of `npm run lint` laat falen; een pre-push hook
  blokkeert het anders alsnog.

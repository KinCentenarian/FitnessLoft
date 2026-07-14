# Phase 1 — Application Next.js

## Livré

- Next.js 15 (App Router) dans `apps/web/`
- i18n via `next-intl` — `/` (FR) et `/en` (EN)
- Tailwind CSS 4 + design tokens (couleurs, polices)
- 10 sections landing + header/footer
- SEO : metadata, sitemap, robots, JSON-LD LocalBusiness
- API `POST /api/v1/contact` (Resend, mode log si clé absente)
- GTM, carte Google Maps, liens sociaux
- Assets dans `apps/web/public/media/`

## Commandes

```bash
# Depuis la racine
npm install
npm run build -w @fitnessloft/content
npm run build -w @fitnessloft/schemas
npm run dev -w @fitnessloft/web
```

Ouvrir [http://localhost:3000](http://localhost:3000) (FR) ou [http://localhost:3000/en](http://localhost:3000/en).

## Variables d'environnement

Copier `apps/web/.env.example` vers `apps/web/.env.local` et renseigner `RESEND_API_KEY` pour l'envoi d'emails.

## Prochaine étape

**Phase 2** — Pages multi-localisations (`/cliniques/[slug]`).

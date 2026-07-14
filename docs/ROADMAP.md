# Roadmap — Le Fitness Loft

## Phase 0 ✅ — Préparation

- [x] Assets téléchargés et optimisés
- [x] Contenu extrait du site WordPress

## Phase 0 bis ✅ — Fondations monorepo

- [x] Structure `apps/` + `packages/`
- [x] `@fitnessloft/content` avec repository et entité `Location`
- [x] `@fitnessloft/schemas` avec Zod
- [x] `@fitnessloft/config` (ESLint, TS, Prettier)
- [x] Stubs features (booking, blog, shop, locations)
- [x] Documentation architecture

## Phase 1 — Landing Next.js

- [x] Initialiser Next.js dans `apps/web`
- [x] `next-intl`, Tailwind, design tokens
- [x] Composants UI + sections
- [x] SEO (metadata, sitemap, JSON-LD)
- [x] `POST /api/v1/contact` + Resend
- [x] GTM, carte Google, réseaux sociaux

## Phase 2 — Multi-localisations

- [ ] Routes `/[locale]/cliniques/[slug]`
- [ ] Sélecteur de clinique (si 2+ sites)
- [ ] Migration optionnelle vers Sanity CMS
- [ ] JSON-LD `LocalBusiness` par location

## Phase 3 — Rendez-vous

- [ ] Intégration Cal.com ou API interne
- [ ] PostgreSQL + Drizzle
- [ ] Routes `/[locale]/rendez-vous`
- [ ] Webhooks confirmation email

## Phase 4 — Blog et légal

- [ ] Sanity pour articles et pages légales
- [ ] Routes `/blog/[slug]`, `/legal/[slug]`
- [ ] Recherche (Pagefind ou Algolia)
- [ ] Consentement cookies avancé (Loi 25)

## Phase 5 — Produits

- [ ] Catalogue produits / forfaits
- [ ] Stripe Checkout
- [ ] Inventaire en base

## Décisions reportées

| Sujet | Décision | Quand |
|-------|----------|-------|
| CMS | Sanity | Phase 2+ |
| Base de données | PostgreSQL (Supabase) | Phase 3+ |
| Booking | Cal.com puis API custom si besoin | Phase 3 |
| Paiements | Stripe | Phase 5 |

# Feature: Locations (Phase 2)

**Statut :** stub — données en place, pages non implémentées

## Objectif

Pages par clinique / localisation, sélecteur multi-sites.

## Données existantes

- `packages/content/src/locales/locations/pointe-claire.ts`
- Type `Location` dans `@fitnessloft/content`

## Routes prévues

- `/[locale]/cliniques`
- `/[locale]/cliniques/[slug]`

## Fichiers à créer en Phase 2

```
features/locations/
├── components/LocationCard.tsx
├── components/LocationSelector.tsx
└── lib/get-location-page.ts
```

# Feature: Shop (Phase 5)

**Statut :** stub — non implémenté

## Objectif

Vente de forfaits, produits et suppléments.

## Dépendances prévues

- `@fitnessloft/schemas` → `productSchema`
- Stripe Checkout
- PostgreSQL pour inventaire

## Routes prévues

- `/[locale]/boutique`
- `/[locale]/boutique/[slug]`
- `POST /api/v1/checkout`

## Fichiers à créer en Phase 5

```
features/shop/
├── components/ProductCard.tsx
├── components/CartSummary.tsx
└── api/create-checkout.ts
```

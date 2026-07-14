# @fitnessloft/web

Application Next.js — **initialisation prévue en Phase 1**.

## Structure prévue

```
apps/web/
├── app/[locale]/          # Routes App Router
├── components/
│   ├── ui/                # Primitives réutilisables
│   └── sections/          # Sections landing (présentation pure)
├── features/              # Logique métier par domaine
│   ├── contact/
│   ├── locations/         # Phase 2
│   ├── booking/           # Phase 3
│   ├── blog/              # Phase 4
│   └── shop/              # Phase 5
└── lib/                   # Utilitaires transverses
```

## Dépendances workspace

- `@fitnessloft/content` — contenu et repository
- `@fitnessloft/schemas` — validation Zod (formulaires, API)

## Phase 1

```bash
# Depuis la racine du monorepo
cd apps/web
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false
```

Puis configurer `next-intl`, les alias `@/`, et `transpilePackages: ["@fitnessloft/content", "@fitnessloft/schemas"]`.

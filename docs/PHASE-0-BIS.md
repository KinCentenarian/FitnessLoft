# Phase 0 bis — Fondations monorepo

Restructuration du projet avant l'initialisation Next.js (Phase 1).

## Structure créée

```
apps/web/                    # Stub Next.js + stubs features
packages/
  config/                    # ESLint, TS, Prettier partagés
  content/                   # Contenu, types, repository
  schemas/                   # Zod (contact + stubs)
docs/
  ARCHITECTURE.md
  CONTENT.md
  ROADMAP.md
.cursor/rules/fitness-loft.mdc
```

## Changements par rapport à Phase 0

| Avant | Après |
|-------|-------|
| `content/fr.ts` monolithique | `packages/content/src/locales/fr/home.ts` |
| Pas de localisation structurée | Entité `Location` (`pointe-claire`) |
| IDs formulaire `evaluation` | Catalogue `health-assessment` (+ `catalogId` sur cartes) |
| `getContent()` sync direct | Repository async + `getContentSync()` |

## Commandes

```bash
# Racine du monorepo
npm install
npm run build -w @fitnessloft/content
npm run typecheck
npm run lint
```

## Prochaine étape

**Phase 1** — Initialiser Next.js dans `apps/web/` (voir `apps/web/README.md`).

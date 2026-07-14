# Architecture — Le Fitness Loft

Document de référence pour développeurs et agents IA.

## Vue d'ensemble

Monorepo npm workspaces — Phase 1 d'une plateforme clinique multidisciplinaire.

```
FitnessLoft_Reconstruction/
├── apps/web/              # Next.js (Phase 1)
├── packages/
│   ├── content/           # Contenu, types, repository
│   ├── schemas/           # Validation Zod (API, formulaires)
│   └── config/            # ESLint, TS, Prettier partagés
├── assets/                # Médias optimisés
├── scripts/               # Outils (optimisation images)
└── docs/                  # Documentation
```

## Principes

1. **Contenu ≠ présentation** — modifier le texte dans `packages/content`, jamais dans les composants React.
2. **Repository pattern** — les composants consomment `getContent()`, pas les fichiers de locale directement.
3. **IDs stables** — services (`health-assessment`), localisations (`pointe-claire`) ne changent pas entre phases.
4. **Features isolées** — chaque domaine dans `apps/web/features/<domain>/`.
5. **API versionnée** — `/api/v1/...` dès Phase 1.

## Couches

| Couche | Emplacement | Responsabilité |
|--------|-------------|----------------|
| Contenu | `packages/content` | Textes, localisations, catalogue services |
| Schémas | `packages/schemas` | Validation Zod partagée client/serveur |
| UI | `apps/web/components` | Affichage sans logique métier |
| Features | `apps/web/features` | Formulaires, API, hooks métier |
| Routes | `apps/web/app` | Assemblage pages, metadata |

## Flux de données (Phase 1)

```
packages/content/locales/fr/home.ts
        ↓
FileContentRepository.getSiteContent("fr")
        ↓
apps/web/app/[locale]/page.tsx
        ↓
components/sections/*.tsx
```

## Migration CMS (Phase 2+)

Remplacer `FileContentRepository` par `SanityContentRepository` dans `packages/content/src/file-repository.ts` — les composants restent inchangés.

## Conventions

- **Server Components** par défaut
- **`"use client"`** uniquement pour interactivité (formulaires, carrousels)
- **Imports** : `@/` (app), `@fitnessloft/content`, `@fitnessloft/schemas`
- **Pas de strings en dur** dans les composants — tout vient de `SiteContent`

## Tooling

```bash
npm install          # racine
npm run typecheck    # build content + vérifie types
npm run lint         # ESLint sur tous les packages
npm run format       # Prettier
```

## Variables d'environnement (Phase 1)

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=info@lefitnessloft.com
CONTACT_FROM_EMAIL=contact@lefitnessloft.com
```

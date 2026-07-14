# Guide de modification du contenu

## Où modifier quoi

| Besoin | Fichier |
|--------|---------|
| Texte landing FR | `packages/content/src/locales/fr/home.ts` |
| Texte landing EN | `packages/content/src/locales/en/home.ts` |
| Adresse, téléphone, horaires | `packages/content/src/locales/locations/pointe-claire.ts` |
| Labels formulaire (services) | `packages/content/src/catalog/service-labels.ts` |
| Catalogue services (IDs, bookable) | `packages/content/src/catalog/services.ts` |
| Images (IDs) | `assets/manifest.json` + fichiers dans `assets/optimized/` |

## Ajouter une localisation (Phase 2)

1. Créer `packages/content/src/locales/locations/<slug>.ts`
2. Ajouter l'entrée dans `LOCATIONS` (même fichier ou index)
3. Créer les pages dans `apps/web/features/locations/`

## IDs de services (ne pas renommer)

| ID | Bookable |
|----|----------|
| `health-assessment` | oui |
| `private-training` | oui |
| `group-classes` | non |
| `massage-therapy` | oui |
| `stronger-longer` | non |
| `golf-tpi` | oui |

Les cartes de la section Services utilisent des IDs d'affichage (`evaluation`, `kinesiology`…) liés au catalogue via `catalogId`.

## Utilisation dans le code

```ts
import { getContent, getContentSync } from "@fitnessloft/content";

// Server Component (async)
const content = await getContent("fr");

// Scripts / tests (sync)
const content = getContentSync("fr");
```

## Régénérer les images

```bash
cd scripts
npm install
node optimize-assets.mjs
```

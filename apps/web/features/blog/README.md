# Feature: Blog (Phase 4)

**Statut :** stub — non implémenté

## Objectif

Articles de blog, catégories, recherche et SEO par article.

## Dépendances prévues

- Sanity CMS (ou Contentlayer + MDX)
- `@fitnessloft/content` → types `LegalPage` (partagés avec légal)

## Routes prévues

- `/[locale]/blog`
- `/[locale]/blog/[slug]`
- `/[locale]/blog/categorie/[category]`

## Fichiers à créer en Phase 4

```
features/blog/
├── components/ArticleCard.tsx
├── components/ArticleBody.tsx
└── lib/get-articles.ts
```

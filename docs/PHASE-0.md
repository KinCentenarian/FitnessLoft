# Phase 0 — Préparation

Documentation de la phase de préparation avant l'initialisation Next.js.

## 0.1 Assets téléchargés

**Source :** `https://lefitnessloft.sltm.ca/wp-content/uploads/2025/03/`

| Dossier | Rôle |
|---------|------|
| `assets/raw/` | Fichiers originaux (JPEG, PNG, MP4, SVG) |
| `assets/optimized/` | Versions WebP + copies SVG/MP4 |
| `assets/manifest.json` | Inventaire généré automatiquement |

### Inventaire (31 fichiers)

- **Vidéo héro :** `Le-Fitness-Loft-Final-V1v1-1080p.mp4` (~9.6 Mo)
- **Logos :** 3 SVG + 1 PNG symbole
- **Photos :** entrée, 4 services (12 images slideshow), équipe (6), programmes, golf, gym, témoignages
- **Icône :** `Quotes-Icon.png`

Tous les téléchargements depuis le site en production ont réussi.

### Régénérer les optimisations

```bash
cd scripts
npm install
node optimize-assets.mjs
```

Le script convertit JPG/PNG → WebP (qualité 82) et met à jour `assets/manifest.json`.

---

## 0.2 Contenu structuré

| Emplacement | Description |
|-------------|-------------|
| `packages/content/src/types/` | Interfaces TypeScript par domaine |
| `packages/content/src/locales/fr/home.ts` | Contenu français landing |
| `packages/content/src/locales/en/home.ts` | Contenu anglais landing |
| `packages/content/src/locales/locations/` | Données par clinique |
| `packages/content/src/catalog/` | Catalogue services (IDs stables) |
| `packages/content/src/file-repository.ts` | Accès contenu via `getContent()` |

Voir `docs/CONTENT.md` pour le guide de modification.

---

## 0.3 Design tokens (référence)

Extraits de `post-11.css` Elementor pour Tailwind en Phase 1 :

```ts
colors: {
  primary: '#EDFF00',
  secondary: '#000000',
  text: '#FFFFFF',
  accent: '#B2B2B2',
  'panel-dark': '#111111',
}
fonts: {
  sans: 'Inter',
  body: 'Roboto',
  display: 'Bodoni Moda',
}
```

Breakpoints Elementor → Tailwind : `767px`, `1024px`, `1200px`, `1366px`.

---

## 0.4 Formulaire de contact — Recommandation

### Choix recommandé : **Resend** + API Route Next.js

| Critère | Resend | Formspree | EmailJS |
|---------|--------|-----------|---------|
| Intégration Next.js | Native (SDK) | Webhook externe | Client-side |
| Spam / validation | Serveur (Zod) | Limité | Limité |
| Coût | Gratuit jusqu'à 3 000 emails/mois | Gratuit 50/mois | Gratuit 200/mois |
| Propriété des données | Complète | Tierce partie | Tierce partie |
| SEO / perf | Pas de script tiers | Script externe | Script externe |

### Architecture prévue (Phase 5)

```
POST /api/contact
  → Validation Zod (nom, email, téléphone, service, message)
  → Rate limiting (optionnel)
  → Resend → info@lefitnessloft.com
  → Réponse JSON { success: true }
```

### Variables d'environnement

```env
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=info@lefitnessloft.com
CONTACT_FROM_EMAIL=contact@lefitnessloft.com  # domaine vérifié
```

### Alternative sans backend

Si vous préférez zéro serveur au départ : **Formspree** avec endpoint caché — acceptable pour un MVP, mais moins maintenable qu'une API Route.

---

## 0.5 Intégrations à reporter en Phase 1

- Google Tag Manager : `GTM-PSVSFJ4M`
- Google Maps embed (adresse Pointe-Claire)
- Liens sociaux (Facebook, Instagram, LinkedIn)

---

## Prochaine étape

**Phase 0 bis** — Voir `docs/PHASE-0-BIS.md` (fondations monorepo).

**Phase 1** — Initialiser Next.js dans `apps/web/` et brancher `packages/content` + `assets/optimized/`.

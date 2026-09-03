# Heritiana — Landing Pages pour formateurs

Landing page professionnelle Vue 3 + Vite centrée sur un seul objectif commercial : **Demander un audit**.

## Positionnement

Création de landing pages pour formateurs professionnels francophones.

## Structure

1. Hero clair et compact
2. Réalisations
3. Avant / Après
4. Mon service + déroulement du projet
5. À propos
6. FAQ
7. CTA final
8. Audit dans une fenêtre dédiée

## Tester en local

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite, généralement :

```text
http://localhost:5173/
```

## Vérifier avant publication

```bash
npm run build
```

## Fichiers importants

- `src/views/HomeView.vue` : contenu principal
- `src/assets/landing.css` : design responsive et animations
- `src/components/AuditModal.vue` : formulaire d'audit
- `src/components/AppNavbar.vue` : navigation
- `public/assets/images/logo.svg` : nouveau monogramme HA
- `index.html` : SEO et partage social

## À personnaliser si besoin

L'adresse du formulaire FormSubmit se trouve dans `src/components/AuditModal.vue`.

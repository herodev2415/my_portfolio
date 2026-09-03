# Guide rapide — tester puis pousser sur GitHub

## 1. Tester sur votre PC

Dans Git Bash :

```bash
cd chemin/vers/le/projet
npm install
npm run dev
```

Ouvrez ensuite l'URL locale affichée par Vite.

Testez au minimum :
- ordinateur
- largeur tablette
- largeur mobile
- menu mobile
- tous les boutons `Demander mon audit`
- ouverture et fermeture de la fenêtre d'audit
- formulaire

Puis :

```bash
npm run build
```

## 2. Remplacer le contenu du dépôt GitHub

Clonez d'abord le dépôt dans un dossier propre :

```bash
cd ~/Downloads
git clone https://github.com/herodev2415/my_portfolio.git my_portfolio_push
cd my_portfolio_push
```

Supprimez le contenu cloné sauf `.git` :

```bash
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
```

Copiez ensuite tout le contenu de cette nouvelle version dans `my_portfolio_push`.

Vérifiez :

```bash
git status
```

Puis :

```bash
git add -A
git commit -m "Refonte landing page professionnelle"
git push origin main
```

Aucun `--force` n'est nécessaire avec cette méthode.

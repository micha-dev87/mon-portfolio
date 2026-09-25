# Portfolio de Michel Ange Tamgho Fogue

Site statique publié avec GitHub Pages à l’adresse
`https://micha-dev87.github.io/mon-portfolio/`.

## Aperçu local

Depuis la racine du dépôt :

```powershell
python -m http.server 4173
```

Ouvrir ensuite `http://localhost:4173/`.

## Structure

- `index.html` : contenu principal et métadonnées.
- `styles.css` : direction visuelle et mise en page responsive.
- `script.js` : données des projets et menu mobile.
- `cv.html` : CV public expurgé, imprimable depuis le navigateur.

## Déploiement

Le workflow `.github/workflows/static.yml` publie la racine du dépôt sur
GitHub Pages à chaque push sur `main`. Aucun serveur Node n’est requis.

Avant publication, vérifier les liens, le contenu du CV public et le rendu aux
largeurs mobile, tablette et ordinateur.

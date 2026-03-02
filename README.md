# GitHub Pages bundle

This folder contains:
- `index.html` (hub page)
- `investing/index.html` (your investing content)
- `assets/css/site.css` and `assets/js/site.js`
- `404.html`

## How to use
1. Copy these files into the root of your GitHub Pages repository.
2. Make sure your existing interview guide lives in `interview-guide/` (so it does not replace the hub `index.html`).
3. Commit and push. GitHub Pages will serve the site.

If your interview guide currently lives at the repo root:
- Create a folder `interview-guide/`
- Move the existing interview guide files into it
- Fix any relative links inside that project (for example, `assets/...` might become `../assets/...` depending on how it is organised)

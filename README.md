# Educated Chapters 25–27 Interactive Mini-Presentation

Single-page interactive site for a 10-minute class presentation on **Chapters 25, 26, and 27** of *Educated* by Tara Westover.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Edit content later

- Chapter text, themes, and interaction prompts: `script.js` in `const CHAPTERS`.
- Final reflection poll responses: `script.js` in `const reflectionTakeaways`.
- Visual style and typography: `styles.css`.

## Deploy to GitHub Pages (fast path)

1. Create an empty GitHub repo.
2. Push this folder to the repo's `main` branch.

```bash
cd /Users/zzz/Desktop/Python/educated-chapters-25-27
git init
git add .
git commit -m "Build interactive Educated chapters 25-27 mini-presentation"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

3. In GitHub, go to **Settings -> Pages** and ensure **Source: GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow to finish.
5. Your public URL will be:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/
```

## Files

- `index.html` - page structure
- `styles.css` - warm, bookish responsive styling
- `script.js` - chapter data + interactivity
- `.github/workflows/pages.yml` - automatic GitHub Pages deploy
- `.nojekyll` - static-site compatibility for GitHub Pages
- `PRESENTER_NOTE.md` - quick 10-minute in-class flow

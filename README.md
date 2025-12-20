# Fabtechs Enterprises – Nuxt build

This repository contains a Nuxt 3 single-page application for Fabtechs Enterprises (fabrication & erection specialists). The project replaces the legacy static HTML build with a component-driven Nuxt app, modern layout system, and structured content file.

## Key improvements

- **Component architecture** – Global layout, navigation, hero, services, project gallery, CTA, partners, and utility sections live under `components/` for re-use across pages.
- **Content centralization** – All copy, stats, slides, partners, testimonials, and contact data sit inside `data/siteContent.ts`, making edits code-light.
- **Single source of truth for styles** – `assets/css/main.css` defines the industrial UI theme (Space Grotesk + Archivo, dark palette, accent orange).
- **Clean public assets** – Only images remain under `public/img`. Legacy HTML/CSS/JS files were removed to prevent conflicts at build time.

## Project structure

```text
fabtechs-main/
├─ app.vue                # Nuxt layout shell
├─ nuxt.config.ts         # Metadata, global CSS, runtime contact info
├─ assets/css/main.css    # Custom design system
├─ components/            # Header, footer, and section components
├─ data/siteContent.ts    # Marketing content as data objects
├─ layouts/default.vue    # Header + footer wrapper
├─ pages/                 # Home, about, projects, testimonials, contact
└─ public/img             # Project & brand imagery
```

## Scripts (Node 18.20+ / 20+ recommended)

```bash
npm install        # install dependencies
npm run dev        # start local dev server (http://localhost:3000)
npm run build      # production build
npm run preview    # preview the production output locally
```

## Content editing tips

- Update hero slides, services, stats, projects, testimonials, partners, or contact data in `data/siteContent.ts`.
- Drop additional images into `public/img` and reference them from the data file.
- Global colors, spacing, and typography live in CSS variables at the top of `assets/css/main.css`.
- Re-use section components (hero, service highlights, partner marquee, etc.) to keep future pages consistent.

## Deployment

Deploy using any Nuxt-compatible workflow (Vercel, Netlify, Cloudflare, static export). For **GitHub Pages**:

1. (Optional) If the site lives under a repo path such as `https://<user>.github.io/<repo>/`, pass that base via the helper script:

   ```bash
   npm run generate:gh -- --base=/fabtechs.github.io/
   ```

   If you host at the root (custom domain or `<user>.github.io`), skip the `--base` flag.
2. The output lives in `.output/public/`. Push those files to your `gh-pages` branch or GitHub Pages source. The build already contains a `.nojekyll` file and SPA-friendly `404.html`.
3. To preview the static bundle locally after generation, serve `.output/public` with any static HTTP server (e.g. `npx serve .output/public`).

Nuxt dev tooling (`npm run dev`) still provides instant feedback for local development.

> **Nuxt 4 upgrade:** the project now targets Nuxt v4.2.x and has been tested with Node 24 (via `fnm`). Ensure your environment uses Node 18.20 or newer before running the scripts above.

### Automated deployment (GitHub Actions)

- The workflow at `.github/workflows/deploy.yml` runs on every push to `main` (and on manual dispatch). It installs dependencies, runs `npm run generate:gh`, and publishes `.output/public` through the GitHub Pages deployment APIs.
- Ensure **Settings → Pages → Build and deployment** is set to “GitHub Actions” so the workflow output becomes live at `fabtechs.co.in` (via your existing CNAME).
- If you need to target a different branch or base path, adjust the `on.push.branches` array or pass `--base` inside the workflow command.

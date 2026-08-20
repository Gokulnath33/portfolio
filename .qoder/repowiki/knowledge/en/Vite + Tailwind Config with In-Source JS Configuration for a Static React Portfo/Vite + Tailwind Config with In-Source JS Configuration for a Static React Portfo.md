---
kind: configuration_system
name: Vite + Tailwind Config with In-Source JS Configuration for a Static React Portfolio
category: configuration_system
scope:
    - '**'
source_files:
    - vite.config.js
    - tailwind.config.js
    - postcss.config.js
    - package.json
    - src/config/emailjs.js
    - src/data/portfolioData.js
---

## What system/approach is used

This repository is a static client-side React portfolio built with Vite. It does not use a centralized runtime configuration framework (no `.env` files, no `dotenv`, no feature-flag library). Instead, configuration is split across three layers:

1. **Build-time configuration** — Vite (`vite.config.js`) and Tailwind CSS (`tailwind.config.js`) define the build pipeline, plugins, dev server behavior, and design tokens.
2. **In-source application configuration** — `src/config/emailjs.js` exports an `EMAILJS_CONFIG` object that holds third-party service credentials; it is imported directly by components at bundle time.
3. **Content data as configuration** — `src/data/portfolioData.js` is the single source of truth for all user-facing content (personal info, education, skills, projects, experience, certifications) and is consumed by every UI component.

There are no environment variables, no config file parsing, and no runtime overrides. The app is intended to be deployed as a fully static site where changing configuration means editing source files and rebuilding.

## Key files and packages

- `vite.config.js` — Vite entrypoint: registers `@vitejs/plugin-react`, configures the dev server's file watcher to ignore large binary assets (`*.zip`, `*.pdf`, `public/certificates/**`, `node_modules`, `.git`).
- `tailwind.config.js` — Tailwind theme extension defining brand colors (`brand.cyan`, `brand.indigo`, `brand.violet`, `brand.pink`, `brand.emerald`, `brand.amber`), font families (`heading`, `body`, `mono`), and dark mode via `[data-theme="dark"]` class selector.
- `postcss.config.js` — PostCSS setup used by Tailwind/autoprefixer during builds.
- `package.json` — Declares dependencies (`react`, `@emailjs/browser`, `canvas-confetti`, `lucide-react`) and scripts (`dev`, `build`, `lint`, `preview`). No env-related scripts or tooling.
- `src/config/emailjs.js` — Centralized EmailJS credential object (`SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`, `RECIPIENT_EMAIL`) plus a `sendContactEmail` helper that conditionally uses real EmailJS keys or falls back to a simulated send when placeholder values are present.
- `src/data/portfolioData.js` — Large module exporting `personalInfo`, `educationData`, `skillsCategoryData`, `projectsData`, `experienceData`, `certificationsData`. All certificate entries reference PDFs/PNGs under `/certificates/*` served from `public/`.
- `public/certificates/...` — Physical certificate assets mirrored from `CERT/`; referenced by relative URLs in `portfolioData.js`.

## Architecture and conventions

- **Configuration lives next to its consumers.** There is no shared config store; each concern has a dedicated small file: build config at the repo root, EmailJS config under `src/config/`, and content data under `src/data/`.
- **Third-party credentials are stored inline in source.** `src/config/emailjs.js` hardcodes `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`, and `RECIPIENT_EMAIL`. The code includes a guard that checks whether these values still equal their placeholder strings (`'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, `'YOUR_PUBLIC_KEY'`) and switches between real EmailJS calls and a simulated demo flow accordingly.
- **Dark mode is opt-in via a DOM attribute.** Tailwind is configured with `darkMode: ['class', '[data-theme="dark"]']`, so the app toggles themes by setting `data-theme="dark"` on an ancestor element rather than reading a config flag.
- **Static asset paths are relative to `/`.** Certificate PDFs are referenced as `/certificates/<path>` in `portfolioData.js` and must be placed under `public/certificates/...` to be served by Vite's static asset handler.
- **No `.env` or environment variable loading exists.** The project has no `process.env.*` usage, no `import.meta.env.*` usage, and no `.env*` files committed. Runtime behavior differences come solely from the hardcoded values inside `src/config/emailjs.js`.

## Conventions and constraints

- **Build-time only:** All configuration is resolved at bundle time by Vite/Tailwind; there is no runtime configuration loader. Changing any setting requires a rebuild.
- **Dev server ignores heavy assets:** `vite.config.js` explicitly watches out `**/*.zip`, `**/*.pdf`, `**/public/certificates/**`, `**/node_modules/**`, `**/.git/**` to keep HMR fast during development.
- **Theme tokens are centralized in Tailwind:** Brand colors and fonts are defined once in `tailwind.config.js` and consumed via utility classes throughout the JSX components — no ad-hoc color/font literals scattered in components.
- **EmailJS fallback convention:** If the credential values in `src/config/emailjs.js` have not been replaced from their placeholders, `sendContactEmail` returns `{ success: true, isDemo: true, ... }` instead of making a network call. This is the documented way to run the contact form locally without real keys.
- **Certificate data schema is uniform:** Each entry in `certificationsData` follows the same shape (`id`, `title`, `issuer`, `score`, `tag`, `category`, `fileUrl`, `description`, `icon`), keeping the Certificates component able to render them generically.
- **No secrets management:** Because this is a client-side static site, there is no secret vault or CI-based env injection. Credentials live in plain text in `src/config/emailjs.js` and are shipped to the browser bundle alongside the rest of the JS — which is acceptable here because EmailJS public keys are designed to be exposed to clients.
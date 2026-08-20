---
kind: build_system
name: Vite-based React Build & Static Site Pipeline
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - vite.config.js
    - tailwind.config.js
    - postcss.config.js
    - .oxlintrc.json
---

## Build System Overview

This repository is a single-page React portfolio built with **Vite** as the build tool and bundler. There are no Makefiles, Dockerfiles, CI pipelines, or custom shell scripts — the entire build pipeline is defined in `package.json` scripts and Vite configuration files.

## Toolchain

- **Bundler**: Vite (`vite@^8.2.0`) with the official React plugin (`@vitejs/plugin-react@^6.0.4`).
- **Runtime**: React 19 (`react`, `react-dom`).
- **Styling pipeline**: Tailwind CSS v3 configured via `tailwind.config.js`, processed through PostCSS (`postcss.config.js`) with `autoprefixer`.
- **Linting**: Oxlint (`.oxlintrc.json`) with React rules enabled; invoked via `npm run lint`.
- **Output**: Production builds emit static assets to the `dist/` directory (created by `vite build`).

## Scripts (entry points)

Defined in `package.json`:
- `npm run dev` → starts the Vite development server with HMR.
- `npm run build` → runs `vite build` to produce an optimized production bundle under `dist/`.
- `npm run preview` → serves the `dist/` output locally for post-build verification.
- `npm run lint` → runs `oxlint` against source files.

## Vite Configuration

`vite.config.js` registers the React plugin and configures the dev server watcher to ignore large binary assets that would otherwise trigger unnecessary rebuilds: `**/*.zip`, `**/*.pdf`, `**/public/certificates/**`, `**/node_modules/**`, and `**/.git/**`. This is important because the project ships hundreds of certification PDFs under `public/certificates/`.

## Styling Build Pipeline

- `tailwind.config.js` declares content scanning paths (`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`) so Tailwind purges unused styles at build time.
- Theme extensions define brand colors (`brand.cyan`, `brand.indigo`, etc.) and font families (`heading`, `body`, `mono`).
- Dark mode is toggled via the `[data-theme="dark"]` attribute selector.
- `postcss.config.js` chains `tailwindcss` then `autoprefixer` during the build.

## Linting Rules

`.oxlintrc.json` enforces React best practices:
- `react/rules-of-hooks` set to `error`.
- `react/only-export-components` set to `warn` with `allowConstantExport: true`.

## Artifact Management

- Source code lives under `src/` (React components, data, config).
- Static assets (certificates, images, favicon) live under `public/` and are copied verbatim into the build output.
- The `dist/` directory is the deployable artifact produced by `vite build`; it contains the compiled HTML, JS, CSS, and copied public assets.
- No version pinning beyond npm semver ranges in `package.json`; `package-lock.json` locks exact transitive versions.

## Deployment / CI

No CI configuration (no `.github/workflows/`, no GitHub Actions, no Jenkinsfile, no Netlify/Vercel config files) was found in the repository. The build artifacts are intended to be deployed as a static site (the `dist/` folder), which is compatible with any static hosting provider.
---
kind: dependency_management
name: npm-based Dependency Management with Lockfile and Semantic Versioning
category: dependency_management
scope:
    - '**'
source_files:
    - package.json
    - package-lock.json
---

## System/Approach

This React + Vite portfolio project uses **npm** as its package manager, following the standard Node.js ecosystem convention. Dependencies are declared in `package.json` and pinned to exact resolved versions via a committed `package-lock.json` (lockfileVersion 3). There is no vendoring of third-party packages — all dependencies are fetched from the public npm registry at install time.

## Key Files

- **`package.json`** — Single source of truth for runtime (`dependencies`) and development (`devDependencies`) packages. Declares 5 runtime deps (`react`, `react-dom`, `lucide-react`, `canvas-confetti`, `@emailjs/browser`) and 8 dev deps (`vite`, `@vitejs/plugin-react`, `tailwindcss`, `autoprefixer`, `postcss`, `oxlint`, `@types/react`, `@types/react-dom`).
- **`package-lock.json`** — Deterministic lockfile that records every transitive dependency's exact version, integrity hash, and resolution URL against `https://registry.npmjs.org/`. Ensures reproducible installs across environments.
- **No `.npmrc` / no private registry config** — The project relies entirely on the default public npm registry; there is no `registry`, `@scope:registry`, or `//registry.npmjs.org/:_authToken` configuration.
- **No `node_modules/` in repo** — Dependencies are not vendored into the repository tree.

## Architecture & Conventions

- **Semantic version ranges**: All packages use caret (`^`) ranges (e.g., `"react": "^19.2.8"`), allowing minor/patch updates while preventing breaking major bumps. This balances stability with access to newer features.
- **Separation of concerns**: Runtime-only libraries live under `dependencies`; build-time tooling (Vite, Tailwind, PostCSS, Autoprefixer, Oxlint, TypeScript type declarations) lives under `devDependencies` so they are excluded from production builds.
- **Build toolchain integration**: Dependencies are wired through Vite (`vite.config.js`), Tailwind (`tailwind.config.js`), PostCSS (`postcss.config.js`), and Oxlint (`.oxlintrc.json`); the dependency graph is consumed by these tools rather than by application code directly.
- **Scripts as entry points**: `npm run dev`, `build`, `preview`, and `lint` scripts in `package.json` are the only documented ways to interact with the dependency graph.

## Conventions & Constraints

- **Lockfile must be committed**: `package-lock.json` is tracked in version control, which enforces deterministic builds — anyone running `npm install` will resolve the same transitive tree.
- **No private/internal packages**: All packages originate from the public npm registry; there is no evidence of a private registry, scoped packages, or local file/workspace references.
- **No peerDependency declarations**: The project does not declare `peerDependencies`, relying on npm's default behavior to warn about missing peers.
- **No postinstall/preinstall hooks**: No custom scripts modify the dependency tree after installation.
- **Static assets are not managed by npm**: Certificates and images live under `public/certificates/` as raw files, not as npm packages — this is a content strategy separate from code dependency management.
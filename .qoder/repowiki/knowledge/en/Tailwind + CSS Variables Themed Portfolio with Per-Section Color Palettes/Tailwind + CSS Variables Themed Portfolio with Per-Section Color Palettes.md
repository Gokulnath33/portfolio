---
kind: frontend_style
name: Tailwind + CSS Variables Themed Portfolio with Per-Section Color Palettes
category: frontend_style
scope:
    - '**'
source_files:
    - tailwind.config.js
    - postcss.config.js
    - src/index.css
    - src/App.css
    - src/components/Hero.jsx
    - src/components/About.jsx
    - src/components/Skills.jsx
    - src/components/Projects.jsx
    - src/components/Experience.jsx
    - src/components/Certificates.jsx
    - src/components/Contact.jsx
    - src/components/DynamicBackground.jsx
    - src/components/BrandIcons.jsx
---

## What system/approach is used

The portfolio uses a **hybrid styling approach** combining:

1. **Tailwind CSS** (via PostCSS) as the utility layer for layout, spacing, typography, and responsive breakpoints.
2. **A single global stylesheet** (`src/index.css`) that defines the design system: CSS custom properties (design tokens), per-section color themes, glassmorphism cards, gradients, animations, and component-level styles.
3. **CSS-in-JS via Tailwind class composition** inside JSX components — components compose Tailwind utilities with the shared semantic classes defined in `index.css` (e.g. `glass-card`, `btn-primary`, `section-title-bar`).
4. **Dark/light theme switching** driven by a `[data-theme="dark"]` / `[data-theme="light"]` attribute on the root element, toggled at runtime.

No SCSS/Sass, no CSS Modules, no styled-components — plain CSS processed through PostCSS with Tailwind and Autoprefixer.

## Key files and packages

- `tailwind.config.js` — Tailwind configuration extending `colors.brand.{cyan,indigo,violet,pink,emerald,amber}` and defining font families (`heading: Outfit`, `body: Plus Jakarta Sans`, `mono: Fira Code`).
- `postcss.config.js` — registers `tailwindcss` and `autoprefixer` plugins.
- `src/index.css` — the single source of truth for the visual design system: CSS variables, section-specific palettes, keyframe animations, glassmorphism, buttons, badges, progress bars, timeline, marquee, toast, and responsive rules.
- `src/App.css` — leftover Vite starter template styles (not used by the portfolio UI).
- Component files under `src/components/*` — consume the shared classes rather than defining new ones (e.g. `Hero.jsx`, `About.jsx`, `Skills.jsx`, `Certificates.jsx`, `Experience.jsx`, `Contact.jsx`, `Navbar.jsx`, `Footer.jsx`, `DynamicBackground.jsx`, `BrandIcons.jsx`, `GokulLogo.jsx`, `BackgroundMusic.jsx`).

## Architecture and conventions

### Design tokens (CSS custom properties)
All colors, radii, shadows, fonts, and gradients are declared as `--*` variables under `:root` in `src/index.css`. This centralizes the palette so every component references tokens instead of hard-coded hex values. The token set includes:
- Core palette (`--bg-primary`, `--bg-secondary`, `--bg-card`, `--text-main`, `--text-muted`, `--border-color`, `--border-glow`)
- Accent colors (`--accent-cyan`, `--accent-indigo`, `--accent-violet`, `--accent-pink`, `--accent-emerald`, `--accent-amber`, `--accent-orange`, `--accent-red`, `--accent-blue`)
- Per-section triplets (`--hero-c1/c2/c3`, `--about-c1/c2/c3`, `--skills-c1/c2/c3`, `--projects-c1/c2/c3`, `--exp-c1/c2/c3`, `--certs-c1/c2/c3`, `--contact-c1/c2/c3`)
- Gradients (`--gradient-brand`, `--gradient-vibrant`, `--gradient-emerald`, `--gradient-amber`, `--gradient-fire`, `--gradient-ocean`, `--gradient-glass`)
- Shadows (`--shadow-glow`, `--shadow-vibrant`, `--shadow-emerald`, `--shadow-amber`, `--shadow-fire`, `--shadow-cyan`)
- Radii (`--radius-sm` through `--radius-full`)

### Per-section theming
Each page section (`#home`, `#about`, `#skills`, `#projects`, `#experience`, `#certificates`, `#contact`) gets its own radial-gradient background tint and its own accent color for `.section-subtitle` and `.section-title-bar`. This creates a distinct visual identity per section while sharing the same component primitives.

### Glassmorphism card system
A base `.glass-card` class provides backdrop blur, semi-transparent background, border, and hover lift/glow. Tinted variants (`.glass-card-cyan`, `.glass-card-violet`, `.glass-card-pink`, `.glass-card-emerald`, `.glass-card-amber`, `.glass-card-fire`) extend it per section.

### Button system
Two primary button classes: `.btn-primary` (gradient animated fill with shimmer sweep) and `.btn-secondary` (glass pill with animated glowing border). Both use the shared radius and shadow tokens.

### Badge/pill system
`.badge` plus color variants (`badge-cyan`, `badge-violet`, `badge-emerald`, `badge-pink`, `badge-amber`, `badge-orange`, `badge-fire`, `badge-blue`) provide consistent tag-style labels used across Skills, Certificates, and other sections.

### Animation library
Custom keyframes in `index.css` cover: floating orbs (`orbDrift1-4`), float (`floatY`, `floatYSlow`), pulse ring, shimmer slide, spin slow, fade/slide up, glow pulse, rainbow border, gradient shift, text glow, sparkle, border glow, count-up, and marquee. Components reuse these via class names like `.float-animate`, `.sparkle-icon`, `.glow-anim-cyan`.

### Theme switching
`tailwind.config.js` declares `darkMode: ['class', '[data-theme="dark"]']`, and `src/index.css` overrides all CSS variables under `[data-theme="light"]`. A runtime toggle switches the attribute on the document root; there is no media-query-based auto dark mode.

### Responsive strategy
Responsive behavior is handled primarily through Tailwind's built-in breakpoints (`sm:`, `md:`, `lg:`, `xl:`) applied directly in JSX className strings. `index.css` adds a few global media queries for large title reflow and mobile padding adjustments.

### Fonts
Google Fonts are imported at the top of `index.css` (`Outfit`, `Plus Jakarta Sans`, `Fira Code`) and aliased via both CSS variables (`--font-heading`, `--font-body`, `--font-mono`) and Tailwind config (`fontFamily.heading/body/mono`).

## Conventions and constraints

- **Do not hard-code colors or fonts in components.** All visual constants live in `:root` CSS variables or Tailwind config; components reference them via class names or tokens.
- **Use the shared component classes** (`.glass-card`, `.btn-primary`, `.btn-secondary`, `.badge-*`, `.section-title`, `.section-subtitle`, `.section-title-bar`, `.skill-bar-track`, `.timeline-dot`, `.marquee-track`, `.toast-*`) rather than writing ad-hoc styles per component.
- **Per-section accents must come from the designated triplet** (`--hero-c1/c2/c3`, etc.) to keep each section visually cohesive.
- **Theme switching is attribute-driven**, not class-driven on individual elements — toggle `[data-theme]` on the root.
- **Animations should use the pre-defined keyframes** in `index.css` (`floatY`, `shimmerSlide`, `gradientShift`, `countUp`, `marquee`, etc.) instead of defining new `@keyframes` inline.
- **Responsive layout is composed via Tailwind utility classes** in JSX; global CSS only handles cross-cutting concerns (scrollbar, body reset, section backgrounds, large-screen title scaling).
- **Unused starter styles** in `src/App.css` are left as-is and not part of the portfolio UI; new styles should be added to `src/index.css`.
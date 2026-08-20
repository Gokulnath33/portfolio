---
kind: error_handling
name: Frontend Error Handling in a React + Vite Portfolio
category: error_handling
scope:
    - '**'
source_files:
    - src/config/emailjs.js
    - src/components/Contact.jsx
    - src/components/BackgroundMusic.jsx
---

## Overview

This repository is a client-side-only React + Vite portfolio website. There is no server-side code, so error handling is limited to browser runtime concerns: form submission failures, third-party service (EmailJS) errors, and optional feature failures (ambient audio via Web Audio API). The project does not define custom error types, sentinel values, global error boundaries, or unhandled-rejection listeners.

## Approach Used

- **Try/catch around async I/O** — the only network call (`emailjs.send`) is wrapped in `try`/`catch` inside `src/config/emailjs.js`.
- **Return-value signaling instead of throwing** — `sendContactEmail` never throws to callers; it returns a plain object `{ success, message, isDemo? }`. Callers branch on `result.success` rather than catching exceptions.
- **Silent degradation for non-critical features** — the ambient music engine in `BackgroundMusic.jsx` wraps risky `AudioContext` / oscillator calls in try/catch blocks with empty or `console.error` handlers so that audio failures do not break the page.
- **Toast-based user feedback** — `Contact.jsx` renders a floating toast component whose `type` is either `'success'` or `'error'`, driven by the result of `sendContactEmail`.
- **No global error boundary** — there is no `ErrorBoundary` component, no `window.onerror` / `unhandledrejection` handler, and no centralized logging library.

## Key Files

| File | Role in error handling |
|---|---|
| `src/config/emailjs.js` | Centralizes EmailJS configuration and encapsulates the send operation; catches network/template errors and converts them into a `{ success: false, message }` result. Also throws a descriptive `Error` when the response status is non-200 (which is then caught by the same function's catch block). |
| `src/components/Contact.jsx` | UI layer for the contact form. Performs local validation (empty required fields), sets a loading flag, calls `sendContactEmail`, and maps outcomes to a toast (`type: 'success' | 'error'`). Catches any unexpected exception from the call stack and shows a generic error toast. |
| `src/components/BackgroundMusic.jsx` | Demonstrates defensive error handling for optional browser APIs: `stopMusicEngine` iterates active nodes in a try/catch per node; `startMusicEngine` wraps the entire AudioContext setup in try/catch and logs `console.error('Audio Music Engine Error:', e)`; `canvas-confetti` usage is similarly wrapped in a silent try/catch fallback. |

## Architecture & Conventions Observed

1. **Async operations return results, not throw.**
   - `sendContactEmail` returns `{ success, message, isDemo }` regardless of whether EmailJS is configured or whether the request succeeds. This lets the caller avoid try/catch at the UI level and simply inspect `result.success`.

2. **User-facing errors are surfaced as toasts.**
   - Validation errors, EmailJS failures, and unexpected exceptions all set `toast = { type: 'error', text: ... }` in `Contact.jsx`. Successes use `type: 'success'` and may include an `isDemo` flag that changes the displayed message.

3. **Non-critical features fail silently.**
   - Ambient audio and confetti are wrapped in try/catch blocks that swallow exceptions. The rationale is explicit in comments (e.g., "fallback if canvas-confetti script unavailable"), indicating a design choice to keep the core experience functional even when optional features cannot run.

4. **Configuration-driven behavior replaces runtime branching logic.**
   - `EMAILJS_CONFIG` contains placeholder keys; `sendContactEmail` detects placeholders and switches to a simulated send path, returning `{ success: true, isDemo: true, message }`. This avoids runtime errors when credentials are missing.

5. **Console logging is used for diagnostics.**
   - `console.error` is used for EmailJS and Audio context failures; `console.warn` is used when placeholder keys are detected. There is no structured logger or log-level management.

6. **No centralized error propagation.**
   - Each component handles its own errors locally. There is no shared error store, no Redux/Zustand error slice, no Axios interceptor, and no React Error Boundary.

## Constraints & Rules

- **Form submission must validate required fields before calling the email service.** `Contact.jsx` checks `name`, `email`, and `message` and aborts early with a toast if any are empty.
- **The EmailJS send function must always return a result object**, never throw to the caller. This contract is enforced by the `try`/`catch` block wrapping `emailjs.send` and the final `return` in both the configured and demo branches.
- **Optional browser APIs (Web Audio, canvas-confetti) must be guarded** so that their failure does not crash the application. This is demonstrated in `BackgroundMusic.jsx` and the confetti call inside `Contact.jsx`.
- **There is no documented rule requiring custom error classes, sentinels, or global error handlers** — the observed pattern is intentionally lightweight and localized to each feature.
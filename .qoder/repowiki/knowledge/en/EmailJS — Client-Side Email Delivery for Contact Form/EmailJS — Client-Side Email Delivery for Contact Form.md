---
kind: external_dependency
name: EmailJS — Client-Side Email Delivery for Contact Form
slug: emailjs
category: external_dependency
category_hints:
    - vendor_identity
scope:
    - '**'
source_files:
    - package.json
    - src/config/emailjs.js
---

The contact form sends emails directly from the browser using the `@emailjs/browser` SDK (declared in `package.json`). Configuration lives in `src/config/emailjs.js`, where service ID, template ID, and public key are injected so the Vite-built static site can dispatch mail without a backend server. This is the only outbound network integration of the site beyond certificate assets.
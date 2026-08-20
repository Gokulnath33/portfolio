---
kind: business_term
name: Business Glossary
category: business_term
scope:
    - '**'
---

### Portfolio Data File
- Definition：The single source-of-truth JSON-like module `src/data/portfolioData.js` that holds all portfolio content — personal info, education, skills, projects, experience, and certifications — consumed by every React component. Adding or updating any displayed item means editing this file; there is no CMS or database.
- Aliases：portfolioData.js、data file

### Featured Project
- Definition：A project flag (`featured: true`) in `projectsData` that marks a repository as highlighted in the portfolio UI, distinguishing it from standard project entries. Used for Splitzy, Task Master, Samsung Sales Analysis, Smart Online Food Rescue System, and Online Voting Registration System.
- Aliases：featured、featured project

### Certificates Bundle
- Definition：A downloadable ZIP archive (`/certificates.zip`) referenced via `personalInfo.zipBundleUrl` that packages all PDF certificates hosted under `public/certificates/`. It serves as a one-click resume attachment for recruiters.
- Aliases：certificates.zip、zip bundle

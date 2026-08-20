---
kind: external_dependency
name: GitHub — Project Source Hosting & Portfolio Data Source
slug: github
category: external_dependency
category_hints:
    - vendor_identity
scope:
    - '**'
source_files:
    - src/data/portfolioData.js
---

The portfolio is a static React/Vite site that curates the author's GitHub repositories under the `Gokulnath33` organization. Projects are not fetched at runtime; instead, each project entry in `src/data/portfolioData.js` contains a hard-coded `githubUrl` pointing to a repository on GitHub. The conversation used the public GitHub API (`github.com/Gokulnath33?tab=repositories`) to enumerate repos and decide which ones to add to the portfolio data file. New projects are added by editing this single data file rather than via an API call.
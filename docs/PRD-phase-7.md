# PRD — Phase 7: Deployment and Launch

## Metadata

| Field  | Value      |
| ------ | ---------- |
| Date   | 2026-03-14 |
| Author | baltz      |
| Status | Approved   |

## Problem Statement

Phases 1–6 produced a fully functional, polished, bilingual landing page with a 3D notebook scene, scroll-driven animations, and verified performance. However, the project is not yet publicly accessible. Several production-readiness gaps remain:

- **Placeholder URLs** in `index.html` (`USERNAME` in `og:url` and `og:image`) prevent correct social sharing
- **Hardcoded `<html lang="pt-BR">`** doesn't update when the user switches to English, harming accessibility and SEO for EN visitors
- **Missing assets**: the referenced `og-image.png` and `favicon.svg` don't exist in `public/`
- **Stale README**: still says "Planning phase" despite 6 phases of implementation being complete
- **No production verification**: the GitHub Actions workflow exists but has never been triggered on the current codebase
- **Acceptance criteria from PLAN.md section 29 have not been formally verified** against the production site

If these gaps are not addressed, the page either fails to deploy, presents broken social previews, confuses contributors reading the README, or silently violates stated acceptance criteria.

## Goals

- Deploy the Guia landing page to GitHub Pages with zero broken links and correct asset paths
- Ensure social sharing previews (Open Graph) display correctly with a branded image
- Dynamically update `<html lang>` when the language toggle is used
- Provide a complete, accurate README for visitors and contributors
- Formally verify all 15 acceptance criteria from PLAN.md section 29

## Non-Goals

- Custom domain setup (deferred per PLAN.md section 24)
- Analytics integration
- Server-side rendering or edge functions
- Performance optimization beyond what Phase 6 already achieved
- Content changes to the landing page sections

## Target Audience

- **End users** who visit the deployed site and may share it on social media
- **Contributors** who find the repo and read the README to understand the project
- **Search engines / social platforms** that crawl the page for metadata and previews

## Proposed Solution

### 7.1 — Fix production meta tags and OG URLs

Replace `USERNAME` placeholder in `index.html` with `baltazarparra`:

- `og:url` → `https://baltazarparra.github.io/guia/`
- `og:image` → `https://baltazarparra.github.io/guia/og-image.png`
- Add `<link rel="canonical" href="https://baltazarparra.github.io/guia/" />`

### 7.2 — Dynamic `<html lang>` attribute

The `useLanguage` hook already manages the current language (`lang`). Add a `useEffect` in `App.jsx` (or the language hook itself) that sets `document.documentElement.lang` whenever `lang` changes:

- `pt` → `pt-BR`
- `en` → `en`

This ensures screen readers and search engines see the correct language attribute.

### 7.3 — Create favicon

Generate a simple SVG favicon and place it at `public/favicon.svg`. Design: a minimal geometric mark (e.g., a stylized "P" or notebook icon) using the project's accent color on a transparent background.

### 7.4 — Create social sharing image

Generate a 1200×630px PNG for Open Graph. Design: simple branded card with "Guia" title and the PT-BR tagline on the project's dark background color, using the Inter font family. Place at `public/og-image.png`.

### 7.5 — Update README

Replace the "Planning phase" status with current reality:

- Project status: Phase 7 (deployment)
- Add live site link: `https://baltazarparra.github.io/guia/`
- Update development commands (include `npm run check`)
- Remove "No application code has been written yet"
- Update project structure to match actual file tree
- Keep architecture, contributing, and license sections

### 7.6 — Verify GitHub Actions workflow

The workflow at `.github/workflows/deploy.yml` runs lint, format check, typecheck, tests, and build before deploying. The user will:

1. Push latest code to `main`
2. Monitor the Actions tab for workflow success
3. Verify the built site appears at `https://baltazarparra.github.io/guia/`

This task is documented-only — the user will execute git operations manually.

### 7.7 — Verify production deployment and links

After deployment, verify on the production URL:

- All 8 sections render correctly
- Language toggle works
- 3D scene loads and transitions on scroll
- All 5 template card CTAs resolve to valid GitHub URLs
- Closing section CTA links to the repository
- Social sharing preview displays correctly (use opengraph.xyz or similar)

### 7.8 — Final acceptance criteria checklist

Walk through every item in PLAN.md section 29 and verify against the production site:

1. Page is fully static and deploys on GitHub Pages
2. Page is a single long-form scrolling experience
3. Notebook 3D element is present and integrated (Tier 1)
4. Notebook persists across the page experience
5. Motion is subtle and stable
6. Mobile experience is elegant and usable
7. Content is available in PT-BR and EN
8. Workflow explanation is clear for beginners
9. Template CTAs link to the GitHub repository
10. No backend is required
11. Implementation remains lean
12. Page is fully functional without WebGL
13. Basic SEO and OG tags are in place
14. `prefers-reduced-motion` is respected
15. Performance budget thresholds are met

## Technical Considerations

- **Vite `base` path**: already configured as `/guia/` in `vite.config.js` — matches GitHub Pages repo URL pattern
- **GitHub Pages deployment**: uses `actions/deploy-pages@v4` with artifact upload from `dist/` — standard and stable
- **`<html lang>` mutation**: direct DOM manipulation via `document.documentElement.lang` is the standard approach for SPAs; React doesn't control the `<html>` element
- **OG image dimensions**: 1200×630px is the standard for Facebook/Twitter/LinkedIn previews
- **Favicon format**: SVG favicons are supported in all modern browsers; `.ico` fallback is not needed for V1
- **No git operations by AI**: all push/deploy/verify tasks are documented for the user to execute manually

## Scope

### In scope

- Fix `USERNAME` placeholders in `index.html`
- Add canonical URL meta tag
- Implement dynamic `<html lang>` switching
- Generate and place `favicon.svg` in `public/`
- Generate and place `og-image.png` in `public/`
- Update `README.md` with current project status, live link, and accurate structure
- Document deployment verification steps
- Document acceptance criteria verification steps
- Mark all Phase 7 tasks complete in `IMPLEMENTATION-ROADMAP.md`

### Out of scope

- Pushing to git or executing git commands
- Custom domain DNS configuration
- Adding analytics or tracking
- Content or visual changes to the landing page
- Performance optimization (completed in Phase 6)
- Twitter/X card meta tags (og tags provide baseline coverage)

## Risks and Mitigations

| Risk                                            | Severity | Mitigation                                                                                                                           |
| ----------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| GitHub Actions workflow fails on first push     | Medium   | Workflow already passes `npm run check` locally; CI environment matches (Node 20, ubuntu-latest). User can debug from Actions logs   |
| OG image doesn't render on social platforms     | Low      | Standard 1200×630px PNG format; verify with opengraph.xyz after deploy                                                               |
| `favicon.svg` not supported on older browsers   | Low      | SVG favicon coverage is 95%+; acceptable for V1. Can add `.ico` fallback later                                                       |
| Dynamic `<html lang>` causes hydration mismatch | Low      | We're using client-side SPA (no SSR); `document.documentElement.lang` is set in `useEffect`, which runs after hydration              |
| README live link is broken before first deploy  | Low      | Link is added to README before deploy; becomes valid once Actions completes                                                          |
| Asset paths break on GitHub Pages               | Medium   | `base: '/guia/'` already handles path prefixing; `og-image.png` and `favicon.svg` are in `public/` which Vite copies to `dist/` root |

## Success Criteria

- [ ] `index.html` has correct `og:url`, `og:image`, and canonical URL (no `USERNAME` placeholders)
- [ ] `<html lang>` attribute updates dynamically when language toggle is clicked
- [ ] `public/favicon.svg` exists and renders in the browser tab
- [ ] `public/og-image.png` exists at 1200×630px
- [ ] `README.md` reflects current project status with live site link and accurate file structure
- [ ] `npm run check` passes (lint, format, typecheck, tests)
- [ ] `npm run build` produces a clean `dist/` with all assets
- [ ] GitHub Actions workflow completes successfully (user-verified)
- [ ] Production site renders all 8 sections correctly (user-verified)
- [ ] All template and CTA links resolve to valid URLs (user-verified)
- [ ] Social sharing preview shows correct title, description, and image (user-verified)
- [ ] All 15 acceptance criteria from PLAN.md section 29 are satisfied

## Dependencies

- Phase 6 complete (all tasks 6.1–6.9 verified, checkpoint passed)
- GitHub Pages enabled on the repository
- User available to execute git push and verify production deployment
- Internet access for OG tag verification tools

## Open Questions

None — all decisions resolved during PRD creation.

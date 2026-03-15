# PRD Report — Phase 7: Deployment and Launch

## PRD Reference

| Field    | Value                 |
| -------- | --------------------- |
| PRD file | `docs/PRD-phase-7.md` |
| Date     | 2026-03-14            |
| Author   | baltz                 |

## Decisions Summary

| Decision                                                 | Justification                                                                                                                                                     |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Replace `USERNAME` with `baltazarparra` in all meta tags | Matches the GitHub repository URL already used in ClosingSection CTA (`https://github.com/baltazarparra/guia`)                                                    |
| Add dynamic `<html lang>` switching                      | Improves accessibility and SEO — screen readers and search engines need the correct language attribute. The `useLanguage` hook already tracks the active language |
| Generate OG image with AI                                | Faster than manual design; standard 1200×630px branded card is sufficient for V1. Can be replaced with a custom design later                                      |
| Generate SVG favicon                                     | SVG favicons are supported in 95%+ of modern browsers; no `.ico` fallback needed for V1. Keeps the asset pipeline simple                                          |
| Document git/deploy steps for user execution             | User's rule prohibits AI from running git commands. All code changes are prepared; user pushes to main and verifies deployment manually                           |
| No Twitter/X card meta tags                              | Open Graph tags provide baseline coverage for Twitter cards (Twitter falls back to OG). Adding `twitter:card` meta tags is a V2 enhancement                       |
| Update README with live link before first deploy         | The link becomes valid once GitHub Actions completes. Temporary dead link is acceptable since README is committed alongside the deploy                            |

## Risk Assessment

| Risk                                            | Severity | Mitigation                                                                                                                      | Status                  |
| ----------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| GitHub Actions workflow fails on first push     | Medium   | Workflow already passes `npm run check` locally; CI environment matches (Node 20, ubuntu-latest). User debugs from Actions logs | Pending (user executes) |
| OG image doesn't render on social platforms     | Low      | Standard 1200×630px PNG; verify with opengraph.xyz after deploy                                                                 | Pending (user verifies) |
| `favicon.svg` not supported on older browsers   | Low      | 95%+ coverage; acceptable for V1                                                                                                | Mitigated               |
| Dynamic `<html lang>` causes hydration mismatch | Low      | Client-side SPA with no SSR; `useEffect` runs after hydration                                                                   | Mitigated               |
| Asset paths break on GitHub Pages               | Medium   | `base: '/guia/'` in Vite config handles all path prefixing; assets in `public/` are copied to `dist/` root                      | Mitigated               |
| README live link temporarily dead before deploy | Low      | Link becomes valid immediately after Actions completes; minimal window of dead link                                             | Accepted                |

## Generated Tasks

Tasks map to `IMPLEMENTATION-ROADMAP.md` Phase 7 (tasks 7.1–7.7), with sub-tasks derived from the PRD:

- [ ] **7.1**: Fix production meta tags — replace `USERNAME` with `baltazarparra` in `og:url` and `og:image`, add canonical URL, verify all meta tags are complete
- [ ] **7.2**: Implement dynamic `<html lang>` — add `useEffect` to sync `document.documentElement.lang` with the language toggle state
- [ ] **7.3**: Create assets — generate `public/favicon.svg` and `public/og-image.png` (1200×630px branded card)
- [ ] **7.4**: Update README — replace "Planning phase" status, add live site link, update file structure, add deployment instructions
- [ ] **7.5**: Quality gate — run `npm run lint:fix`, `npm run format`, `npm run check`, `npm run build`
- [ ] **7.6**: Mark tasks complete in `IMPLEMENTATION-ROADMAP.md`
- [ ] **7.7** (user-executed): Push to main, verify GitHub Actions, verify production site, verify OG tags, verify all links, run acceptance criteria checklist

### Task Dependency Graph

```
7.1 (meta tags) ─────────┐
                          │
7.2 (html lang) ──────────┤
                          │
7.3 (assets) ─────────────┼──> 7.5 (quality gate) ──> 7.6 (roadmap) ──> 7.7 (user deploy + verify)
                          │
7.4 (README) ─────────────┘
```

Parallelization: tasks 7.1, 7.2, 7.3, and 7.4 are independent and can run in parallel.

## Implementation Readiness

| Criterion                      | Status | Notes                                                                                                                                                                                                         |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope clearly defined          | Yes    | 7 tasks covering meta tags, `<html lang>`, assets, README, quality gate, roadmap update, and user-executed deployment verification                                                                            |
| Risks identified and mitigated | Yes    | 6 risks with mitigations; 2 pending user verification (workflow, OG preview), 1 accepted (temporary dead link)                                                                                                |
| Dependencies resolved          | Yes    | Phase 6 complete (all 9 tasks, all 7 checkpoint items). Codebase is stable and passes quality gate                                                                                                            |
| Open questions answered        | Yes    | Username, `<html lang>` strategy, OG image approach, favicon format, and git handling all decided                                                                                                             |
| Success criteria are testable  | Yes    | 12 observable conditions: meta tag correctness, dynamic lang attribute, asset existence, README accuracy, quality gate pass, build success, deployment, rendering, links, social preview, acceptance criteria |

## Readiness Verdict

**Verdict:** Ready

**Justification:** Phase 6 completed all polish and optimization work — visual consistency normalized, performance budget verified, reduced motion and error boundary confirmed, transitions analyzed. The codebase passes `npm run check` with 0 errors and 8/8 tests. Phase 7 is primarily a deployment preparation phase: fixing placeholder URLs, creating missing assets, updating documentation, and then a user-executed push-and-verify cycle. All code changes (7.1–7.4) are straightforward edits with no architectural impact. The GitHub Actions workflow is already configured and ready. The only blocking dependency is the user executing git push and verifying the production site, which is by design (no AI git operations). Implementation can begin immediately.

# PRD Report — Proxy Landing Page

## PRD Reference

| Field    | Value         |
| -------- | ------------- |
| PRD file | `docs/PRD.md` |
| Date     | 2026-03-14    |
| Author   | baltz         |

## Decisions Summary

| Decision                                     | Justification                                                                                                              |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Vite instead of Next.js                      | Static SPA with no SSR, API routes, or backend. Vite is simpler, lighter, and better suited for GitHub Pages deployment    |
| JavaScript instead of TypeScript             | Reduces friction for a creative, experimental V1. JSDoc annotations as lightweight compromise                              |
| React for UI                                 | Component structure for modular sections, reusable motion wrappers, and clean R3F integration                              |
| Tailwind CSS for styling                     | Accelerates UI iteration, reduces context switching, productive for controlled spacing                                     |
| React Three Fiber + Drei for 3D              | React-based orchestration, easier scene management, mobile-aware simplification                                            |
| GSAP + ScrollTrigger for scroll animation    | Robust scroll-based orchestration, section progress syncing, better than ad hoc scroll logic                               |
| Zustand as GSAP ↔ R3F bridge                 | Prevents race conditions and jank from mixing GSAP's DOM control with R3F's render loop                                    |
| GitHub Pages deployment                      | Perfect fit for static project, simple hosting                                                                             |
| Hardcoded bilingual copy (no i18n framework) | One page, curated narrative, content will change during concept maturation. i18n framework adds friction without value     |
| Start with Tier 1 notebook complexity        | Minimum viable 3D: static model, rotation/position transitions, open/closed states. Advance only after stability confirmed |
| 3D as progressive enhancement                | Page must work without WebGL. Error boundary with CSS fallback ensures content remains accessible                          |
| Draft copy as hard dependency                | No lorem ipsum. Even rough real content produces better layout decisions                                                   |
| Mobile-first design approach                 | Expected majority mobile access. Base styles target mobile, `md:` and above for tablet/desktop                             |

## Risk Assessment

| Risk                                                  | Severity | Mitigation                                                                                                                   | Status    |
| ----------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- | --------- |
| 3D complexity grows beyond performance budget         | High     | Complexity tiers (start Tier 1). 2.5D CSS fallback as escape hatch                                                           | Mitigated |
| R3F + GSAP integration causes jank or race conditions | High     | Phase 3 spike validates pattern before full build. Strict domain separation (GSAP = DOM, R3F = WebGL, Zustand = bridge)      | Mitigated |
| Mobile experience degrades                            | High     | Mobile-first design. `useReducedComplexity` hook. Early testing on iPhone-class viewports. 2.5D fallback for low-end devices | Mitigated |
| Scroll orchestration becomes fragile                  | Medium   | Centralized motion logic. Declarative section → notebook state map. No scattered triggers                                    | Mitigated |
| AI-generated code introduces unnecessary complexity   | Medium   | Small isolated tasks. Validate every major step. Reject speculative abstractions                                             | Mitigated |
| Copy dependency blocks implementation                 | Medium   | Draft copy required as pre-requisite. Draft quality accepted for initial build, refined in Phase 5                           | Mitigated |
| Visual references become imitation                    | Low      | References used for tone/pacing only. Original content structure and metaphor preserved                                      | Mitigated |

## Generated Tasks

### Pre-requisites

- [x] P.1: Write draft copy for all 8 sections in PT-BR
- [x] P.2: Translate draft copy to EN
- [x] P.3: Choose typography — Inter via Google Fonts CDN
- [x] P.4: Define color tokens — background `#FAFAF9`, foreground `#1A1A1A`, muted `#6B7280`, accent `#2563EB`, surface `#F0F0EE`
- [x] P.5: Decide notebook model source — procedural geometry (box + planes)
- [x] P.6: Confirm PLAN.md as execution reference

### Phase 1 — Scaffold and Design System (12 tasks) ✓

- [x] 1.1: Create Vite + React project
- [x] 1.2: Install and configure Tailwind CSS v4
- [x] 1.3: Configure Vite for GitHub Pages
- [x] 1.4: Create GitHub Actions deployment workflow
- [x] 1.5: Load typography (Inter via Google Fonts)
- [x] 1.6: Define color tokens in Tailwind
- [x] 1.7: Establish spacing rhythm
- [x] 1.8: Create directory structure
- [x] 1.9: Build `PageShell` component
- [x] 1.10: Build `SectionContainer` component
- [x] 1.11: Define responsive breakpoints
- [x] 1.12: Configure `index.html` with SEO and OG tags

> Report: `reports/phase-1-scaffold-and-design-system.md`

### Phase 2 — Static Landing Structure (15 tasks) ✓

- [x] 2.1: Create copy data files
- [x] 2.2: Create language context and hook
- [x] 2.3: Build `LanguageToggle` component
- [x] 2.4: Build UI primitives (Button, SectionHeading, CopyBlock)
- [x] 2.5: Build `HeroSection`
- [x] 2.6: Build `AgentsSection` (IDE vs CLI code agents)
- [x] 2.7: Build `ToolsSection` (pricing and installation)
- [x] 2.8: Build `PlanSection` (creating PLAN.md)
- [x] 2.9: Build `RoadmapSection` (agent review + IMPLEMENTATION-ROADMAP.md)
- [x] 2.10: Build `ExecutionSection` (per-phase execution cycle)
- [x] 2.11: Build `TemplatesSection`
- [x] 2.12: Build `ClosingSection`
- [x] 2.13: Assemble full page in `App.jsx`
- [x] 2.14: Validate responsiveness
- [ ] 2.15: Deploy static version to GitHub Pages (pending push to main)

> Report: `reports/phase-2-static-landing-structure.md`

### Phase 3 — 3D Notebook Foundation (12 tasks) ✓

- [x] 3.1: Install 3D and animation dependencies
- [x] 3.2: Spike — R3F + ScrollTrigger integration proof-of-concept
- [x] 3.3: Spike — validate mobile performance
- [x] 3.4: Document integration pattern
- [x] 3.5: Create `WebGLErrorBoundary` component
- [x] 3.6: Create `NotebookScene` component
- [x] 3.7: Create `SceneLights` component
- [x] 3.8: Create notebook model (procedural geometry)
- [x] 3.9: Create `SceneController` component
- [x] 3.10: Create `useReducedComplexity` hook
- [x] 3.11: Apply reduced complexity to scene
- [x] 3.12: Integrate notebook scene into the page

> Report: `reports/phase-3-3d-notebook-foundation.md`

### Phase 4 — Scroll Orchestration (8 tasks) ✓

- [x] 4.1: Expand Zustand store with per-section progress
- [x] 4.2: Create `useScrollProgress` hook
- [x] 4.3: Define section-to-notebook state map
- [x] 4.4: Create `useNotebookState` hook
- [x] 4.5: Update `SceneController` to use notebook state map
- [x] 4.6: Add DOM text animations per section
- [x] 4.7: Test scroll reversal behavior
- [x] 4.8: Test mobile scroll behavior

> Report: `reports/phase-4-scroll-orchestration.md`

### Phase 5 — Templates and Final Content (5 tasks)

- [ ] 5.1: Create or link template files
- [ ] 5.2: Update CTA links
- [ ] 5.3: Final copy review — PT-BR
- [ ] 5.4: Final copy review — EN
- [ ] 5.5: Adjust layout for final copy

### Phase 6 — Polish and Optimization (9 tasks)

- [ ] 6.1: Mobile viewport testing
- [ ] 6.2: Validate performance budget — bundle size
- [ ] 6.3: Validate performance budget — runtime
- [ ] 6.4: Simplify 3D scene if needed
- [ ] 6.5: Verify `prefers-reduced-motion`
- [ ] 6.6: Verify WebGL error boundary
- [ ] 6.7: Cross-browser testing
- [ ] 6.8: Visual cleanup pass
- [ ] 6.9: Transition refinement

### Phase 7 — Deployment and Launch (7 tasks)

- [ ] 7.1: Verify GitHub Actions workflow
- [ ] 7.2: Verify production deployment
- [ ] 7.3: Create social sharing image
- [ ] 7.4: Verify OG tags
- [ ] 7.5: Update README
- [ ] 7.6: Verify all template links
- [ ] 7.7: Final acceptance criteria checklist

## Implementation Readiness

| Criterion                      | Status | Notes                                                                                                                     |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| Scope clearly defined          | Yes    | 8 sections (Hero, Agents, Tools, Plan, Roadmap, Execution, Templates, Closing), bilingual, 3D notebook, static deployment |
| Risks identified and mitigated | Yes    | 8 risks identified with concrete mitigations, including pricing data staleness                                            |
| Dependencies resolved          | Yes    | All 6 pre-requisites (P.1–P.6) have been completed                                                                        |
| Open questions answered        | Yes    | All design and architectural decisions are documented in PLAN.md                                                          |
| Success criteria are testable  | Yes    | 17 observable, verifiable conditions listed. Performance thresholds are quantified                                        |

## Readiness Verdict

**Verdict:** Ready — Phase 4 complete, Phase 5 next

**Justification:** All pre-requisites are resolved. Phase 1 (12/12), Phase 2 (14/15, deploy pending), Quality Gate (12/12), Phase 3 (12/12), and Phase 4 (8/8) are complete. The notebook transitions between 8 distinct poses as the user scrolls through sections via per-section GSAP ScrollTrigger → Zustand → R3F interpolation. DOM text animations reveal content on scroll entry. Scroll reversal, mobile touch, and reduced-motion compliance are verified. Phase 5 (Templates and Final Content) can begin immediately.

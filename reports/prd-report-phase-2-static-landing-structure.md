# PRD Report — Phase 2: Static Landing Structure

## PRD Reference

| Field    | Value |
|----------|-------|
| PRD file | `docs/PRD-phase-2.md` |
| Date     | 2026-03-14 |
| Author   | baltz |

## Decisions Summary

| Decision | Justification |
|----------|---------------|
| No new dependencies in Phase 2 | Only React and Tailwind are needed. GSAP, Three.js, Zustand are Phase 3+ concerns. Keeping the dependency surface minimal ensures fast builds and isolates content work from 3D complexity |
| Language context via React context + hook (not i18n library) | One page, two languages, curated narrative. An i18n framework adds overhead without value for hardcoded bilingual copy. Context re-renders preserve scroll position by default |
| Default language is PT-BR | Primary audience is Brazilian. `<html lang="pt-BR">` is already set in `index.html` from Phase 1. Persisted in `localStorage` for returning visitors |
| Copy sourced from `docs/COPY-OUTLINE.md`, not invented | Draft copy was written as a hard pre-requisite (P.1, P.2). All 8 sections have real content in both languages. No lorem ipsum at any stage |
| Hero uses `<h1>`, all other sections use `<h2>` via `SectionHeading` | Semantic hierarchy: one `<h1>` per page for the project name, `<h2>` for each section title. Consistent heading level aids accessibility and SEO |
| Tools section renders pricing as structured cards/table rows, not raw text | Pricing data has a repeating structure (name, plans, install). Structured rendering is more scannable and responsive than raw markdown tables |
| Install commands rendered in monospace (`font-mono`) | CLI install commands are code — monospace signals "copy this" to the visitor. Consistent with developer expectations |
| Template CTAs use placeholder URLs (`#`) for now | Real template files and URLs are Phase 5 scope. Placeholder links allow the UI to be built and validated without blocking on content creation |
| No fixed section heights (except hero) | PT-BR and EN copy have different text lengths. Fixed heights would cause overflow or excessive whitespace. Natural height expansion prevents layout shift on language toggle |
| Section components compose UI primitives, not raw HTML | `SectionHeading`, `CopyBlock`, and `Button` enforce typography and spacing from the design system. Section components handle layout, not style decisions |

## Risk Assessment

| Risk | Severity | Mitigation | Status |
|------|----------|------------|--------|
| Copy structure in COPY-OUTLINE.md doesn't map cleanly to JS data shape | Medium | Data shape is explicitly defined in the PRD. Copy is transformed during file creation (tasks 2.1), not at render time | Mitigated |
| Language toggle causes layout shift between languages | Medium | Hero uses `min-h-screen`. Other sections allow natural height. No fixed heights. Context change preserves scroll position | Mitigated |
| Tools/pricing data already outdated | Low | `lastUpdated` field and `note` disclaimer are part of the data model. Copy was written March 2026 | Mitigated |
| Section components become too large or inconsistent | Low | Enforced via UI primitive composition. Sections delegate typography and spacing to `SectionHeading`, `CopyBlock`, `Button` | Mitigated |
| Scroll position resets on language change | Low | React context re-render (not re-mount) preserves scroll position by default | Mitigated |

## Generated Tasks

Tasks 2.1–2.15 from `IMPLEMENTATION-ROADMAP.md`:

### Content Data Layer
- [ ] **2.1**: Create `src/content/pt.js` and `src/content/en.js` with structured copy objects (source: `docs/COPY-OUTLINE.md`)

### Language Infrastructure
- [ ] **2.2**: Create `src/hooks/useLanguage.jsx` — context, provider, and `useLanguage` hook (`{ lang, setLang, t }`, default `pt`, persists in `localStorage`)
- [ ] **2.3**: Build `src/components/layout/LanguageToggle.jsx` — fixed PT/EN toggle, keyboard accessible, calls `setLang`

### UI Primitives
- [ ] **2.4**: Build three UI primitives:
  - `src/components/ui/Button.jsx` — CTA style, accepts `href` and `variant`
  - `src/components/ui/SectionHeading.jsx` — `<h2>` with consistent typography
  - `src/components/ui/CopyBlock.jsx` — body text with consistent paragraph styling

### Section Components
- [ ] **2.5**: Build `src/components/sections/HeroSection.jsx` — full-viewport hero with title, subtitle, body, scroll cue
- [ ] **2.6**: Build `src/components/sections/AgentsSection.jsx` — IDE vs CLI comparison with tool descriptions
- [ ] **2.7**: Build `src/components/sections/ToolsSection.jsx` — pricing cards/tables, install commands, `lastUpdated` disclaimer
- [ ] **2.8**: Build `src/components/sections/PlanSection.jsx` — creating PLAN.md, ordered steps
- [ ] **2.9**: Build `src/components/sections/RoadmapSection.jsx` — agent review, IMPLEMENTATION-ROADMAP.md creation
- [ ] **2.10**: Build `src/components/sections/ExecutionSection.jsx` — per-phase execution cycle
- [ ] **2.11**: Build `src/components/sections/TemplatesSection.jsx` — template cards with placeholder CTA URLs
- [ ] **2.12**: Build `src/components/sections/ClosingSection.jsx` — closing narrative + GitHub CTA

### Assembly and Validation
- [ ] **2.13**: Assemble full page in `src/App.jsx` — wrap in `LanguageProvider`, render all 8 sections in `PageShell`
- [ ] **2.14**: Validate responsiveness at 375px, 390px, 768px, 1280px+
- [ ] **2.15**: Deploy static version to GitHub Pages

## Implementation Readiness

| Criterion | Status | Notes |
|-----------|--------|-------|
| Scope clearly defined | Yes | 15 tasks covering content data, language infra, UI primitives, 8 sections, assembly, validation, and deployment. File paths and component APIs specified |
| Risks identified and mitigated | Yes | 5 risks identified, all with concrete mitigations. No high-severity risks |
| Dependencies resolved | Yes | Phase 1 complete (12/12 tasks, checkpoint verified). Draft copy in both languages exists in `docs/COPY-OUTLINE.md`. Design tokens configured. Layout primitives built |
| Open questions answered | Yes | Data shape, component composition, language toggle behavior, semantic HTML hierarchy — all specified in the PRD |
| Success criteria are testable | Yes | 19 observable, verifiable conditions. Each maps to a visual or functional check in the browser |

## Readiness Verdict

**Verdict:** Ready

**Justification:** All Phase 1 deliverables are in place and verified. The two hard dependencies for Phase 2 — draft copy in both languages and a functioning design system — are complete. The PRD defines the exact data shape, component APIs, and assembly pattern. No new libraries need to be installed. The 15 tasks are atomic and ordered by dependency: content data → language infra → UI primitives → sections → assembly → validation → deployment. Implementation can begin immediately with task 2.1.

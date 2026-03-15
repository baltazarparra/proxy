# PRD — Guia Landing Page

## Metadata

| Field  | Value      |
| ------ | ---------- |
| Date   | 2026-03-14 |
| Author | baltz      |
| Status | Approved   |

## Problem Statement

People interested in agentic development face two problems: they don't know which tools exist or how they differ (IDE agents vs CLI agents), and once they pick a tool, they jump straight into prompting without any structure. This leads to chaotic outputs, wasted iteration cycles, and frustration. There is no simple, accessible resource that explains the tools landscape and walks a beginner through a concrete workflow — from choosing the right agent, to creating a plan, to executing phase by phase with roadmaps and PRDs.

If this is not addressed, beginners will continue to associate agentic development with unreliable results, and the gap between "prompting randomly" and "building with structure" will remain invisible to most developers.

## Goals

- Explain the difference between IDE agents (Cursor, Trae) and CLI agents (Claude Code, Codex, OpenCode) with current pricing and installation info
- Teach a concrete, step-by-step agentic development workflow: PLAN → agent review → ROADMAP → phase execution (PRD + implement + report)
- Make the workflow accessible to complete beginners while remaining credible to experienced developers
- Offer reusable templates (PLAN, ROADMAP, PRD, rules, skills) so visitors can start building immediately
- Deliver the experience in both PT-BR and EN to serve the primary audience
- Ship as a static site on GitHub Pages with zero backend dependencies

## Non-Goals

- This is not a SaaS, dashboard, documentation portal, or multi-page site
- No CMS, blog, analytics, forms, email capture, auth, or SSR
- No advanced accessibility audit (baseline only)
- No complex particle systems, sound, or heavy WebGL effects
- No Tier 3 notebook complexity (readable content on 3D pages) in V1
- No i18n framework — bilingual support is handled with hardcoded copy files

## Target Audience

Broad audience interested in agentic development, especially beginners:

- **Developers exploring agent-based coding for the first time** — need a clear mental model
- **Tech leads evaluating structured AI workflows** — need credibility and practical substance
- **Builders curious about AI-assisted software delivery** — need actionable templates
- **Creative technologists interested in modern development systems** — need an elegant, well-crafted experience

The content must be accessible to beginners but credible to experienced readers.

## Proposed Solution

A single-page, long-form, scroll-driven editorial landing page built around a central 3D notebook metaphor.

The page guides the visitor through 8 sections that teach a concrete agentic development workflow:

1. **Hero** — establishes concept and visual identity ("Guia")
2. **Code Agents: IDE vs CLI** — explains the two modes of working with agents (Cursor/Trae vs Claude Code/Codex/OpenCode), what each is, and when to use them
3. **Tools and Pricing** — current subscription pricing, plan tiers, and installation instructions for each tool
4. **The Initial Plan** — how to create a PLAN.md using any LLM before touching the code agent
5. **Agent Review + Roadmap** — how to have the code agent review the plan and generate an IMPLEMENTATION-ROADMAP.md with phased tasks
6. **Phase Execution** — the per-phase cycle: create execution plan → PRD → implement → update roadmap → generate report → validate → next phase
7. **Templates** — reusable starter templates for each step of the workflow (PLAN, ROADMAP, PRD, Rules, Skills)
8. **Closing** — reinforces the workflow and links to the GitHub repo

A low-poly 3D notebook (rendered via React Three Fiber) persists throughout the scroll, transitioning between poses that reinforce each section's content. The notebook acts as a metaphor for structured building: the workflow progressively opens the notebook as the visitor moves from tools to plan to execution.

The page is bilingual (PT-BR / EN) with a toggle that switches all content without affecting scroll position.

## Technical Considerations

### Stack

| Layer            | Technology                    | Rationale                                                                     |
| ---------------- | ----------------------------- | ----------------------------------------------------------------------------- |
| Build tool       | Vite                          | Static SPA, no SSR needed. Simpler than Next.js for this use case             |
| UI framework     | React (JavaScript)            | Component structure for modular sections and R3F integration                  |
| Styling          | Tailwind CSS                  | Rapid iteration, controlled spacing, lean for static sites                    |
| 3D rendering     | React Three Fiber + Drei      | React-based 3D orchestration with mobile-aware simplification                 |
| Scroll animation | GSAP + ScrollTrigger          | Robust scroll-driven DOM animations and section progress tracking             |
| State bridge     | Zustand                       | Bridges GSAP (DOM scroll) and R3F (WebGL render loop) without race conditions |
| Deployment       | GitHub Actions + GitHub Pages | Static hosting, CI/CD on push to main                                         |

### Architecture constraints

- **GSAP and R3F must never directly control each other.** Zustand is the only bridge: GSAP writes scroll progress to the store, R3F reads from the store via `useFrame`
- The `<Canvas>` element is `position: fixed` at `z-index: 0`, behind all DOM content
- The 3D notebook is progressive enhancement — the page must be fully functional without WebGL
- The `<Canvas>` is wrapped in `<Suspense>` and `<WebGLErrorBoundary>`
- JavaScript (not TypeScript) for V1 speed, with JSDoc annotations on key props

### Performance budget

| Metric                     | Target                                    |
| -------------------------- | ----------------------------------------- |
| LCP                        | < 2.5s on 4G mobile                       |
| JS bundle (excl. 3D model) | < 300KB gzipped                           |
| 3D model                   | < 500KB `.glb`                            |
| Scroll frame rate          | Stable 30fps+ on iPhone 12 class hardware |
| Time to interactive        | < 4s on 4G                                |

### Content model

Copy is hardcoded in `src/content/pt.js` and `src/content/en.js`. Both files export objects with identical keys:

```js
{
  hero: { title, subtitle, body },
  agents: { title, body, categories: [] },
  tools: { title, body, lastUpdated, ide: [], cli: [], note },
  plan: { title, body, steps: [] },
  roadmap: { title, body, steps: [] },
  execution: { title, body, steps: [] },
  templates: { title, body, items: [] },
  closing: { title, body, cta }
}
```

Note: the `tools` section includes pricing data that may become outdated. A `lastUpdated` field and a `note` disclaimer are included to signal this to the visitor.

### Notebook 3D tiers

| Tier   | Description                                                                | V1 Status          |
| ------ | -------------------------------------------------------------------------- | ------------------ |
| Tier 1 | Static model, rotation/position transitions via scroll, open/closed states | Required           |
| Tier 2 | Page-flip animation, 2-3 spread states, annotation marks                   | Target if feasible |
| Tier 3 | Readable content on 3D pages, animated checklists                          | Deferred           |

## Scope

### In scope

- Vite + React + Tailwind project scaffold with GitHub Pages deployment
- Design system: typography, color tokens, spacing rhythm, responsive breakpoints
- 8 content sections with real bilingual copy (PT-BR and EN):
  - Section 1: Hero
  - Section 2: Code Agents — IDE vs CLI (Cursor, Trae, Claude Code, Codex, OpenCode)
  - Section 3: Tools and Pricing (current plans, installation instructions, "last updated" disclaimer)
  - Section 4: The Initial Plan (creating PLAN.md with any LLM)
  - Section 5: Agent Review + Roadmap (agent reviews plan, creates IMPLEMENTATION-ROADMAP.md)
  - Section 6: Phase Execution (per-phase cycle: execution plan → PRD → implement → update → report)
  - Section 7: Templates (PLAN, ROADMAP, PRD, Rules, Skills)
  - Section 8: Closing
- Language toggle that preserves scroll state
- UI primitives: `Button`, `SectionHeading`, `CopyBlock`, `Pill`
- Layout components: `PageShell`, `SectionContainer`, `LanguageToggle`, `BackgroundLayer`
- 3D notebook scene: procedural geometry, lighting, scroll-driven transitions (Tier 1 minimum)
- Scroll orchestration: per-section progress, notebook state map, DOM text animations
- `WebGLErrorBoundary` with CSS fallback
- `prefers-reduced-motion` support (static notebook, no animations)
- Mobile simplification (`useReducedComplexity` hook)
- SEO meta tags, Open Graph tags, social sharing image, favicon
- Template files or links (PLAN, ROADMAP, PRD, rules, skills)
- Final copy review in both languages
- Performance budget validation
- Cross-browser testing (Chrome, Safari, Firefox)
- README with project description and dev instructions

### Out of scope

- Next.js, SSR, CMS, MDX, analytics, forms, auth
- i18n frameworks
- Multi-page routing
- Backend services
- Advanced accessibility audit
- Sound or complex particle systems
- Tier 3 notebook complexity
- Custom domain configuration (can be added later)
- Lorem ipsum content

## Risks and Mitigations

| Risk                                                       | Severity | Mitigation                                                                                                                                       |
| ---------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3D complexity grows beyond performance budget              | High     | Use complexity tiers (start Tier 1, advance only if stable). Have 2.5D CSS fallback as escape hatch                                              |
| R3F + GSAP integration causes jank or race conditions      | High     | Validate integration pattern in Phase 3 spike before building all sections. Keep GSAP on DOM only, R3F on WebGL only. Zustand as the only bridge |
| Mobile experience degrades (frame rate, touch scroll)      | High     | Design mobile behavior from the start. Simplify scene aggressively via `useReducedComplexity`. Test early on iPhone-class viewports              |
| Scroll orchestration becomes fragile                       | Medium   | Centralize motion logic in `SceneController` and `useScrollProgress`. Define section states as a declarative map. Avoid scattered trigger logic  |
| AI-generated code introduces unnecessary complexity        | Medium   | Enforce small isolated tasks. Validate every major step. Reject speculative abstractions                                                         |
| Copy dependency blocks implementation                      | Medium   | Require draft copy as pre-requisite before Phase 2. Accept draft quality for initial build, refine in Phase 5. Never use lorem ipsum             |
| Visual references become imitation (Linear, Apple, Untold) | Low      | Use references for tone and pacing only. Preserve original content structure and notebook metaphor                                               |
| Pricing data becomes outdated                              | Low      | Include `lastUpdated` field and disclaimer note. Pricing section is easy to update (hardcoded copy files)                                        |

## Success Criteria

- [ ] Page is fully static and deploys on GitHub Pages
- [ ] Page is a single long-form scrolling experience with 8 narrative sections
- [ ] 3D notebook element is present and integrated with the narrative (Tier 1 minimum)
- [ ] Notebook persists across the page experience with scroll-driven transitions
- [ ] Motion is subtle and stable (no jank on scroll reversal)
- [ ] Mobile experience is elegant and usable (375px–390px viewports)
- [ ] Content is available in PT-BR and EN with a working toggle
- [ ] IDE vs CLI agent distinction is clear and informative
- [ ] Pricing and installation info is accurate and includes "last updated" disclaimer
- [ ] Workflow explanation (PLAN → ROADMAP → phase execution) is clear for beginners
- [ ] Template CTAs link to real, accessible URLs
- [ ] No backend is required
- [ ] Implementation remains lean (no unnecessary libraries)
- [ ] Page is fully functional without WebGL (error boundary + fallback)
- [ ] Basic SEO and OG tags are in place, sharing preview works
- [ ] `prefers-reduced-motion` is respected (static notebook, no animations)
- [ ] Performance budget thresholds are met (LCP < 2.5s, bundle < 300KB, 30fps+, TTI < 4s)

## Dependencies

- **Draft copy in PT-BR for all 8 sections** — hard dependency for Phase 2. Must be real content, not lorem ipsum
- **EN translation of draft copy** — required before Phase 2
- **Typography decision** — one font from: Inter, Geist, General Sans
- **Color token definitions** — background, foreground, muted, accent, surface (hex/HSL values)
- **Notebook model source** — either a free/CC-licensed `.glb` from Sketchfab/Poly Pizza, or a decision to use procedural geometry
- **PLAN.md confirmed as execution reference** — explicit sign-off before implementation begins

## Open Questions

- N/A — all decisions have been resolved in PLAN.md and IMPLEMENTATION-ROADMAP.md. Pre-requisites (P.1–P.6) must be completed before Phase 1 begins, but these are execution items, not open design questions.

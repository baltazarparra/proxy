# PRD — Phase 3: 3D Notebook Foundation

## Metadata

| Field  | Value      |
| ------ | ---------- |
| Date   | 2026-03-14 |
| Author | baltz      |
| Status | Approved   |

## Problem Statement

The page is fully readable with all 8 bilingual sections, but it is visually static — just text, cards, and buttons on a white background. The central metaphor of the project is a 3D notebook that evolves as the visitor scrolls through the workflow, reinforcing the narrative of structured development. Without it, the page lacks the editorial polish and visual engagement that differentiates Guia from a plain blog post or documentation page.

Phase 3 must establish the 3D foundation: validate the integration pattern between R3F (WebGL render loop) and GSAP (DOM scroll), build the notebook model with procedural geometry, wire basic scroll-driven rotation, and ensure the experience degrades gracefully on mobile and when WebGL is unavailable.

This is the highest-risk phase in the project. Two of the three high-severity risks identified in the project PRD — "3D complexity grows beyond performance budget" and "R3F + GSAP integration causes jank or race conditions" — are directly addressed here. A spike-first approach mitigates this risk before building the full scene.

## Goals

- Validate the R3F + GSAP + Zustand integration pattern with a working spike before committing to the full scene build
- Render a procedural low-poly notebook (box body + plane pages) behind all DOM content, visible during scroll
- Establish the Zustand store as the single bridge between GSAP scroll state and R3F render loop
- Ensure the page remains fully functional without WebGL (error boundary + graceful fallback)
- Simplify the 3D scene on mobile and when `prefers-reduced-motion` is set
- Maintain the performance budget: no regression in scroll frame rate (30fps+ on iPhone 12 class)
- Pass all quality gates (`npm run check`) after every task

## Non-Goals

- No per-section notebook poses — that's Phase 4 (scroll orchestration)
- No page-flip animation, morph targets, or Tier 2/3 notebook features
- No DOM text animations (fade-in, slide-up) — Phase 4
- No `useScrollProgress` per-section hook — Phase 4
- No `notebookStates.js` section-to-pose mapping — Phase 4
- No final visual polish or transition refinement — Phase 6
- No performance profiling beyond the spike validation — Phase 6

## Target Audience

Same as the project PRD. This phase is invisible to the visitor in terms of content — it adds a visual enhancement layer. The primary "audience" is the codebase: Phase 4 depends on the foundation built here.

## Proposed Solution

### Architecture: GSAP → Zustand → R3F

This is the critical architectural pattern defined in PLAN.md section 15. The three systems must stay in their lanes:

```
GSAP ScrollTrigger           Zustand Store           R3F useFrame
─────────────────           ─────────────           ────────────
Reads DOM scroll     →      scrollProgress: 0-1     →   Reads store value
position                    (single float)               Interpolates notebook
Updates store on scroll                                  position/rotation
                                                         per frame
```

GSAP never directly animates Three.js objects. R3F never reads scroll position from the DOM. Zustand is the only bridge.

### Layer 1: Spike validation (tasks 3.1–3.4)

Before building anything permanent, validate the pattern with a disposable spike:

1. **Install dependencies** — `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `zustand`
2. **Create spike** — one `<Canvas>` positioned `fixed` at `z-index: 0`, one 3D box, one Zustand store with `scrollProgress`, one GSAP ScrollTrigger that writes to the store, R3F `useFrame` that reads and rotates the box
3. **Validate mobile** — test under CPU 4x throttle at 375px, target 30fps+
4. **Document pattern** — codify which system owns what in a comment at the top of `useScrollStore.js`

If the spike fails on mobile: document the issue and consider the 2.5D CSS fallback from PLAN.md section 14.

### Layer 2: Scene infrastructure (tasks 3.5–3.9)

Build the permanent scene components:

- **`WebGLErrorBoundary`** — React class component wrapping the Canvas. On error: renders a CSS fallback or clean empty state. Logs to console.
- **`NotebookScene`** — the `<Canvas>` wrapper. Positioned `fixed`, full viewport, `z-index: 0` (behind DOM at z-50 for LanguageToggle). Wrapped in `<Suspense>` with a minimal branded loading state, wrapped in `<WebGLErrorBoundary>`. Camera: perspective, reasonable FOV, positioned to frame the notebook.
- **`SceneLights`** — minimal lighting: one `ambientLight` (soft fill) + one `directionalLight` (subtle directional). No dramatic shadows.
- **`NotebookModel`** — procedural geometry notebook. A `boxGeometry` for the cover/body + `planeGeometry` for pages. Basic `meshStandardMaterial` with the design system colors. Tier 1 only: no page-flip, no morph targets, no readable text.
- **`SceneController`** — inside `<Canvas>`. Reads `scrollProgress` from Zustand. Uses `useFrame` to apply smooth rotation to the notebook based on progress (0 = front view, 1 = slight angle). Simple linear interpolation via `THREE.MathUtils.lerp`.

### Layer 3: Accessibility & integration (tasks 3.10–3.12)

- **`useReducedComplexity` hook** — detects mobile viewport (`innerWidth < 768`) and `prefers-reduced-motion` media query. Returns `{ isMobile, prefersReducedMotion, shouldSimplify }`.
- **Apply simplification** — if `shouldSimplify`: lower Canvas `dpr` (device pixel ratio), reduce lights. If `prefersReducedMotion`: show notebook in a static pose (no scroll-driven rotation).
- **Integrate into page** — add `NotebookScene` to `PageShell` (rendered before DOM children, behind them via CSS). Remove the spike component. Clean up spike files.

## Technical Considerations

### Existing foundation

| Asset                                                       | Status                                    |
| ----------------------------------------------------------- | ----------------------------------------- |
| Vite + React 19                                             | Installed                                 |
| Tailwind v4 with design tokens                              | Configured                                |
| 8 section components + language toggle                      | Built, functional                         |
| `PageShell` (`<main className="min-h-screen">`)             | Built — will be modified to host Canvas   |
| Quality gate (ESLint, Prettier, TypeScript checkJs, Vitest) | Configured, enforced in CI and pre-commit |
| `src/components/three/` directory                           | Exists, empty                             |
| `src/hooks/` directory                                      | Contains only `useLanguage.jsx`           |

### New dependencies

| Package              | Purpose                                           | Category   |
| -------------------- | ------------------------------------------------- | ---------- |
| `three`              | 3D rendering engine                               | Production |
| `@react-three/fiber` | React renderer for Three.js                       | Production |
| `@react-three/drei`  | R3F utilities (Suspense helpers, camera controls) | Production |
| `gsap`               | ScrollTrigger for scroll-driven state             | Production |
| `zustand`            | Lightweight state bridge between GSAP and R3F     | Production |

These are the first new production dependencies since the project scaffold. Expected bundle impact: Three.js is large (~600KB unminified) but tree-shakes well. Monitor gzipped JS size after installation — target stays < 300KB gzipped total.

### Canvas positioning

```css
/* Applied to the <Canvas> wrapper div */
position: fixed;
inset: 0;
z-index: 0;
pointer-events: none;
```

DOM sections scroll normally on top. The `LanguageToggle` is at `z-50`, section content is at the default stacking context. The Canvas sits behind everything.

### GSAP ScrollTrigger setup

ScrollTrigger needs a `trigger` element and a `start`/`end` definition. For Phase 3 (single `scrollProgress` value), the trigger is the entire page body, and progress maps from 0 (top) to 1 (bottom).

In Phase 4, this will be replaced with per-section triggers. The Zustand store must be designed to accommodate that expansion: use a flat object with `scrollProgress` now, and add section-specific keys later.

### Zustand store design

```js
// Phase 3 — simple
{ scrollProgress: 0 }

// Phase 4 — expanded (design for this now)
{ scrollProgress: 0, activeSection: 'hero', hero: 0, agents: 0, ... }
```

The store file (`src/hooks/useScrollStore.js`) should export both the store and a selector for `scrollProgress`. R3F components read via `useFrame` + direct store access (not React re-renders — this is critical for performance).

### Procedural notebook geometry

The notebook is built from Three.js primitives:

- **Cover**: `BoxGeometry` — flat rectangle, slight depth. Material: `meshStandardMaterial` with a muted dark color (e.g. `#2a2a2a` or similar to `foreground` token).
- **Pages**: `PlaneGeometry` — slightly smaller than the cover, positioned inside. Material: lighter color (e.g. `#f5f5f0` or similar to `background` token). Stack 2-3 planes with slight Y offsets to suggest page thickness.
- **Group**: wrap cover + pages in a `<group>` so SceneController can transform the whole notebook as a unit.

Proportions: roughly 3:4 aspect ratio (notebook-like). Scale to fill ~40-60% of the viewport width at the camera's default distance.

### Performance considerations

- `dpr` (device pixel ratio): default to `[1, 2]` range. On mobile/simplified: cap at `1`.
- `frameloop`: use `"always"` during scroll, consider `"demand"` when idle (optimization for Phase 6).
- `gl.antialias`: enable on desktop, disable on mobile for performance.
- Geometry: minimal vertex count. Box + 2-3 planes = trivial draw calls.
- No shadows, no post-processing, no particles in Phase 3.

### Quality gate compliance

All new files must pass `npm run check` (lint, format, typecheck, tests). New components should have JSDoc annotations on props. The spike component is exempt from tests (it will be deleted), but permanent components should be covered by smoke tests.

### Known issue to address

The quality gate report (QG report, known limitation #3) notes that `HeroSection` is missing the `<h1>` title rendering (`t.hero.title` = "Guia"). This was removed in a prior session. It should be restored as part of this phase or flagged for Phase 5 copy review.

## Scope

### In scope

- Install `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `zustand`
- `src/components/three/Spike.jsx` — temporary spike component (deleted after integration)
- `src/hooks/useScrollStore.js` — Zustand store with `scrollProgress`
- `src/components/three/WebGLErrorBoundary.jsx` — error boundary for Canvas
- `src/components/three/NotebookScene.jsx` — Canvas wrapper with Suspense + error boundary
- `src/components/three/SceneLights.jsx` — ambient + directional lights
- `src/components/three/NotebookModel.jsx` — procedural geometry notebook
- `src/components/three/SceneController.jsx` — reads scroll progress, applies rotation
- `src/hooks/useReducedComplexity.js` — detects mobile + reduced motion
- `src/components/layout/PageShell.jsx` — modified to host NotebookScene
- `src/App.jsx` — remove spike, integrate permanent scene
- Spike mobile performance validation
- Integration pattern documentation in `useScrollStore.js`

### Out of scope

- Per-section scroll progress (Phase 4)
- Section-to-notebook state map (Phase 4)
- DOM text animations (Phase 4)
- Page-flip animation, morph targets, Tier 2/3 features
- `useScrollProgress` hook (Phase 4)
- `useNotebookState` hook (Phase 4)
- `notebookStates.js` (Phase 4)
- Performance profiling and optimization (Phase 6)
- Cross-browser testing (Phase 6)
- 2.5D CSS fallback implementation (only triggered if spike fails — escape hatch)

## Risks and Mitigations

| Risk                                                  | Severity | Mitigation                                                                                                                                                         |
| ----------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Three.js bundle size exceeds 300KB gzipped budget     | High     | Monitor build output after 3.1. Three.js tree-shakes well with R3F. If over budget: use `three/examples/jsm` selective imports, lazy-load Canvas via `React.lazy`  |
| R3F + GSAP integration causes jank or race conditions | High     | Spike-first approach (3.2–3.4) validates pattern before full build. Strict domain separation: GSAP writes to Zustand, R3F reads from Zustand. No direct cross-talk |
| Mobile frame rate drops below 30fps with 3D scene     | High     | Test in spike (3.3) under CPU 4x throttle. If fails: reduce `dpr` to 1, disable antialias, simplify geometry. Ultimate fallback: 2.5D CSS approach (deferred)      |
| WebGL unavailable on visitor's device                 | Medium   | `WebGLErrorBoundary` (3.5) catches errors and renders fallback. Page remains fully functional without Canvas                                                       |
| Procedural geometry doesn't look convincing           | Low      | Tier 1 is intentionally minimal. The notebook is a subtle background element, not a hero visual. If proportions look wrong, adjust in Phase 6 polish               |
| New dependencies break existing quality gates         | Low      | Run `npm run check` after every task. Quality gate is enforced in CI and pre-commit                                                                                |

## Success Criteria

- [ ] `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `zustand` are installed and `npm run dev` works
- [ ] Spike: 3D box rotates smoothly with scroll, DOM content scrolls on top, no jank
- [ ] Spike: 30fps+ under CPU 4x throttle on 375px mobile viewport
- [ ] Integration pattern is documented in `useScrollStore.js`
- [ ] `WebGLErrorBoundary` catches errors and renders a clean fallback
- [ ] `NotebookScene` Canvas is `position: fixed` at `z-index: 0` behind all DOM content
- [ ] Suspense loading state appears briefly while scene initializes
- [ ] Procedural notebook (cover + pages) is visible in the scene with correct proportions
- [ ] `SceneController` rotates the notebook based on `scrollProgress` from Zustand
- [ ] `useReducedComplexity` returns correct values for mobile viewport and `prefers-reduced-motion`
- [ ] `prefers-reduced-motion` shows a static notebook (no scroll-driven rotation)
- [ ] Mobile viewport shows simplified scene (lower `dpr`)
- [ ] All 8 DOM sections remain readable with notebook behind them
- [ ] Language toggle still works with 3D scene active
- [ ] `npm run check` passes (lint, format, typecheck, tests)
- [ ] `npm run build` succeeds and gzipped JS stays under 300KB
- [ ] No performance regression on page scroll vs Phase 2 baseline

## Dependencies

- **Phase 2 tasks 2.1–2.14 complete** — confirmed (14/15 done, only 2.15 deploy pending)
- **Quality gate operational** — confirmed (12/12 QG tasks complete, `npm run check` passes)
- **Design tokens available** — colors from `globals.css` will inform notebook material colors
- **`PageShell` component** — will be modified to host the Canvas
- **`LanguageToggle` at z-50** — must remain above the Canvas at z-0
- **Notebook model decision** — procedural geometry confirmed (pre-requisite P.5)

## Open Questions

- N/A — all architectural decisions are resolved in PLAN.md sections 14, 15, and 22. The notebook model approach (procedural geometry), integration pattern (GSAP → Zustand → R3F), and error handling strategy are all specified. The spike (tasks 3.2–3.4) will validate the pattern before the full build proceeds.

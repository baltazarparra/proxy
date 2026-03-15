# PRD Report — Phase 3: 3D Notebook Foundation

## PRD Reference

| Field    | Value                 |
| -------- | --------------------- |
| PRD file | `docs/PRD-phase-3.md` |
| Date     | 2026-03-14            |
| Author   | baltz                 |

## Decisions Summary

| Decision                                         | Justification                                                                                                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Spike-first approach before full scene build     | R3F + GSAP integration is the highest-risk pattern in the project. Validating with a disposable spike (3.2–3.4) prevents building a full scene on an unproven foundation |
| Zustand as the only GSAP ↔ R3F bridge            | GSAP owns DOM scroll, R3F owns WebGL render loop. Direct cross-talk causes race conditions. Zustand provides a synchronous, minimal state bridge                         |
| Procedural geometry (no .glb model)              | Full control over open/closed states, zero network weight, no licensing dependency. Pre-requisite P.5 confirmed this                                                     |
| Tier 1 notebook only (static model + rotation)   | Minimum viable 3D. No page-flip, morph targets, or readable text on pages. Advance only after stability is confirmed (Phase 6)                                           |
| `position: fixed` Canvas at `z-index: 0`         | Canvas stays behind all DOM content. Sections scroll normally on top. LanguageToggle at z-50 remains accessible                                                          |
| `<Suspense>` + `<WebGLErrorBoundary>` wrapping   | Progressive enhancement. Page must work without WebGL. Error boundary prevents white screen on WebGL failure                                                             |
| `useReducedComplexity` hook for adaptive quality | Detects mobile + `prefers-reduced-motion`. Lowers DPR and disables scroll animation when appropriate                                                                     |
| Store designed for Phase 4 expansion             | `scrollProgress` now, with flat object structure ready for per-section keys later. Avoids store redesign between phases                                                  |

## Risk Assessment

| Risk                                   | Severity | Mitigation                                                             | Validation point                         |
| -------------------------------------- | -------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Bundle size exceeds 300KB gzipped      | High     | Tree-shaking with R3F, selective imports. Check build output after 3.1 | Task 3.1 — verify `npm run build` output |
| R3F + GSAP jank or race conditions     | High     | Spike validates before full build. Strict domain separation            | Task 3.2 — spike must run jank-free      |
| Mobile frame rate < 30fps with 3D      | High     | CPU 4x throttle test in spike. Fallback: lower DPR, disable antialias  | Task 3.3 — 30fps+ under throttle         |
| WebGL unavailable                      | Medium   | ErrorBoundary + CSS fallback                                           | Task 3.5 — test by breaking WebGL        |
| Procedural geometry looks unconvincing | Low      | Tier 1 is intentionally minimal. Adjust proportions in Phase 6         | Task 3.8 — visual inspection             |
| New deps break quality gates           | Low      | `npm run check` after every task                                       | All tasks                                |

## Dependencies Check

| Dependency                    | Status    | Notes                                                           |
| ----------------------------- | --------- | --------------------------------------------------------------- |
| Phase 2 (tasks 2.1–2.14)      | Complete  | 14/15 done. Only 2.15 (deploy) pending push to main             |
| Quality gate                  | Complete  | 12/12 QG tasks done. `npm run check` passes                     |
| Design tokens (`globals.css`) | Available | Colors defined: background, foreground, muted, accent, surface  |
| `PageShell` component         | Available | Will be modified to host Canvas                                 |
| `LanguageToggle` at z-50      | Available | Must remain above Canvas at z-0                                 |
| Notebook model decision (P.5) | Resolved  | Procedural geometry confirmed                                   |
| PLAN.md sections 14, 15, 22   | Reviewed  | Architecture pattern, notebook tiers, error strategy documented |

## Generated Tasks

### Task dependency graph

```
3.1 (install deps)
 └─→ 3.2 (spike R3F + ScrollTrigger)
       └─→ 3.3 (spike mobile perf)
             └─→ 3.4 (document pattern)
                   └─→ 3.5 (WebGLErrorBoundary)
                   └─→ 3.10 (useReducedComplexity)
                         │
     ┌────────────────────┘
     ▼
3.6 (NotebookScene) ─→ 3.7 (SceneLights) ─→ 3.8 (NotebookModel) ─→ 3.9 (SceneController)
                                                                            │
                                                                            ▼
                                                                      3.11 (apply reduced complexity)
                                                                            │
                                                                            ▼
                                                                      3.12 (integrate into page)
```

**Critical path:** 3.1 → 3.2 → 3.3 → 3.4 → 3.6 → 3.7 → 3.8 → 3.9 → 3.11 → 3.12

**Parallelizable after 3.4:** 3.5 and 3.10 have no mutual dependency.

### Tasks (from IMPLEMENTATION-ROADMAP.md)

| Task | Description                                  | Files                                                           | Depends on | Done when                                                  |
| ---- | -------------------------------------------- | --------------------------------------------------------------- | ---------- | ---------------------------------------------------------- |
| 3.1  | Install 3D and animation dependencies        | `package.json`                                                  | —          | `npm run dev` works with new deps                          |
| 3.2  | Spike — R3F + ScrollTrigger proof-of-concept | `src/components/three/Spike.jsx`, `src/hooks/useScrollStore.js` | 3.1        | Box rotates with scroll, DOM on top                        |
| 3.3  | Spike — validate mobile performance          | —                                                               | 3.2        | 30fps+ under CPU 4x throttle at 375px                      |
| 3.4  | Document integration pattern                 | `src/hooks/useScrollStore.js` (comment)                         | 3.3        | Pattern documented                                         |
| 3.5  | Create `WebGLErrorBoundary`                  | `src/components/three/WebGLErrorBoundary.jsx`                   | 3.4        | Fallback renders on error                                  |
| 3.6  | Create `NotebookScene`                       | `src/components/three/NotebookScene.jsx`                        | 3.4, 3.5   | Canvas renders behind DOM, Suspense + ErrorBoundary active |
| 3.7  | Create `SceneLights`                         | `src/components/three/SceneLights.jsx`                          | 3.6        | Lights illuminate scene                                    |
| 3.8  | Create notebook model                        | `src/components/three/NotebookModel.jsx`                        | 3.7        | Procedural notebook visible with correct proportions       |
| 3.9  | Create `SceneController`                     | `src/components/three/SceneController.jsx`                      | 3.8        | Notebook rotates with scroll progress                      |
| 3.10 | Create `useReducedComplexity` hook           | `src/hooks/useReducedComplexity.js`                             | 3.4        | Correct values on mobile + reduced motion                  |
| 3.11 | Apply reduced complexity to scene            | `NotebookScene.jsx`, `SceneController.jsx`                      | 3.9, 3.10  | Static notebook on reduced motion, simplified on mobile    |
| 3.12 | Integrate notebook scene into page           | `PageShell.jsx`, `App.jsx`                                      | 3.11       | Notebook behind DOM, spike removed, full page works        |

## Implementation Notes

### Bundle size monitoring

After task 3.1, immediately run `npm run build` and record the gzipped JS size. Current baseline: **67.51 KB**. Three.js + R3F + Drei + GSAP + Zustand will add significant weight. If the total exceeds 300KB gzipped, investigate:

1. Are unused Three.js modules being bundled? (R3F should tree-shake)
2. Is Drei pulling in heavy modules? (Use only needed imports)
3. Consider lazy-loading the Canvas with `React.lazy()` and dynamic import

### GSAP ScrollTrigger registration

GSAP ScrollTrigger must be registered before use:

```js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```

This should happen once, at module level in the component or hook that creates the trigger.

### R3F performance pattern

Inside `<Canvas>`, never use React state for values that change every frame. Use Zustand's `getState()` inside `useFrame` instead of `useStore()` hook:

```js
// Good — direct store access, no React re-render
useFrame(() => {
  const progress = useScrollStore.getState().scrollProgress
  meshRef.current.rotation.y = progress * Math.PI * 0.5
})

// Bad — causes React re-render every frame
const progress = useScrollStore((s) => s.scrollProgress)
```

### HeroSection `<h1>` missing

The quality gate report noted that `HeroSection` doesn't render `t.hero.title` ("Guia") in an `<h1>`. This appears to have been removed in a prior session. This is a semantic HTML issue (the page currently has no `<h1>`). It should be fixed — either in this phase during integration (3.12) or flagged explicitly for Phase 5 copy review. Not blocking for Phase 3, but worth tracking.

### Test strategy

- **Spike (3.2–3.4):** no tests needed — temporary, will be deleted
- **Permanent components (3.5–3.12):** smoke tests verifying components render without crashing. R3F components are hard to unit test; focus on error boundary behavior and hook return values
- **Existing tests:** must continue to pass after every task

## Implementation Readiness

| Criterion                      | Status | Notes                                                                                        |
| ------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| Scope clearly defined          | Yes    | 12 tasks from roadmap, all with explicit "done when" criteria                                |
| Risks identified and mitigated | Yes    | 6 risks with concrete mitigations. Two high-severity risks addressed by spike-first approach |
| Dependencies resolved          | Yes    | Phase 2 complete, quality gate operational, all architectural decisions made                 |
| Open questions answered        | Yes    | Integration pattern, notebook model, error strategy all specified in PLAN.md                 |
| Success criteria are testable  | Yes    | 17 observable conditions covering functionality, performance, accessibility                  |

## Readiness Verdict

**Verdict:** Ready

**Justification:** All dependencies are satisfied. Phase 2 delivered the full static page (14/15 tasks, only deploy pending). The quality gate is operational and enforced at three levels. PLAN.md sections 14, 15, and 22 specify the architecture pattern, notebook tiers, and error handling strategy in detail. The spike-first approach (tasks 3.2–3.4) mitigates the two highest-severity risks before committing to the full scene build. Phase 3 can begin immediately.

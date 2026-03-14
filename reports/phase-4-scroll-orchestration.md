# Phase 4 Report — Scroll Orchestration

## Metadata

| Field     | Value                                                                            |
| --------- | -------------------------------------------------------------------------------- |
| Phase     | 4 of 7                                                                           |
| Objective | Wire per-section scroll progress to drive notebook poses and DOM text animations |
| PRD       | `docs/PRD-phase-4.md`                                                            |
| Roadmap   | `IMPLEMENTATION-ROADMAP.md`                                                      |
| Date      | 2026-03-14                                                                       |
| Status    | Complete                                                                         |

## Task Summary

| Task ID | Description                                    | Status |
| ------- | ---------------------------------------------- | ------ |
| 4.1     | Expand Zustand store with per-section progress | Done   |
| 4.2     | Create `useScrollProgress` hook                | Done   |
| 4.3     | Define section-to-notebook state map           | Done   |
| 4.4     | Create `useNotebookState` hook                 | Done   |
| 4.5     | Update `SceneController` to use state map      | Done   |
| 4.6     | Add DOM text animations per section            | Done   |
| 4.7     | Test scroll reversal behavior                  | Done   |
| 4.8     | Test mobile scroll behavior                    | Done   |

**Result: 8/8 tasks complete.**

## What Was Built

### Store Expansion (4.1)

`useScrollStore` was rewritten to replace the single `scrollProgress` float with:

- `sectionProgress` — object mapping each of the 8 section IDs to a float (0–1)
- `activeSection` — string ID of the most visible section
- `setSectionProgress(id, progress)` — updater for a single section's progress
- `setActiveSection(id)` — updater for active section

The global `scrollProgress` and `setScrollProgress` were removed.

### Per-Section Scroll Registration (4.2)

`useScrollProgress` hook created. Registers one GSAP `ScrollTrigger.create()` per section ID:

- `trigger: '#${id}'`, `start: 'top bottom'`, `end: 'bottom top'`
- `onUpdate` writes progress to Zustand via `getState().setSectionProgress()`
- Active section determined by visibility threshold (progress 0.3–0.7)
- Refreshes triggers on language change via `ScrollTrigger.refresh()`
- Called once from `PageShell` (DOM side, outside Canvas)

The global `ScrollTrigger` on `document.documentElement` was removed from `NotebookScene`, which became a pure Canvas shell.

### Notebook State Map (4.3)

`src/content/notebookStates.js` created with:

- `SECTION_ORDER` array: `['hero', 'agents', 'tools', 'plan', 'roadmap', 'execution', 'templates', 'closing']`
- Declarative pose map: each section ID maps to `{ position: [x,y,z], rotation: [x,y,z], openAmount }`
- `openAmount` defined for future Tier 2 but not consumed in Tier 1

Pose values tuned to match PLAN.md section 12 narrative intent:

| Section   | Position       | Rotation            |
| --------- | -------------- | ------------------- |
| hero      | [0, 0, 0]      | [0, 0, 0]           |
| agents    | [0.5, 0, 0]    | [0, 0.3, 0]         |
| tools     | [0.3, -0.2, 0] | [-0.1, 0.5, 0]      |
| plan      | [-0.2, 0, 0]   | [-0.15, -0.2, 0.05] |
| roadmap   | [0, 0.3, 0]    | [-0.1, 0.4, 0]      |
| execution | [0.3, 0.1, 0]  | [-0.05, 0.6, 0]     |
| templates | [0, 0, 0]      | [-0.1, 0.8, 0]      |
| closing   | [0, -0.1, 0]   | [0, 0.15, 0]        |

### Pose Interpolation (4.4)

`getTargetPose()` function in `src/hooks/useNotebookState.js`:

- Reads `activeSection` and `sectionProgress` from Zustand via `getState()` (zero-cost, no React re-renders)
- Looks up current and next section's pose from `notebookStates`
- Interpolates linearly between poses based on current section's progress
- Returns `{ position: [x,y,z], rotation: [x,y,z] }`
- Designed as a plain function (not a React hook) called inside `useFrame`

### SceneController Update (4.5)

`SceneController` rewritten to:

- Import `getTargetPose` instead of `useScrollStore`
- Call `getTargetPose()` each frame inside `useFrame`
- Apply interpolated position and rotation with `MathUtils.lerp` (factor 0.08) for smooth transitions
- Retain `prefersReducedMotion` static pose logic

### DOM Text Animations (4.6)

`useSectionReveal` hook created:

- Accepts a `ref` to a DOM element
- Checks `prefers-reduced-motion` — no-op if active
- Sets initial state: `opacity: 0, y: 30`
- Creates a paused GSAP tween: `opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'`
- Creates ScrollTrigger: `trigger: ref.current, start: 'top 85%', onEnter: () => tween.play()`
- Content stays visible after reveal (no reversal — `toggleActions` not used, animation plays once via `onEnter`)

Applied to all 8 section components by wrapping inner content in a `<div ref={revealRef}>`.

### Smoke Test Updates

- Mocked `useScrollProgress` (GSAP's `ScrollTrigger.register()` calls `window.matchMedia` which jsdom doesn't support)
- Mocked `useSectionReveal` (same GSAP dependency)
- All 8 existing assertions pass (section IDs, hero text, language toggle)

## Checkpoint Verification

| Criterion                                        | Result                                                                      |
| ------------------------------------------------ | --------------------------------------------------------------------------- |
| Notebook transitions between 8 distinct poses    | Pass — each section produces a visually distinct notebook position/rotation |
| Transitions are smooth (no jumps or snapping)    | Pass — `MathUtils.lerp` with factor 0.08 produces fluid movement            |
| DOM text animations fire on section entry        | Pass — content fades in with 30px slide-up on viewport entry                |
| Scroll reversal works (3D and DOM)               | Pass — notebook reverses to previous poses; DOM content stays visible       |
| Mobile scroll is smooth                          | Pass — tested at 375px viewport; transitions work with simplified scene     |
| `prefers-reduced-motion` disables all animations | Pass — notebook static; DOM content renders at full opacity immediately     |
| Language toggle doesn't break scroll tracking    | Pass — `ScrollTrigger.refresh()` recalculates on language change            |
| `npm run check` passes                           | Pass — lint, format, typecheck, tests (8/8)                                 |
| `npm run build` succeeds                         | Pass                                                                        |

## Build Output

```
dist/index.html                          1.45 kB │ gzip:   0.61 kB
dist/assets/index-DDKtHBIw.css          17.98 kB │ gzip:   4.16 kB
dist/assets/index-7UQurxtJ.js          334.34 kB │ gzip: 115.10 kB
dist/assets/NotebookScene-prc_IHTg.js  883.95 kB │ gzip: 238.23 kB
```

Main bundle: **115.10 KB gzipped** (38% of 300KB budget). Increased from 68 KB because GSAP is now imported in the main bundle (needed for DOM-side `useScrollProgress` and `useSectionReveal`). Previously GSAP was only in the async 3D chunk. The 3D chunk correspondingly decreased to 238 KB. Total download is roughly equivalent (~353 KB vs ~352 KB).

## Files Created

| File                             | Purpose                                         |
| -------------------------------- | ----------------------------------------------- |
| `src/hooks/useScrollProgress.js` | Per-section GSAP ScrollTrigger → Zustand bridge |
| `src/hooks/useNotebookState.js`  | Pose interpolation (getTargetPose)              |
| `src/hooks/useSectionReveal.js`  | DOM entrance animation (fade-in + slide-up)     |
| `src/content/notebookStates.js`  | Section-to-notebook pose map                    |

## Files Modified

| File                                           | Changes                                                         |
| ---------------------------------------------- | --------------------------------------------------------------- |
| `src/hooks/useScrollStore.js`                  | Replaced global scrollProgress with per-section sectionProgress |
| `src/components/three/NotebookScene.jsx`       | Removed GSAP/ScrollTrigger — now a pure Canvas shell            |
| `src/components/three/SceneController.jsx`     | Replaced simple rotation with getTargetPose interpolation       |
| `src/components/layout/PageShell.jsx`          | Added useScrollProgress() call                                  |
| `src/components/sections/HeroSection.jsx`      | Added useSectionReveal ref                                      |
| `src/components/sections/AgentsSection.jsx`    | Added useSectionReveal ref                                      |
| `src/components/sections/ToolsSection.jsx`     | Added useSectionReveal ref                                      |
| `src/components/sections/PlanSection.jsx`      | Added useSectionReveal ref                                      |
| `src/components/sections/RoadmapSection.jsx`   | Added useSectionReveal ref                                      |
| `src/components/sections/ExecutionSection.jsx` | Added useSectionReveal ref                                      |
| `src/components/sections/TemplatesSection.jsx` | Added useSectionReveal ref                                      |
| `src/components/sections/ClosingSection.jsx`   | Added useSectionReveal ref                                      |
| `src/components/__tests__/smoke.test.jsx`      | Added mocks for useScrollProgress and useSectionReveal          |
| `IMPLEMENTATION-ROADMAP.md`                    | Marked tasks 4.1–4.8 and checkpoint items                       |

## Design Decisions Made During Implementation

| Decision                                                      | Rationale                                                                                                |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `getTargetPose` as plain function, not React hook             | Called inside `useFrame` (R3F render loop). React hooks cannot be called conditionally inside callbacks  |
| Active section determined by progress 0.3–0.7 threshold       | Prevents flicker at section boundaries where two sections may share equal viewport coverage              |
| `ScrollTrigger.refresh()` on language change                  | Content height changes when switching PT/EN; triggers must recalculate their start/end positions         |
| GSAP moved to main bundle (not async chunk)                   | DOM animations need GSAP at render time to set initial opacity:0. Lazy-loading would cause content flash |
| `useSectionReveal` checks `prefers-reduced-motion` internally | Self-contained — each section doesn't need to import `useReducedComplexity`                              |
| `onEnter` plays tween once (no toggle)                        | Content stays visible after reveal — no disappearing text on scroll reversal                             |
| Lerp factor 0.08 for pose transitions                         | Slower than Phase 3's 0.1 — provides smoother, more editorial-feeling transitions between sections       |

## Known Issues

| Issue                                                  | Severity | Notes                                                                     |
| ------------------------------------------------------ | -------- | ------------------------------------------------------------------------- |
| Main bundle increased from 68 KB to 115 KB gzipped     | Low      | GSAP now in main bundle for DOM animations. Still well under 300KB budget |
| Notebook overlaps DOM content at some scroll positions | Low      | Expected with fixed-position Canvas. Phase 6 polish can adjust poses      |
| Pose values may need visual tuning                     | Low      | Values are reasonable defaults; can be refined in Phase 6                 |

## Next Phase

**Phase 5 — Templates and Final Content** (5 tasks)

Create or link template files. Update CTA links. Final copy review pass for PT-BR and EN. Adjust layout for final copy.

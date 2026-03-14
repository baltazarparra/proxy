# PRD — Phase 4: Scroll Orchestration

## Metadata

| Field  | Value      |
| ------ | ---------- |
| Date   | 2026-03-14 |
| Author | baltz      |
| Status | Draft      |

## Problem Statement

Phase 3 delivered a working 3D notebook that rotates based on **global** scroll progress — a single 0→1 value mapped to the entire page height. This produces a generic, disconnected feel: the notebook moves at a uniform rate regardless of which section the reader is in, and DOM content appears statically without entrance motion.

The editorial narrative is divided into 8 distinct sections, each with its own conceptual role (Hero = introduction, Agents = exploration, Templates = reference, Closing = wrap-up). The notebook should adopt a distinct pose per section and transition smoothly between poses as the user scrolls. DOM text should reveal itself as sections enter the viewport, reinforcing the scroll-driven editorial rhythm.

Without section-aware orchestration, the page feels like a static article with a decorative object floating behind it rather than an integrated, scroll-driven editorial experience.

## Goals

- **Per-section scroll awareness:** each of the 8 sections independently tracks its own scroll progress (0→1) and determines which section is "active" (most in view).
- **Distinct notebook poses:** the notebook adopts a unique position and rotation for each section, transitioning smoothly between them as the user scrolls.
- **DOM entrance animations:** section headings and body text fade in with a subtle upward slide as they enter the viewport.
- **Bidirectional consistency:** scrolling up reverses transitions cleanly — no stuck states, no disappearing content.
- **Mobile parity:** touch scrolling on mobile viewports produces the same smooth transitions, with 3D simplification already handled by `useReducedComplexity`.
- **Reduced-motion compliance:** when `prefers-reduced-motion` is active, all scroll-driven animations (both DOM and 3D) are disabled; the notebook stays in a static pose and content renders without entrance animation.

## Non-Goals

- **Notebook open/close animation (Tier 2):** the `openAmount` property will be defined in the state map for future use, but Tier 1 does not animate cover opening. Only position and rotation transitions are implemented.
- **Page-flip animation (Tier 2/3):** no page-turn effects in this phase.
- **Content on 3D pages (Tier 3):** no text or images rendered on the notebook's 3D surfaces.
- **Parallax or camera movement:** the camera stays fixed. Only the notebook group moves.
- **Section-specific particles, highlights, or annotation marks:** these are visual embellishments deferred to Phase 6 polish.
- **Scroll snapping or scroll hijacking:** the page uses native browser scrolling. No scroll locking or momentum override.

## Target Audience

- Visitors scrolling through the Proxy landing page on desktop and mobile browsers.
- Developers reading the codebase who need to understand the scroll orchestration architecture.

## Proposed Solution

### 1. Expand Zustand store (replaces global `scrollProgress`)

The current `useScrollStore` holds a single `scrollProgress` float. Phase 4 replaces this with:

```js
{
  sectionProgress: {
    hero: 0, agents: 0, tools: 0, plan: 0,
    roadmap: 0, execution: 0, templates: 0, closing: 0,
  },
  activeSection: 'hero',
  setSectionProgress: (id, progress) => ...,
  setActiveSection: (id) => ...,
}
```

The global `scrollProgress` and `setScrollProgress` are removed. All consumers switch to per-section progress.

### 2. `useScrollProgress` hook (DOM-side, called once)

A hook that registers one GSAP `ScrollTrigger` per section by querying `#sectionId` elements in the DOM. Each trigger writes its progress to the corresponding Zustand key. The trigger with the highest visibility fraction determines `activeSection`.

This hook replaces the single `ScrollTrigger.create()` currently inside `NotebookScene.jsx`. The ScrollTrigger setup is lifted out of `NotebookScene` and into `useScrollProgress`, called once from `PageShell` (DOM side, outside the Canvas).

### 3. Section-to-notebook state map (`notebookStates.js`)

A declarative configuration object mapping each section ID to a target notebook pose:

```js
{
  hero:      { position: [x,y,z], rotation: [x,y,z], openAmount: 0 },
  agents:    { ... },
  ...
  closing:   { ... },
}
```

Position and rotation values are tuned to match the narrative intent from PLAN.md section 12:

| Section   | Narrative intent           | Notebook pose direction                      |
| --------- | -------------------------- | -------------------------------------------- |
| Hero      | Introduction, visual entry | Centered, front-facing, closed               |
| Agents    | Two pathways (IDE vs CLI)  | Slight rightward shift + gentle y-rotation   |
| Tools     | Informational spread       | Wider angle, slightly opened appearance      |
| Plan      | Structured planning        | Re-centered, tilted to suggest pages         |
| Roadmap   | Denser structure           | Slight upward shift, more angled             |
| Execution | Iterative cycle            | Subtle continuous rotation progression       |
| Templates | Clean open reference state | Centered, most "open" rotation, settled      |
| Closing   | Rest, closure              | Returns near hero pose, gentle resting angle |

Exact numeric values will be tuned visually during implementation.

### 4. `useNotebookState` hook (inside Canvas)

Reads `activeSection` and per-section `sectionProgress` from Zustand (via `getState()` inside `useFrame`, **not** the React hook). Interpolates between the current section's pose and the next section's pose using `MathUtils.lerp` per axis.

The section ordering is fixed: `['hero', 'agents', 'tools', 'plan', 'roadmap', 'execution', 'templates', 'closing']`. When `activeSection` is `'agents'` and `agents` progress is 0.7, the hook interpolates 70% from `agents` pose toward `tools` pose.

### 5. Updated `SceneController`

The current simple rotation logic is replaced with the output of `useNotebookState`. The controller applies interpolated `position` and `rotation` to the notebook group ref via `useFrame`. The `prefersReducedMotion` static pose logic remains.

### 6. DOM text animations (`useSectionReveal`)

A reusable hook that accepts a ref and registers a GSAP ScrollTrigger animation:

- **Effect:** fade-in (opacity 0→1) + slide-up (translateY 30px→0)
- **Duration:** 0.6s, ease-out
- **Trigger:** when the ref element enters the viewport (e.g., `start: 'top 85%'`)
- **`toggleActions`:** `'play none none none'` — animation plays once on entry and does not reverse, ensuring content never disappears when scrolling back up.
- **Reduced motion:** if `prefers-reduced-motion`, the hook is a no-op (element renders at full opacity immediately).

Each section component calls `useSectionReveal` on a wrapper ref around the heading and body. The hook is applied per-component, not globally.

### 7. Testing (tasks 4.7, 4.8)

Manual verification:

- Scroll down through all 8 sections, then scroll back up: notebook transitions reverse smoothly, DOM content remains visible.
- Mobile viewport (375px): touch scroll produces smooth transitions, no jank, no overscroll issues.
- `prefers-reduced-motion` enabled: notebook static, no DOM entrance animations, all content immediately visible.

## Technical Considerations

### Dependencies

No new npm packages required. All libraries needed (GSAP, ScrollTrigger, Zustand, Three.js/R3F) were installed in Phase 3.

### GSAP ScrollTrigger per-section strategy

Each section must have a DOM element with a matching `id` attribute. The current `SectionContainer` already renders `<section id={id}>`, which provides the necessary DOM anchors.

ScrollTrigger configuration per section:

```js
ScrollTrigger.create({
  trigger: `#${sectionId}`,
  start: 'top bottom',
  end: 'bottom top',
  onUpdate: (self) => setSectionProgress(sectionId, self.progress),
})
```

The `activeSection` is determined by which section's trigger has the highest progress value while its element is in the viewport center zone (roughly progress 0.3–0.7).

### Zustand access pattern (critical)

Inside the R3F render loop (`useFrame`), Zustand state must be read via `useScrollStore.getState()` — **never** via the `useScrollStore()` React hook. The React hook causes re-renders on every scroll frame, which kills performance. Direct `getState()` access is zero-cost.

On the DOM side (`useScrollProgress`, `useSectionReveal`), GSAP callbacks write to the store via `useScrollStore.getState().setSectionProgress(...)` — also using direct access to avoid unnecessary React re-renders.

### Interpolation strategy

The `useNotebookState` hook (or inline logic in `SceneController`) uses `MathUtils.lerp` per axis with a smoothing factor (e.g., 0.08) to prevent jumpy transitions:

```js
groupRef.current.position.x = MathUtils.lerp(
  groupRef.current.position.x,
  targetPose.position[0],
  0.08,
)
```

The target pose is computed by blending between the current section's pose and the next section's pose based on the current section's progress value.

### Removing global ScrollTrigger from `NotebookScene`

The `useEffect` in `NotebookScene.jsx` that creates a single global `ScrollTrigger` on `document.documentElement` must be removed. Its responsibility moves to `useScrollProgress`. `NotebookScene` becomes a pure Canvas wrapper with no GSAP logic.

### Canvas positioning unchanged

The Canvas stays `fixed inset-0 z-0` with `pointer-events-none`. DOM sections remain `relative z-10`. No changes to the stacking context.

### Performance considerations

- 8 ScrollTrigger instances is lightweight for GSAP — well within normal usage.
- `useFrame` runs at display refresh rate. The lerp smoothing adds negligible computation.
- DOM animations use GSAP's optimized transform pipeline (no layout thrashing).
- On mobile with `shouldSimplify`, 3D transitions still occur but at lower DPR — the interpolation logic is identical.

## Scope

### In scope

- Expand `useScrollStore` with per-section progress and `activeSection`
- Create `useScrollProgress` hook with per-section GSAP ScrollTrigger
- Create `notebookStates.js` with pose configuration for all 8 sections
- Create `useNotebookState` hook for pose interpolation
- Update `SceneController` to use interpolated poses
- Create `useSectionReveal` hook for DOM entrance animations
- Apply `useSectionReveal` to all 8 section components
- Remove global ScrollTrigger from `NotebookScene`
- Test scroll reversal (up and down) for both 3D and DOM
- Test mobile touch scrolling

### Out of scope

- Notebook open/close animation (Tier 2)
- Page-flip or page-content rendering (Tier 2/3)
- Camera movement or parallax
- Scroll snapping or scroll hijacking
- Visual embellishments (particles, annotations)
- New npm dependencies

## Risks and Mitigations

| Risk                                                                       | Severity | Mitigation                                                                                                                                 |
| -------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Per-section ScrollTrigger miscalculates progress on dynamic content height | Medium   | Use `ScrollTrigger.refresh()` after layout settles; test with language toggle (which changes content height)                               |
| Notebook pose transitions feel jerky between sections                      | Medium   | Use `MathUtils.lerp` smoothing with tunable factor; values can be refined without architectural changes                                    |
| DOM entrance animations interfere with content readability                 | Low      | Use `toggleActions: 'play none none none'` — content stays visible once revealed; animation is subtle (30px slide, 0.6s)                   |
| Too many ScrollTrigger instances cause performance issues                  | Low      | 8 instances is well within GSAP's capacity; GSAP is designed for this pattern                                                              |
| `activeSection` computation flickers between sections at boundary          | Medium   | Use a visibility threshold (progress 0.3–0.7 range) or hysteresis to prevent rapid switching                                               |
| Language toggle causes ScrollTrigger to desync (content height changes)    | Medium   | Call `ScrollTrigger.refresh()` when language changes; the `useScrollProgress` hook should listen for language changes and refresh triggers |

## Success Criteria

- [ ] Zustand store holds per-section progress values (0–1) for all 8 sections
- [ ] `activeSection` correctly reflects the most visible section as user scrolls
- [ ] Notebook transitions between 8 distinct poses based on active section
- [ ] Transitions are smooth during scrolling (no jumps, no snapping)
- [ ] DOM text animations fire on section entry (fade-in + slide-up)
- [ ] DOM content remains visible after scrolling past (no disappearing text)
- [ ] Scroll reversal works correctly for both 3D poses and DOM animations
- [ ] Mobile touch scrolling produces smooth transitions
- [ ] `prefers-reduced-motion` disables all animations (notebook static, content immediately visible)
- [ ] Language toggle does not break scroll tracking or trigger positions
- [ ] `npm run check` passes (lint, format, typecheck, tests)
- [ ] `npm run build` succeeds with no bundle size regression

## Dependencies

- Phase 3 complete (validated): GSAP, Zustand, R3F installed and integrated; `useScrollStore`, `SceneController`, `NotebookScene`, `NotebookModel`, `WebGLErrorBoundary`, `useReducedComplexity` all in place.
- `SectionContainer` renders `<section id={sectionId}>` — confirmed, already implemented.
- All 8 section components exist and are assembled in `App.jsx` — confirmed from Phase 2.

## Open Questions

N/A — all architectural decisions are resolved by Phase 3's validated integration pattern and PLAN.md's section-level 3D behavior descriptions.

# PRD Report — Phase 4: Scroll Orchestration

## PRD Reference

| Field    | Value                 |
| -------- | --------------------- |
| PRD file | `docs/PRD-phase-4.md` |
| Date     | 2026-03-14            |
| Author   | baltz                 |

## Decisions Summary

| Decision                                                                    | Justification                                                                                                                                                         |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Replace global `scrollProgress` with per-section progress map               | Global progress produces uniform motion disconnected from content narrative; per-section values enable distinct notebook poses per section                            |
| Determine `activeSection` via visibility threshold (progress 0.3–0.7)       | Prevents flicker at section boundaries; raw "highest progress" can oscillate rapidly when two sections share equal viewport coverage                                  |
| Move ScrollTrigger setup from `NotebookScene` into `useScrollProgress` hook | Separates DOM-side scroll logic from Canvas wrapper; `NotebookScene` becomes a pure Canvas shell; scroll registration lives on the DOM side where it belongs          |
| Call `useScrollProgress` from `PageShell` (not from inside Canvas)          | GSAP must operate on DOM elements. `PageShell` is the DOM ancestor of all sections, making it the correct registration point                                          |
| Use `toggleActions: 'play none none none'` for DOM reveals                  | Content stays visible after reveal — no disappearing text on scroll reversal. Once seen, always visible                                                               |
| Apply `useSectionReveal` per-component (not globally)                       | Each section component owns its reveal ref, keeping the animation coupling explicit and testable                                                                      |
| Define `notebookStates.js` as a flat declarative map                        | Keeps pose configuration separate from interpolation logic; easy to tune visually without touching hooks                                                              |
| Interpolate poses with `MathUtils.lerp` and a smoothing factor              | Prevents discrete jumps between sections; produces fluid transitions that feel physically natural                                                                     |
| Position/rotation only for Tier 1 (defer `openAmount`)                      | Current `NotebookModel` is a simple group of meshes. Open/close requires restructuring into separate cover/page groups — unnecessary complexity for Tier 1 validation |
| No new npm dependencies                                                     | GSAP, Zustand, Three.js/R3F already installed in Phase 3. No additional packages needed                                                                               |

## Risk Assessment

| Risk                                                              | Severity | Mitigation                                                                 | Status    |
| ----------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | --------- |
| Per-section ScrollTrigger miscalculates on dynamic content height | Medium   | `ScrollTrigger.refresh()` after layout settles; test with language toggle  | Mitigated |
| Notebook pose transitions feel jerky                              | Medium   | `MathUtils.lerp` smoothing with tunable factor; iterate on values visually | Mitigated |
| DOM entrance animations interfere with readability                | Low      | `toggleActions: 'play none none none'`; subtle animation (30px, 0.6s)      | Mitigated |
| Too many ScrollTrigger instances affect performance               | Low      | 8 instances is standard GSAP usage; well within design capacity            | Mitigated |
| `activeSection` flickers at section boundaries                    | Medium   | Visibility threshold or hysteresis logic in `useScrollProgress`            | Mitigated |
| Language toggle desyncs ScrollTrigger positions                   | Medium   | `ScrollTrigger.refresh()` triggered on language change                     | Mitigated |

## Generated Tasks

Tasks map directly to `IMPLEMENTATION-ROADMAP.md` Phase 4 (tasks 4.1–4.8):

- [ ] **4.1**: Expand Zustand store with per-section progress — replace `scrollProgress` with `sectionProgress` map and `activeSection`
- [ ] **4.2**: Create `useScrollProgress` hook — register per-section GSAP ScrollTrigger instances, update Zustand store, determine `activeSection`
- [ ] **4.3**: Define section-to-notebook state map — create `src/content/notebookStates.js` with position/rotation/openAmount per section
- [ ] **4.4**: Create `useNotebookState` hook — read Zustand state via `getState()`, interpolate between section poses
- [ ] **4.5**: Update `SceneController` — replace simple rotation with `useNotebookState` output
- [ ] **4.6**: Add DOM text animations — create `useSectionReveal` hook, apply to all 8 section components
- [ ] **4.7**: Test scroll reversal behavior — verify bidirectional 3D + DOM transitions
- [ ] **4.8**: Test mobile scroll behavior — verify touch scrolling, no jank, no overscroll

### Task Dependency Graph

```
4.1 (store) ──────────────────────┐
                                  │
4.3 (notebook states) ─┐          ├──> 4.5 (SceneController) ──┐
                       ├──> 4.4 ──┘                            │
4.1 ───────────────────┘                                       ├──> 4.7 (reversal test)
                                                               │          │
4.2 (useScrollProgress) ──────────────────────────────────────>│          ├──> 4.8 (mobile test)
                                                               │          │
4.6 (useSectionReveal) ───────────────────────────────────────>┘──────────┘
```

Parallelization opportunities:

- 4.1 and 4.3 can run in parallel (store expansion and state map are independent data definitions)
- 4.2 and 4.6 can run in parallel (both are DOM-side hooks, independent of each other)
- 4.4 depends on 4.1 and 4.3
- 4.5 depends on 4.4
- 4.7 and 4.8 are sequential verification after 4.5 + 4.6

## Implementation Readiness

| Criterion                      | Status | Notes                                                                                                       |
| ------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------- |
| Scope clearly defined          | Yes    | 8 tasks covering store, hooks, state map, controller update, DOM animations, and testing                    |
| Risks identified and mitigated | Yes    | 6 risks with concrete mitigations, no blockers                                                              |
| Dependencies resolved          | Yes    | Phase 3 complete (12/12 tasks). All required libraries installed. All section components exist              |
| Open questions answered        | Yes    | No open questions — architecture validated by Phase 3 spike                                                 |
| Success criteria are testable  | Yes    | 12 observable conditions: store values, visual transitions, reversal, mobile, reduced motion, quality gates |

## Readiness Verdict

**Verdict:** Ready

**Justification:** Phase 3 delivered the complete foundation: GSAP → Zustand → R3F pattern is validated, all 3D scene components exist, error boundary and accessibility hooks are in place. Phase 4 extends the existing architecture by expanding the store, adding per-section triggers, and layering DOM animations on top. No new dependencies are needed. All 8 section DOM anchors (`<section id="...">`) already exist from Phase 2. The task dependency graph allows parallelization of independent work items. Implementation can begin immediately.

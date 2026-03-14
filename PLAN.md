# PLAN.md — Proxy Landing Page

## 1. Project Overview

**Project name:** Proxy  
**Type:** Experimental single-page landing page  
**Primary goal:** Educate people who never used code agents and explain a simple agentic development flow  
**Secondary goal:** Offer reusable templates and a clean mental model for getting started  
**Format:** One long-form scroll-driven experience  
**Languages:** PT-BR and EN  
**Deployment:** GitHub Pages

Proxy should feel like a creative editorial product site. The experience should be elegant, minimal, calm, and highly intentional. The visual inspiration is a mix of Linear-like product clarity, Untold-like storytelling, and Apple-like restraint.

## 2. Product Intent

This is not a SaaS, dashboard, or documentation portal.

This is a guided manifesto page that explains:

- how to start coding with agents
- why stack choice matters
- why quality and safety rules matter
- why development should be grounded in PRDs
- why implementation should happen through pre-implementation plans
- which templates help a beginner start with more structure

The user should leave the page with a clear mental model of a simple workflow.

## 3. Target Audience

Broad audience interested in agentic development, especially beginners.

This includes:

- developers exploring agent-based coding for the first time
- tech leads evaluating more structured AI workflows
- builders curious about practical AI-assisted software delivery
- creative technologists interested in modern development systems

The content should be accessible to beginners but credible to experienced readers.

## 4. Success Definition

The primary success condition is qualitative:

- the visitor understands the proposed workflow clearly
- the visitor feels the flow is elegant, practical, and usable
- the visitor can click and reuse the provided templates

No analytics, email capture, or formal KPI tracking are required in V1.

## 5. Creative Direction

### Desired tone
- minimal
- premium
- calm
- editorial
- modern
- practical
- clear

### Visual references
- Linear for product clarity and structure
- Untold for scroll-based storytelling and presentation rhythm
- Apple for restraint, hierarchy, whitespace, and elegance

### Design posture
- consciously inspired, not derivative
- motion should be subtle
- layout should feel premium without trying too hard
- no noisy neon sci-fi language
- no gamified aesthetic

## 6. Core Experience Concept

The landing page revolves around a low-poly 3D notebook.

This notebook is not decorative only. It is the central storytelling object.

It should:

- appear in the hero
- remain part of the experience through the whole scroll
- move naturally as the page progresses
- open pages in sync with narrative transitions
- reveal layers or annotations when sections change
- visually reinforce the conceptual flow being explained

The notebook acts as a metaphor for structured building:
first the idea, then the stack, then the PRD, then the plan, then execution.

## 7. Motion Principles

Motion must be:

- subtle
- smooth
- readable
- scroll-driven
- robust
- mobile-aware

Avoid over-engineered cinematic lockups.

Preferred motion style:

- light camera shifts
- graceful object transforms
- page opening moments
- layer reveals
- annotation highlights
- restrained particles and lighting accents

No sound.

## 8. Mobile-First Reality

More than half of accesses are expected to come from iPhone users.

That changes priorities.

### Mobile principles
- mobile is first-class, not an afterthought
- the 3D object must have a simplified version on mobile
- text readability and pacing matter more than spectacle
- motion must remain smooth without heavy scene complexity
- section transitions must work even if 3D fidelity is reduced

Desktop can be richer.
Mobile must remain elegant, readable, and stable.

## 9. Recommended Stack

### Core recommendation

Use:

- Vite
- React
- JavaScript
- Tailwind CSS
- React Three Fiber
- Drei
- GSAP + ScrollTrigger
- GitHub Actions
- GitHub Pages

### Why this stack

#### Vite instead of Next.js
This project is a static single-page experience with no need for SSR, API routes, auth, CMS, or backend rendering.

Vite is simpler, lighter, and better suited for:

- static deployment to GitHub Pages
- faster local iteration
- cleaner generated structure for an experimental landing page
- less framework overhead for AI-generated code workflows

#### React
React gives enough component structure for:
- modular section building
- reusable motion wrappers
- clean integration with R3F
- easier orchestration with agent-generated code

#### JavaScript instead of TypeScript
TypeScript is not mandatory here.
For a creative, experimental, fast-moving V1, JavaScript reduces friction and speeds iteration.

If the project grows later, TypeScript can be added.

**Tradeoff note for AI-assisted development:**
TypeScript would improve AI code generation quality through type checking, better autocompletion, and implicit prop documentation. JavaScript was chosen for speed, but this means extra care is needed to validate prop shapes and catch subtle bugs that types would prevent. Consider adding JSDoc type annotations on key component props as a lightweight compromise.

#### Tailwind CSS
Tailwind fits the intended workflow well because:
- it accelerates UI iteration with AI tools
- it reduces context switching
- it is productive for highly controlled spacing and layout
- it keeps the project lean for a static site

#### React Three Fiber + Drei
Best balance for:
- React-based orchestration
- 3D object composition
- easier scene management
- mobile-aware simplification
- smoother collaboration with generative coding tools

#### GSAP + ScrollTrigger
Best fit for:
- subtle scroll-based orchestration
- syncing section progress with scene states
- pinning and reveal choreography
- robust behavior compared to ad hoc scroll logic

#### GitHub Pages
Fits the deployment model perfectly for a static project and keeps hosting simple.

## 10. Why Not Use a More Complex Stack

Do not start with:
- Next.js
- CMS
- MDX
- server logic
- localization frameworks
- analytics tooling
- form integrations
- headless backends

These add complexity without improving the V1 outcome.

The project should stay intentionally constrained.

## 11. Content Model

V1 content should be hardcoded.

That is the correct tradeoff because:
- there is only one page
- the narrative is highly curated
- content will likely change while the concept matures
- introducing CMS or MDX now adds friction with little value

Bilingual support should be simple and explicit.
A lightweight local language data structure is enough.

Example approach:
- `content/pt.js`
- `content/en.js`

Or a single structured object:
- `src/content/siteCopy.js`

## 12. Proposed Page Structure

### Section 1 — Hero
Goal: establish concept and visual identity.

Content direction:
- name: Proxy
- one-line framing for agentic development
- short supporting statement
- visual entry of the 3D notebook
- subtle cue to scroll

3D behavior:
- notebook enters with restrained motion
- camera settles softly
- slight hover/parallax feel only if performance allows

### Section 2 — Why Start This Way
Goal: explain the problem with jumping straight into prompting code.

Key ideas:
- agents can accelerate chaos too
- quality needs structure
- rules and skills reduce bad outcomes
- beginners need a safe default flow

3D behavior:
- notebook begins opening
- first annotation layers appear
- subtle highlight marks suggest system thinking

### Section 3 — Define the Stack First
Goal: explain that the stack should be chosen before implementation.

Key ideas:
- choose tools that fit the product and deployment reality
- avoid overengineering
- use a stack that matches the delivery model
- static site decisions matter

3D behavior:
- page flips to a "stack" spread
- specific keywords or labels appear on pages
- controlled layer reveal

### Section 4 — Create the Plan Before the Code
Goal: explain why planning comes before implementation.

Key ideas:
- define the flow first
- align on product intent
- reduce ambiguity
- planning is leverage

3D behavior:
- notebook reveals structured pages
- plan-like layout appears
- light annotation marks emerge

### Section 5 — Write a PRD
Goal: explain the role of a PRD in agentic development.

Key ideas:
- PRD clarifies scope
- PRD improves prompt quality
- PRD reduces back-and-forth
- PRD helps break work into stable units

3D behavior:
- notebook pages show denser structure
- a few lines or content blocks animate in
- emphasis remains subtle

### Section 6 — Execute Through Pre-Implementation Plans
Goal: explain the execution model.

Key ideas:
- do not jump from idea straight to full implementation
- create a short execution plan before writing code
- validate dependencies, risks, constraints
- then implement with clarity

3D behavior:
- notebook reveals checklists or plan fragments
- page edges, highlights, or progress marks animate

### Section 7 — Templates
Goal: provide useful reusable starter assets.

Possible templates:
- simple stack decision template
- PLAN template
- PRD template
- rules template
- skills template

CTA:
- "Get templates"
- link to GitHub repo

3D behavior:
- notebook settles on a clean open state
- page contents become most readable here

### Section 8 — Closing Statement
Goal: close the narrative with clarity.

Message:
- good agentic development starts with structure
- simple flows beat chaotic prompting
- clarity compounds

CTA:
- link to GitHub repository

3D behavior:
- notebook gently closes or rests
- final calm state

## 13. Bilingual Strategy

V1 should support PT-BR and EN.

Keep implementation simple.

Recommended approach:
- language toggle in UI
- copy stored locally
- no routing split required in V1
- no i18n framework unless truly needed

The toggle should:
- preserve current section state
- switch all text cleanly
- not interfere with scroll state

## 14. 3D Strategy

### Object choice
Use a low-poly notebook.

### Why notebook
It supports the concept better than a loose sheet.
It can embody:
- structure
- process
- thinking
- planning
- iteration

### Notebook complexity tiers

The notebook description in section 12 implies multiple interactive behaviors (pages opening, annotations appearing, checklists, content blocks). This is significantly more complex than a static low-poly object.

Define three tiers to allow graceful scope control:

**Tier 1 — Minimum viable (required for V1):**
- static low-poly notebook model
- rotation and position transitions driven by scroll
- open/closed states (two poses, interpolated)
- no page content rendered on the 3D model itself

**Tier 2 — Enhanced (target for V1 if feasible):**
- notebook with page-flip animation (rigged or morph targets)
- 2-3 distinct spread states (closed, partially open, fully open)
- subtle annotation marks as overlaid geometry or sprites

**Tier 3 — Full vision (stretch, not required for V1):**
- readable text content on notebook pages
- animated checklists and content blocks
- per-section unique page layouts within the 3D model

Start with Tier 1. Advance to Tier 2 only after the base scene is stable and performant. Tier 3 is deferred unless execution is ahead of schedule.

### Model sourcing strategy

Recommended order:
1. search Sketchfab, Poly Pizza, or similar for a free/CC-licensed low-poly notebook in `.glb` format
2. verify the model supports open/closed states or can be easily modified
3. if no suitable model is found, create a simple one procedurally using Three.js geometry (box + planes for pages)
4. only invest in Blender modeling if procedural geometry fails visually

Fallback: if 3D proves too costly for mobile performance, replace with a 2.5D approach — flat notebook illustration with CSS perspective transforms, parallax layers, and opacity transitions. This fallback preserves the metaphor without the WebGL overhead.

### Scene design principles
- transparent or visually integrated background
- soft light only
- minimal geometry
- low draw-call mindset
- elegant motion, not visual overload

### Mobile simplification options
On mobile:
- reduce scene complexity
- reduce particles or disable entirely
- reduce lighting complexity
- simplify page detail
- reduce animation range
- consider replacing 3D with 2.5D fallback if frame rate drops below 30fps

## 15. Motion System Strategy

Use GSAP + ScrollTrigger to drive both DOM and 3D state transitions.

### R3F + GSAP integration architecture

React Three Fiber and GSAP operate in different domains. R3F owns a WebGL render loop via `useFrame`. GSAP ScrollTrigger reads DOM scroll position. These must be bridged explicitly.

**Recommended pattern:**

1. The `<Canvas>` element is positioned `fixed` at `z-index: 0`, behind all DOM content
2. DOM sections scroll normally on top of the canvas
3. A `useScrollProgress` hook reads GSAP ScrollTrigger progress values per section and exposes them as React state
4. The `SceneController` component inside `<Canvas>` reads scroll progress via a shared store (Zustand or React context) and interpolates notebook position, rotation, and state
5. DOM animations (text reveals, fade-ins) are handled by GSAP directly on DOM elements
6. 3D animations are handled by R3F `useFrame` reading the interpolated scroll state — GSAP does not directly animate Three.js objects

**This separation is critical.** Mixing GSAP's DOM control with R3F's render loop causes race conditions and jank.

A technical spike must validate this pattern before building all sections (see Phase 2).

### Orchestration approach
- create section-level timelines
- map scroll progress to notebook states
- avoid too many overlapping triggers
- keep state transitions deterministic

### Important constraints
- do not build fragile custom scroll math too early
- keep motion authoring centralized
- separate "section triggers" from "scene states"

### Suggested model
- one scene controller (reads scroll state, drives 3D)
- one DOM motion layer (GSAP timelines on DOM elements)
- section-based state definitions (declarative map of section -> notebook state)

## 16. Information Architecture

Because this is a single-page experience, the architecture should remain lean.

Suggested top-level structure:

```text
proxy/
  public/
    models/
    textures/
  src/
    components/
      layout/
      sections/
      ui/
      three/
    content/
    hooks/
    styles/
    App.jsx
    main.jsx
  .github/
    workflows/
  README.md
  PLAN.md
```

### Directory purpose

- `components/layout/` — page shell, section container, background layer
- `components/sections/` — one component per content section
- `components/ui/` — reusable UI primitives (button, pill, heading)
- `components/three/` — R3F scene, notebook model, lights, controller
- `content/` — bilingual copy files
- `hooks/` — scroll progress, reduced complexity, section detection, scene timeline utilities
- `styles/` — global styles, Tailwind config extensions
- `public/models/` — `.glb` notebook model
- `public/textures/` — any texture assets

## 17. Component Strategy

Suggested component groups:

### Layout
- `PageShell` — top-level wrapper, manages fixed canvas and scrolling DOM
- `SectionContainer` — wraps each section with consistent spacing and scroll trigger registration
- `LanguageToggle` — bilingual switch, preserves scroll state
- `BackgroundLayer` — subtle background treatments behind sections

### Content sections
- `HeroSection`
- `WhySection`
- `StackSection`
- `PlanSection`
- `PRDSection`
- `ExecutionSection`
- `TemplatesSection`
- `ClosingSection`

### 3D system
- `NotebookScene` — R3F Canvas wrapper with Suspense and error boundary
- `NotebookModel` — loads and renders the `.glb` model
- `SceneLights` — lighting setup
- `SceneController` — reads scroll state store, interpolates notebook transforms
- `MobileSceneVariant` — simplified scene or 2.5D fallback for mobile

### Hooks
- `useScrollProgress` — reads GSAP ScrollTrigger progress, writes to shared store
- `useSectionProgress` — returns normalized 0-1 progress for a specific section
- `useReducedComplexity` — detects mobile, low-power, or prefers-reduced-motion
- `useNotebookState` — derives notebook pose from current section progress

### UI
- `Button`
- `Pill`
- `SectionHeading`
- `CopyBlock`

## 18. Visual System Direction

### Typography
Use a modern sans-serif with premium clarity.
Keep it neutral and highly legible.

Potential directions:
- Inter
- Geist
- General Sans if licensing/setup is easy

### Color system
Hybrid appearance.
Likely:
- light neutral base sections
- darker accent moments or overlays
- restrained contrast
- soft grays, off-whites, muted blacks
- one minimal accent color only if necessary

### Spacing
Whitespace should do a lot of the work.
Avoid dense blocks.

### Surfaces
Use subtle layering.
No heavy glassmorphism.
No loud gradients.

## 19. Copy Direction

Copy should be:
- concise
- calm
- intelligent
- practical
- non-hyped

Avoid:
- excessive AI buzzwords
- aggressive marketing tone
- vague futurism
- inflated claims

The writing should feel like a clear creative system being explained by someone who has already filtered noise out.

## 20. Accessibility and Usability Baseline

Even as an experimental page, V1 should still cover basics:

- readable contrast
- keyboard-accessible UI controls
- language toggle accessible
- semantic HTML for sections and headings
- avoid motion that harms readability
- preserve legibility over spectacle
- respect `prefers-reduced-motion`: disable scroll-driven animations and 3D transitions, show notebook in a static open state, keep content fully readable without motion

No need for exhaustive accessibility optimization in V1, but no careless regressions.

## 21. Performance Strategy

Performance is more important than wow factor.

### Performance budget

Target measurable thresholds:
- LCP (Largest Contentful Paint): < 2.5s on 4G mobile
- Total JS bundle (excluding 3D model): < 300KB gzipped
- 3D model file: < 500KB `.glb`
- Frame rate during scroll: stable 30fps+ on iPhone 12 class hardware
- Time to interactive: < 4s on 4G mobile

### Performance principles
- keep 3D scene minimal
- avoid over-textured assets
- keep particles restrained
- lazy load heavy assets when possible
- compress model files (use `gltf-transform` or Draco compression)
- test especially on iPhone-class hardware
- avoid multiple expensive concurrent scroll effects

### Do not optimize prematurely with complexity
Prefer simpler scenes over engineering-heavy performance hacks.

## 22. Loading and Error Strategy

### 3D asset loading
- wrap `<Canvas>` in React `<Suspense>` with a branded loading state
- loading state should match the page's visual system (not a generic spinner)
- use `useProgress` from Drei to show loading percentage if model exceeds 200KB
- content sections should remain readable while the 3D scene loads

### WebGL error boundary
- wrap the 3D scene in an error boundary component
- if WebGL is unavailable or crashes, render a static illustration or CSS-based notebook silhouette as fallback
- the page must remain fully functional (all content readable, all CTAs clickable) without the 3D element

### Progressive enhancement mindset
The 3D notebook is an enhancement, not a dependency. The page must work without it.

## 23. SEO and Social Baseline

Even as an experimental page, basic discoverability matters:

- `<title>` and `<meta name="description">` in both languages (default to the current language)
- Open Graph tags: `og:title`, `og:description`, `og:image`
- a social sharing image (1200x630px) — can be a simple branded card
- `<html lang>` attribute that updates with language toggle
- favicon
- canonical URL once deployed

## 24. Deployment Strategy

Deploy via GitHub Pages using GitHub Actions.

Expected flow:
- code pushed to main branch
- action builds static bundle
- action publishes to Pages

Requirements:
- static asset paths must be configured correctly
- repo-based base path may need handling in Vite config (`base` property)
- confirm behavior for custom domain only if added later

## 25. Development Workflow with AI

The project will be built mostly through generative coding in Cursor using Claude Opus 4.6.

That means the plan should explicitly favor:
- small isolated tasks
- deterministic structure
- low framework ambiguity
- strong implementation boundaries

### Rules for the AI workflow
- do not generate the whole project in one step
- define structure first
- implement section by section
- build the scene in layers
- validate after each meaningful change
- protect simplicity
- avoid adding libraries unless justified

### Recommended implementation sequence
1. scaffold project (Vite + React + Tailwind)
2. configure deployment pipeline (GitHub Actions + Pages)
3. define visual system (tokens, typography, spacing)
4. build page sections without 3D (all 8 sections with real copy)
5. add language support (toggle + bilingual copy)
6. spike: validate R3F + ScrollTrigger integration pattern
7. integrate base 3D notebook scene (Tier 1)
8. connect scene to scroll states
9. refine motion and advance to Tier 2 if stable
10. optimize mobile behavior
11. prepare repo assets and templates
12. final polish and deploy

## 26. Implementation Phases

### Pre-requisites (before Phase 1)

The following must be ready before implementation begins:

- [ ] draft copy for all 8 sections in PT-BR (does not need to be final, but must be real content — not lorem ipsum)
- [ ] EN translation of draft copy
- [ ] decision on typography (pick one from section 18)
- [ ] decision on color tokens (define at least: background, text, accent, muted)
- [ ] decision on notebook model source (search Sketchfab/Poly Pizza, confirm licensing) or decision to use procedural geometry
- [ ] confirmation of this PLAN.md as the execution reference

### Phase 1 — Scaffold and Design System

Deliverables:
- Vite + React + Tailwind project scaffolded
- GitHub Actions workflow for Pages deployment (deploy early, deploy often)
- typography loaded (Google Fonts or local)
- color tokens defined as Tailwind theme extensions
- spacing rhythm established
- `SectionContainer` and `PageShell` layout components built
- responsive breakpoints defined
- base `index.html` with SEO meta tags, favicon, OG tags

### Phase 2 — Static Landing Structure

**Dependency:** draft copy must exist.

Deliverables:
- all 8 content sections built with real copy
- bilingual copy wired via `content/pt.js` and `content/en.js`
- language toggle functional
- CTA buttons and template links structured (can point to placeholder URLs)
- sections are readable, well-spaced, and responsive
- semantic HTML throughout
- page deployed to GitHub Pages (static, no 3D yet)

### Phase 3 — 3D Notebook Foundation

**Starts with a technical spike.**

Spike deliverable:
- minimal proof-of-concept: one R3F Canvas (fixed position) + one GSAP ScrollTrigger + shared state store (Zustand or Context)
- validate that scroll progress drives a 3D object's rotation smoothly
- validate mobile performance on the spike (Chrome DevTools throttling)
- document the integration pattern for the rest of the build

After spike validation:
- notebook model loaded (`.glb` or procedural geometry)
- `NotebookScene` with `<Suspense>` and error boundary
- `SceneLights` defined
- `SceneController` reading scroll state
- mobile detection via `useReducedComplexity` — simplified scene or 2.5D fallback
- loading state visible while model loads
- `prefers-reduced-motion` respected (static notebook, no animation)

### Phase 4 — Scroll Orchestration

Deliverables:
- `useScrollProgress` hook wired to all 8 sections
- notebook transitions per section (position, rotation, open/close interpolation)
- DOM text animations (fade-in, slide-up) via GSAP on section entry
- section-based state map defined (declarative section -> notebook state)
- motion is subtle and stable
- no jank on scroll reversal

### Phase 5 — Templates and Final Content

Deliverables:
- template files created or linked in the GitHub repo
- CTA links point to real URLs
- final copy review pass (both languages)
- any copy adjustments reflected in layout

### Phase 6 — Polish and Optimization

Deliverables:
- mobile tuning (test on iPhone-class viewport, throttled CPU)
- performance budget validation (LCP, bundle size, frame rate)
- scene simplification if needed (drop to Tier 1 if Tier 2 causes issues)
- visual cleanup (spacing, alignment, color consistency)
- transition refinement
- `prefers-reduced-motion` verification
- error boundary verification (disable WebGL in DevTools, confirm fallback)
- cross-browser check (Chrome, Safari, Firefox — mobile Safari is priority)

### Phase 7 — Deployment and Launch

Deliverables:
- final GitHub Actions workflow verified
- Pages deployment confirmed on production URL
- social sharing image created and OG tags verified
- README updated with project description and local dev instructions
- all template links verified

## 27. Initial Backlog

### Product backlog
- define final headline and subheadline
- write section copy in PT-BR (draft quality minimum)
- translate section copy to EN
- define exact templates to offer
- define CTA naming
- create social sharing image

### Design backlog
- choose font (one decision from the shortlist)
- define color tokens (background, text, accent, muted, surface)
- define section spacing scale
- define notebook visual target (reference image or sketch)
- define annotation style (if advancing to Tier 2)

### Technical backlog
- scaffold Vite + React + Tailwind
- configure GitHub Actions + Pages deployment
- build section shell with real copy
- add language toggle
- spike: R3F + GSAP ScrollTrigger integration
- integrate R3F scene with notebook model
- add scroll orchestration
- implement mobile scene variant or fallback
- add loading state and error boundary
- add SEO meta tags and OG tags
- optimize assets (model compression, image optimization)
- validate performance budget

## 28. Risks

### Risk 1 — 3D complexity grows too much
Mitigation:
- use complexity tiers (section 14) to control scope
- start with Tier 1, only advance if stable
- have 2.5D fallback ready as escape hatch
- prioritize readability and frame stability

### Risk 2 — Scroll orchestration becomes fragile
Mitigation:
- centralize motion logic in `SceneController` and `useScrollProgress`
- define section states as a declarative map
- avoid scattered trigger logic

### Risk 3 — Mobile experience degrades
Mitigation:
- design mobile behavior from the start
- simplify the scene aggressively when needed
- test early on iPhone-like screen sizes
- have 2.5D fallback for low-end devices

### Risk 4 — AI-generated code introduces unnecessary complexity
Mitigation:
- enforce small tasks
- validate every major step
- reject speculative abstractions

### Risk 5 — Visual references become imitation
Mitigation:
- use references for tone and pacing only
- preserve original content structure and metaphor

### Risk 6 — R3F + GSAP integration causes jank or race conditions
Mitigation:
- validate integration pattern in Phase 3 spike before building all sections
- keep GSAP on DOM only, R3F on WebGL only — no crossover
- use shared state store as the only bridge between the two systems

### Risk 7 — Copy dependency blocks implementation
Mitigation:
- require draft copy as a pre-requisite before Phase 2
- accept draft quality for initial build, refine in Phase 5
- do not use lorem ipsum — even rough real content produces better layout decisions

## 29. Acceptance Criteria for V1

V1 is successful when all of this is true:

- the page is fully static and deploys on GitHub Pages
- the page is a single long-form scrolling experience
- the notebook 3D element is present and integrated with the narrative (Tier 1 minimum)
- the notebook persists across the page experience
- motion is subtle and stable
- mobile experience remains elegant and usable
- content is available in PT-BR and EN
- the workflow explanation is clear for beginners
- template CTAs link to the GitHub repository
- no backend is required
- the implementation remains lean
- the page is fully functional without WebGL (error boundary + fallback)
- basic SEO and OG tags are in place
- `prefers-reduced-motion` is respected
- performance budget thresholds are met

## 30. What V1 Will Explicitly Not Include

Do not include in V1:
- CMS
- blog
- analytics
- forms
- email capture
- auth
- SSR
- advanced accessibility pass
- complex particle systems
- sound
- heavy WebGL tricks
- documentation portal
- multi-page structure
- Tier 3 notebook complexity (readable page content in 3D)

## 31. Next Document

After this PLAN, the only required document before implementation is:

**`COPY-OUTLINE.md`**
Defines all section copy in PT-BR and EN (draft quality minimum).
This is a hard dependency for Phase 2.

All other concerns (visual direction, implementation steps, template specs) are covered in this PLAN or will be resolved inline during execution.

## 32. Final Recommendation

Build Proxy as a restrained, bilingual, static, scroll-led creative landing page using Vite, React, Tailwind, React Three Fiber, Drei, and GSAP.

Keep the first version focused.
Do not let the 3D system dominate the product message.
The message is the system.
The notebook only makes that system feel tangible.

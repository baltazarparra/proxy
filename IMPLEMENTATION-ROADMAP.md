# Implementation Roadmap — Proxy

**Reference:** [PLAN.md](PLAN.md)
**Stack:** Vite + React + JavaScript + Tailwind CSS + React Three Fiber + Drei + GSAP + GitHub Pages
**Format:** Atomic tasks grouped by phase. One task = one coding session.

---

## Pre-requisites

These must be resolved before Phase 1 begins. No code should be written until all items are checked.

> PLAN.md reference: section 26 (Pre-requisites), section 18 (Visual System), section 14 (3D Strategy)

- [ ] **P.1**: Write draft copy for all 8 sections in PT-BR
  - Must be real content, not lorem ipsum
  - Does not need to be final — draft quality is acceptable
  - Structure: one heading + one subheading + body paragraphs per section
  - Output: raw text or markdown, ready to be placed into `content/pt.js`
  - Done: copy exists for Hero, Why, Stack, Plan, PRD, Execution, Templates, Closing

- [ ] **P.2**: Translate draft copy to EN
  - Translate the PT-BR draft from P.1 into English
  - Maintain the same structure and tone
  - Done: EN copy exists for all 8 sections, matching PT-BR structure

- [ ] **P.3**: Choose typography
  - Pick one from: Inter, Geist, General Sans
  - Confirm availability via Google Fonts or local hosting
  - Done: one font family selected, loading method decided (Google Fonts CDN or local files)

- [ ] **P.4**: Define color tokens
  - Define at minimum: `background`, `foreground` (text), `muted`, `accent`, `surface`
  - Decide light/dark base direction
  - Done: hex/HSL values documented for all tokens

- [ ] **P.5**: Decide notebook model source
  - Search [Sketchfab](https://sketchfab.com), [Poly Pizza](https://poly.pizza), or [Quaternius](https://quaternius.com) for a free/CC-licensed low-poly notebook in `.glb` format
  - Check if the model has open/closed states or can be easily modified
  - If no suitable model found: decide to use procedural geometry (box + planes)
  - Done: model file downloaded and license verified, OR decision to use procedural geometry documented

- [ ] **P.6**: Confirm PLAN.md as execution reference
  - Review final PLAN.md
  - Confirm all sections align with expectations
  - Done: explicit confirmation that PLAN.md is the source of truth

---

## Phase 1 — Scaffold and Design System

**Objective:** Set up the project foundation — build tools, deployment pipeline, design tokens, and layout primitives.

**Dependencies:** All pre-requisites (P.1–P.6) must be complete.

> PLAN.md reference: sections 9 (Stack), 16 (Info Architecture), 18 (Visual System), 23 (SEO), 24 (Deployment)

### Tasks

- [ ] **1.1**: Create Vite + React project
  - Initialize Vite with the React template in the current repo root
  - Preserve existing files (`PLAN.md`, `README.md`, `LICENSE`, `.gitignore`)
  - Files created: `package.json`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `index.html`
  - Done: `npm run dev` starts and shows the default Vite React page in the browser

- [ ] **1.2**: Install and configure Tailwind CSS
  - Install Tailwind CSS, PostCSS, and Autoprefixer
  - Create `tailwind.config.js` and `postcss.config.js`
  - Add Tailwind directives to `src/styles/globals.css`
  - Wire `globals.css` into `main.jsx`
  - Files created: `tailwind.config.js`, `postcss.config.js`, `src/styles/globals.css`
  - Done: a Tailwind utility class (e.g. `text-red-500`) renders correctly in the browser

- [ ] **1.3**: Configure Vite for GitHub Pages
  - Set `base` in `vite.config.js` to handle the repo-based path (e.g. `/proxy/`)
  - Verify static asset paths resolve correctly after build
  - Files modified: `vite.config.js`
  - Done: `npm run build` produces a `dist/` folder with correct asset paths

- [ ] **1.4**: Create GitHub Actions deployment workflow
  - Create `.github/workflows/deploy.yml`
  - Workflow triggers on push to `main`
  - Steps: checkout, install, build, deploy to GitHub Pages
  - Use `actions/deploy-pages` or `peaceiris/actions-gh-pages`
  - Files created: `.github/workflows/deploy.yml`
  - Done: workflow file exists and is syntactically valid (manual verification or dry-run)

- [ ] **1.5**: Load typography
  - Add the chosen font (from P.3) via Google Fonts link in `index.html` or via `@font-face` in CSS
  - Set it as the default font family in `tailwind.config.js` (`fontFamily.sans`)
  - Files modified: `index.html` or `src/styles/globals.css`, `tailwind.config.js`
  - Done: body text renders in the chosen font in the browser

- [ ] **1.6**: Define color tokens in Tailwind
  - Extend `tailwind.config.js` theme with color tokens from P.4
  - Tokens: `background`, `foreground`, `muted`, `accent`, `surface` (plus any shades)
  - Use CSS custom properties for easy runtime switching if needed
  - Files modified: `tailwind.config.js`, `src/styles/globals.css`
  - Done: `bg-background`, `text-foreground`, `text-accent` etc. work in JSX

- [ ] **1.7**: Establish spacing rhythm
  - Define section spacing scale in Tailwind config (e.g. `section` padding, `gap` values)
  - Document vertical rhythm: section padding, heading margins, paragraph spacing
  - Files modified: `tailwind.config.js`
  - Done: spacing tokens are usable (`py-section`, `gap-content`, etc.)

- [ ] **1.8**: Create directory structure
  - Create all directories defined in PLAN.md section 16
  - Add placeholder `.gitkeep` files where needed
  - Directories: `src/components/layout/`, `src/components/sections/`, `src/components/ui/`, `src/components/three/`, `src/content/`, `src/hooks/`, `src/styles/`, `public/models/`, `public/textures/`
  - Done: `ls -R src/` shows the full directory tree

- [ ] **1.9**: Build `PageShell` component
  - Top-level layout wrapper
  - Sets up the page structure: will later host the fixed Canvas and scrolling DOM content
  - For now: renders children inside a `<main>` with base styling
  - File created: `src/components/layout/PageShell.jsx`
  - Done: `App.jsx` renders `<PageShell>` wrapping a test heading, visible in browser

- [ ] **1.10**: Build `SectionContainer` component
  - Reusable wrapper for each content section
  - Accepts `id` prop for scroll targeting
  - Applies consistent vertical padding, max-width, horizontal centering
  - Uses semantic `<section>` HTML element
  - File created: `src/components/layout/SectionContainer.jsx`
  - Done: two `<SectionContainer>` blocks render with correct spacing in browser

- [ ] **1.11**: Define responsive breakpoints
  - Confirm or customize Tailwind's default breakpoints (`sm`, `md`, `lg`, `xl`)
  - Ensure mobile-first approach: base styles target mobile, `md:` and above for tablet/desktop
  - Files modified: `tailwind.config.js` (only if custom breakpoints needed)
  - Done: a `hidden md:block` element is hidden on mobile and visible on desktop in browser

- [ ] **1.12**: Configure `index.html` with SEO and OG tags
  - Add `<title>`, `<meta name="description">`, `<meta name="viewport">`
  - Add Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type`, `og:url`
  - Add `<html lang="pt-BR">` (default language)
  - Add favicon link (use a placeholder favicon for now)
  - Files modified: `index.html`
  - Done: page source shows all meta tags; browser tab shows title and favicon

### Phase 1 checkpoint

Before moving to Phase 2, verify:
- [ ] `npm run dev` works
- [ ] `npm run build` produces valid output
- [ ] font renders correctly
- [ ] color tokens work in Tailwind classes
- [ ] `PageShell` and `SectionContainer` render correctly
- [ ] `index.html` has meta tags
- [ ] directory structure matches PLAN.md section 16

---

## Phase 2 — Static Landing Structure

**Objective:** Build all 8 content sections with real bilingual copy. The page should be fully readable and responsive — no 3D yet.

**Dependencies:** Phase 1 complete. Draft copy (P.1, P.2) must exist.

> PLAN.md reference: sections 11 (Content Model), 12 (Page Structure), 13 (Bilingual Strategy), 17 (Component Strategy), 19 (Copy Direction)

### Tasks

- [ ] **2.1**: Create copy data files
  - Create `src/content/pt.js` exporting a structured object with all 8 sections' copy in PT-BR
  - Create `src/content/en.js` exporting the same structure in EN
  - Structure: `{ hero: { title, subtitle, body }, why: { title, body, points }, ... }`
  - Files created: `src/content/pt.js`, `src/content/en.js`
  - Done: both files export valid JS objects with identical keys

- [ ] **2.2**: Create language context and hook
  - Create a React context for current language (`pt` or `en`)
  - Create `useLanguage` hook that returns `{ lang, setLang, t }` where `t` is the current language's copy object
  - Default language: `pt`
  - Persist language choice in `localStorage`
  - File created: `src/hooks/useLanguage.jsx` (context + provider + hook)
  - Done: calling `t.hero.title` returns the correct string for the current language

- [ ] **2.3**: Build `LanguageToggle` component
  - Simple toggle or button group: PT / EN
  - Calls `setLang` from the language context
  - Positioned in the top-right corner (fixed or absolute)
  - Keyboard accessible (`<button>` elements)
  - Must not interfere with scroll state when toggled
  - File created: `src/components/layout/LanguageToggle.jsx`
  - Done: clicking the toggle switches all visible text between PT-BR and EN

- [ ] **2.4**: Build UI primitives
  - `Button`: primary CTA style, accepts `href` for links, `variant` for styling
  - `SectionHeading`: renders section title with consistent typography and spacing
  - `CopyBlock`: renders body text with consistent paragraph styling
  - Files created: `src/components/ui/Button.jsx`, `src/components/ui/SectionHeading.jsx`, `src/components/ui/CopyBlock.jsx`
  - Done: each component renders correctly in isolation with sample content

- [ ] **2.5**: Build `HeroSection`
  - Full-viewport height hero
  - Displays: project name "Proxy", one-line framing, supporting statement
  - Subtle scroll cue (arrow or text hint)
  - Uses `SectionHeading` and `CopyBlock`
  - Reads copy from language context
  - File created: `src/components/sections/HeroSection.jsx`
  - Done: hero fills the viewport, copy is bilingual, scroll cue is visible

- [ ] **2.6**: Build `WhySection`
  - Explains why jumping into prompting without structure is risky
  - Key points rendered as a list or structured blocks
  - File created: `src/components/sections/WhySection.jsx`
  - Done: section renders with real copy, readable on mobile and desktop

- [ ] **2.7**: Build `StackSection`
  - Explains the importance of choosing a stack before implementation
  - File created: `src/components/sections/StackSection.jsx`
  - Done: section renders with real copy, responsive

- [ ] **2.8**: Build `PlanSection`
  - Explains why planning comes before code
  - File created: `src/components/sections/PlanSection.jsx`
  - Done: section renders with real copy, responsive

- [ ] **2.9**: Build `PRDSection`
  - Explains the role of a PRD in agentic development
  - File created: `src/components/sections/PRDSection.jsx`
  - Done: section renders with real copy, responsive

- [ ] **2.10**: Build `ExecutionSection`
  - Explains the execution model through pre-implementation plans
  - File created: `src/components/sections/ExecutionSection.jsx`
  - Done: section renders with real copy, responsive

- [ ] **2.11**: Build `TemplatesSection`
  - Lists available templates with CTAs
  - CTA buttons can point to placeholder URLs for now
  - Uses `Button` component
  - File created: `src/components/sections/TemplatesSection.jsx`
  - Done: section renders with template cards/list and CTA buttons

- [ ] **2.12**: Build `ClosingSection`
  - Final narrative statement + CTA to GitHub repo
  - File created: `src/components/sections/ClosingSection.jsx`
  - Done: section renders with closing message and GitHub CTA

- [ ] **2.13**: Assemble full page in `App.jsx`
  - Import `PageShell`, `LanguageToggle`, and all 8 section components
  - Wrap in `LanguageProvider`
  - Render sections in order inside `PageShell`
  - Update `<html lang>` attribute when language changes
  - File modified: `src/App.jsx`
  - Done: full page scrolls through all 8 sections, language toggle works, all copy is real

- [ ] **2.14**: Validate responsiveness
  - Check all sections at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1280px+ (desktop)
  - Fix any overflow, text wrapping, or spacing issues
  - Files modified: any section or layout components as needed
  - Done: no horizontal overflow, text is readable, spacing is consistent at all breakpoints

- [ ] **2.15**: Deploy static version to GitHub Pages
  - Push code to `main`
  - Verify GitHub Actions workflow runs and deploys
  - Confirm the page is accessible at the Pages URL
  - Done: page is live on GitHub Pages with all 8 sections readable

### Phase 2 checkpoint

Before moving to Phase 3, verify:
- [ ] all 8 sections render with real copy
- [ ] language toggle switches all text
- [ ] page is responsive at mobile, tablet, and desktop widths
- [ ] semantic HTML is used (`<section>`, `<h1>`–`<h3>`, `<p>`, `<button>`)
- [ ] page is deployed and accessible on GitHub Pages
- [ ] no 3D code has been added yet

---

## Phase 3 — 3D Notebook Foundation

**Objective:** Validate the R3F + GSAP integration pattern with a spike, then build the notebook scene with loading states and error boundaries.

**Dependencies:** Phase 2 complete.

> PLAN.md reference: sections 14 (3D Strategy), 15 (Motion System), 22 (Loading/Error)

### Tasks

- [ ] **3.1**: Install 3D and animation dependencies
  - Install: `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `zustand`
  - Files modified: `package.json`
  - Done: all packages install without errors, `npm run dev` still works

- [ ] **3.2**: Spike — R3F + ScrollTrigger integration proof-of-concept
  - Create a temporary spike component (can live in `src/components/three/Spike.jsx`)
  - Set up: one `<Canvas>` positioned `fixed` with `z-index: 0` behind DOM content
  - Add a simple 3D box inside the Canvas
  - Create a Zustand store with a `scrollProgress` value (0 to 1)
  - Wire one GSAP ScrollTrigger to update the store based on total page scroll
  - Inside Canvas, read `scrollProgress` from Zustand and rotate the box
  - Verify: box rotates smoothly as user scrolls, DOM content scrolls on top
  - Files created: `src/components/three/Spike.jsx`, `src/hooks/useScrollStore.js`
  - Done: box rotates with scroll, no jank, DOM content remains interactive on top

- [ ] **3.3**: Spike — validate mobile performance
  - Open Chrome DevTools, enable CPU 4x throttle and mobile viewport
  - Scroll through the page with the spike active
  - Measure frame rate (Performance tab)
  - Target: stable 30fps+ with the spike running
  - Done: spike runs at 30fps+ under throttled conditions, OR issues are documented and addressed

- [ ] **3.4**: Document integration pattern
  - Based on the spike, document the final integration pattern in a code comment at the top of `useScrollStore.js`
  - Pattern: which system owns what (GSAP = DOM scroll, Zustand = bridge, R3F = 3D render)
  - Done: pattern is documented and the spike is verified working

- [ ] **3.5**: Create `WebGLErrorBoundary` component
  - Class component that catches errors from Canvas/WebGL children
  - On error: renders a fallback (CSS-based notebook silhouette or nothing)
  - Logs error to console for debugging
  - File created: `src/components/three/WebGLErrorBoundary.jsx`
  - Done: wrapping a component that throws inside Canvas shows the fallback UI

- [ ] **3.6**: Create `NotebookScene` component
  - R3F `<Canvas>` wrapper with proper positioning (`fixed`, full viewport, behind DOM)
  - Wrapped in `<Suspense>` with a branded loading indicator
  - Wrapped in `<WebGLErrorBoundary>`
  - Sets up camera defaults (perspective, position, fov)
  - File created: `src/components/three/NotebookScene.jsx`
  - Done: Canvas renders behind DOM content, loading state shows briefly, error boundary catches test errors

- [ ] **3.7**: Create `SceneLights` component
  - Minimal lighting setup: one ambient light + one directional light
  - Soft, non-dramatic lighting matching the editorial tone
  - File created: `src/components/three/SceneLights.jsx`
  - Done: lights illuminate a test object in the scene without harsh shadows

- [ ] **3.8**: Load or create notebook model
  - If using a `.glb` model: place it in `public/models/notebook.glb`, load with `useGLTF` from Drei
  - If using procedural geometry: create a notebook shape (box body + plane pages) with basic materials
  - Create `NotebookModel` component that renders the notebook
  - File created: `src/components/three/NotebookModel.jsx`
  - File added: `public/models/notebook.glb` (if using a model file)
  - Done: notebook appears in the scene with correct proportions

- [ ] **3.9**: Create `SceneController` component
  - Lives inside `<Canvas>`
  - Reads `scrollProgress` from Zustand store (set up in spike)
  - Uses `useFrame` to interpolate notebook position, rotation based on scroll progress
  - For now: simple rotation mapping (progress 0 = front view, progress 1 = slight angle)
  - File created: `src/components/three/SceneController.jsx`
  - Done: notebook rotates as the user scrolls through the page

- [ ] **3.10**: Create `useReducedComplexity` hook
  - Detects: mobile viewport (`window.innerWidth < 768`), `prefers-reduced-motion` media query
  - Returns: `{ isMobile, prefersReducedMotion, shouldSimplify }`
  - `shouldSimplify` is true if either condition is met
  - File created: `src/hooks/useReducedComplexity.js`
  - Done: hook returns correct values on mobile viewport and when `prefers-reduced-motion` is set

- [ ] **3.11**: Apply reduced complexity to scene
  - In `NotebookScene`: if `shouldSimplify`, reduce scene quality (lower pixel ratio, fewer lights)
  - In `SceneController`: if `prefersReducedMotion`, show notebook in a static pose (no scroll animation)
  - Files modified: `src/components/three/NotebookScene.jsx`, `src/components/three/SceneController.jsx`
  - Done: enabling `prefers-reduced-motion` in DevTools shows a static notebook; mobile viewport shows simplified scene

- [ ] **3.12**: Integrate notebook scene into the page
  - Remove spike component from `App.jsx`
  - Add `NotebookScene` to `PageShell` (rendered before/behind DOM sections)
  - Verify notebook is visible behind scrolling content
  - Clean up spike files (delete `Spike.jsx` if no longer needed)
  - Files modified: `src/components/layout/PageShell.jsx`, `src/App.jsx`
  - Done: notebook scene is visible behind all sections, scrolling works, loading state appears briefly

### Phase 3 checkpoint

Before moving to Phase 4, verify:
- [ ] notebook renders behind DOM content
- [ ] notebook responds to scroll (basic rotation)
- [ ] loading state appears while model loads
- [ ] error boundary works (test by temporarily breaking WebGL)
- [ ] `prefers-reduced-motion` shows static notebook
- [ ] mobile viewport shows simplified scene
- [ ] no performance regression on page scroll

---

## Phase 4 — Scroll Orchestration

**Objective:** Wire scroll progress per section to drive notebook state transitions and DOM text animations.

**Dependencies:** Phase 3 complete.

> PLAN.md reference: sections 7 (Motion Principles), 12 (Page Structure — 3D behavior per section), 15 (Motion System)

### Tasks

- [ ] **4.1**: Expand Zustand store with per-section progress
  - Replace single `scrollProgress` with per-section values: `{ hero: 0, why: 0, stack: 0, plan: 0, prd: 0, execution: 0, templates: 0, closing: 0 }`
  - Add `activeSection` field (string ID of the most visible section)
  - File modified: `src/hooks/useScrollStore.js`
  - Done: store holds progress values for all 8 sections

- [ ] **4.2**: Create `useScrollProgress` hook
  - Registers GSAP ScrollTrigger for each `<SectionContainer>` by its `id`
  - On scroll: updates the corresponding section's progress (0 to 1) in the Zustand store
  - Updates `activeSection` based on which section is most in view
  - Must be called once at the page level (not per section)
  - File created: `src/hooks/useScrollProgress.js`
  - Done: scrolling through the page updates store values correctly (verify via Zustand devtools or console log)

- [ ] **4.3**: Define section-to-notebook state map
  - Create a declarative configuration object mapping each section ID to a notebook pose
  - Pose properties: `position: [x, y, z]`, `rotation: [x, y, z]`, `openAmount: 0–1`
  - Example: `hero: { position: [0, 0, 0], rotation: [0, 0, 0], openAmount: 0 }` (closed, centered)
  - Example: `why: { position: [0.5, 0, 0], rotation: [0, 0.3, 0], openAmount: 0.3 }` (slightly open, shifted right)
  - File created: `src/content/notebookStates.js`
  - Done: config object exists with entries for all 8 sections

- [ ] **4.4**: Create `useNotebookState` hook
  - Reads `activeSection` and per-section progress from the Zustand store
  - Interpolates between the current and next section's notebook pose using the progress value
  - Returns: `{ position, rotation, openAmount }` (interpolated values)
  - Uses `three/MathUtils.lerp` for smooth interpolation
  - File created: `src/hooks/useNotebookState.js`
  - Done: hook returns smoothly interpolated values as the user scrolls between sections

- [ ] **4.5**: Update `SceneController` to use notebook state map
  - Replace the simple rotation logic from Phase 3 with `useNotebookState`
  - Apply interpolated `position` and `rotation` to the notebook model via `useFrame`
  - Apply `openAmount` if the model supports it (morph target or bone rotation), otherwise just position/rotation for Tier 1
  - File modified: `src/components/three/SceneController.jsx`
  - Done: notebook transitions between distinct poses as the user scrolls through different sections

- [ ] **4.6**: Add DOM text animations per section
  - Use GSAP ScrollTrigger to animate section content on entry
  - Animations: fade-in + slight slide-up for headings and text blocks
  - Apply via refs on `SectionHeading` and `CopyBlock` components
  - Create a `useSectionReveal` hook or utility that registers GSAP animations on a ref
  - Keep animations subtle: 20-30px slide, 0.6s duration, ease-out
  - File created: `src/hooks/useSectionReveal.js`
  - Files modified: `src/components/sections/*.jsx` (add refs and call the hook)
  - Done: section content fades in as the user scrolls to each section

- [ ] **4.7**: Test scroll reversal behavior
  - Scroll down through all sections, then scroll back up
  - Verify: notebook transitions reverse correctly, no stuck states
  - Verify: DOM animations replay or stay visible (no disappearing content)
  - Fix any issues with ScrollTrigger `toggleActions` or animation reset logic
  - Done: scrolling up and down produces smooth, predictable transitions in both directions

- [ ] **4.8**: Test mobile scroll behavior
  - Open on mobile viewport (375px) with touch scrolling
  - Verify: all transitions work with touch scroll
  - Verify: no jank, no stuck states, no overscroll issues
  - If `shouldSimplify` is true: DOM animations should still work, only 3D is simplified
  - Done: mobile scroll experience is smooth and stable

### Phase 4 checkpoint

Before moving to Phase 5, verify:
- [ ] notebook transitions between 8 distinct poses based on active section
- [ ] transitions are smooth during scrolling (no jumps or snapping)
- [ ] DOM text animations fire on section entry
- [ ] scroll reversal works correctly (both 3D and DOM animations)
- [ ] mobile scroll is smooth
- [ ] `prefers-reduced-motion` disables all animations

---

## Phase 5 — Templates and Final Content

**Objective:** Finalize all content — link templates, update CTAs, and do a final copy review pass.

**Dependencies:** Phase 4 complete.

> PLAN.md reference: sections 12 (Templates section), 19 (Copy Direction)

### Tasks

- [ ] **5.1**: Create or link template files
  - Decide which templates to include: stack decision, PLAN, PRD, rules, skills
  - Either create template files in the repo (e.g. `templates/PLAN-TEMPLATE.md`) or link to an external repo
  - Done: template assets exist and are accessible via URL

- [ ] **5.2**: Update CTA links
  - Update `TemplatesSection` CTA buttons to point to real template URLs
  - Update `ClosingSection` CTA to point to the GitHub repository
  - Files modified: `src/content/pt.js`, `src/content/en.js`, or section components
  - Done: all CTA buttons link to real, accessible URLs

- [ ] **5.3**: Final copy review — PT-BR
  - Read through all 8 sections in PT-BR in the deployed page
  - Check: tone matches creative direction (concise, calm, intelligent, practical)
  - Check: no placeholder text remains
  - Check: no typos or grammatical issues
  - Update `src/content/pt.js` as needed
  - Done: PT-BR copy is publication-ready

- [ ] **5.4**: Final copy review — EN
  - Read through all 8 sections in EN in the deployed page
  - Same checks as 5.3
  - Update `src/content/en.js` as needed
  - Done: EN copy is publication-ready

- [ ] **5.5**: Adjust layout for final copy
  - If final copy changed text lengths significantly, check for layout issues
  - Fix any spacing, overflow, or alignment problems
  - Files modified: section components or `SectionContainer` as needed
  - Done: all sections render cleanly with final copy at all breakpoints

### Phase 5 checkpoint

Before moving to Phase 6, verify:
- [ ] all CTA links work and point to real URLs
- [ ] copy is final in both languages
- [ ] no placeholder content remains
- [ ] layout is clean with final copy

---

## Phase 6 — Polish and Optimization

**Objective:** Tune mobile experience, validate performance budget, test edge cases, and clean up visuals.

**Dependencies:** Phase 5 complete.

> PLAN.md reference: sections 8 (Mobile-First), 20 (Accessibility), 21 (Performance)

### Tasks

- [ ] **6.1**: Mobile viewport testing
  - Test at 375px width (iPhone SE) and 390px (iPhone 14) with CPU 4x throttle in DevTools
  - Check: all text is readable, no horizontal overflow, touch scrolling is smooth
  - Check: 3D scene is simplified (or 2.5D fallback is active)
  - Fix any issues found
  - Done: mobile experience is elegant and stable under throttled conditions

- [ ] **6.2**: Validate performance budget — bundle size
  - Run `npm run build` and check output sizes
  - Target: total JS bundle < 300KB gzipped (excluding 3D model)
  - Target: 3D model < 500KB
  - If over budget: identify largest dependencies, consider code splitting or tree-shaking
  - Done: bundle sizes are within budget thresholds

- [ ] **6.3**: Validate performance budget — runtime
  - Use Chrome DevTools Performance tab
  - Measure LCP on simulated 4G connection: target < 2.5s
  - Measure frame rate during scroll: target stable 30fps+
  - Measure TTI: target < 4s on 4G
  - If metrics fail: simplify scene, reduce animation complexity, lazy-load non-critical assets
  - Done: all runtime metrics meet budget thresholds

- [ ] **6.4**: Simplify 3D scene if needed
  - If performance metrics from 6.3 are borderline: reduce to Tier 1 notebook complexity
  - Options: fewer lights, lower pixel ratio, disable particles, reduce geometry detail
  - If still problematic on mobile: activate 2.5D fallback
  - Done: scene runs within performance budget on mobile hardware class

- [ ] **6.5**: Verify `prefers-reduced-motion`
  - Enable `prefers-reduced-motion: reduce` in DevTools
  - Verify: all scroll-driven animations are disabled (both DOM and 3D)
  - Verify: notebook is shown in a static open state
  - Verify: all content is fully readable without motion
  - Done: page is fully functional and readable with reduced motion

- [ ] **6.6**: Verify WebGL error boundary
  - Disable WebGL in Chrome (`chrome://flags` or DevTools override)
  - Verify: error boundary catches the failure
  - Verify: fallback UI renders (CSS silhouette or clean empty state)
  - Verify: all sections remain readable, all CTAs clickable
  - Done: page works without WebGL

- [ ] **6.7**: Cross-browser testing
  - Test on: Chrome (desktop + mobile), Safari (mobile priority), Firefox (desktop)
  - Check: layout, animations, 3D scene, language toggle
  - Fix any browser-specific issues (especially Safari WebGL quirks)
  - Done: page works correctly on all three browsers

- [ ] **6.8**: Visual cleanup pass
  - Review spacing consistency across all sections
  - Check color token usage (no hardcoded colors outside the design system)
  - Check typography hierarchy (consistent heading sizes, line heights)
  - Check alignment of CTA buttons and template cards
  - Fix any visual inconsistencies
  - Done: visual presentation is polished and consistent

- [ ] **6.9**: Transition refinement
  - Review all notebook transitions between sections
  - Smooth out any abrupt pose changes
  - Adjust timing curves if transitions feel too fast or too slow
  - Review DOM fade-in animations for consistency
  - Done: all transitions feel subtle and intentional

### Phase 6 checkpoint

Before moving to Phase 7, verify:
- [ ] mobile experience is smooth and elegant
- [ ] performance budget thresholds are met (LCP, bundle, frame rate, TTI)
- [ ] `prefers-reduced-motion` works correctly
- [ ] error boundary works when WebGL is unavailable
- [ ] page works on Chrome, Safari, Firefox
- [ ] visuals are polished and consistent
- [ ] transitions are smooth and subtle

---

## Phase 7 — Deployment and Launch

**Objective:** Final deployment verification, social sharing setup, and documentation.

**Dependencies:** Phase 6 complete.

> PLAN.md reference: sections 23 (SEO), 24 (Deployment), 29 (Acceptance Criteria)

### Tasks

- [ ] **7.1**: Verify GitHub Actions workflow
  - Push latest code to `main`
  - Verify workflow runs successfully (check Actions tab)
  - Verify built site is deployed to GitHub Pages
  - If workflow fails: fix configuration and re-run
  - Done: workflow completes without errors

- [ ] **7.2**: Verify production deployment
  - Open the GitHub Pages URL in an incognito browser window
  - Navigate through all sections
  - Test language toggle
  - Test all CTA links
  - Verify 3D scene loads and transitions work
  - Done: production site works exactly as expected

- [ ] **7.3**: Create social sharing image
  - Create a 1200x630px image for Open Graph
  - Design: simple branded card with "Proxy" name and tagline
  - Place in `public/og-image.png` (or similar)
  - Update `og:image` meta tag in `index.html` with the production URL
  - Done: image exists and meta tag points to the correct URL

- [ ] **7.4**: Verify OG tags
  - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or [OpenGraph.xyz](https://www.opengraph.xyz/)
  - Verify: title, description, and image display correctly
  - Fix any issues with tag content or image URL
  - Done: sharing preview looks correct

- [ ] **7.5**: Update README
  - Add project description (what Proxy is, who it's for)
  - Add local development instructions (`npm install`, `npm run dev`)
  - Add build and deploy instructions
  - Add link to the live site
  - File modified: `README.md`
  - Done: README provides clear context and instructions for any visitor

- [ ] **7.6**: Verify all template links
  - Click every CTA and template link on the production page
  - Verify: all links resolve to valid pages or files
  - Fix any broken links
  - Done: zero broken links

- [ ] **7.7**: Final acceptance criteria checklist
  - Walk through every item in PLAN.md section 29
  - Verify each criterion is met on the production site
  - Document any deviations or known limitations
  - Done: all acceptance criteria are satisfied, or deviations are explicitly documented

### Phase 7 checkpoint (final)

- [ ] site is live on GitHub Pages
- [ ] sharing preview works
- [ ] README is complete
- [ ] all links work
- [ ] all acceptance criteria from PLAN.md section 29 are met

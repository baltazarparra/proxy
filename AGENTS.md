# AGENTS.md

## Project overview

Guia is a static single-page landing page that explains agentic development to beginners. It is a long-form, scroll-driven editorial experience with a 3D diamond as the central visual element. Bilingual: PT-BR and EN. Deployed to GitHub Pages.

Full product spec: `PLAN.md`
Task-level execution guide: `IMPLEMENTATION-ROADMAP.md`

## Stack

- Vite (static build, no SSR)
- React (JavaScript, not TypeScript)
- Tailwind CSS
- React Three Fiber + Drei (3D diamond scene)
- GSAP + ScrollTrigger (scroll-driven animations)
- Zustand (shared state bridge between GSAP and R3F)
- GitHub Actions + GitHub Pages (deployment)

## Setup commands

```
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview production build locally
npm run check      # lint + format check + typecheck + testes
npm run lint:fix   # auto-fix lint issues
npm run format     # auto-format all files
npm run test:watch # testes em modo watch
```

## Directory structure

```
src/
  components/
    layout/       # PageShell, SectionContainer, LanguageToggle, BackgroundLayer
    sections/     # HeroSection, AgentsSection, ModelsSection, ToolsSection,
                  # PlanSection, RoadmapSection, ExecutionSection,
                  # BootstrapSection, TemplatesSection, ClosingSection
    ui/           # Button, Pill, SectionHeading, CopyBlock
    three/        # NotebookScene, DiamondModel, SceneLights, SceneController,
                  # WebGLErrorBoundary
  content/        # pt.js, en.js (bilingual copy), diamondStates.js
  hooks/          # useLanguage, useScrollProgress, useSectionProgress,
                  # useReducedComplexity, useSceneState, useScrollStore,
                  # useSectionReveal
  styles/         # globals.css (Tailwind directives, CSS custom properties)
  App.jsx
  main.jsx
public/
  llms.txt        # Machine-readable bootstrap instructions for code agents
  models/         # (reserved — using procedural geometry for diamond)
  textures/       # texture assets if any
.github/
  workflows/      # deploy.yml (GitHub Pages deployment)
```

## Architecture rules

### R3F + GSAP separation (critical)

GSAP and React Three Fiber must never directly control each other. The architecture uses Zustand as a bridge:

1. GSAP ScrollTrigger reads DOM scroll position and writes progress values to a Zustand store
2. R3F components read from the Zustand store via `useFrame` and interpolate 3D transforms
3. GSAP animates DOM elements directly (text reveals, fade-ins)
4. R3F animates 3D objects via its own render loop

Never let GSAP animate Three.js objects directly. Never let R3F read scroll position from the DOM. The Zustand store (`useScrollStore`) is the only bridge.

### Canvas positioning

The `<Canvas>` element is positioned `fixed` at `z-index: 0`, behind all DOM content. DOM sections scroll normally on top. The diamond is always visible behind the content.

### Progressive enhancement

The 3D diamond is an enhancement, not a dependency. The page must be fully functional (all content readable, all CTAs clickable) without WebGL. The `<Canvas>` is wrapped in both `<Suspense>` and `<WebGLErrorBoundary>`.

## Visual identity

Dark mode with golden accents. The palette is warm and restrained:

| Token        | Value     | Role                                                                 |
| ------------ | --------- | -------------------------------------------------------------------- |
| `background` | `#0c0c0e` | Deep charcoal page background                                        |
| `foreground` | `#f0ece2` | Warm off-white body text                                             |
| `muted`      | `#8a8578` | Warm gray secondary text                                             |
| `accent`     | `#c9a84c` | Antique gold (headings, step numbers, card borders, buttons, toggle) |
| `surface`    | `#1a1a1e` | Dark card/panel background                                           |

Gold accent appears on: all headings (h1, h2, h3), step number markers, card top borders, tool/template names, language toggle active state, primary button background, secondary button border, code block tint, and hero bounce arrow.

3D diamond uses `#0a0a0a` (body) with `#c9a84c` (attenuation/refraction) to blend with the dark theme.

## Copy tone

Informal, conversational, direct. Uses contractions ("pra", "pro", "tá" in PT-BR; "you'll", "isn't", "it's" in EN). No em dashes. Short sentences, second-person address.

## Code style

- JavaScript (not TypeScript). Use JSDoc annotations on key component props
- Functional components only
- Tailwind CSS for all styling. No inline style objects unless required by R3F
- Use design tokens defined via `@theme` in `src/styles/globals.css` (colors: `background`, `foreground`, `muted`, `accent`, `surface`)
- Semantic HTML: `<section>`, `<h1>`-`<h3>`, `<p>`, `<button>`, `<a>`
- Mobile-first: base styles target mobile, `md:` and above for tablet/desktop
- ESLint 9, Prettier (with Tailwind plugin), and TypeScript checkJs are configured. Run `npm run check` to validate.

## Content model

Copy is hardcoded in `src/content/pt.js` and `src/content/en.js`. Both files export objects with identical keys:

```js
export default {
  hero: { title, subtitle, body },
  agents: { title, body, categories: [] },
  models: { title, body, lastUpdated, note, filters: [], items: [] },
  tools: { title, body, lastUpdated, ide: [], cli: [], note },
  plan: { title, body, steps: [] },
  roadmap: { title, body, steps: [] },
  execution: { title, body, steps: [] },
  bootstrap: { title, body, instruction, urlLabel, copiedLabel },
  templates: { title, body, items: [] },
  closing: { title, body, cta },
}
```

Access copy via the `useLanguage` hook: `const { t, lang, setLang } = useLanguage()`.

## Component conventions

- Each content section is a separate component in `src/components/sections/`
- Sections are wrapped in `<SectionContainer id="sectionName">` for consistent spacing and scroll trigger registration
- UI primitives (`Button`, `SectionHeading`, `CopyBlock`) handle typography and spacing consistently
- 3D components live inside the `<Canvas>` context and only read state from Zustand

## 3D diamond tiers

Start with Tier 1 (minimum viable). Only advance after stability is confirmed.

- **Tier 1** (required): procedural geometry, rotation/position transitions via scroll, material with transmission/refraction
- **Tier 2** (target if feasible): more facet detail, refined lighting, dispersion effects
- **Tier 3** (deferred): shader customizations, advanced refraction

## Performance budget

- LCP: < 2.5s on 4G mobile
- JS bundle (excluding 3D model): < 300KB gzipped
- 3D model: < 500KB `.glb`
- Frame rate during scroll: stable 30fps+ on iPhone 12 class hardware
- Time to interactive: < 4s on 4G

## Accessibility baseline

- Readable contrast ratios
- Keyboard-accessible controls (language toggle, CTAs)
- Semantic HTML for sections and headings
- Respect `prefers-reduced-motion`: disable all scroll-driven animations (DOM and 3D), show diamond in static pose

## Critical constraints

- Do NOT add Next.js, SSR, CMS, MDX, analytics, forms, auth, or i18n frameworks
- Do NOT use lorem ipsum. All content must be real copy
- Do NOT let GSAP directly animate Three.js objects
- Do NOT generate the whole project in one step. Implement section by section
- Do NOT add libraries without explicit justification
- Do NOT run `prisma db push --force-reset` or `prisma migrate reset`
- Do NOT use `--force` with Prisma commands
- Do NOT run `npx` commands without asking first
- Do NOT use git commands
- Protect simplicity. Reject speculative abstractions

## Deployment

GitHub Pages via GitHub Actions. Workflow at `.github/workflows/deploy.yml`.

- Triggers on push to `main`
- Builds static bundle and publishes to Pages
- Vite `base` config must match the repo path (e.g. `/guia/`)
- SEO: `<title>`, `<meta description>`, Open Graph tags, favicon, `<html lang>` attribute

## Validation after changes

After any meaningful change:

1. Run `npm run lint:fix` and `npm run format` to auto-correct issues
2. Run `npm run check` — must exit 0 (lint, format check, typecheck, tests)
3. Run `npm run dev` and verify in browser
4. Check mobile viewport (375px width)
5. Verify language toggle still works
6. If 3D scene was changed: test with `prefers-reduced-motion` enabled
7. If 3D scene was changed: verify error boundary by temporarily breaking WebGL
8. Run `npm run build` to confirm no build errors

# PRD — Phase 2: Static Landing Structure

## Metadata

| Field  | Value |
|--------|-------|
| Date   | 2026-03-14 |
| Author | baltz |
| Status | Approved |

## Problem Statement

Phase 1 delivered the project foundation: build tools, deployment pipeline, design tokens, and layout primitives. However, the page currently displays placeholder test content — two dummy `SectionContainer` blocks with hardcoded PT-BR strings. There is no bilingual infrastructure, no reusable UI components, and none of the 8 editorial sections exist.

Until Phase 2 is complete, the page has no real content, no language switching, and nothing deployable for user feedback. The 3D notebook (Phase 3+) depends on a fully rendered DOM content layer to scroll against — so the static landing must be built first.

## Goals

- Render all 8 editorial sections with real, curated copy from `docs/COPY-OUTLINE.md`
- Support seamless language switching (PT-BR ↔ EN) that preserves scroll position
- Establish reusable UI primitives (`Button`, `SectionHeading`, `CopyBlock`) that enforce typographic consistency
- Produce a fully readable, responsive, single-page experience at mobile (375px), tablet (768px), and desktop (1280px+)
- Deploy the static version to GitHub Pages as the first public checkpoint
- Deliver a DOM content layer that Phase 3 can overlay with the 3D notebook without rework

## Non-Goals

- No 3D rendering, no Canvas, no Three.js, no GSAP scroll animations
- No scroll-driven motion of any kind (that's Phase 4)
- No template file creation or real CTA URLs (Phase 5)
- No performance optimization beyond reasonable Tailwind usage
- No `BackgroundLayer` or `Pill` components (not needed yet)
- No dark mode
- No routing or navigation

## Target Audience

Same as the project PRD: beginners curious about agentic development, tech leads evaluating structured AI workflows, and builders looking for actionable templates. This phase focuses on content readability and bilingual accessibility.

## Proposed Solution

Build a complete static landing page with the following layers:

### 1. Content data layer

Two JavaScript modules (`src/content/pt.js` and `src/content/en.js`) exporting structured copy objects with identical keys. All copy is sourced from `docs/COPY-OUTLINE.md` — no lorem ipsum, no fabricated content.

The data shape follows the content model defined in PLAN.md:

```js
{
  hero: { title, subtitle, body },
  agents: { title, body, categories: [{ name, description, tools: [{ name, description }] }] },
  tools: { title, body, lastUpdated, ide: [{ name, plans, install }], cli: [{ name, plans, install }], note },
  plan: { title, body, steps: [] },
  roadmap: { title, body, steps: [] },
  execution: { title, body, steps: [] },
  templates: { title, body, items: [{ name, description }] },
  closing: { title, body, cta }
}
```

### 2. Language infrastructure

A React context (`LanguageProvider`) and hook (`useLanguage`) that:
- Provides `{ lang, setLang, t }` where `t` is the current language's copy object
- Defaults to `pt`
- Persists the choice in `localStorage`
- Updates the `<html lang>` attribute when language changes

A `LanguageToggle` component renders a fixed PT/EN switcher accessible via keyboard.

### 3. UI primitives

Three reusable components that enforce the design system established in Phase 1:

- **`Button`** — primary CTA style. Accepts `href` for link behavior, `variant` for visual variants. Uses `<a>` for external links, `<button>` for actions.
- **`SectionHeading`** — renders the section title (`<h2>`) with consistent size, weight, and bottom margin.
- **`CopyBlock`** — renders body text (`<p>` or `<div>`) with consistent line height, color, and paragraph spacing.

### 4. Section components

Eight components, each wrapping content in `<SectionContainer>`:

| Component | Content type | Key elements |
|-----------|-------------|--------------|
| `HeroSection` | Full-viewport hero | Title, subtitle, body, scroll cue |
| `AgentsSection` | Two-category comparison | IDE agents (Cursor, Trae) vs CLI agents (Claude Code, Codex, OpenCode) with descriptions |
| `ToolsSection` | Pricing + installation | Tables/cards for IDE and CLI tools, "last updated" disclaimer |
| `PlanSection` | Ordered workflow steps | How to create PLAN.md with any LLM |
| `RoadmapSection` | Ordered workflow steps | How to have the agent create IMPLEMENTATION-ROADMAP.md |
| `ExecutionSection` | Ordered workflow steps | Per-phase execution cycle |
| `TemplatesSection` | Template list + CTAs | Template cards with placeholder CTA URLs |
| `ClosingSection` | Final statement + CTA | Closing narrative + GitHub repo link |

### 5. Page assembly

`App.jsx` wraps everything in `LanguageProvider` → `PageShell` → `LanguageToggle` + 8 sections in order.

## Technical Considerations

### Existing foundation (from Phase 1)

| Asset | Status |
|-------|--------|
| Vite + React (v19) | Installed, `npm run dev` works |
| Tailwind v4 with `@theme` tokens | Configured in `globals.css` |
| `PageShell` component | Built (`<main className="min-h-screen">`) |
| `SectionContainer` component | Built (responsive padding, max-width, `<section>`) |
| GitHub Actions workflow | `.github/workflows/deploy.yml` exists |
| Design tokens | Colors: background/foreground/muted/accent/surface. Spacing: section/section-lg/content. Font: Inter |
| Draft copy | `docs/COPY-OUTLINE.md` — complete for all 8 sections in PT-BR and EN |
| SEO/OG tags | `index.html` configured |

### Architecture constraints

- **No new dependencies.** Phase 2 uses only React and Tailwind (already installed). No GSAP, no Three.js, no Zustand, no animation libraries.
- **Mobile-first CSS.** Base styles target mobile. Breakpoint utilities (`md:`, `lg:`) for tablet/desktop.
- **Semantic HTML.** `<section>`, `<h1>`–`<h3>`, `<p>`, `<button>`, `<a>`. No `<div>` soup.
- **Tailwind only for styling.** No inline `style` objects. Use design tokens from `@theme`.
- **Content from data files only.** Section components read copy via `useLanguage().t` — no hardcoded strings in JSX.

### Content data structure details

The `tools` section has a unique shape with nested arrays for IDE and CLI tools. Each tool entry needs: `name` (string), `plans` (string — human-readable pricing), `install` (string — installation command or instruction).

The `agents` section has `categories` — an array of two objects (IDE, CLI), each with `name`, `description`, and `tools` (array of `{ name, description }`).

### Language toggle behavior

- Must not trigger a re-mount of the entire component tree (context value change, not provider swap)
- Must not reset scroll position
- Must update `document.documentElement.lang` to `"pt-BR"` or `"en"`
- `localStorage` key: `"proxy-lang"`

### Hero section specifics

- Full viewport height: `min-h-screen` with centered content
- Scroll cue: a subtle downward arrow or "scroll" hint at the bottom of the viewport
- The hero is the only section that uses `<h1>`. All other sections use `<h2>` via `SectionHeading`.

### Tools section specifics

- Pricing data is rendered as structured cards or table rows — not raw markdown
- Each tool entry shows: name, pricing plans, installation command/instruction
- A `lastUpdated` date and `note` disclaimer are displayed below the tools
- Install commands for CLI tools should be rendered in monospace (`font-mono`)

### Templates section specifics

- Each template item renders as a card with name and description
- CTA buttons use the `Button` component with `href` pointing to placeholder URLs (`#`) for now
- Real URLs will be added in Phase 5

## Scope

### In scope

- `src/content/pt.js` — structured PT-BR copy object
- `src/content/en.js` — structured EN copy object
- `src/hooks/useLanguage.jsx` — language context, provider, and hook
- `src/components/layout/LanguageToggle.jsx` — PT/EN toggle UI
- `src/components/ui/Button.jsx` — CTA button/link component
- `src/components/ui/SectionHeading.jsx` — section title component
- `src/components/ui/CopyBlock.jsx` — body text component
- `src/components/sections/HeroSection.jsx`
- `src/components/sections/AgentsSection.jsx`
- `src/components/sections/ToolsSection.jsx`
- `src/components/sections/PlanSection.jsx`
- `src/components/sections/RoadmapSection.jsx`
- `src/components/sections/ExecutionSection.jsx`
- `src/components/sections/TemplatesSection.jsx`
- `src/components/sections/ClosingSection.jsx`
- `src/App.jsx` — updated to assemble full page with LanguageProvider
- Responsiveness validation at 375px, 390px, 768px, 1280px+
- Deployment to GitHub Pages

### Out of scope

- 3D rendering (Canvas, Three.js, R3F, Drei)
- Scroll-driven animations (GSAP, ScrollTrigger)
- State management (Zustand)
- Template file creation (real template files)
- Real CTA URLs for templates
- `BackgroundLayer` component
- `Pill` component
- Performance profiling
- Cross-browser testing (deferred to Phase 6)
- Final copy editing pass (deferred to Phase 5)

## Risks and Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Copy structure in `COPY-OUTLINE.md` doesn't map cleanly to the JS data shape | Medium | Define the exact data shape in this PRD (see Proposed Solution). Transform copy during file creation, not at render time |
| Language toggle causes layout shift when switching between PT-BR and EN (different text lengths) | Medium | Use `min-h-screen` for hero. Allow natural height expansion for other sections. Do not fix section heights |
| Tools/pricing data is already outdated | Low | Include `lastUpdated` field and disclaimer `note`. Copy was written March 2026 — still current |
| Section components become too large or inconsistent | Low | Enforce separation: section components compose UI primitives (`SectionHeading`, `CopyBlock`, `Button`). No styling logic inside section components beyond layout |
| Scroll position resets on language change | Low | Language switching uses React context (re-render, not re-mount). Scroll position is preserved by default |

## Success Criteria

- [ ] All 8 sections render with real copy (no placeholder or lorem ipsum)
- [ ] `useLanguage().t.hero.title` returns the correct string for the current language
- [ ] Language toggle switches all visible text between PT-BR and EN
- [ ] Language toggle preserves scroll position
- [ ] Language preference persists across page reloads (localStorage)
- [ ] `<html lang>` attribute updates when language changes
- [ ] `SectionHeading`, `CopyBlock`, and `Button` render correctly in isolation and in context
- [ ] Hero section fills the viewport with centered content and scroll cue
- [ ] Agents section clearly separates IDE and CLI categories
- [ ] Tools section displays pricing tables/cards with install commands in monospace
- [ ] Tools section shows "last updated" date and pricing disclaimer
- [ ] Plan, Roadmap, and Execution sections render ordered steps
- [ ] Templates section renders template cards with CTA buttons (placeholder URLs)
- [ ] Closing section renders final statement and GitHub CTA
- [ ] No horizontal overflow at 375px viewport width
- [ ] Text is readable and spacing is consistent at 375px, 768px, and 1280px
- [ ] Semantic HTML is used throughout (`<section>`, `<h1>`–`<h3>`, `<p>`, `<button>`, `<a>`)
- [ ] `npm run build` succeeds with no errors
- [ ] Page is deployed and accessible on GitHub Pages

## Dependencies

- **Phase 1 complete** — all 12 tasks done, checkpoint verified (confirmed in `reports/phase-1-scaffold-and-design-system.md`)
- **Draft copy exists** — `docs/COPY-OUTLINE.md` has complete content for all 8 sections in PT-BR and EN (pre-requisites P.1 and P.2 satisfied)
- **Design tokens available** — colors, spacing, typography configured in `src/styles/globals.css`
- **Layout primitives ready** — `PageShell` and `SectionContainer` are built and functional

## Open Questions

- N/A — all design decisions are resolved. The content model, data shape, component list, and assembly pattern are defined in this PRD and align with PLAN.md and the implementation roadmap.

# Guia

A restrained, bilingual landing page that explains how to start building software with AI coding agents.

Guia is not a tool or a framework. It is a single long-form scroll experience that walks the reader through a structured agentic development workflow — from choosing a stack to writing a PRD to executing through pre-implementation plans.

Built with Vite, React, Tailwind CSS, React Three Fiber, and GSAP. Deployed as a static site on GitHub Pages.

**Live site:** [baltazarparra.github.io/guia](https://baltazarparra.github.io/guia/)

## Why this exists

Most people starting with AI coding agents jump straight into prompting and hope for the best. The result is often fast chaos instead of fast delivery.

Guia presents a simple, practical workflow that helps beginners build with more structure. It covers stack decisions, planning documents, execution models, and reusable templates — all explained through a calm, editorial scroll experience with a 3D diamond as the central visual metaphor.

## Stack

| Layer        | Technology                    |
| ------------ | ----------------------------- |
| Build        | Vite                          |
| UI           | React (JavaScript)            |
| Styling      | Tailwind CSS                  |
| 3D           | React Three Fiber + Drei      |
| Animation    | GSAP + ScrollTrigger          |
| State bridge | Zustand                       |
| Deployment   | GitHub Actions + GitHub Pages |

## For code agents

| Use case                    | What to read                                                                                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Bootstrap a new project** | [llms.txt](https://baltazarparra.github.io/guia/llms.txt) — paste this URL into your agent. It will interview the user and create PLAN.md, IMPLEMENTATION-ROADMAP.md, and AGENTS.md. |
| **Contribute to Guia**      | [AGENTS.md](AGENTS.md) — project rules, constraints, and validation workflow.                                                                                                        |

## Local development

Prerequisites: Node.js 18+

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Validate code quality:

```bash
npm run check    # lint + format check + typecheck + tests
npm run lint:fix # auto-fix lint issues
npm run format   # auto-format all files
```

## Project structure

```
src/
  components/
    layout/       PageShell, SectionContainer, LanguageToggle
    sections/     HeroSection, AgentsSection, ModelsSection, ToolsSection,
                  PlanSection, RoadmapSection, ExecutionSection,
                  BootstrapSection, TemplatesSection, GlossarySection, ClosingSection
    ui/           Button, Pill, SectionHeading, CopyBlock, Modal
    three/        NotebookScene, DiamondModel, SceneController, SceneLights,
                  WebGLErrorBoundary
  content/        Bilingual copy (pt.js, en.js), diamondStates.js, references.js
  hooks/          Scroll progress, language, reduced complexity, scene state
  styles/         Global styles, Tailwind extensions
roadmap/          IMPLEMENTATION-ROADMAP.md (task-level execution guide)
templates/       Reusable templates for agentic development
  README.md      Index and usage order
  PLAN-TEMPLATE.md, ROADMAP-TEMPLATE.md, RULES-TEMPLATE.md,
  PRD-TEMPLATE.md, SKILLS-TEMPLATE.md
docs/             Internal PRDs, copy outlines
public/           Static assets (favicon, OG image, llms.txt)
.github/
  workflows/      deploy.yml (GitHub Pages)
```

## Architecture

The page is a single scroll experience with two parallel layers:

- **DOM layer** — content sections scroll normally, animated with GSAP ScrollTrigger
- **3D layer** — a fixed `<Canvas>` behind the DOM renders the diamond, driven by scroll progress via Zustand

GSAP never animates Three.js objects directly. R3F never reads scroll position from the DOM. A Zustand store bridges the two systems.

The 3D diamond is a progressive enhancement. The page is fully functional without WebGL.

## Languages

Content is available in PT-BR and EN, switchable via a toggle that preserves scroll position.

## Documentation

| Document                                                         | Purpose                                                                             |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`PLAN.md`](PLAN.md)                                             | Full product spec — vision, stack, architecture, phases, risks, acceptance criteria |
| [`IMPLEMENTATION-ROADMAP.md`](roadmap/IMPLEMENTATION-ROADMAP.md) | Task-level execution guide — 57 atomic tasks across 7 phases                        |
| [`AGENTS.md`](AGENTS.md)                                         | Instructions for AI coding agents working on this project                           |

## Contributing

If you'd like to contribute, start by reading [`PLAN.md`](PLAN.md) for context and [`IMPLEMENTATION-ROADMAP.md`](roadmap/IMPLEMENTATION-ROADMAP.md) for the current execution plan.

## License

[MIT](LICENSE)

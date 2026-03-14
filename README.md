# Proxy

A restrained, bilingual landing page that explains how to start building software with AI coding agents.

Proxy is not a tool or a framework. It is a single long-form scroll experience that walks the reader through a structured agentic development workflow — from choosing a stack to writing a PRD to executing through pre-implementation plans.

Built with Vite, React, Tailwind CSS, React Three Fiber, and GSAP. Deployed as a static site on GitHub Pages.

## Why this exists

Most people starting with AI coding agents jump straight into prompting and hope for the best. The result is often fast chaos instead of fast delivery.

Proxy presents a simple, practical workflow that helps beginners build with more structure. It covers stack decisions, planning documents, execution models, and reusable templates — all explained through a calm, editorial scroll experience with a 3D notebook as the central visual metaphor.

## Status

**Planning phase.** The project has a complete product plan and implementation roadmap. No application code has been written yet.

| Document | Purpose |
|---|---|
| [`PLAN.md`](PLAN.md) | Full product spec — vision, stack, architecture, phases, risks, acceptance criteria |
| [`IMPLEMENTATION-ROADMAP.md`](IMPLEMENTATION-ROADMAP.md) | Task-level execution guide — 57 atomic tasks across 7 phases |
| [`AGENTS.md`](AGENTS.md) | Instructions for AI coding agents working on this project |

## Stack

| Layer | Technology |
|---|---|
| Build | Vite |
| UI | React (JavaScript) |
| Styling | Tailwind CSS |
| 3D | React Three Fiber + Drei |
| Animation | GSAP + ScrollTrigger |
| State bridge | Zustand |
| Deployment | GitHub Actions + GitHub Pages |

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

## Project structure

```
src/
  components/
    layout/       PageShell, SectionContainer, LanguageToggle
    sections/     HeroSection, WhySection, StackSection, PlanSection,
                  PRDSection, ExecutionSection, TemplatesSection, ClosingSection
    ui/           Button, SectionHeading, CopyBlock
    three/        NotebookScene, NotebookModel, SceneController, SceneLights
  content/        Bilingual copy (pt.js, en.js)
  hooks/          Scroll progress, language, reduced complexity, notebook state
  styles/         Global styles, Tailwind extensions
public/
  models/         3D notebook model (.glb)
```

## Architecture

The page is a single scroll experience with two parallel layers:

- **DOM layer** — content sections scroll normally, animated with GSAP ScrollTrigger
- **3D layer** — a fixed `<Canvas>` behind the DOM renders the notebook, driven by scroll progress via Zustand

GSAP never animates Three.js objects directly. R3F never reads scroll position from the DOM. A Zustand store bridges the two systems.

The 3D notebook is a progressive enhancement. The page is fully functional without WebGL.

## Languages

Content is available in PT-BR and EN, switchable via a toggle that preserves scroll position.

## Contributing

This project is in early development. If you'd like to contribute, start by reading [`PLAN.md`](PLAN.md) for context and [`IMPLEMENTATION-ROADMAP.md`](IMPLEMENTATION-ROADMAP.md) for the current execution plan.

## License

[MIT](LICENSE)

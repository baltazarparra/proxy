<!-- Template: Agent Rules (AGENTS.md). Duplicate this file into your repo root as AGENTS.md and fill in the sections. This file tells AI coding agents how to work with your project. -->

# AGENTS.md

## Project overview

<!-- 2-3 sentences: what the project is, who it's for, how it's deployed. Reference key docs if they exist (e.g. PLAN.md, IMPLEMENTATION-ROADMAP.md). -->

## Stack

<!-- List every major technology in the project with a brief note on its role. -->

- <!-- e.g. Vite (static build, no SSR) -->
- <!-- e.g. React (UI framework) -->
- <!-- e.g. Tailwind CSS (styling) -->

## Setup commands

```
npm install
npm run dev        # local dev server
npm run build      # production build
npm run check      # lint + format check + typecheck + tests
npm run lint:fix   # auto-fix lint issues
npm run format     # auto-format all files
```

<!-- Add or remove commands as needed for your project. -->

## Directory structure

```
src/
  components/
    ...
  ...
public/
  ...
```

<!-- Replace with your actual directory tree. Annotate each directory with a short comment explaining its purpose. -->

## Architecture rules

<!-- Describe the key architectural patterns the agent must follow. Each subsection should cover one critical rule. Focus on patterns that are easy to violate accidentally. -->

### [Pattern name]

<!-- Explain the rule, why it exists, and what the agent must never do. Example: separation between two subsystems, state management boundaries, data flow constraints. -->

## Code style

<!-- List the coding conventions for this project. Be specific enough that an agent can follow them without guessing. -->

- <!-- e.g. Language choice (JS vs TS) and annotation style -->
- <!-- e.g. Component pattern (functional only, class-based, etc.) -->
- <!-- e.g. Styling approach (Tailwind, CSS modules, styled-components) -->
- <!-- e.g. HTML semantics requirements -->
- <!-- e.g. Responsive strategy (mobile-first, desktop-first) -->
- <!-- e.g. Linting and formatting tools in use -->

## Critical constraints

<!-- List absolute rules the agent must never break. Use the "Do NOT" format for clarity. -->

- Do NOT <!-- e.g. add frameworks or libraries without explicit justification -->
- Do NOT <!-- e.g. use placeholder content -->
- Do NOT <!-- e.g. run destructive database commands -->
- Do NOT <!-- e.g. run npx commands without asking first -->

## Validation after changes

After any meaningful change:

1. <!-- e.g. Run `npm run lint:fix` and `npm run format` to auto-correct issues -->
2. <!-- e.g. Run `npm run check` -- must exit 0 -->
3. <!-- e.g. Run `npm run dev` and verify in browser -->
4. <!-- e.g. Check mobile viewport -->
5. <!-- e.g. Run `npm run build` to confirm no build errors -->

<!-- Tailor this checklist to your project's validation needs. Include any domain-specific checks (e.g. test with reduced motion, verify error boundaries, check API responses). -->

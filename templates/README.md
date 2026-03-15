# Guia templates

Reusable templates for structured agentic development. Use them in this order when bootstrapping a new project.

## Template index

| Template         | When to use                                           | Output file                   |
| ---------------- | ----------------------------------------------------- | ----------------------------- |
| PLAN-TEMPLATE    | Before any code — define vision, audience, stack      | PLAN.md                       |
| ROADMAP-TEMPLATE | After PLAN is approved — break work into phases       | IMPLEMENTATION-ROADMAP.md     |
| RULES-TEMPLATE   | With roadmap — tell agents how to work on the project | AGENTS.md                     |
| PRD-TEMPLATE     | Per phase, before implementation                      | docs/PRD-phase-N.md           |
| SKILLS-TEMPLATE  | When creating reusable agent skills                   | .cursor/skills/... or similar |

## Raw URLs (for agents that fetch content)

Use these URLs to retrieve the raw Markdown. Replace `main` with your branch if different.

- PLAN: https://raw.githubusercontent.com/baltazarparra/guia/main/templates/PLAN-TEMPLATE.md
- ROADMAP: https://raw.githubusercontent.com/baltazarparra/guia/main/templates/ROADMAP-TEMPLATE.md
- RULES (AGENTS.md): https://raw.githubusercontent.com/baltazarparra/guia/main/templates/RULES-TEMPLATE.md
- PRD: https://raw.githubusercontent.com/baltazarparra/guia/main/templates/PRD-TEMPLATE.md
- SKILLS: https://raw.githubusercontent.com/baltazarparra/guia/main/templates/SKILLS-TEMPLATE.md

## Bootstrap flow

1. User shares [llms.txt](https://baltazarparra.github.io/guia/llms.txt) with their code agent
2. Agent interviews user (10 questions), then creates PLAN.md, IMPLEMENTATION-ROADMAP.md, AGENTS.md
3. User reviews and approves
4. For each phase: agent writes PRD, implements, updates roadmap

Learn more: https://baltazarparra.github.io/guia/

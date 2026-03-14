# PRD — Phase 5: Templates and Final Content

## Metadata

| Field  | Value      |
| ------ | ---------- |
| Date   | 2026-03-14 |
| Author | baltz      |
| Status | Draft      |

## Problem Statement

Phase 4 completed scroll orchestration — the notebook transitions between distinct poses per section, DOM text animations fire on entry, and the scroll-driven editorial experience works bidirectionally on desktop and mobile.

However, the page still contains placeholder links and draft-quality content:

- **Template CTAs point to `#`:** the `TemplatesSection` renders 5 template cards with `href="#"` — clicking them does nothing. The page promises "ready-made templates for each stage of the flow" but delivers dead links.
- **Closing CTA points to a placeholder URL:** `ClosingSection` links to `https://github.com/USERNAME/proxy` — a non-existent repo.
- **No template files exist:** the repo has no `templates/` directory. The 5 templates mentioned (PLAN, ROADMAP, PRD, Rules, Skills) don't exist as downloadable/viewable assets.
- **Copy is draft quality:** content in `pt.js` and `en.js` was written during Phase 2 as a draft (per pre-requisites P.1/P.2). It has not received a final tone, accuracy, or completeness review.

Without resolving these, the page fails PLAN.md acceptance criteria: "template CTAs link to the GitHub repository" and "the workflow explanation is clear for beginners."

## Goals

- **Template assets exist and are accessible:** each of the 5 templates (PLAN, ROADMAP, PRD, Rules, Skills) exists as a `.md` file in the repo, viewable on GitHub.
- **All CTA links point to real, working URLs:** template buttons link to the corresponding template file on GitHub; closing CTA links to the actual repo (`github.com/baltazarparra/proxy`).
- **Copy is publication-ready in both languages:** PT-BR and EN copy reviewed for tone (concise, calm, intelligent, practical), accuracy, completeness, and absence of placeholder text.
- **Layout accommodates final copy:** any spacing, overflow, or alignment issues introduced by copy changes are resolved.

## Non-Goals

- **Writing new section content:** this is a polish pass, not a content restructuring. Section structure, ordering, and narrative flow remain unchanged.
- **Adding new sections or components:** no new React components are created for content display.
- **Template interactivity:** templates are static `.md` files viewed on GitHub. No in-page rendering, copy-to-clipboard, or download functionality.
- **i18n for templates:** template files are written in EN only. The page copy that describes them is bilingual, but the template content itself is not translated.
- **SEO or OG tag updates:** these are handled in Phase 7.
- **Design changes:** visual design, spacing system, color tokens, and typography remain unchanged. Only layout adjustments forced by copy length changes are in scope.

## Target Audience

- Visitors who click template CTAs and expect to find usable starter documents.
- Beginners reading the page in PT-BR or EN who need clear, accurate, non-placeholder copy.
- Developers who might fork or reference the template files from the GitHub repo.

## Proposed Solution

### 1. Create template files in `templates/` directory

Create a `templates/` directory at the repo root with 5 markdown files:

| Template | File                            | Purpose                                                                        |
| -------- | ------------------------------- | ------------------------------------------------------------------------------ |
| PLAN     | `templates/PLAN-TEMPLATE.md`    | Starter structure for a project plan (what, why, stack, constraints, phases)   |
| ROADMAP  | `templates/ROADMAP-TEMPLATE.md` | Starter structure for an implementation roadmap (phases, tasks, done criteria) |
| PRD      | `templates/PRD-TEMPLATE.md`     | Starter structure for a product requirements document                          |
| Rules    | `templates/RULES-TEMPLATE.md`   | Starter structure for agent quality/safety rules (AGENTS.md or .cursor/rules)  |
| Skills   | `templates/SKILLS-TEMPLATE.md`  | Starter structure for reusable agent skills                                    |

Each template should:

- Be a self-contained markdown file with section headings and placeholder comments
- Include brief instructions on how to use it (1–2 lines at the top)
- Follow the tone of the project: practical, clear, no filler
- Be informed by the actual files used in this project (PLAN.md, IMPLEMENTATION-ROADMAP.md, PRD template, AGENTS.md, skill SKILL.md) but generalized for any project

The PRD template can be based on the existing `.cursor/skills/prd-workflow/template.md`, adapted as a standalone file. The PLAN template can be based on the structure of `PLAN.md`. The Rules template can draw from `AGENTS.md`. The Skills template can draw from the skill SKILL.md format.

### 2. Update CTA links in content files and components

**Content files (`pt.js` and `en.js`):**

Add a `url` field to each template item so the component can use it:

```js
items: [
  {
    name: 'PLAN',
    description: '...',
    url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PLAN-TEMPLATE.md',
  },
  // ...
]
```

**`TemplatesSection.jsx`:**

Update `<Button href="#">` to use `item.url` from the content data.

**`ClosingSection.jsx`:**

Replace the placeholder `https://github.com/USERNAME/proxy` with `https://github.com/baltazarparra/proxy`.

### 3. Final copy review — PT-BR

Read through all 8 sections of `src/content/pt.js`. The copy is already near-final (minor adjustments expected). Check for:

- Tone: concise, calm, intelligent, practical (per PLAN.md section 19)
- No placeholder text or "TODO" markers
- No typos or grammatical issues
- Consistency of terminology (e.g., always "agente de código", not alternating with "agente de IA")
- CTA text is clear and actionable
- Hero title/subtitle match the creative direction

### 4. Final copy review — EN

Same checks as PT-BR, applied to `src/content/en.js`. Additionally verify:

- Translation quality (natural English, not mechanical translation)
- Terminology consistency with PT-BR (same concepts, same structure)
- No untranslated Portuguese fragments

### 5. Layout adjustment pass

After copy changes (if any), verify all 8 sections at mobile (375px), tablet (768px), and desktop (1280px+) breakpoints. Fix any:

- Text overflow or clipping
- Inconsistent spacing between sections
- Card/grid layout issues in TemplatesSection with updated content
- Alignment issues from changed text lengths

## Technical Considerations

### No new dependencies

This phase involves only content files (`.md`, `.js`) and minor component edits. No npm packages are added.

### Template file format

Templates are plain markdown. They will be viewed on GitHub's markdown renderer. No special build tooling or processing is needed. They live outside `src/` and are not bundled by Vite.

### URL construction

Template URLs follow the pattern `https://github.com/baltazarparra/proxy/blob/main/templates/<filename>.md`. These URLs will only resolve after the files are pushed to `main` on GitHub. During local development, the links will 404 — this is expected and acceptable.

### Content file schema

Adding a `url` field to template items in `pt.js` and `en.js` is a non-breaking schema change. The `TemplatesSection` component already iterates over `t.templates.items` — it just needs to read `item.url` in addition to `item.name` and `item.description`.

### Copy changes and ScrollTrigger

If copy length changes significantly during the review, GSAP `ScrollTrigger` positions may shift. The existing `ScrollTrigger.refresh()` mechanism (added in Phase 4) handles this automatically when the page layout changes. No additional work is needed.

## Scope

### In scope

- Create `templates/` directory with 5 template `.md` files
- Add `url` field to template items in `src/content/pt.js` and `src/content/en.js`
- Update `TemplatesSection.jsx` to use `item.url` for CTA buttons
- Update `ClosingSection.jsx` with the real GitHub repo URL
- Review and polish PT-BR copy in `src/content/pt.js`
- Review and polish EN copy in `src/content/en.js`
- Fix any layout issues caused by copy changes

### Out of scope

- New section components or UI primitives
- Template i18n (templates are EN-only)
- In-page template rendering or download functionality
- SEO/OG tag updates (Phase 7)
- Performance optimization (Phase 6)
- Visual design changes beyond layout fixes for copy

## Risks and Mitigations

| Risk                                                              | Severity | Mitigation                                                                                                                                          |
| ----------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Template URLs 404 until pushed to GitHub                          | Low      | Expected behavior during local dev. Verify links work after deployment in Phase 7                                                                   |
| Copy changes alter content height, affecting scroll orchestration | Low      | Phase 4's `ScrollTrigger.refresh()` handles layout changes automatically; verify with language toggle                                               |
| Template content quality — too generic or too project-specific    | Medium   | Base templates on actual project files (PLAN.md, AGENTS.md, etc.) but generalize section headings and instructions; review for standalone usability |
| Copy review introduces inconsistencies between PT-BR and EN       | Low      | Review both languages in sequence; verify key parity between `pt.js` and `en.js` is maintained                                                      |
| Template file names or paths change after links are set           | Low      | Use a consistent naming convention (`<NAME>-TEMPLATE.md`); document in this PRD                                                                     |

## Success Criteria

- [ ] `templates/` directory exists with 5 `.md` files: PLAN-TEMPLATE, ROADMAP-TEMPLATE, PRD-TEMPLATE, RULES-TEMPLATE, SKILLS-TEMPLATE
- [ ] Each template is a self-contained, usable starter document with section headings and instructions
- [ ] Template CTA buttons in `TemplatesSection` link to the correct GitHub URLs (no more `href="#"`)
- [ ] Closing CTA links to `https://github.com/baltazarparra/proxy`
- [ ] PT-BR copy in `src/content/pt.js` passes tone review (concise, calm, intelligent, practical)
- [ ] EN copy in `src/content/en.js` passes tone review and matches PT-BR structure
- [ ] No placeholder text, TODOs, or lorem ipsum in either language
- [ ] No typos or grammatical issues in either language
- [ ] All 8 sections render cleanly at 375px, 768px, and 1280px+ breakpoints after copy changes
- [ ] `npm run check` passes (lint, format, typecheck, tests)
- [ ] `npm run build` succeeds with no errors

## Dependencies

- Phase 4 complete (all 8 tasks marked done in `IMPLEMENTATION-ROADMAP.md`): scroll orchestration, notebook transitions, DOM animations, and mobile behavior are stable.
- GitHub repo at `github.com/baltazarparra/proxy` exists and is accessible.
- Draft copy (from pre-requisites P.1/P.2) exists in `src/content/pt.js` and `src/content/en.js`.
- Actual project files (PLAN.md, IMPLEMENTATION-ROADMAP.md, AGENTS.md, `.cursor/skills/prd-workflow/template.md`) exist and can inform template creation.

## Open Questions

N/A — all decisions resolved:

- Template strategy: files in this repo under `templates/` (decided by user)
- GitHub URL: `github.com/baltazarparra/proxy` (confirmed by user)
- Copy review scope: minor polishing, not structural rewrites (confirmed by user)
- Template language: EN-only (standard for dev templates, page copy remains bilingual)

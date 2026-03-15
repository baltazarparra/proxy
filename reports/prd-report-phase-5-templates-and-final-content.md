# PRD Report — Phase 5: Templates and Final Content

## PRD Reference

| Field    | Value                 |
| -------- | --------------------- |
| PRD file | `docs/PRD-phase-5.md` |
| Date     | 2026-03-14            |
| Author   | baltz                 |

## Decisions Summary

| Decision                                                                        | Justification                                                                                                         |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Create template files inside this repo under `templates/`                       | User preference; keeps templates co-located with the project they exemplify; no external repo dependency              |
| Use `https://github.com/baltazarparra/guia` as the canonical GitHub URL         | Confirmed by user as the actual repo location                                                                         |
| Templates in EN only (page copy remains bilingual)                              | Standard practice for developer templates; avoids maintaining parallel translated template files                      |
| Base templates on actual project files (PLAN.md, AGENTS.md, PRD template, etc.) | Produces realistic, battle-tested templates rather than generic boilerplate; the project itself is the best reference |
| Add `url` field to template items in content files                              | Non-breaking schema extension; allows component to read URLs from data rather than hardcoding                         |
| Copy review scope is minor polish, not structural rewrite                       | User confirmed copy is near-final; avoids scope creep and unnecessary layout disruption                               |
| Template file naming convention: `<NAME>-TEMPLATE.md`                           | Consistent, discoverable, self-documenting names that won't conflict with actual project files                        |

## Risk Assessment

| Risk                                                         | Severity | Mitigation                                                                                             | Status    |
| ------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------ | --------- |
| Template URLs 404 until code is pushed to GitHub             | Low      | Expected behavior during local dev; links verified in Phase 7 deployment                               | Accepted  |
| Copy changes alter content height, affecting scroll triggers | Low      | Phase 4's `ScrollTrigger.refresh()` handles layout changes automatically                               | Mitigated |
| Template content too generic or too project-specific         | Medium   | Base on actual project files but generalize headings and instructions; review for standalone usability | Mitigated |
| Copy review introduces inconsistencies between PT-BR and EN  | Low      | Review both languages in sequence; verify key parity in content files                                  | Mitigated |
| Template file paths change after links are set in content    | Low      | Consistent naming convention documented in PRD; single source of truth for URLs in content files       | Mitigated |

## Generated Tasks

Tasks map directly to `IMPLEMENTATION-ROADMAP.md` Phase 5 (tasks 5.1–5.5):

- [ ] **5.1**: Create template files — create `templates/` directory with 5 markdown files (PLAN-TEMPLATE, ROADMAP-TEMPLATE, PRD-TEMPLATE, RULES-TEMPLATE, SKILLS-TEMPLATE), each based on actual project files but generalized
- [ ] **5.2**: Update CTA links — add `url` field to template items in `pt.js` and `en.js`, update `TemplatesSection.jsx` to use `item.url`, update `ClosingSection.jsx` with real GitHub URL
- [ ] **5.3**: Final copy review PT-BR — review all 8 sections in `pt.js` for tone, accuracy, typos, terminology consistency
- [ ] **5.4**: Final copy review EN — review all 8 sections in `en.js` for translation quality, tone, typos, no untranslated fragments
- [ ] **5.5**: Layout adjustment pass — verify all sections at 375px, 768px, 1280px+ breakpoints; fix any overflow, spacing, or alignment issues

### Task Dependency Graph

```
5.1 (create templates) ──┐
                         ├──> 5.2 (update CTA links) ──┐
                         │                              │
5.3 (copy review PT-BR) ─┼──────────────────────────────┤
                         │                              ├──> 5.5 (layout check)
5.4 (copy review EN) ────┘──────────────────────────────┘
```

Parallelization opportunities:

- 5.1, 5.3, and 5.4 can start in parallel (template creation and copy reviews are independent)
- 5.2 depends on 5.1 (needs template file URLs)
- 5.5 depends on 5.2, 5.3, and 5.4 (needs final content to validate layout)

## Implementation Readiness

| Criterion                      | Status | Notes                                                                                                                                             |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope clearly defined          | Yes    | 5 tasks covering template creation, link updates, copy review (both languages), and layout validation                                             |
| Risks identified and mitigated | Yes    | 5 risks with concrete mitigations, no blockers                                                                                                    |
| Dependencies resolved          | Yes    | Phase 4 complete (8/8 tasks). All content files exist. Project reference files (PLAN.md, AGENTS.md, PRD template) available for template creation |
| Open questions answered        | Yes    | Template strategy, GitHub URL, copy review scope, and template language all decided                                                               |
| Success criteria are testable  | Yes    | 11 observable conditions: file existence, link correctness, copy quality, layout at breakpoints, quality gates                                    |

## Readiness Verdict

**Verdict:** Ready

**Justification:** Phase 4 delivered complete scroll orchestration — the page is functionally complete as an interactive experience. Phase 5 is a content-only phase with no architectural changes: create 5 template files, update links in 2 components and 2 content files, and polish existing copy. All source material for templates exists in the project (PLAN.md, IMPLEMENTATION-ROADMAP.md, AGENTS.md, PRD template, skill format). The GitHub URL is confirmed. Copy review is scoped to minor polishing. No new dependencies, no new components, no structural changes. Implementation can begin immediately.

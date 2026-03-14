---
name: prd-workflow
description: Guide PRD creation using the project template and generate implementation readiness reports. Use when the user asks to write, create, review, or complete a PRD, or mentions product requirements.
---

# PRD Workflow

This skill operates in two modes: **creation** and **completion**.

## Mode 1 — Creation

When the user asks to write or create a PRD:

1. Read [template.md](template.md) from this skill directory
2. Walk through each section with the user, filling in content collaboratively
3. Do not skip sections — mark as "N/A" if not applicable
4. Save the PRD to the location indicated by the user (suggest project root or `docs/`)
5. Confirm all sections are complete before moving to completion mode

## Mode 2 — Completion

When the user indicates a PRD is finalized or asks to generate a report:

1. Read the finalized PRD
2. Read [report-template.md](report-template.md) from this skill directory
3. Analyze the PRD and extract:
   - decisions made and their justifications
   - risks identified and their mitigations
   - implementation tasks implied by the scope and solution
   - status of open questions and dependencies
4. Generate the report following the template structure
5. Save to `reports/prd-report-<name-slug>.md` (create the slug from the PRD title)

## Constraints

- Extract only what is written in the PRD. Do not invent risks, decisions, or tasks.
- The report must be factual, not speculative.
- Do not update `IMPLEMENTATION-ROADMAP.md` from this skill — the `roadmap-tracking` rule handles that separately.
- Every section in the PRD template must be addressed. Use "N/A" for sections that genuinely do not apply.

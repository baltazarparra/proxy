<!-- Template: Agent Skill (SKILL.md). Duplicate this file into a skill directory and fill in the sections. A skill teaches an AI coding agent a specific, repeatable workflow. -->

# [Skill Name]

Place this file as `SKILL.md` inside a dedicated skill directory. The frontmatter block below tells the agent when to activate the skill.

```yaml
name: [skill-id]
description: [One sentence describing what the skill does and when to use it.]
```

## Description

<!-- 2-3 sentences explaining what this skill does, what output it produces, and why it exists. -->

## When to use

<!-- List the triggers that should activate this skill. Be specific about user phrases or situations. -->

- When the user asks to <!-- e.g. "write a PRD", "create a migration plan" -->
- When the user mentions <!-- e.g. "product requirements", "deployment checklist" -->
- When <!-- e.g. a new feature needs a design review before implementation -->

## Steps

<!-- Numbered list of what the agent should do when this skill is activated. Be explicit about inputs, outputs, and decisions. -->

1. <!-- e.g. Read the template file from this skill directory -->
2. <!-- e.g. Walk through each section with the user -->
3. <!-- e.g. Save the output to the location indicated by the user -->
4. <!-- e.g. Confirm all sections are complete -->

## Constraints

<!-- Rules the agent must follow when executing this skill. Focus on preventing common mistakes. -->

- <!-- e.g. Do not skip sections -- mark as "N/A" if not applicable -->
- <!-- e.g. Do not invent information the user has not provided -->
- <!-- e.g. Do not modify files outside the scope of this skill -->

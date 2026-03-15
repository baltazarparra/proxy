# AGENTS.md

## Project overview

Recipe Saver is a small web app for saving and organizing cooking links. The goal is to keep V1 simple: auth, recipe CRUD, tags, and search.

## Stack

- Vite
- React
- Tailwind CSS
- Supabase
- React Router
- Vitest

## Setup commands

```bash
npm install
npm run dev
npm run build
npm run test
```

## Directory structure

```text
src/
  app/
  components/
  features/
  lib/
```

## Architecture rules

### Feature boundaries

Keep recipe-specific code inside `features/recipes/`. Shared UI belongs in `components/`.

### Supabase access

Do not call Supabase directly from random UI components. Use feature hooks or service helpers.

## Code style

- Use JavaScript, not TypeScript
- Prefer functional React components
- Use Tailwind for styling
- Keep forms accessible and mobile-first

## Critical constraints

- Do NOT add social features in V1
- Do NOT add global state unless local state becomes clearly painful
- Do NOT skip loading, empty, and error states

## Validation after changes

1. Run lint and tests
2. Test auth flow manually
3. Test recipe create/edit/delete on mobile width
4. Run production build

# Implementation Roadmap - Recipe Saver

## Phase 1 - Scaffold

**Objective:** Create the base app, styling, routing, and Supabase connection.

- Create Vite + React app
- Set up Tailwind CSS
- Add routing and app shell
- Configure Supabase client
- Add environment variable handling

### Checkpoint

- App boots locally
- Supabase client connects in development

## Phase 2 - Authentication

**Objective:** Let users sign in and keep their data private.

- Add email auth screens
- Add guarded routes
- Create user-aware session handling

### Checkpoint

- User can sign up, sign in, and sign out
- Protected screens redirect correctly

## Phase 3 - Recipe CRUD

**Objective:** Ship the main product loop.

- Create recipe table schema
- Build capture form
- Build recipe list
- Add edit and delete actions
- Add empty states and loading states

### Checkpoint

- Signed-in user can create, update, delete, and list recipes

## Phase 4 - Search, Tags, and Polish

**Objective:** Make the library usable day to day.

- Add search input
- Add tag filters
- Improve mobile spacing and keyboard behavior
- Add smoke tests for main flows

### Checkpoint

- Search and tag filters work
- Main flows pass tests
- Production build succeeds

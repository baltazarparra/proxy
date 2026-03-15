# PLAN.md - Recipe Saver

## 1. Project Overview

**Project name:** Recipe Saver
**Type:** Full-stack web app
**Primary goal:** Help people save, tag, and revisit recipes they actually want to cook
**Secondary goal:** Keep the first version lightweight enough to ship in a week
**Format:** Single-page app
**Deployment:** Vercel + Supabase

Recipe Saver should feel fast, calm, and useful. The core promise is simple: save a recipe link, give it a few tags, and find it later without digging through notes, chats, or browser tabs.

## 2. Product Intent

This is a personal utility app, not a social network or content platform.

- Save recipe links with title, source, notes, and tags
- Filter and search saved recipes quickly
- Keep the product simple enough for one user to manage comfortably

## 3. Target Audience

- People who collect recipes from Instagram, YouTube, blogs, and newsletters
- Beginner cooks who want lightweight organization, not a complex meal planning system

The product should be friendly to non-technical users.

## 4. Success Definition

- A user can save a recipe in under a minute
- A user can find an old recipe by tag or search
- The app feels reliable on mobile and desktop

## 5. Creative Direction

### Desired tone

- practical
- warm
- lightweight

### Visual references

- Anybox for fast capture
- Notion for calm structure

### Design posture

The interface should feel tidy and approachable. Avoid dashboard overload.

## 6. Recommended Stack

- Vite
- React
- Tailwind CSS
- Supabase
- React Router

### Why this stack

#### Vite + React

Fast iteration, small setup overhead, and enough structure for a small app.

#### Supabase

Provides auth, database, and simple CRUD without needing a custom backend in V1.

## 7. Content Model

Recipes are stored in Supabase.

Each recipe record includes:

- `id`
- `title`
- `source_url`
- `source_name`
- `notes`
- `tags[]`
- `created_at`

## 8. Proposed Page/App Structure

### Capture Screen

**Goal:** Save a new recipe quickly.

Simple form with title, URL, source, notes, and tags.

### Library Screen

**Goal:** Browse and filter saved recipes.

Search input, tag chips, and responsive recipe cards.

### Recipe Detail Modal

**Goal:** View the full recipe entry without leaving the library.

Shows notes, tags, source link, and edit/delete actions.

## 9. Information Architecture

```text
recipe-saver/
  src/
    app/
    components/
    features/
    lib/
  public/
```

### Directory purpose

- `app/` app shell and routing
- `components/` shared UI pieces
- `features/recipes/` recipe-specific views and logic
- `lib/` Supabase client and helpers

## 10. Performance Strategy

### Performance budget

- Initial JS under 250KB gzipped
- First contentful UI in under 2.5s on 4G

### Performance principles

- Keep forms and lists simple
- Avoid heavy client state libraries in V1

## 11. Risks

### Risk 1 - Scope creep

Users may ask for meal planning, shopping lists, ratings, and sharing too early.

**Mitigation:**

Keep V1 focused on save, tag, search, and revisit.

### Risk 2 - Bad mobile form UX

If saving a recipe on mobile feels annoying, the core loop breaks.

**Mitigation:**

Design and test the capture form mobile-first.

## 12. Acceptance Criteria for V1

- [ ] User can create an account and sign in
- [ ] User can save, edit, delete, and search recipes
- [ ] User can filter recipes by tag on mobile and desktop

## 13. What V1 Will Not Include

- Social sharing
- Ratings and reviews
- Meal planning

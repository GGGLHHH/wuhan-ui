# npm Consumer Example Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `apps/example` and verify the published `@gedatou/ui` package can be installed from npm registry and rendered in a minimal app.

**Architecture:** Build a small React consumer app under `apps/example`, keep it independent from `apps/website`, and validate real registry consumption with `npm install` plus a production build. Use the smallest component surface that still proves public exports and CSS work together.

**Tech Stack:** React, TypeScript, Vite, npm, `@gedatou/ui`

---

### Task 1: Define the Example App Boundary

**Files:**

- Create: `docs/superpowers/specs/2026-03-20-npm-example-design.md`
- Create: `docs/superpowers/plans/2026-03-20-npm-example.md`
- Create: `apps/example/package.json`
- Create: `apps/example/tsconfig.json`
- Create: `apps/example/vite.config.ts`
- Create: `apps/example/index.html`

- [ ] **Step 1: Create example app metadata**

Define a self-contained app package with normal semver dependencies and scripts for development and build.

- [ ] **Step 2: Add TypeScript and Vite config**

Mirror the minimal structure used by `apps/website`, but keep configuration specific to the example app.

### Task 2: Add the Minimal Consumer UI

**Files:**

- Create: `apps/example/src/main.tsx`
- Create: `apps/example/src/App.tsx`
- Create: `apps/example/src/index.css`

- [ ] **Step 1: Write a failing validation first**

Add a minimal test or build-oriented validation that proves the app must be able to import `@gedatou/ui` and render public components.

- [ ] **Step 2: Implement the example UI**

Import `@gedatou/ui/styles.css` and render a tiny page with `Card` and `Button` so the example proves real consumer usage.

### Task 3: Validate npm Registry Consumption

**Files:**

- Create: `apps/example/package-lock.json`

- [ ] **Step 1: Install with npm**

Run `npm install` from `apps/example` and confirm the published package resolves through the registry path rather than workspace-local linking.

- [ ] **Step 2: Run validation**

Run the example build and any minimal targeted verification needed to prove import resolution, CSS loading, and bundling succeed.

- [ ] **Step 3: Inspect changed scope**

Run GitNexus change detection to confirm the task only affected docs and the new example app.

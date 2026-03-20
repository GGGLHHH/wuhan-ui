# npm Consumer Example Design

**Goal:** Add a minimal example app under `apps/example` that installs the published `@gedatou/ui` package from npm registry and renders real components to verify npm-based consumption works.

## Current State

- The repository contains one existing app at `apps/website`.
- `apps/website` consumes `@gedatou/ui` through `workspace:*`, which only validates monorepo-local linking.
- The published package is `@gedatou/ui@0.0.13`, and its public exports include `Button`, `Card`, and `styles.css`.
- The root repository uses a monorepo layout, so a new example app must avoid accidentally validating workspace linking instead of registry installation.

## Decision

Create `apps/example` as a minimal React + Vite example app that behaves like an external npm consumer:

- install `@gedatou/ui` from npm registry
- import `@gedatou/ui/styles.css`
- render a small UI with `Button` and `Card`
- validate with real install and build commands

## Scope

1. Add a new example app under `apps/example`.
2. Keep the app intentionally small and independent from `apps/website`.
3. Add the minimum files required to install, build, and render the library.
4. Validate with `npm install` and a production build.

## Non-Goals

- Replace or modify the existing `apps/website` consumer flow.
- Add advanced demo pages, routing, state management, or testing infrastructure beyond what is needed for this validation.
- Change the published `@gedatou/ui` package API.

## Technical Approach

### App Boundary

- Place the example in `apps/example`.
- Keep the code self-contained with its own `package.json`, Vite config, and TypeScript config.
- Avoid importing local workspace sources from `packages/ui`.

### Dependency Strategy

- Use normal semver dependencies for `@gedatou/ui`, `react`, and `react-dom`.
- Install dependencies with `npm`, not workspace linking commands.
- If workspace auto-linking interferes with registry resolution, isolate the app from workspace package linking through package metadata and install command choices.

### UI Surface

- Import `@gedatou/ui/styles.css` in the app entry file.
- Render `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `Button`.
- Keep the layout minimal so failures point to package consumption, not app logic.

### Validation

- Run a real `npm install` in `apps/example`.
- Run the example build to confirm imports, types, CSS, and bundling all resolve.
- If needed, run a local preview or dev startup for one visual sanity check.

## Risks

1. Root workspace settings may cause npm to resolve the local workspace package instead of the published registry package.
2. The published CSS export may require specific app-side Tailwind or Vite setup.
3. The example may need a small amount of local styling to make the rendered components visibly verifiable.

## Validation

- `npm install` in `apps/example`
- app build command passes
- rendered app imports and uses `@gedatou/ui` components without referencing workspace-only paths

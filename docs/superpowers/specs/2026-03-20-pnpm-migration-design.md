# pnpm Workspace Migration Design

**Goal:** Migrate the repository from npm workspaces to pnpm workspaces and align local development, CI, and deployment with pnpm workspace conventions.

## Current State

- The repository is a multi-package workspace with `apps/*`, `packages/*`, and `tools/*` declared in the root `workspaces` field.
- The active package manager is npm via `packageManager: "npm@11.11.1"`.
- The repository uses `package-lock.json` and does not yet define `pnpm-workspace.yaml` or pnpm-specific workspace settings.
- Internal package consumption is present, but local workspace dependencies still use a loose `"*"` range instead of `workspace:` protocol.
- CI, deployment, and package docs still contain npm-specific install and publish commands.

## Decision

Use pnpm as the sole package manager and adopt its workspace conventions at the repository root.

## Scope

1. Switch root package-manager metadata from npm to pnpm.
2. Add `pnpm-workspace.yaml` to define workspace package boundaries.
3. Add root `.npmrc` with pnpm workspace-friendly defaults.
4. Convert internal workspace dependency declarations to `workspace:*`.
5. Replace npm-oriented lockfile and installation assumptions with pnpm equivalents.
6. Update CI, deployment, and developer-facing docs to match the new workflow.

## Non-Goals

- Introduce dependency catalogs or version policies beyond what is needed for the migration.
- Reorganize package layout or rename existing packages.
- Change application or library runtime behavior unrelated to package resolution.

## Technical Approach

### Root Package Management

- Update the root `package.json` to declare `pnpm` as the package manager.
- Keep the existing `workspaces` field for compatibility with tools that read it, but treat `pnpm-workspace.yaml` as the authoritative workspace definition.

### Workspace Definition

- Create `pnpm-workspace.yaml` with the existing workspace globs:
  - `packages/*`
  - `apps/*`
  - `tools/*`

### pnpm Workspace Defaults

- Create root `.npmrc` and enable:
  - `auto-install-peers=true`
  - `strict-peer-dependencies=false`
  - `link-workspace-packages=true`
  - `prefer-workspace-packages=true`
  - `shared-workspace-lockfile=true`
  - `save-workspace-protocol=rolling`

These defaults reduce migration friction while preserving pnpm's workspace linking behavior.

### Internal Dependencies

- Change `apps/website` dependency on `@gedatou/ui` from `"*"` to `workspace:*`.

### Lockfile and Installation

- Remove `package-lock.json`.
- Reinstall dependencies so the repository produces a single `pnpm-lock.yaml`.

### Tooling and Delivery

- Update GitHub Actions to use pnpm caching and pnpm publish flow.
- Update Vercel install command to use `vp install`, which will resolve through pnpm once the package-manager metadata is switched.
- Update package README examples to use `vp` commands instead of npm commands to stay aligned with repository guidance.

## Risks

1. pnpm strictness may expose undeclared dependencies that npm previously hoisted implicitly.
2. CI caching behavior changes when switching from npm to pnpm.
3. Publish flow must remain compatible with the package registry and Vite+ wrapper usage.

## Validation

Run fresh installs and project checks after the migration:

- `vp install`
- `vp check`
- `vp test`

Also inspect the resulting diff to confirm npm lockfile removal and pnpm lockfile creation are the only package-manager artifact changes.

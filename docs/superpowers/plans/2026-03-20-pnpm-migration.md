# pnpm Workspace Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the repository from npm workspaces to pnpm workspaces without breaking local development, CI, publishing, or deployment.

**Architecture:** Keep the existing monorepo layout, make pnpm the root package manager, declare workspace boundaries in `pnpm-workspace.yaml`, and update the few places that still assume npm-specific behavior. Preserve the current Vite+ command surface so developer workflows remain stable.

**Tech Stack:** pnpm, Vite+, GitHub Actions, Vercel, React, TypeScript

---

### Task 1: Normalize Workspace Metadata

**Files:**

- Create: `docs/superpowers/specs/2026-03-20-pnpm-migration-design.md`
- Create: `docs/superpowers/plans/2026-03-20-pnpm-migration.md`
- Create: `pnpm-workspace.yaml`
- Create: `.npmrc`
- Modify: `package.json`

- [ ] **Step 1: Update root package manager metadata**

Set the root `packageManager` to pnpm and keep existing workspace globs aligned with the new pnpm workspace file.

- [ ] **Step 2: Add pnpm workspace definition**

Create `pnpm-workspace.yaml` with `packages/*`, `apps/*`, and `tools/*`.

- [ ] **Step 3: Add pnpm workspace defaults**

Create root `.npmrc` with workspace linking and peer-dependency settings that minimize migration friction.

### Task 2: Convert Internal Dependencies and Tooling References

**Files:**

- Modify: `apps/website/package.json`
- Modify: `.github/workflows/release.yml`
- Modify: `vercel.json`
- Modify: `packages/ui/README.md`

- [ ] **Step 1: Convert workspace dependency declarations**

Change the website package dependency on `@gedatou/ui` to `workspace:*`.

- [ ] **Step 2: Update CI cache and publish flow**

Switch release workflow setup and cache configuration to pnpm-compatible values while keeping the existing Vite+ build flow.

- [ ] **Step 3: Update deployment install command**

Make Vercel install the workspace through the Vite+ entrypoint after pnpm becomes authoritative.

- [ ] **Step 4: Update developer-facing docs**

Replace npm examples with repository-standard `vp` commands.

### Task 3: Regenerate Lockfile and Verify

**Files:**

- Delete: `package-lock.json`
- Create: `pnpm-lock.yaml`

- [ ] **Step 1: Remove npm lockfile**

Delete `package-lock.json` once pnpm metadata is in place.

- [ ] **Step 2: Reinstall dependencies**

Run `vp install` to generate a fresh pnpm lockfile and verify the workspace resolves under pnpm.

- [ ] **Step 3: Run repository validation**

Run `vp check` and `vp test`, then inspect GitNexus change detection to confirm the migration scope matches expectations.

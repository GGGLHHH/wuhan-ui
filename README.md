# Vite+ Monorepo Starter

A starter for creating a Vite+ monorepo.

## Development

- Check everything is ready:

```bash
vp run ready
```

- Run the tests:

```bash
vp run test -r
```

Use `vp run test -r` from the workspace root. `vp test` only runs the current
directory's Vitest config and does not aggregate workspace-local aliases.

- Build the monorepo:

```bash
vp run build -r
```

- Run the development server:

```bash
vp run dev
```

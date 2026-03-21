# Create Component Documentation Page

Generate a complete documentation page for a UI component in the wuhan-ui website.

## Trigger

User provides a component name (e.g., "Aurora", "Button", "Sidebar").

## Input

- **Component name** — the only required input from the user

## Output Files

This skill creates 3 files:

1. `apps/website/src/registry/examples/{kebab-name}-demo.tsx` — Demo component
2. `apps/website/src/content/docs/{kebab-name}.mdx` — MDX documentation
3. `apps/website/src/routes/_dashboard/docs.{kebab-name}.tsx` — Route file

## Step-by-Step Process

### Step 1: Locate the component source

Search for the component file under `packages/ui/src/`. Components may be at any depth:

```
packages/ui/src/components/Aurora.tsx
packages/ui/src/components/ui/button.tsx
packages/ui/src/components/ui/sidebar.tsx
```

Use glob search for `**/{ComponentName}.tsx` or `**/{kebab-name}.tsx` under `packages/ui/src/`.

If multiple matches are found, ask the user which one.

### Step 2: Read and extract component info

From the component source file, extract:

- **Exported props interface/type** (e.g., `AuroraProps`, `ButtonProps`)
- **Props fields**: name, type, default value, JSDoc comment
- **Component export style**: default export or named export
- **Import path**: determine the public import (usually `import { ComponentName } from '@gedatou/ui'`)

### Step 3: Create the demo file

File: `apps/website/src/registry/examples/{kebab-name}-demo.tsx`

Rules:

- Must be a **default export** function named `{ComponentName}Demo`
- Import the component from `@gedatou/ui`
- Use sensible default props to show the component in action
- Keep it minimal — just enough to demonstrate the component visually
- If the component needs a container (e.g., fixed dimensions), wrap it appropriately

Reference example (`aurora-demo.tsx` pattern):

```tsx
import { Aurora } from '@gedatou/ui'

export default function AuroraDemo() {
  return (
    <div className="h-[280px] w-full">
      <Aurora />
    </div>
  )
}
```

### Step 4: Create the MDX documentation

File: `apps/website/src/content/docs/{kebab-name}.mdx`

Use this exact structure:

```mdx
import { ComponentPreview } from '@/components/docs/component-preview'
import { PropsTable } from '@/components/docs/props-table'
import {ComponentName}Demo from '@/registry/examples/{kebab-name}-demo'
import {ComponentName}DemoSource from '@/registry/examples/{kebab-name}-demo.tsx?raw'

# {ComponentName}

{One-line description of the component in Chinese.}

## Import

\`\`\`tsx
import { {ComponentName} } from '@gedatou/ui'
\`\`\`

## Usage

<ComponentPreview code={{ComponentName}DemoSource}>
  <{ComponentName}Demo />
</ComponentPreview>

## API Reference

<PropsTable
  data={[
    {
      prop: '{propName}',
      type: '{propType}',
      default: '{defaultValue}',
      description: '{description in Chinese}',
    },
    // ... one entry per prop
  ]}
/>
```

Rules for PropsTable data:

- Include ALL exported props from the interface
- `default` should be the actual default value from the component, or `'undefined'` if none
- `description` should be in Chinese, derived from JSDoc comments or inferred from the prop name/type
- `type` should be the TypeScript type as written in the interface

### Step 5: Create the route file

File: `apps/website/src/routes/_dashboard/docs.{kebab-name}.tsx`

Use this exact template:

```tsx
import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/{kebab-name}.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { {IconName} } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/{kebab-name}')({
  staticData: {
    title: '{ComponentName}',
    icon: {IconName},
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})
```

For the icon:

- Choose a lucide-react icon that semantically matches the component
- Examples: Sparkles for Aurora, Waves for Silk, Layers for StaggerReveal, Loader for LoadingPage

### Step 6: Verify

Run `vp build` in `apps/website` to confirm:

- No TypeScript errors
- No missing imports
- Route is registered (TanStack Router auto-generates `routeTree.gen.ts`)

## Naming Conventions

| Input         | kebab-name     | ComponentName | Demo function     |
| ------------- | -------------- | ------------- | ----------------- |
| Aurora        | aurora         | Aurora        | AuroraDemo        |
| LoadingPage   | loading-page   | LoadingPage   | LoadingPageDemo   |
| StaggerReveal | stagger-reveal | StaggerReveal | StaggerRevealDemo |
| Button        | button         | Button        | ButtonDemo        |

## Checklist

Before marking complete:

- [ ] Demo file renders the component with sensible defaults
- [ ] MDX has all 4 sections: title+description, Import, Usage, API Reference
- [ ] PropsTable includes ALL props from the exported interface
- [ ] Route file uses correct path and a fitting lucide icon
- [ ] `vp build` passes in `apps/website`
- [ ] Descriptions in MDX and PropsTable are in Chinese

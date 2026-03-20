import { cn } from '@/lib/utils'
import { useState } from 'react'

import { CodeBlock } from './code-block'

const MANAGERS = [
  { name: 'pnpm', command: 'pnpm add @gedatou/ui' },
  { name: 'npm', command: 'npm install @gedatou/ui' },
  { name: 'yarn', command: 'yarn add @gedatou/ui' },
  { name: 'bun', command: 'bun add @gedatou/ui' },
] as const

export function InstallTabs({ className }: { className?: string }) {
  const [active, setActive] = useState(0)

  return (
    <div className={className}>
      <div className="border-border flex gap-0 border-b">
        {MANAGERS.map((m, i) => (
          <button
            key={m.name}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              'text-muted-foreground px-4 py-2 text-sm transition-colors',
              active === i && 'text-foreground border-b-2 border-current font-semibold',
            )}
          >
            {m.name}
          </button>
        ))}
      </div>
      <CodeBlock code={MANAGERS[active].command} language="bash" className="mt-3" />
    </div>
  )
}

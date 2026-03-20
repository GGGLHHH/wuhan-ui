import type { ReactNode } from 'react'

import { TableOfContents } from './table-of-contents'

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-8">
      <div className="prose dark:prose-invert max-w-none min-w-0 flex-1">{children}</div>
      <TableOfContents />
    </div>
  )
}

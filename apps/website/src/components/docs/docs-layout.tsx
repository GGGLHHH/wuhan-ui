import { useScrollContainer } from '@/hooks/use-scroll-container'
import { StaggerReveal } from '@gedatou/ui'
import { MDXProvider } from '@mdx-js/react'
import type { ComponentProps, ReactNode } from 'react'

import { TableOfContents } from './table-of-contents'

const mdxComponents = {
  wrapper: ({ children }: ComponentProps<'div'>) => {
    const scrollContainer = useScrollContainer()
    return <StaggerReveal root={scrollContainer}>{children}</StaggerReveal>
  },
}

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-8">
      <div className="prose dark:prose-invert max-w-none min-w-0 flex-1">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </div>
      <TableOfContents />
    </div>
  )
}

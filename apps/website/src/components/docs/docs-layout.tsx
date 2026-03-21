import { useScrollContainer } from '@/hooks/use-scroll-container'
import { StaggerReveal } from '@gedatou/ui'
import { MDXProvider } from '@mdx-js/react'
import { Children, type ComponentProps, type ReactNode, isValidElement } from 'react'
import ShikiHighlighter from 'react-shiki/web'

import { TableOfContents } from './table-of-contents'

function Pre({ children, ...props }: ComponentProps<'pre'>) {
  // MDX compiles ```tsx to <pre><code className="language-tsx">...</code></pre>
  const codeElement = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === 'code',
  )

  if (!isValidElement<{ className?: string; children?: ReactNode }>(codeElement)) {
    return <pre {...props}>{children}</pre>
  }

  const className = codeElement.props.className ?? ''
  const language = className.replace('language-', '') || 'text'
  const code = String(codeElement.props.children ?? '').trim()

  return (
    <div className="not-prose text-sm [&_pre]:!m-0 [&_pre]:!rounded-xl [&_pre]:!border">
      <ShikiHighlighter
        language={language}
        theme={{ light: 'github-light', dark: 'github-dark' }}
        defaultColor="light-dark()"
        showLanguage={false}
      >
        {code}
      </ShikiHighlighter>
    </div>
  )
}

const mdxComponents = {
  pre: Pre,
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

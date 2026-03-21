import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/scroll-area.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ScrollText } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/scroll-area')({
  staticData: {
    title: 'ScrollArea',
    icon: ScrollText,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/tooltip.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { MessageSquare } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/tooltip')({
  staticData: {
    title: 'Tooltip',
    icon: MessageSquare,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

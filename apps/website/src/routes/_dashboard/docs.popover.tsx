import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/popover.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { MessageSquare } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/popover')({
  staticData: {
    title: 'Popover',
    icon: MessageSquare,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

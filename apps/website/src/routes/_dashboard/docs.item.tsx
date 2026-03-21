import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/item.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Rows3 } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/item')({
  staticData: {
    title: 'Item',
    icon: Rows3,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

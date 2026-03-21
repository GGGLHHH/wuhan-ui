import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/resizable.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { GripVertical } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/resizable')({
  staticData: {
    title: 'Resizable',
    icon: GripVertical,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

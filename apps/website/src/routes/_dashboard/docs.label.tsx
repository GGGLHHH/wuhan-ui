import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/label.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Tag } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/label')({
  staticData: {
    title: 'Label',
    icon: Tag,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

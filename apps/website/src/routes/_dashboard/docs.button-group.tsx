import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/button-group.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Group } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/button-group')({
  staticData: {
    title: 'ButtonGroup',
    icon: Group,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/input-group.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Group } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/input-group')({
  staticData: {
    title: 'InputGroup',
    icon: Group,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/toggle-group.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Group } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/toggle-group')({
  staticData: {
    title: 'ToggleGroup',
    icon: Group,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

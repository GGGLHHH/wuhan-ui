import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/switch.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ToggleLeft } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/switch')({
  staticData: {
    title: 'Switch',
    icon: ToggleLeft,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

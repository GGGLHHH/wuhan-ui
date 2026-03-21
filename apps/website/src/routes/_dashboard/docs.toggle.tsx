import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/toggle.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ToggleLeft } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/toggle')({
  staticData: {
    title: 'Toggle',
    icon: ToggleLeft,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

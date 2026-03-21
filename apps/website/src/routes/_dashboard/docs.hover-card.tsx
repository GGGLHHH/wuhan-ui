import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/hover-card.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { PanelTop } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/hover-card')({
  staticData: {
    title: 'HoverCard',
    icon: PanelTop,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

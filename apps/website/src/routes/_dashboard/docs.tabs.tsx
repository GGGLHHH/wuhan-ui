import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/tabs.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { PanelTop } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/tabs')({
  staticData: {
    title: 'Tabs',
    icon: PanelTop,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/sidebar.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { PanelLeft } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/sidebar')({
  staticData: {
    title: 'Sidebar',
    icon: PanelLeft,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

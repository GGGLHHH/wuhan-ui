import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/drawer.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { PanelBottomOpen } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/drawer')({
  staticData: {
    title: 'Drawer',
    icon: PanelBottomOpen,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

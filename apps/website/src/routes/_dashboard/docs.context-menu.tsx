import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/context-menu.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { MousePointerClick } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/context-menu')({
  staticData: {
    title: 'ContextMenu',
    icon: MousePointerClick,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

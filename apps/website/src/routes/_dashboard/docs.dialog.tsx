import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/dialog.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { PanelTopIcon } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/dialog')({
  staticData: {
    title: 'Dialog',
    icon: PanelTopIcon,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/sheet.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { PanelRight } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/sheet')({
  staticData: {
    title: 'Sheet',
    icon: PanelRight,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

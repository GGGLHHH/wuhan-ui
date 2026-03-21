import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/alert-dialog.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { TriangleAlert } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/alert-dialog')({
  staticData: {
    title: 'AlertDialog',
    icon: TriangleAlert,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

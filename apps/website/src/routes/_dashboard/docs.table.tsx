import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/table.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Table2 } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/table')({
  staticData: {
    title: 'Table',
    icon: Table2,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

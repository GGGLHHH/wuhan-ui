import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/collapsible.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronsUpDown } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/collapsible')({
  staticData: {
    title: 'Collapsible',
    icon: ChevronsUpDown,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

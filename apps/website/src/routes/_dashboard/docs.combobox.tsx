import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/combobox.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ListFilter } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/combobox')({
  staticData: {
    title: 'Combobox',
    icon: ListFilter,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

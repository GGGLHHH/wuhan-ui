import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/accordion.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ListCollapse } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/accordion')({
  staticData: {
    title: 'Accordion',
    icon: ListCollapse,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

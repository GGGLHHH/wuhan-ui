import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/select.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/select')({
  staticData: {
    title: 'Select',
    icon: ChevronDown,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

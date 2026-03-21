import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/dropdown-menu.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/dropdown-menu')({
  staticData: {
    title: 'DropdownMenu',
    icon: ChevronDown,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

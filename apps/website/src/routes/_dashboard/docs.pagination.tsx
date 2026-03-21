import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/pagination.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronsLeftRight } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/pagination')({
  staticData: {
    title: 'Pagination',
    icon: ChevronsLeftRight,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

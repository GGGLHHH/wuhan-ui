import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/separator.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Minus } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/separator')({
  staticData: {
    title: 'Separator',
    icon: Minus,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/checkbox.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { SquareCheck } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/checkbox')({
  staticData: {
    title: 'Checkbox',
    icon: SquareCheck,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

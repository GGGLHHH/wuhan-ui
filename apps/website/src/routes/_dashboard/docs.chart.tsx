import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/chart.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { BarChart3 } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/chart')({
  staticData: {
    title: 'Chart',
    icon: BarChart3,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

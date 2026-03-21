import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/breadcrumb.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Navigation } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/breadcrumb')({
  staticData: {
    title: 'Breadcrumb',
    icon: Navigation,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

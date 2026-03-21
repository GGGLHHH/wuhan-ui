import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/badge.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Tag } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/badge')({
  staticData: {
    title: 'Badge',
    icon: Tag,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

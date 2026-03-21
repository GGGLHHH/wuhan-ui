import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/sonner.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Bell } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/sonner')({
  staticData: {
    title: 'Sonner',
    icon: Bell,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

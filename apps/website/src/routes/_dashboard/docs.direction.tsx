import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/direction.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Languages } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/direction')({
  staticData: {
    title: 'Direction',
    icon: Languages,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

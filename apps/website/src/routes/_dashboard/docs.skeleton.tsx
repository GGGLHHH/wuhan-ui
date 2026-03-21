import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/skeleton.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Bone } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/skeleton')({
  staticData: {
    title: 'Skeleton',
    icon: Bone,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

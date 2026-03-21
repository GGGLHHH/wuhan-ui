import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/avatar.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { CircleUser } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/avatar')({
  staticData: {
    title: 'Avatar',
    icon: CircleUser,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

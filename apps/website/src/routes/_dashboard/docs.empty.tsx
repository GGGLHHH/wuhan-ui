import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/empty.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { PackageOpen } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/empty')({
  staticData: {
    title: 'Empty',
    icon: PackageOpen,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

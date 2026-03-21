import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/progress.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/progress')({
  staticData: {
    title: 'Progress',
    icon: Loader,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

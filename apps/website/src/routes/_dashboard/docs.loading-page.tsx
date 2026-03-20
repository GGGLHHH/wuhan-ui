import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/loading-page.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/loading-page')({
  staticData: {
    title: 'LoadingPage',
    icon: Loader,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/loading-page.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/_coustom/coustom/loading-page')({
  staticData: {
    title: '加载动画 LoadingPage',
    icon: Loader,
    groupKey: 'customComponents',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

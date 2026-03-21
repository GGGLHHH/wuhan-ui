import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/aurora.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/_coustom/coustom/aurora')({
  staticData: {
    title: '极光背景 Aurora',
    icon: Sparkles,
    groupKey: 'customComponents',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

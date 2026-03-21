import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/stagger-reveal.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Layers } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/_coustom/coustom/stagger-reveal')({
  staticData: {
    title: '交错揭示 StaggerReveal',
    icon: Layers,
    groupKey: 'customComponents',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

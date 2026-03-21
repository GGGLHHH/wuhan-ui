import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/stagger-reveal.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Layers } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/stagger-reveal')({
  staticData: {
    title: 'StaggerReveal',
    icon: Layers,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

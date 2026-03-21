import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/aspect-ratio.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Crop } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/aspect-ratio')({
  staticData: {
    title: 'AspectRatio',
    icon: Crop,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

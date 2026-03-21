import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/slider.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { SlidersHorizontal } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/slider')({
  staticData: {
    title: 'Slider',
    icon: SlidersHorizontal,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

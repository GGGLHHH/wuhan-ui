import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/carousel.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { GalleryHorizontal } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/carousel')({
  staticData: {
    title: 'Carousel',
    icon: GalleryHorizontal,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

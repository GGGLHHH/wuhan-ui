import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/silk.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Waves } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/_coustom/coustom/silk')({
  staticData: {
    title: '丝绸效果 Silk',
    icon: Waves,
    groupKey: 'customComponents',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

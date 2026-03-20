import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/silk.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Waves } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/silk')({
  staticData: {
    title: 'Silk',
    icon: Waves,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

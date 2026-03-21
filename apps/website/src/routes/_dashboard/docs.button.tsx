import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/button.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { MousePointerClick } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/button')({
  staticData: {
    title: 'Button',
    icon: MousePointerClick,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

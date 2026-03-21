import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/radio-group.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { CircleDot } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/radio-group')({
  staticData: {
    title: 'RadioGroup',
    icon: CircleDot,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

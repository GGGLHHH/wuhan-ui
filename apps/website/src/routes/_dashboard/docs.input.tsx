import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/input.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { TextCursorInput } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/input')({
  staticData: {
    title: 'Input',
    icon: TextCursorInput,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

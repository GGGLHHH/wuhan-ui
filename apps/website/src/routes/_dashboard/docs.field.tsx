import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/field.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { TextCursorInput } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/field')({
  staticData: {
    title: 'Field',
    icon: TextCursorInput,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

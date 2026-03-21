import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/textarea.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { TextCursorInput } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/textarea')({
  staticData: {
    title: 'Textarea',
    icon: TextCursorInput,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

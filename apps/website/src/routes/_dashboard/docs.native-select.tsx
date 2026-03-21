import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/native-select.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/native-select')({
  staticData: {
    title: 'NativeSelect',
    icon: ChevronDown,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

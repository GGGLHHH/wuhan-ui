import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/spinner.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { LoaderCircle } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/spinner')({
  staticData: {
    title: 'Spinner',
    icon: LoaderCircle,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

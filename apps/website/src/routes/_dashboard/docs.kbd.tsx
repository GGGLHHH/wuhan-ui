import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/kbd.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Keyboard } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/kbd')({
  staticData: {
    title: 'Kbd',
    icon: Keyboard,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

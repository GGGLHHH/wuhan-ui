import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/menubar.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { MenuSquare } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/menubar')({
  staticData: {
    title: 'Menubar',
    icon: MenuSquare,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

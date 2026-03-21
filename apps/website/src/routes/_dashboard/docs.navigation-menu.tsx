import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/navigation-menu.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Menu } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/navigation-menu')({
  staticData: {
    title: 'NavigationMenu',
    icon: Menu,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

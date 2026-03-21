import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/command.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { TerminalIcon } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/command')({
  staticData: {
    title: 'Command',
    icon: TerminalIcon,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

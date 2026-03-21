import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/calendar.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/calendar')({
  staticData: {
    title: 'Calendar',
    icon: CalendarDays,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

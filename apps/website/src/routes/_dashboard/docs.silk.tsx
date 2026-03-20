import Content from '@/content/docs/components/silk.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Waves } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/silk')({
  staticData: {
    title: 'Silk',
    icon: Waves,
    group: 'Components',
  },
  component: () => (
    <div className="prose dark:prose-invert max-w-none">
      <Content />
    </div>
  ),
})

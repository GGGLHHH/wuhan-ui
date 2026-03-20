import Content from '@/content/docs/aurora.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/aurora')({
  staticData: {
    title: 'Aurora',
    icon: Sparkles,
    group: 'Components',
  },
  component: () => (
    <div className="prose dark:prose-invert max-w-none">
      <Content />
    </div>
  ),
})

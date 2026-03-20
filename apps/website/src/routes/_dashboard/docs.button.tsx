import Content from '@/content/docs/components/button.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { RectangleHorizontal } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/button')({
  staticData: {
    title: 'Button',
    icon: RectangleHorizontal,
    group: 'Components',
  },
  component: () => (
    <div className="prose dark:prose-invert max-w-none">
      <Content />
    </div>
  ),
})

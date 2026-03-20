import Content from '@/content/docs/components/loading-page.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/loading-page')({
  staticData: {
    title: 'LoadingPage',
    icon: Loader,
    group: 'Components',
  },
  component: () => (
    <div className="prose dark:prose-invert max-w-none">
      <Content />
    </div>
  ),
})

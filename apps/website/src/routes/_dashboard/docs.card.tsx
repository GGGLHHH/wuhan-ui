import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/card.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { CreditCard } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/card')({
  staticData: {
    title: 'Card',
    icon: CreditCard,
    group: 'Components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

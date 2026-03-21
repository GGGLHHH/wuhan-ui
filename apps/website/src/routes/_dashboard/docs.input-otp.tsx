import { DocsLayout } from '@/components/docs/docs-layout'
import Content from '@/content/docs/input-otp.mdx'
import { createFileRoute } from '@tanstack/react-router'
import { KeyRound } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/docs/input-otp')({
  staticData: {
    title: 'InputOTP',
    icon: KeyRound,
    groupKey: 'components',
  },
  component: () => (
    <DocsLayout>
      <Content />
    </DocsLayout>
  ),
})

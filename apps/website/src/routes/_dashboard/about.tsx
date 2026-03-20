import { createFileRoute } from '@tanstack/react-router'
import { Info } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/about')({
  staticData: {
    title: 'About',
    icon: Info,
    order: 2,
  },
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <p className="text-muted-foreground mt-2">This is the about page.</p>
    </div>
  )
}

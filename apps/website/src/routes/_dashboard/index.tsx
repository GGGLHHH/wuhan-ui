import { createFileRoute } from '@tanstack/react-router'
import { Home } from 'lucide-react'

export const Route = createFileRoute('/_dashboard/')({
  staticData: {
    title: 'Home',
    icon: Home,
    order: 1,
    fixedTab: true,
  },
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="text-muted-foreground mt-2">Welcome to the dashboard.</p>
    </div>
  )
}

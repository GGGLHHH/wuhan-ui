import { Aurora, LoadingPage } from '@gedatou/ui'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="relative h-screen w-full bg-[#060010]">
      <div className="absolute inset-0">
        <Aurora colorStops={['#5227FF', '#5b117e', '#42119c']} amplitude={1} blend={1} />
      </div>
      <LoadingPage />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link to="/about" className="text-white/70 transition-colors hover:text-white">
          About →
        </Link>
      </div>
    </div>
  )
}

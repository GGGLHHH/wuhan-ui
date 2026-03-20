import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#060010] text-white">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-white/70">This is the about page.</p>
      <Link to="/" className="mt-8 text-white/70 transition-colors hover:text-white">
        ← Home
      </Link>
    </div>
  )
}

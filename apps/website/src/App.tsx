import { Button } from 'ui'

export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Wuhan UI</h1>
        <p className="text-muted-foreground">React + Tailwind + shadcn</p>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

import { Card, StaggerReveal } from '@gedatou/ui'
import { useRef } from 'react'

export default function StaggerRevealDemo() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={scrollRef} className="h-100 w-full max-w-md overflow-auto">
      <StaggerReveal className="flex flex-col gap-4" root={scrollRef}>
        {Array.from({ length: 100 }).map((_, i) => (
          <Card key={i} className="p-4">
            <p className="font-medium">Card {i + 1}</p>
            <p className="text-muted-foreground text-sm">
              This card animates in with a stagger effect.
            </p>
          </Card>
        ))}
      </StaggerReveal>
    </div>
  )
}

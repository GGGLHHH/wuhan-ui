import { Button, cn } from '@gedatou/ui'
import { Maximize, Minimize } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

export function FullscreenTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      void document.exitFullscreen()
    } else {
      void document.documentElement.requestFullscreen()
    }
  }, [isFullscreen])

  return (
    <Button
      className={cn('size-7', className)}
      data-slot="fullscreen-trigger"
      size="icon"
      variant="ghost"
      onClick={(event) => {
        onClick?.(event)
        toggleFullscreen()
      }}
      {...props}
    >
      {isFullscreen ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
      <span className="sr-only">Toggle Fullscreen</span>
    </Button>
  )
}

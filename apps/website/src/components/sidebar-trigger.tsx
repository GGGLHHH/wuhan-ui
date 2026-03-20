import { Button, cn, useSidebar } from '@gedatou/ui'
import { PanelLeft, PanelRight } from 'lucide-react'

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar, open } = useSidebar()

  return (
    <Button
      className={cn('size-7', className)}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      size="icon"
      variant="ghost"
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      {open ? <PanelLeft className="size-4" /> : <PanelRight className="size-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

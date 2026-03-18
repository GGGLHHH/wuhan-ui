'use client'

import { cn } from '@/lib/utils'
import * as ResizablePrimitive from 'react-resizable-panels'

function ResizablePanelGroup({ className, ...props }: ResizablePrimitive.GroupProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        'wuhanui:flex wuhanui:h-full wuhanui:w-full wuhanui:aria-[orientation=vertical]:flex-col',
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizablePrimitive.SeparatorProps & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:w-px wuhanui:items-center wuhanui:justify-center wuhanui:bg-border wuhanui:ring-offset-background wuhanui:after:absolute wuhanui:after:inset-y-0 wuhanui:after:left-1/2 wuhanui:after:w-1 wuhanui:after:-translate-x-1/2 wuhanui:focus-visible:ring-1 wuhanui:focus-visible:ring-ring wuhanui:focus-visible:outline-hidden wuhanui:aria-[orientation=horizontal]:h-px wuhanui:aria-[orientation=horizontal]:w-full wuhanui:aria-[orientation=horizontal]:after:left-0 wuhanui:aria-[orientation=horizontal]:after:h-1 wuhanui:aria-[orientation=horizontal]:after:w-full wuhanui:aria-[orientation=horizontal]:after:translate-x-0 wuhanui:aria-[orientation=horizontal]:after:-translate-y-1/2 wuhanui:[&[aria-orientation=horizontal]>div]:rotate-90',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="wuhanui:z-10 wuhanui:flex wuhanui:h-6 wuhanui:w-1 wuhanui:shrink-0 wuhanui:rounded-lg wuhanui:bg-border" />
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }

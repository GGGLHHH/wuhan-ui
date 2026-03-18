'use client'

import { cn } from '@/lib/utils'
import { Tooltip as TooltipPrimitive } from 'radix-ui'
import * as React from 'react'

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'wuhanui:z-50 wuhanui:inline-flex wuhanui:w-fit wuhanui:max-w-xs wuhanui:origin-(--radix-tooltip-content-transform-origin) wuhanui:items-center wuhanui:gap-1.5 wuhanui:rounded-md wuhanui:bg-foreground wuhanui:px-3 wuhanui:py-1.5 wuhanui:text-xs wuhanui:text-background wuhanui:has-data-[slot=kbd]:pr-1.5 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:**:data-[slot=kbd]:relative wuhanui:**:data-[slot=kbd]:isolate wuhanui:**:data-[slot=kbd]:z-50 wuhanui:**:data-[slot=kbd]:rounded-sm wuhanui:data-[state=delayed-open]:animate-in wuhanui:data-[state=delayed-open]:fade-in-0 wuhanui:data-[state=delayed-open]:zoom-in-95 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="wuhanui:z-50 wuhanui:size-2.5 wuhanui:translate-y-[calc(-50%_-_2px)] wuhanui:rotate-45 wuhanui:rounded-[2px] wuhanui:bg-foreground wuhanui:fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }

import { cn } from '@/lib/utils'
import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui'
import * as React from 'react'

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('wuhanui:relative', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="wuhanui:size-full wuhanui:rounded-[inherit] wuhanui:transition-[color,box-shadow] wuhanui:outline-none wuhanui:focus-visible:ring-[3px] wuhanui:focus-visible:ring-ring/50 wuhanui:focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        'wuhanui:flex wuhanui:touch-none wuhanui:p-px wuhanui:transition-colors wuhanui:select-none wuhanui:data-horizontal:h-2.5 wuhanui:data-horizontal:flex-col wuhanui:data-horizontal:border-t wuhanui:data-horizontal:border-t-transparent wuhanui:data-vertical:h-full wuhanui:data-vertical:w-2.5 wuhanui:data-vertical:border-l wuhanui:data-vertical:border-l-transparent',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="wuhanui:relative wuhanui:flex-1 wuhanui:rounded-full wuhanui:bg-border"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

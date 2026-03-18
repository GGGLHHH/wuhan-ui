import { cn } from '@/lib/utils'
import { Popover as PopoverPrimitive } from 'radix-ui'
import * as React from 'react'

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'wuhanui:z-50 wuhanui:flex wuhanui:w-72 wuhanui:origin-(--radix-popover-content-transform-origin) wuhanui:flex-col wuhanui:gap-4 wuhanui:rounded-md wuhanui:bg-popover wuhanui:p-4 wuhanui:text-sm wuhanui:text-popover-foreground wuhanui:shadow-md wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:outline-hidden wuhanui:duration-100 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

function PopoverHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="popover-header"
      className={cn('wuhanui:flex wuhanui:flex-col wuhanui:gap-1 wuhanui:text-sm', className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <div data-slot="popover-title" className={cn('wuhanui:font-medium', className)} {...props} />
  )
}

function PopoverDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="popover-description"
      className={cn('wuhanui:text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}

import { cn } from '@/lib/utils'
import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

function Drawer({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'wuhanui:fixed wuhanui:inset-0 wuhanui:z-50 wuhanui:bg-black/10 wuhanui:supports-backdrop-filter:backdrop-blur-xs wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0',
        className,
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'wuhanui:group/drawer-content wuhanui:fixed wuhanui:z-50 wuhanui:flex wuhanui:h-auto wuhanui:flex-col wuhanui:bg-background wuhanui:text-sm wuhanui:data-[vaul-drawer-direction=bottom]:inset-x-0 wuhanui:data-[vaul-drawer-direction=bottom]:bottom-0 wuhanui:data-[vaul-drawer-direction=bottom]:mt-24 wuhanui:data-[vaul-drawer-direction=bottom]:max-h-[80vh] wuhanui:data-[vaul-drawer-direction=bottom]:rounded-t-xl wuhanui:data-[vaul-drawer-direction=bottom]:border-t wuhanui:data-[vaul-drawer-direction=left]:inset-y-0 wuhanui:data-[vaul-drawer-direction=left]:left-0 wuhanui:data-[vaul-drawer-direction=left]:w-3/4 wuhanui:data-[vaul-drawer-direction=left]:rounded-r-xl wuhanui:data-[vaul-drawer-direction=left]:border-r wuhanui:data-[vaul-drawer-direction=right]:inset-y-0 wuhanui:data-[vaul-drawer-direction=right]:right-0 wuhanui:data-[vaul-drawer-direction=right]:w-3/4 wuhanui:data-[vaul-drawer-direction=right]:rounded-l-xl wuhanui:data-[vaul-drawer-direction=right]:border-l wuhanui:data-[vaul-drawer-direction=top]:inset-x-0 wuhanui:data-[vaul-drawer-direction=top]:top-0 wuhanui:data-[vaul-drawer-direction=top]:mb-24 wuhanui:data-[vaul-drawer-direction=top]:max-h-[80vh] wuhanui:data-[vaul-drawer-direction=top]:rounded-b-xl wuhanui:data-[vaul-drawer-direction=top]:border-b wuhanui:data-[vaul-drawer-direction=left]:sm:max-w-sm wuhanui:data-[vaul-drawer-direction=right]:sm:max-w-sm',
          className,
        )}
        {...props}
      >
        <div className="wuhanui:mx-auto wuhanui:mt-4 wuhanui:hidden wuhanui:h-1.5 wuhanui:w-[100px] wuhanui:shrink-0 wuhanui:rounded-full wuhanui:bg-muted wuhanui:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'wuhanui:flex wuhanui:flex-col wuhanui:gap-0.5 wuhanui:p-4 wuhanui:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center wuhanui:group-data-[vaul-drawer-direction=top]/drawer-content:text-center wuhanui:md:gap-1.5 wuhanui:md:text-left',
        className,
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        'wuhanui:mt-auto wuhanui:flex wuhanui:flex-col wuhanui:gap-2 wuhanui:p-4',
        className,
      )}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('wuhanui:font-medium wuhanui:text-foreground', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('wuhanui:text-sm wuhanui:text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

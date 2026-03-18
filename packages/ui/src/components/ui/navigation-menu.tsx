import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui'
import * as React from 'react'

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'wuhanui:group/navigation-menu wuhanui:relative wuhanui:flex wuhanui:max-w-max wuhanui:flex-1 wuhanui:items-center wuhanui:justify-center',
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'wuhanui:group wuhanui:flex wuhanui:flex-1 wuhanui:list-none wuhanui:items-center wuhanui:justify-center wuhanui:gap-0',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('wuhanui:relative', className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  'wuhanui:group/navigation-menu-trigger wuhanui:inline-flex wuhanui:h-9 wuhanui:w-max wuhanui:items-center wuhanui:justify-center wuhanui:rounded-md wuhanui:bg-background wuhanui:px-4 wuhanui:py-2 wuhanui:text-sm wuhanui:font-medium wuhanui:transition-all wuhanui:outline-none wuhanui:hover:bg-muted wuhanui:focus:bg-muted wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:focus-visible:outline-1 wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50 wuhanui:data-popup-open:bg-muted/50 wuhanui:data-popup-open:hover:bg-muted wuhanui:data-open:bg-muted/50 wuhanui:data-open:hover:bg-muted wuhanui:data-open:focus:bg-muted',
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'wuhanui:group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="wuhanui:relative wuhanui:top-px wuhanui:ml-1 wuhanui:size-3 wuhanui:transition wuhanui:duration-300 wuhanui:group-data-popup-open/navigation-menu-trigger:rotate-180 wuhanui:group-data-open/navigation-menu-trigger:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'wuhanui:top-0 wuhanui:left-0 wuhanui:w-full wuhanui:p-2 wuhanui:pr-2.5 wuhanui:ease-[cubic-bezier(0.22,1,0.36,1)] wuhanui:group-data-[viewport=false]/navigation-menu:top-full wuhanui:group-data-[viewport=false]/navigation-menu:mt-1.5 wuhanui:group-data-[viewport=false]/navigation-menu:overflow-hidden wuhanui:group-data-[viewport=false]/navigation-menu:rounded-md wuhanui:group-data-[viewport=false]/navigation-menu:bg-popover wuhanui:group-data-[viewport=false]/navigation-menu:text-popover-foreground wuhanui:group-data-[viewport=false]/navigation-menu:shadow wuhanui:group-data-[viewport=false]/navigation-menu:ring-1 wuhanui:group-data-[viewport=false]/navigation-menu:ring-foreground/10 wuhanui:group-data-[viewport=false]/navigation-menu:duration-300 wuhanui:data-[motion=from-end]:slide-in-from-right-52 wuhanui:data-[motion=from-start]:slide-in-from-left-52 wuhanui:data-[motion=to-end]:slide-out-to-right-52 wuhanui:data-[motion=to-start]:slide-out-to-left-52 wuhanui:data-[motion^=from-]:animate-in wuhanui:data-[motion^=from-]:fade-in wuhanui:data-[motion^=to-]:animate-out wuhanui:data-[motion^=to-]:fade-out wuhanui:**:data-[slot=navigation-menu-link]:focus:ring-0 wuhanui:**:data-[slot=navigation-menu-link]:focus:outline-none wuhanui:md:absolute wuhanui:md:w-auto wuhanui:group-data-[viewport=false]/navigation-menu:data-open:animate-in wuhanui:group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 wuhanui:group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 wuhanui:group-data-[viewport=false]/navigation-menu:data-closed:animate-out wuhanui:group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 wuhanui:group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        'wuhanui:absolute wuhanui:top-full wuhanui:left-0 wuhanui:isolate wuhanui:z-50 wuhanui:flex wuhanui:justify-center',
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'wuhanui:origin-top-center wuhanui:relative wuhanui:mt-1.5 wuhanui:h-(--radix-navigation-menu-viewport-height) wuhanui:w-full wuhanui:overflow-hidden wuhanui:rounded-lg wuhanui:bg-popover wuhanui:text-popover-foreground wuhanui:shadow wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:md:w-(--radix-navigation-menu-viewport-width) wuhanui:data-open:animate-in wuhanui:data-open:zoom-in-90 wuhanui:data-closed:animate-out wuhanui:data-closed:zoom-out-90',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        'wuhanui:flex wuhanui:items-center wuhanui:gap-1.5 wuhanui:rounded-sm wuhanui:p-2 wuhanui:text-sm wuhanui:transition-all wuhanui:outline-none wuhanui:hover:bg-muted wuhanui:focus:bg-muted wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:focus-visible:outline-1 wuhanui:data-[active=true]:bg-muted/50 wuhanui:data-[active=true]:hover:bg-muted wuhanui:data-[active=true]:focus:bg-muted wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'wuhanui:top-full wuhanui:z-1 wuhanui:flex wuhanui:h-1.5 wuhanui:items-end wuhanui:justify-center wuhanui:overflow-hidden wuhanui:data-[state=hidden]:animate-out wuhanui:data-[state=hidden]:fade-out wuhanui:data-[state=visible]:animate-in wuhanui:data-[state=visible]:fade-in',
        className,
      )}
      {...props}
    >
      <div className="wuhanui:relative wuhanui:top-[60%] wuhanui:h-2 wuhanui:w-2 wuhanui:rotate-45 wuhanui:rounded-tl-sm wuhanui:bg-border wuhanui:shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

'use client'

import { cn } from '@/lib/utils'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import { Menubar as MenubarPrimitive } from 'radix-ui'
import * as React from 'react'

function Menubar({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        'wuhanui:flex wuhanui:h-9 wuhanui:items-center wuhanui:gap-1 wuhanui:rounded-md wuhanui:border wuhanui:p-1 wuhanui:shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        'wuhanui:flex wuhanui:items-center wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1 wuhanui:text-sm wuhanui:font-medium wuhanui:outline-hidden wuhanui:select-none wuhanui:hover:bg-muted wuhanui:aria-expanded:bg-muted',
        className,
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'wuhanui:dark wuhanui: wuhanui:z-50 wuhanui:min-w-36 wuhanui:origin-(--radix-menubar-content-transform-origin) wuhanui:overflow-hidden wuhanui:rounded-md wuhanui:bg-popover wuhanui:p-1 wuhanui:text-popover-foreground wuhanui:shadow-md wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95',
          className,
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        'wuhanui:group/menubar-item wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:not-data-[variant=destructive]:focus:**:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-[variant=destructive]:text-destructive wuhanui:data-[variant=destructive]:focus:bg-destructive/10 wuhanui:data-[variant=destructive]:focus:text-destructive wuhanui:dark:data-[variant=destructive]:focus:bg-destructive/20 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4 wuhanui:data-[variant=destructive]:*:[svg]:text-destructive!',
        className,
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-md wuhanui:py-1.5 wuhanui:pr-2 wuhanui:pl-8 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:focus:**:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-disabled:pointer-events-none wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:left-2 wuhanui:flex wuhanui:size-4 wuhanui:items-center wuhanui:justify-center wuhanui:[&_svg:not([class*=size-])]:size-4">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-md wuhanui:py-1.5 wuhanui:pr-2 wuhanui:pl-8 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:focus:**:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      <span className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:left-2 wuhanui:flex wuhanui:size-4 wuhanui:items-center wuhanui:justify-center wuhanui:[&_svg:not([class*=size-])]:size-4">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        'wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:font-medium wuhanui:data-inset:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn('wuhanui:-mx-1 wuhanui:my-1 wuhanui:h-px wuhanui:bg-border', className)}
      {...props}
    />
  )
}

function MenubarShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        'wuhanui:ml-auto wuhanui:text-xs wuhanui:tracking-widest wuhanui:text-muted-foreground wuhanui:group-focus/menubar-item:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        'wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:outline-none wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-open:bg-accent wuhanui:data-open:text-accent-foreground wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="wuhanui: wuhanui:ml-auto wuhanui:size-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        'wuhanui:dark wuhanui: wuhanui:z-50 wuhanui:min-w-32 wuhanui:origin-(--radix-menubar-content-transform-origin) wuhanui:overflow-hidden wuhanui:rounded-md wuhanui:bg-popover wuhanui:p-1 wuhanui:text-popover-foreground wuhanui:shadow-lg wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
        className,
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}

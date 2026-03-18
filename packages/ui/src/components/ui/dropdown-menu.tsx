'use client'

import { cn } from '@/lib/utils'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui'
import * as React from 'react'

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  className,
  align = 'start',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(
          'wuhanui:dark wuhanui: wuhanui:z-50 wuhanui:max-h-(--radix-dropdown-menu-content-available-height) wuhanui:w-(--radix-dropdown-menu-trigger-width) wuhanui:min-w-32 wuhanui:origin-(--radix-dropdown-menu-content-transform-origin) wuhanui:overflow-x-hidden wuhanui:overflow-y-auto wuhanui:rounded-md wuhanui:bg-popover wuhanui:p-1 wuhanui:text-popover-foreground wuhanui:shadow-md wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-[state=closed]:overflow-hidden wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        'wuhanui:group/dropdown-menu-item wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:not-data-[variant=destructive]:focus:**:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-[variant=destructive]:text-destructive wuhanui:data-[variant=destructive]:focus:bg-destructive/10 wuhanui:data-[variant=destructive]:focus:text-destructive wuhanui:dark:data-[variant=destructive]:focus:bg-destructive/20 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4 wuhanui:data-[variant=destructive]:*:[svg]:text-destructive',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:py-1.5 wuhanui:pr-8 wuhanui:pl-2 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:focus:**:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span
        className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:right-2 wuhanui:flex wuhanui:items-center wuhanui:justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:py-1.5 wuhanui:pr-8 wuhanui:pl-2 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:focus:**:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      <span
        className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:right-2 wuhanui:flex wuhanui:items-center wuhanui:justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-xs wuhanui:font-medium wuhanui:text-muted-foreground wuhanui:data-inset:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('wuhanui:-mx-1 wuhanui:my-1 wuhanui:h-px wuhanui:bg-border', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'wuhanui:ml-auto wuhanui:text-xs wuhanui:tracking-widest wuhanui:text-muted-foreground wuhanui:group-focus/dropdown-menu-item:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        'wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:not-data-[variant=destructive]:focus:**:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-open:bg-accent wuhanui:data-open:text-accent-foreground wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="wuhanui: wuhanui:ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'wuhanui:dark wuhanui: wuhanui:z-50 wuhanui:min-w-[96px] wuhanui:origin-(--radix-dropdown-menu-content-transform-origin) wuhanui:overflow-hidden wuhanui:rounded-md wuhanui:bg-popover wuhanui:p-1 wuhanui:text-popover-foreground wuhanui:shadow-lg wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
        className,
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

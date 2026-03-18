import { cn } from '@/lib/utils'
import { ChevronRightIcon, CheckIcon } from 'lucide-react'
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui'
import * as React from 'react'

function ContextMenu({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn('wuhanui:select-none', className)}
      {...props}
    />
  )
}

function ContextMenuGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
}

function ContextMenuPortal({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
}

function ContextMenuSub({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          'wuhanui:dark wuhanui: wuhanui:z-50 wuhanui:max-h-(--radix-context-menu-content-available-height) wuhanui:min-w-36 wuhanui:origin-(--radix-context-menu-content-transform-origin) wuhanui:overflow-x-hidden wuhanui:overflow-y-auto wuhanui:rounded-md wuhanui:bg-popover wuhanui:p-1 wuhanui:text-popover-foreground wuhanui:shadow-md wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        'wuhanui:group/context-menu-item wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-[variant=destructive]:text-destructive wuhanui:data-[variant=destructive]:focus:bg-destructive/10 wuhanui:data-[variant=destructive]:focus:text-destructive wuhanui:dark:data-[variant=destructive]:focus:bg-destructive/20 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4 wuhanui:focus:*:[svg]:text-accent-foreground wuhanui:data-[variant=destructive]:*:[svg]:text-destructive',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        'wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-open:bg-accent wuhanui:data-open:text-accent-foreground wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="wuhanui: wuhanui:ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'wuhanui:dark wuhanui: wuhanui:z-50 wuhanui:min-w-32 wuhanui:origin-(--radix-context-menu-content-transform-origin) wuhanui:overflow-hidden wuhanui:rounded-md wuhanui:border wuhanui:bg-popover wuhanui:p-1 wuhanui:text-popover-foreground wuhanui:shadow-lg wuhanui:duration-100 wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:py-1.5 wuhanui:pr-8 wuhanui:pl-2 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:right-2">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:py-1.5 wuhanui:pr-8 wuhanui:pl-2 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:data-inset:pl-8 wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      <span className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:right-2">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-xs wuhanui:font-medium wuhanui:text-muted-foreground wuhanui:data-inset:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('wuhanui:-mx-1 wuhanui:my-1 wuhanui:h-px wuhanui:bg-border', className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'wuhanui:ml-auto wuhanui:text-xs wuhanui:tracking-widest wuhanui:text-muted-foreground wuhanui:group-focus/context-menu-item:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

'use client'

import { cn } from '@/lib/utils'
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from 'lucide-react'
import { Select as SelectPrimitive } from 'radix-ui'
import * as React from 'react'

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn('wuhanui:scroll-my-1 wuhanui:p-1', className)}
      {...props}
    />
  )
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        'wuhanui:flex wuhanui:w-fit wuhanui:items-center wuhanui:justify-between wuhanui:gap-1.5 wuhanui:rounded-md wuhanui:border wuhanui:border-input wuhanui:bg-transparent wuhanui:py-2 wuhanui:pr-2 wuhanui:pl-2.5 wuhanui:text-sm wuhanui:whitespace-nowrap wuhanui:shadow-xs wuhanui:transition-[color,box-shadow] wuhanui:outline-none wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:disabled:cursor-not-allowed wuhanui:disabled:opacity-50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:data-placeholder:text-muted-foreground wuhanui:data-[size=default]:h-9 wuhanui:data-[size=sm]:h-8 wuhanui:*:data-[slot=select-value]:line-clamp-1 wuhanui:*:data-[slot=select-value]:flex wuhanui:*:data-[slot=select-value]:items-center wuhanui:*:data-[slot=select-value]:gap-1.5 wuhanui:dark:bg-input/30 wuhanui:dark:hover:bg-input/50 wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="wuhanui:pointer-events-none wuhanui:size-4 wuhanui:text-muted-foreground" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'item-aligned',
  align = 'center',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-align-trigger={position === 'item-aligned'}
        className={cn(
          'wuhanui:dark wuhanui: wuhanui:relative wuhanui:z-50 wuhanui:max-h-(--radix-select-content-available-height) wuhanui:min-w-36 wuhanui:origin-(--radix-select-content-transform-origin) wuhanui:overflow-x-hidden wuhanui:overflow-y-auto wuhanui:rounded-md wuhanui:bg-popover wuhanui:text-popover-foreground wuhanui:shadow-md wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:data-[align-trigger=true]:animate-none wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
          position === 'popper' &&
            'wuhanui:data-[side=bottom]:translate-y-1 wuhanui:data-[side=left]:-translate-x-1 wuhanui:data-[side=right]:translate-x-1 wuhanui:data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-position={position}
          className={cn(
            'wuhanui:data-[position=popper]:h-(--radix-select-trigger-height) wuhanui:data-[position=popper]:w-full wuhanui:data-[position=popper]:min-w-(--radix-select-trigger-width)',
            position === 'popper' && 'wuhanui:',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        'wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-xs wuhanui:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:w-full wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:py-1.5 wuhanui:pr-8 wuhanui:pl-2 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:focus:bg-accent wuhanui:focus:text-accent-foreground wuhanui:not-data-[variant=destructive]:focus:**:text-accent-foreground wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4 wuhanui:*:[span]:last:flex wuhanui:*:[span]:last:items-center wuhanui:*:[span]:last:gap-2',
        className,
      )}
      {...props}
    >
      <span className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:right-2 wuhanui:flex wuhanui:size-4 wuhanui:items-center wuhanui:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="wuhanui:pointer-events-none" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        'wuhanui:pointer-events-none wuhanui:-mx-1 wuhanui:my-1 wuhanui:h-px wuhanui:bg-border',
        className,
      )}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'wuhanui:z-10 wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:justify-center wuhanui:bg-popover wuhanui:py-1 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'wuhanui:z-10 wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:justify-center wuhanui:bg-popover wuhanui:py-1 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

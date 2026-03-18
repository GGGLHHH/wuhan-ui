'use client'

import { Button } from '@/components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { cn } from '@/lib/utils'
import { Combobox as ComboboxPrimitive } from '@base-ui/react'
import { ChevronDownIcon, XIcon, CheckIcon } from 'lucide-react'
import * as React from 'react'

const Combobox = ComboboxPrimitive.Root

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({ className, children, ...props }: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn('wuhanui:[&_svg:not([class*=size-])]:size-4', className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="wuhanui:pointer-events-none wuhanui:size-4 wuhanui:text-muted-foreground" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="wuhanui:pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
    <InputGroup className={cn('wuhanui:w-auto', className)}>
      <ComboboxPrimitive.Input render={<InputGroupInput disabled={disabled} />} {...props} />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            asChild
            data-slot="input-group-button"
            className="wuhanui:group-has-data-[slot=combobox-clear]/input-group:hidden wuhanui:data-pressed:bg-transparent"
            disabled={disabled}
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = 'bottom',
  sideOffset = 6,
  align = 'start',
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    'side' | 'align' | 'sideOffset' | 'alignOffset' | 'anchor'
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="wuhanui:isolate wuhanui:z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(
            'wuhanui:dark wuhanui: wuhanui:group/combobox-content wuhanui:relative wuhanui:max-h-(--available-height) wuhanui:w-(--anchor-width) wuhanui:max-w-(--available-width) wuhanui:min-w-[calc(var(--anchor-width)+--spacing(7))] wuhanui:origin-(--transform-origin) wuhanui:overflow-hidden wuhanui:rounded-md wuhanui:bg-popover wuhanui:text-popover-foreground wuhanui:shadow-md wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:data-[chips=true]:min-w-(--anchor-width) wuhanui:data-[side=bottom]:slide-in-from-top-2 wuhanui:data-[side=inline-end]:slide-in-from-left-2 wuhanui:data-[side=inline-start]:slide-in-from-right-2 wuhanui:data-[side=left]:slide-in-from-right-2 wuhanui:data-[side=right]:slide-in-from-left-2 wuhanui:data-[side=top]:slide-in-from-bottom-2 wuhanui:*:data-[slot=input-group]:m-1 wuhanui:*:data-[slot=input-group]:mb-0 wuhanui:*:data-[slot=input-group]:h-8 wuhanui:*:data-[slot=input-group]:border-input/30 wuhanui:*:data-[slot=input-group]:bg-input/30 wuhanui:*:data-[slot=input-group]:shadow-none wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
            className,
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        'wuhanui:no-scrollbar wuhanui:max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] wuhanui:scroll-py-1 wuhanui:overflow-y-auto wuhanui:overscroll-contain wuhanui:p-1 wuhanui:data-empty:p-0',
        className,
      )}
      {...props}
    />
  )
}

function ComboboxItem({ className, children, ...props }: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:w-full wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:py-1.5 wuhanui:pr-8 wuhanui:pl-2 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:data-highlighted:bg-accent wuhanui:data-highlighted:text-accent-foreground wuhanui:not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground wuhanui:data-disabled:pointer-events-none wuhanui:data-disabled:opacity-50 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:right-2 wuhanui:flex wuhanui:size-4 wuhanui:items-center wuhanui:justify-center" />
        }
      >
        <CheckIcon className="wuhanui:pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return <ComboboxPrimitive.Group data-slot="combobox-group" className={cn(className)} {...props} />
}

function ComboboxLabel({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn(
        'wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-xs wuhanui:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        'wuhanui:hidden wuhanui:w-full wuhanui:justify-center wuhanui:py-2 wuhanui:text-center wuhanui:text-sm wuhanui:text-muted-foreground wuhanui:group-data-empty/combobox-content:flex',
        className,
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({ className, ...props }: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn('wuhanui:-mx-1 wuhanui:my-1 wuhanui:h-px wuhanui:bg-border', className)}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> & ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        'wuhanui:flex wuhanui:min-h-9 wuhanui:flex-wrap wuhanui:items-center wuhanui:gap-1.5 wuhanui:rounded-md wuhanui:border wuhanui:border-input wuhanui:bg-transparent wuhanui:bg-clip-padding wuhanui:px-2.5 wuhanui:py-1.5 wuhanui:text-sm wuhanui:shadow-xs wuhanui:transition-[color,box-shadow] wuhanui:focus-within:border-ring wuhanui:focus-within:ring-3 wuhanui:focus-within:ring-ring/50 wuhanui:has-aria-invalid:border-destructive wuhanui:has-aria-invalid:ring-3 wuhanui:has-aria-invalid:ring-destructive/20 wuhanui:has-data-[slot=combobox-chip]:px-1.5 wuhanui:dark:bg-input/30 wuhanui:dark:has-aria-invalid:border-destructive/50 wuhanui:dark:has-aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        'wuhanui:flex wuhanui:h-[calc(--spacing(5.5))] wuhanui:w-fit wuhanui:items-center wuhanui:justify-center wuhanui:gap-1 wuhanui:rounded-sm wuhanui:bg-muted wuhanui:px-1.5 wuhanui:text-xs wuhanui:font-medium wuhanui:whitespace-nowrap wuhanui:text-foreground wuhanui:has-disabled:pointer-events-none wuhanui:has-disabled:cursor-not-allowed wuhanui:has-disabled:opacity-50 wuhanui:has-data-[slot=combobox-chip-remove]:pr-0',
        className,
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="wuhanui:-ml-1 wuhanui:opacity-50 wuhanui:hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="wuhanui:pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn('wuhanui:min-w-16 wuhanui:flex-1 wuhanui:outline-none', className)}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}

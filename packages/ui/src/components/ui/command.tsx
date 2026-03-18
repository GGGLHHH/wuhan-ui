import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { InputGroup, InputGroupAddon } from '@/components/ui/input-group'
import { cn } from '@/lib/utils'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon, CheckIcon } from 'lucide-react'
import * as React from 'react'

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'wuhanui:flex wuhanui:size-full wuhanui:flex-col wuhanui:overflow-hidden wuhanui:rounded-xl! wuhanui:bg-popover wuhanui:p-1 wuhanui:text-popover-foreground',
        className,
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="wuhanui:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          'wuhanui:top-1/3 wuhanui:translate-y-0 wuhanui:overflow-hidden wuhanui:rounded-xl! wuhanui:p-0',
          className,
        )}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="wuhanui:p-1 wuhanui:pb-0">
      <InputGroup className="wuhanui:h-8! wuhanui:rounded-lg! wuhanui:border-input/30 wuhanui:bg-input/30 wuhanui:shadow-none! wuhanui:*:data-[slot=input-group-addon]:pl-2!">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            'wuhanui:w-full wuhanui:text-sm wuhanui:outline-hidden wuhanui:disabled:cursor-not-allowed wuhanui:disabled:opacity-50',
            className,
          )}
          {...props}
        />
        <InputGroupAddon>
          <SearchIcon className="wuhanui:size-4 wuhanui:shrink-0 wuhanui:opacity-50" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'wuhanui:no-scrollbar wuhanui:max-h-72 wuhanui:scroll-py-1 wuhanui:overflow-x-hidden wuhanui:overflow-y-auto wuhanui:outline-none',
        className,
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn('wuhanui:py-6 wuhanui:text-center wuhanui:text-sm', className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'wuhanui:overflow-hidden wuhanui:p-1 wuhanui:text-foreground wuhanui:**:[[cmdk-group-heading]]:px-2 wuhanui:**:[[cmdk-group-heading]]:py-1.5 wuhanui:**:[[cmdk-group-heading]]:text-xs wuhanui:**:[[cmdk-group-heading]]:font-medium wuhanui:**:[[cmdk-group-heading]]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('wuhanui:-mx-1 wuhanui:h-px wuhanui:w-auto wuhanui:bg-border', className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        'wuhanui:group/command-item wuhanui:relative wuhanui:flex wuhanui:cursor-default wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-sm wuhanui:px-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:outline-hidden wuhanui:select-none wuhanui:in-data-[slot=dialog-content]:rounded-lg! wuhanui:data-[disabled=true]:pointer-events-none wuhanui:data-[disabled=true]:opacity-50 wuhanui:data-selected:bg-muted wuhanui:data-selected:text-foreground wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4 wuhanui:data-selected:**:[svg]:text-foreground',
        className,
      )}
      {...props}
    >
      {children}
      <CheckIcon className="wuhanui:ml-auto wuhanui:opacity-0 wuhanui:group-has-data-[slot=command-shortcut]/command-item:hidden wuhanui:group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        'wuhanui:ml-auto wuhanui:text-xs wuhanui:tracking-widest wuhanui:text-muted-foreground wuhanui:group-data-selected/command-item:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

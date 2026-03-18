import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui'
import * as React from 'react'

function AlertDialog({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogPortal({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'wuhanui:fixed wuhanui:inset-0 wuhanui:z-50 wuhanui:bg-black/10 wuhanui:duration-100 wuhanui:supports-backdrop-filter:backdrop-blur-xs wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  size?: 'default' | 'sm'
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          'wuhanui:group/alert-dialog-content wuhanui:fixed wuhanui:top-1/2 wuhanui:left-1/2 wuhanui:z-50 wuhanui:grid wuhanui:w-full wuhanui:-translate-x-1/2 wuhanui:-translate-y-1/2 wuhanui:gap-6 wuhanui:rounded-xl wuhanui:bg-background wuhanui:p-6 wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:outline-none wuhanui:data-[size=default]:max-w-xs wuhanui:data-[size=sm]:max-w-xs wuhanui:data-[size=default]:sm:max-w-lg wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        'wuhanui:grid wuhanui:grid-rows-[auto_1fr] wuhanui:place-items-center wuhanui:gap-1.5 wuhanui:text-center wuhanui:has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] wuhanui:has-data-[slot=alert-dialog-media]:gap-x-6 wuhanui:sm:group-data-[size=default]/alert-dialog-content:place-items-start wuhanui:sm:group-data-[size=default]/alert-dialog-content:text-left wuhanui:sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'wuhanui:flex wuhanui:flex-col-reverse wuhanui:gap-2 wuhanui:group-data-[size=sm]/alert-dialog-content:grid wuhanui:group-data-[size=sm]/alert-dialog-content:grid-cols-2 wuhanui:sm:flex-row wuhanui:sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        'wuhanui:mb-2 wuhanui:inline-flex wuhanui:size-16 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-md wuhanui:bg-muted wuhanui:sm:group-data-[size=default]/alert-dialog-content:row-span-2 wuhanui:*:[svg:not([class*=size-])]:size-8',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        'wuhanui:text-lg wuhanui:font-medium wuhanui:sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        'wuhanui:text-sm wuhanui:text-balance wuhanui:text-muted-foreground wuhanui:md:text-pretty wuhanui:*:[a]:underline wuhanui:*:[a]:underline-offset-3 wuhanui:*:[a]:hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> &
  Pick<React.ComponentProps<typeof Button>, 'variant' | 'size'>) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

function AlertDialogCancel({
  className,
  variant = 'outline',
  size = 'default',
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
  Pick<React.ComponentProps<typeof Button>, 'variant' | 'size'>) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}

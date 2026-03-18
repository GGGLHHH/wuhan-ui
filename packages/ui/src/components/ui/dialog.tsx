'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { XIcon } from 'lucide-react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import * as React from 'react'

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'wuhanui:fixed wuhanui:inset-0 wuhanui:isolate wuhanui:z-50 wuhanui:bg-black/10 wuhanui:duration-100 wuhanui:supports-backdrop-filter:backdrop-blur-xs wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0',
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'wuhanui:fixed wuhanui:top-1/2 wuhanui:left-1/2 wuhanui:z-50 wuhanui:grid wuhanui:w-full wuhanui:max-w-[calc(100%-2rem)] wuhanui:-translate-x-1/2 wuhanui:-translate-y-1/2 wuhanui:gap-6 wuhanui:rounded-xl wuhanui:bg-background wuhanui:p-6 wuhanui:text-sm wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:duration-100 wuhanui:outline-none wuhanui:sm:max-w-md wuhanui:data-open:animate-in wuhanui:data-open:fade-in-0 wuhanui:data-open:zoom-in-95 wuhanui:data-closed:animate-out wuhanui:data-closed:fade-out-0 wuhanui:data-closed:zoom-out-95',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              className="wuhanui:absolute wuhanui:top-4 wuhanui:right-4"
              size="icon-sm"
            >
              <XIcon />
              <span className="wuhanui:sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('wuhanui:flex wuhanui:flex-col wuhanui:gap-2', className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'wuhanui:flex wuhanui:flex-col-reverse wuhanui:gap-2 wuhanui:sm:flex-row wuhanui:sm:justify-end',
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('wuhanui:leading-none wuhanui:font-medium', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        'wuhanui:text-sm wuhanui:text-muted-foreground wuhanui:*:[a]:underline wuhanui:*:[a]:underline-offset-3 wuhanui:*:[a]:hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

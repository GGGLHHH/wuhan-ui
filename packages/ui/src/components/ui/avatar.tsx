import { cn } from '@/lib/utils'
import { Avatar as AvatarPrimitive } from 'radix-ui'
import * as React from 'react'

function Avatar({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: 'default' | 'sm' | 'lg'
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        'wuhanui:group/avatar wuhanui:relative wuhanui:flex wuhanui:size-8 wuhanui:shrink-0 wuhanui:rounded-full wuhanui:select-none wuhanui:after:absolute wuhanui:after:inset-0 wuhanui:after:rounded-full wuhanui:after:border wuhanui:after:border-border wuhanui:after:mix-blend-darken wuhanui:data-[size=lg]:size-10 wuhanui:data-[size=sm]:size-6 wuhanui:dark:after:mix-blend-lighten',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        'wuhanui:aspect-square wuhanui:size-full wuhanui:rounded-full wuhanui:object-cover',
        className,
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'wuhanui:flex wuhanui:size-full wuhanui:items-center wuhanui:justify-center wuhanui:rounded-full wuhanui:bg-muted wuhanui:text-sm wuhanui:text-muted-foreground wuhanui:group-data-[size=sm]/avatar:text-xs',
        className,
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        'wuhanui:absolute wuhanui:right-0 wuhanui:bottom-0 wuhanui:z-10 wuhanui:inline-flex wuhanui:items-center wuhanui:justify-center wuhanui:rounded-full wuhanui:bg-primary wuhanui:text-primary-foreground wuhanui:bg-blend-color wuhanui:ring-2 wuhanui:ring-background wuhanui:select-none',
        'wuhanui:group-data-[size=sm]/avatar:size-2 wuhanui:group-data-[size=sm]/avatar:[&>svg]:hidden',
        'wuhanui:group-data-[size=default]/avatar:size-2.5 wuhanui:group-data-[size=default]/avatar:[&>svg]:size-2',
        'wuhanui:group-data-[size=lg]/avatar:size-3 wuhanui:group-data-[size=lg]/avatar:[&>svg]:size-2',
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        'wuhanui:group/avatar-group wuhanui:flex wuhanui:-space-x-2 wuhanui:*:data-[slot=avatar]:ring-2 wuhanui:*:data-[slot=avatar]:ring-background',
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:size-8 wuhanui:shrink-0 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-full wuhanui:bg-muted wuhanui:text-sm wuhanui:text-muted-foreground wuhanui:ring-2 wuhanui:ring-background wuhanui:group-has-data-[size=lg]/avatar-group:size-10 wuhanui:group-has-data-[size=sm]/avatar-group:size-6 wuhanui:[&>svg]:size-4 wuhanui:group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 wuhanui:group-has-data-[size=sm]/avatar-group:[&>svg]:size-3',
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge }

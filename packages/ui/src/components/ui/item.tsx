import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

function ItemGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn(
        'wuhanui:group/item-group wuhanui:flex wuhanui:w-full wuhanui:flex-col wuhanui:gap-4 wuhanui:has-data-[size=sm]:gap-2.5 wuhanui:has-data-[size=xs]:gap-2',
        className,
      )}
      {...props}
    />
  )
}

function ItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('wuhanui:my-2', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'wuhanui:group/item wuhanui:flex wuhanui:w-full wuhanui:flex-wrap wuhanui:items-center wuhanui:rounded-md wuhanui:border wuhanui:text-sm wuhanui:transition-colors wuhanui:duration-100 wuhanui:outline-none wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-[3px] wuhanui:focus-visible:ring-ring/50 wuhanui:[a]:transition-colors wuhanui:[a]:hover:bg-muted',
  {
    variants: {
      variant: {
        default: 'wuhanui:border-transparent',
        outline: 'wuhanui:border-border',
        muted: 'wuhanui:border-transparent wuhanui:bg-muted/50',
      },
      size: {
        default: 'wuhanui:gap-3.5 wuhanui:px-4 wuhanui:py-3.5',
        sm: 'wuhanui:gap-2.5 wuhanui:px-3 wuhanui:py-2.5',
        xs: 'wuhanui:gap-2 wuhanui:px-2.5 wuhanui:py-2 wuhanui:in-data-[slot=dropdown-menu-content]:p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'div'
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'wuhanui:flex wuhanui:shrink-0 wuhanui:items-center wuhanui:justify-center wuhanui:gap-2 wuhanui:group-has-data-[slot=item-description]/item:translate-y-0.5 wuhanui:group-has-data-[slot=item-description]/item:self-start wuhanui:[&_svg]:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'wuhanui:bg-transparent',
        icon: 'wuhanui:[&_svg:not([class*=size-])]:size-4',
        image:
          'wuhanui:size-10 wuhanui:overflow-hidden wuhanui:rounded-sm wuhanui:group-data-[size=sm]/item:size-8 wuhanui:group-data-[size=xs]/item:size-6 wuhanui:[&_img]:size-full wuhanui:[&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function ItemMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'wuhanui:flex wuhanui:flex-1 wuhanui:flex-col wuhanui:gap-1 wuhanui:group-data-[size=xs]/item:gap-0 wuhanui:[&+[data-slot=item-content]]:flex-none',
        className,
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'wuhanui:line-clamp-1 wuhanui:flex wuhanui:w-fit wuhanui:items-center wuhanui:gap-2 wuhanui:text-sm wuhanui:leading-snug wuhanui:font-medium wuhanui:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'wuhanui:line-clamp-2 wuhanui:text-left wuhanui:text-sm wuhanui:leading-normal wuhanui:font-normal wuhanui:text-muted-foreground wuhanui:group-data-[size=xs]/item:text-xs wuhanui:[&>a]:underline wuhanui:[&>a]:underline-offset-4 wuhanui:[&>a:hover]:text-primary',
        className,
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-actions"
      className={cn('wuhanui:flex wuhanui:items-center wuhanui:gap-2', className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'wuhanui:flex wuhanui:basis-full wuhanui:items-center wuhanui:justify-between wuhanui:gap-2',
        className,
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'wuhanui:flex wuhanui:basis-full wuhanui:items-center wuhanui:justify-between wuhanui:gap-2',
        className,
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}

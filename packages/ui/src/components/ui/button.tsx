import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

const buttonVariants = cva(
  'wuhanui:group/button wuhanui:inline-flex wuhanui:shrink-0 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-md wuhanui:border wuhanui:border-transparent wuhanui:bg-clip-padding wuhanui:text-sm wuhanui:font-medium wuhanui:whitespace-nowrap wuhanui:transition-all wuhanui:outline-none wuhanui:select-none wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:active:translate-y-px wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
  {
    variants: {
      variant: {
        default: 'wuhanui:bg-primary wuhanui:text-primary-foreground wuhanui:hover:bg-primary/80',
        outline:
          'wuhanui:border-border wuhanui:bg-background wuhanui:shadow-xs wuhanui:hover:bg-muted wuhanui:hover:text-foreground wuhanui:aria-expanded:bg-muted wuhanui:aria-expanded:text-foreground wuhanui:dark:border-input wuhanui:dark:bg-input/30 wuhanui:dark:hover:bg-input/50',
        secondary:
          'wuhanui:bg-secondary wuhanui:text-secondary-foreground wuhanui:hover:bg-secondary/80 wuhanui:aria-expanded:bg-secondary wuhanui:aria-expanded:text-secondary-foreground',
        ghost:
          'wuhanui:hover:bg-muted wuhanui:hover:text-foreground wuhanui:aria-expanded:bg-muted wuhanui:aria-expanded:text-foreground wuhanui:dark:hover:bg-muted/50',
        destructive:
          'wuhanui:bg-destructive/10 wuhanui:text-destructive wuhanui:hover:bg-destructive/20 wuhanui:focus-visible:border-destructive/40 wuhanui:focus-visible:ring-destructive/20 wuhanui:dark:bg-destructive/20 wuhanui:dark:hover:bg-destructive/30 wuhanui:dark:focus-visible:ring-destructive/40',
        link: 'wuhanui:text-primary wuhanui:underline-offset-4 wuhanui:hover:underline',
      },
      size: {
        default:
          'wuhanui:h-9 wuhanui:gap-1.5 wuhanui:px-2.5 wuhanui:in-data-[slot=button-group]:rounded-md wuhanui:has-data-[icon=inline-end]:pr-2 wuhanui:has-data-[icon=inline-start]:pl-2',
        xs: 'wuhanui:h-6 wuhanui:gap-1 wuhanui:rounded-[min(var(--radius-md),8px)] wuhanui:px-2 wuhanui:text-xs wuhanui:in-data-[slot=button-group]:rounded-md wuhanui:has-data-[icon=inline-end]:pr-1.5 wuhanui:has-data-[icon=inline-start]:pl-1.5 wuhanui:[&_svg:not([class*=size-])]:size-3',
        sm: 'wuhanui:h-8 wuhanui:gap-1 wuhanui:rounded-[min(var(--radius-md),10px)] wuhanui:px-2.5 wuhanui:in-data-[slot=button-group]:rounded-md wuhanui:has-data-[icon=inline-end]:pr-1.5 wuhanui:has-data-[icon=inline-start]:pl-1.5',
        lg: 'wuhanui:h-10 wuhanui:gap-1.5 wuhanui:px-2.5 wuhanui:has-data-[icon=inline-end]:pr-3 wuhanui:has-data-[icon=inline-start]:pl-3',
        icon: 'wuhanui:size-9',
        'icon-xs':
          'wuhanui:size-6 wuhanui:rounded-[min(var(--radius-md),8px)] wuhanui:in-data-[slot=button-group]:rounded-md wuhanui:[&_svg:not([class*=size-])]:size-3',
        'icon-sm':
          'wuhanui:size-8 wuhanui:rounded-[min(var(--radius-md),10px)] wuhanui:in-data-[slot=button-group]:rounded-md',
        'icon-lg': 'wuhanui:size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

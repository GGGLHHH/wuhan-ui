import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

const badgeVariants = cva(
  'wuhanui:group/badge wuhanui:inline-flex wuhanui:h-5 wuhanui:w-fit wuhanui:shrink-0 wuhanui:items-center wuhanui:justify-center wuhanui:gap-1 wuhanui:overflow-hidden wuhanui:rounded-4xl wuhanui:border wuhanui:border-transparent wuhanui:px-2 wuhanui:py-0.5 wuhanui:text-xs wuhanui:font-medium wuhanui:whitespace-nowrap wuhanui:transition-all wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-[3px] wuhanui:focus-visible:ring-ring/50 wuhanui:has-data-[icon=inline-end]:pr-1.5 wuhanui:has-data-[icon=inline-start]:pl-1.5 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-destructive/20 wuhanui:dark:aria-invalid:ring-destructive/40 wuhanui:[&>svg]:pointer-events-none wuhanui:[&>svg]:size-3!',
  {
    variants: {
      variant: {
        default:
          'wuhanui:bg-primary wuhanui:text-primary-foreground wuhanui:[a]:hover:bg-primary/80',
        secondary:
          'wuhanui:bg-secondary wuhanui:text-secondary-foreground wuhanui:[a]:hover:bg-secondary/80',
        destructive:
          'wuhanui:bg-destructive/10 wuhanui:text-destructive wuhanui:focus-visible:ring-destructive/20 wuhanui:dark:bg-destructive/20 wuhanui:dark:focus-visible:ring-destructive/40 wuhanui:[a]:hover:bg-destructive/20',
        outline:
          'wuhanui:border-border wuhanui:text-foreground wuhanui:[a]:hover:bg-muted wuhanui:[a]:hover:text-muted-foreground',
        ghost:
          'wuhanui:hover:bg-muted wuhanui:hover:text-muted-foreground wuhanui:dark:hover:bg-muted/50',
        link: 'wuhanui:text-primary wuhanui:underline-offset-4 wuhanui:hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span'

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

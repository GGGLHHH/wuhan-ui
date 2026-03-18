import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const alertVariants = cva(
  'wuhanui:group/alert wuhanui:relative wuhanui:grid wuhanui:w-full wuhanui:gap-0.5 wuhanui:rounded-lg wuhanui:border wuhanui:px-4 wuhanui:py-3 wuhanui:text-left wuhanui:text-sm wuhanui:has-data-[slot=alert-action]:relative wuhanui:has-data-[slot=alert-action]:pr-18 wuhanui:has-[>svg]:grid-cols-[auto_1fr] wuhanui:has-[>svg]:gap-x-2.5 wuhanui:*:[svg]:row-span-2 wuhanui:*:[svg]:translate-y-0.5 wuhanui:*:[svg]:text-current wuhanui:*:[svg:not([class*=size-])]:size-4',
  {
    variants: {
      variant: {
        default: 'wuhanui:bg-card wuhanui:text-card-foreground',
        destructive:
          'wuhanui:bg-card wuhanui:text-destructive wuhanui:*:data-[slot=alert-description]:text-destructive/90 wuhanui:*:[svg]:text-current',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'wuhanui:font-medium wuhanui:group-has-[>svg]/alert:col-start-2 wuhanui:[&_a]:underline wuhanui:[&_a]:underline-offset-3 wuhanui:[&_a]:hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'wuhanui:text-sm wuhanui:text-balance wuhanui:text-muted-foreground wuhanui:md:text-pretty wuhanui:[&_a]:underline wuhanui:[&_a]:underline-offset-3 wuhanui:[&_a]:hover:text-foreground wuhanui:[&_p:not(:last-child)]:mb-4',
        className,
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-action"
      className={cn('wuhanui:absolute wuhanui:top-2.5 wuhanui:right-3', className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }

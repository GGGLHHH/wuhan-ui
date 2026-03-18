import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

function Empty({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty"
      className={cn(
        'wuhanui:flex wuhanui:w-full wuhanui:min-w-0 wuhanui:flex-1 wuhanui:flex-col wuhanui:items-center wuhanui:justify-center wuhanui:gap-4 wuhanui:rounded-lg wuhanui:border-dashed wuhanui:p-12 wuhanui:text-center wuhanui:text-balance',
        className,
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        'wuhanui:flex wuhanui:max-w-sm wuhanui:flex-col wuhanui:items-center wuhanui:gap-2',
        className,
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  'wuhanui:mb-2 wuhanui:flex wuhanui:shrink-0 wuhanui:items-center wuhanui:justify-center wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'wuhanui:bg-transparent',
        icon: 'wuhanui:flex wuhanui:size-10 wuhanui:shrink-0 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-lg wuhanui:bg-muted wuhanui:text-foreground wuhanui:[&_svg:not([class*=size-])]:size-6',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function EmptyMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-title"
      className={cn('wuhanui:text-lg wuhanui:font-medium wuhanui:tracking-tight', className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        'wuhanui:text-sm/relaxed wuhanui:text-muted-foreground wuhanui:[&>a]:underline wuhanui:[&>a]:underline-offset-4 wuhanui:[&>a:hover]:text-primary',
        className,
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'wuhanui:flex wuhanui:w-full wuhanui:max-w-sm wuhanui:min-w-0 wuhanui:flex-col wuhanui:items-center wuhanui:gap-4 wuhanui:text-sm wuhanui:text-balance',
        className,
      )}
      {...props}
    />
  )
}

export { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia }

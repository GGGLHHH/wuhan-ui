import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Toggle as TogglePrimitive } from 'radix-ui'
import * as React from 'react'

const toggleVariants = cva(
  'wuhanui:group/toggle wuhanui:inline-flex wuhanui:items-center wuhanui:justify-center wuhanui:gap-1 wuhanui:rounded-md wuhanui:text-sm wuhanui:font-medium wuhanui:whitespace-nowrap wuhanui:transition-[color,box-shadow] wuhanui:outline-none wuhanui:hover:bg-muted wuhanui:hover:text-foreground wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-[3px] wuhanui:focus-visible:ring-ring/50 wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-destructive/20 wuhanui:aria-pressed:bg-muted wuhanui:dark:aria-invalid:ring-destructive/40 wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
  {
    variants: {
      variant: {
        default: 'wuhanui:bg-transparent',
        outline:
          'wuhanui:border wuhanui:border-input wuhanui:bg-transparent wuhanui:shadow-xs wuhanui:hover:bg-muted',
      },
      size: {
        default: 'wuhanui:h-9 wuhanui:min-w-9 wuhanui:px-2',
        sm: 'wuhanui:h-8 wuhanui:min-w-8 wuhanui:px-1.5',
        lg: 'wuhanui:h-10 wuhanui:min-w-10 wuhanui:px-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }

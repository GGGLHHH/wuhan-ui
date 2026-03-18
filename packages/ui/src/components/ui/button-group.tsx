import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

const buttonGroupVariants = cva(
  'wuhanui:flex wuhanui:w-fit wuhanui:items-stretch wuhanui:*:focus-visible:relative wuhanui:*:focus-visible:z-10 wuhanui:has-[>[data-slot=button-group]]:gap-2 wuhanui:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md wuhanui:[&>[data-slot=select-trigger]:not([class*=w-])]:w-fit wuhanui:[&>input]:flex-1',
  {
    variants: {
      orientation: {
        horizontal:
          'wuhanui:[&>*:not(:first-child)]:rounded-l-none wuhanui:[&>*:not(:first-child)]:border-l-0 wuhanui:[&>*:not(:last-child)]:rounded-r-none wuhanui:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md!',
        vertical:
          'wuhanui:flex-col wuhanui:[&>*:not(:first-child)]:rounded-t-none wuhanui:[&>*:not(:first-child)]:border-t-0 wuhanui:[&>*:not(:last-child)]:rounded-b-none wuhanui:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md!',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      className={cn(
        'wuhanui:flex wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-md wuhanui:border wuhanui:bg-muted wuhanui:px-2.5 wuhanui:text-sm wuhanui:font-medium wuhanui:shadow-xs wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'wuhanui:relative wuhanui:self-stretch wuhanui:bg-input wuhanui:data-horizontal:mx-px wuhanui:data-horizontal:w-auto wuhanui:data-vertical:my-px wuhanui:data-vertical:h-auto',
        className,
      )}
      {...props}
    />
  )
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants }

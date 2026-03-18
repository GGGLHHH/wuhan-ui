import { cn } from '@/lib/utils'

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'wuhanui:pointer-events-none wuhanui:inline-flex wuhanui:h-5 wuhanui:w-fit wuhanui:min-w-5 wuhanui:items-center wuhanui:justify-center wuhanui:gap-1 wuhanui:rounded-sm wuhanui:bg-muted wuhanui:px-1 wuhanui:font-sans wuhanui:text-xs wuhanui:font-medium wuhanui:text-muted-foreground wuhanui:select-none wuhanui:in-data-[slot=tooltip-content]:bg-background/20 wuhanui:in-data-[slot=tooltip-content]:text-background wuhanui:dark:in-data-[slot=tooltip-content]:bg-background/10 wuhanui:[&_svg:not([class*=size-])]:size-3',
        className,
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('wuhanui:inline-flex wuhanui:items-center wuhanui:gap-1', className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }

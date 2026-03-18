import { cn } from '@/lib/utils'
import { Separator as SeparatorPrimitive } from 'radix-ui'
import * as React from 'react'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'wuhanui:shrink-0 wuhanui:bg-border wuhanui:data-horizontal:h-px wuhanui:data-horizontal:w-full wuhanui:data-vertical:w-px wuhanui:data-vertical:self-stretch',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }

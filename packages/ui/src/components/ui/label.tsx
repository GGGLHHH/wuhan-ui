import { cn } from '@/lib/utils'
import { Label as LabelPrimitive } from 'radix-ui'
import * as React from 'react'

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'wuhanui:flex wuhanui:items-center wuhanui:gap-2 wuhanui:text-sm wuhanui:leading-none wuhanui:font-medium wuhanui:select-none wuhanui:group-data-[disabled=true]:pointer-events-none wuhanui:group-data-[disabled=true]:opacity-50 wuhanui:peer-disabled:cursor-not-allowed wuhanui:peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Label }

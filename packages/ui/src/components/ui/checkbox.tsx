import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import * as React from 'react'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'wuhanui:peer wuhanui:relative wuhanui:flex wuhanui:size-4 wuhanui:shrink-0 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-[4px] wuhanui:border wuhanui:border-input wuhanui:shadow-xs wuhanui:transition-shadow wuhanui:outline-none wuhanui:group-has-disabled/field:opacity-50 wuhanui:after:absolute wuhanui:after:-inset-x-3 wuhanui:after:-inset-y-2 wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:disabled:cursor-not-allowed wuhanui:disabled:opacity-50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:aria-invalid:aria-checked:border-primary wuhanui:dark:bg-input/30 wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40 wuhanui:data-checked:border-primary wuhanui:data-checked:bg-primary wuhanui:data-checked:text-primary-foreground wuhanui:dark:data-checked:bg-primary',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="wuhanui:grid wuhanui:place-content-center wuhanui:text-current wuhanui:transition-none wuhanui:[&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

import { cn } from '@/lib/utils'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import * as React from 'react'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('wuhanui:grid wuhanui:w-full wuhanui:gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'wuhanui:group/radio-group-item wuhanui:peer wuhanui:relative wuhanui:flex wuhanui:aspect-square wuhanui:size-4 wuhanui:shrink-0 wuhanui:rounded-full wuhanui:border wuhanui:border-input wuhanui:outline-none wuhanui:after:absolute wuhanui:after:-inset-x-3 wuhanui:after:-inset-y-2 wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:disabled:cursor-not-allowed wuhanui:disabled:opacity-50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:aria-invalid:aria-checked:border-primary wuhanui:dark:bg-input/30 wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40 wuhanui:data-checked:border-primary wuhanui:data-checked:bg-primary wuhanui:data-checked:text-primary-foreground wuhanui:dark:data-checked:bg-primary',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="wuhanui:flex wuhanui:size-4 wuhanui:items-center wuhanui:justify-center"
      >
        <span className="wuhanui:absolute wuhanui:top-1/2 wuhanui:left-1/2 wuhanui:size-2 wuhanui:-translate-x-1/2 wuhanui:-translate-y-1/2 wuhanui:rounded-full wuhanui:bg-primary-foreground" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

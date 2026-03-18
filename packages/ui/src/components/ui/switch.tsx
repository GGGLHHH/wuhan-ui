'use client'

import { cn } from '@/lib/utils'
import { Switch as SwitchPrimitive } from 'radix-ui'
import * as React from 'react'

function Switch({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: 'sm' | 'default'
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        'wuhanui:peer wuhanui:group/switch wuhanui:relative wuhanui:inline-flex wuhanui:shrink-0 wuhanui:items-center wuhanui:rounded-full wuhanui:border wuhanui:border-transparent wuhanui:shadow-xs wuhanui:transition-all wuhanui:outline-none wuhanui:after:absolute wuhanui:after:-inset-x-3 wuhanui:after:-inset-y-2 wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:data-[size=default]:h-[18.4px] wuhanui:data-[size=default]:w-[32px] wuhanui:data-[size=sm]:h-[14px] wuhanui:data-[size=sm]:w-[24px] wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40 wuhanui:data-checked:bg-primary wuhanui:data-unchecked:bg-input wuhanui:dark:data-unchecked:bg-input/80 wuhanui:data-disabled:cursor-not-allowed wuhanui:data-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="wuhanui:pointer-events-none wuhanui:block wuhanui:rounded-full wuhanui:bg-background wuhanui:ring-0 wuhanui:transition-transform wuhanui:group-data-[size=default]/switch:size-4 wuhanui:group-data-[size=sm]/switch:size-3 wuhanui:group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] wuhanui:group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] wuhanui:dark:data-checked:bg-primary-foreground wuhanui:group-data-[size=default]/switch:data-unchecked:translate-x-0 wuhanui:group-data-[size=sm]/switch:data-unchecked:translate-x-0 wuhanui:dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

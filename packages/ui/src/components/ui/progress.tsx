'use client'

import { cn } from '@/lib/utils'
import { Progress as ProgressPrimitive } from 'radix-ui'
import * as React from 'react'

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:h-1.5 wuhanui:w-full wuhanui:items-center wuhanui:overflow-x-hidden wuhanui:rounded-full wuhanui:bg-muted',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="wuhanui:size-full wuhanui:flex-1 wuhanui:bg-primary wuhanui:transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

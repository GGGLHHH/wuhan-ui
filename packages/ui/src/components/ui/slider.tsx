'use client'

import { cn } from '@/lib/utils'
import { Slider as SliderPrimitive } from 'radix-ui'
import * as React from 'react'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max],
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:w-full wuhanui:touch-none wuhanui:items-center wuhanui:select-none wuhanui:data-disabled:opacity-50 wuhanui:data-vertical:h-full wuhanui:data-vertical:min-h-40 wuhanui:data-vertical:w-auto wuhanui:data-vertical:flex-col',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="wuhanui:relative wuhanui:grow wuhanui:overflow-hidden wuhanui:rounded-full wuhanui:bg-muted wuhanui:data-horizontal:h-1.5 wuhanui:data-horizontal:w-full wuhanui:data-vertical:h-full wuhanui:data-vertical:w-1.5"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="wuhanui:absolute wuhanui:bg-primary wuhanui:select-none wuhanui:data-horizontal:h-full wuhanui:data-vertical:w-full"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="wuhanui:block wuhanui:size-4 wuhanui:shrink-0 wuhanui:rounded-full wuhanui:border wuhanui:border-primary wuhanui:bg-white wuhanui:shadow-sm wuhanui:ring-ring/50 wuhanui:transition-[color,box-shadow] wuhanui:select-none wuhanui:hover:ring-4 wuhanui:focus-visible:ring-4 wuhanui:focus-visible:outline-hidden wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

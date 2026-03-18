'use client'

import { toggleVariants } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'
import { type VariantProps } from 'class-variance-authority'
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import * as React from 'react'

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: 'horizontal' | 'vertical'
  }
>({
  size: 'default',
  variant: 'default',
  spacing: 0,
  orientation: 'horizontal',
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  orientation = 'horizontal',
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: 'horizontal' | 'vertical'
  }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ '--gap': spacing } as React.CSSProperties}
      className={cn(
        'wuhanui:group/toggle-group wuhanui:flex wuhanui:w-fit wuhanui:flex-row wuhanui:items-center wuhanui:gap-[--spacing(var(--gap))] wuhanui:rounded-md wuhanui:data-[spacing=0]:data-[variant=outline]:shadow-xs wuhanui:data-vertical:flex-col wuhanui:data-vertical:items-stretch',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = 'default',
  size = 'default',
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        'wuhanui:shrink-0 wuhanui:group-data-[spacing=0]/toggle-group:rounded-none wuhanui:group-data-[spacing=0]/toggle-group:px-2 wuhanui:group-data-[spacing=0]/toggle-group:shadow-none wuhanui:focus:z-10 wuhanui:focus-visible:z-10 wuhanui:group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md wuhanui:group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md wuhanui:group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md wuhanui:group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md wuhanui:data-[state=on]:bg-muted wuhanui:group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 wuhanui:group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 wuhanui:group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l wuhanui:group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t',
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }

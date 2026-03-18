'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Tabs as TabsPrimitive } from 'radix-ui'
import * as React from 'react'

function Tabs({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        'wuhanui:group/tabs wuhanui:flex wuhanui:gap-2 wuhanui:data-horizontal:flex-col',
        className,
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  'wuhanui:group/tabs-list wuhanui:inline-flex wuhanui:w-fit wuhanui:items-center wuhanui:justify-center wuhanui:rounded-lg wuhanui:p-[3px] wuhanui:text-muted-foreground wuhanui:group-data-horizontal/tabs:h-9 wuhanui:group-data-vertical/tabs:h-fit wuhanui:group-data-vertical/tabs:flex-col wuhanui:data-[variant=line]:rounded-none',
  {
    variants: {
      variant: {
        default: 'wuhanui:bg-muted',
        line: 'wuhanui:gap-1 wuhanui:bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function TabsList({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'wuhanui:relative wuhanui:inline-flex wuhanui:h-[calc(100%-1px)] wuhanui:flex-1 wuhanui:items-center wuhanui:justify-center wuhanui:gap-1.5 wuhanui:rounded-md wuhanui:border wuhanui:border-transparent wuhanui:px-2 wuhanui:py-1 wuhanui:text-sm wuhanui:font-medium wuhanui:whitespace-nowrap wuhanui:text-foreground/60 wuhanui:transition-all wuhanui:group-data-vertical/tabs:w-full wuhanui:group-data-vertical/tabs:justify-start wuhanui:hover:text-foreground wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-[3px] wuhanui:focus-visible:ring-ring/50 wuhanui:focus-visible:outline-1 wuhanui:focus-visible:outline-ring wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50 wuhanui:dark:text-muted-foreground wuhanui:dark:hover:text-foreground wuhanui:group-data-[variant=default]/tabs-list:data-active:shadow-sm wuhanui:group-data-[variant=line]/tabs-list:data-active:shadow-none wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg]:shrink-0 wuhanui:[&_svg:not([class*=size-])]:size-4',
        'wuhanui:group-data-[variant=line]/tabs-list:bg-transparent wuhanui:group-data-[variant=line]/tabs-list:data-active:bg-transparent wuhanui:dark:group-data-[variant=line]/tabs-list:data-active:border-transparent wuhanui:dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent',
        'wuhanui:data-active:bg-background wuhanui:data-active:text-foreground wuhanui:dark:data-active:border-input wuhanui:dark:data-active:bg-input/30 wuhanui:dark:data-active:text-foreground',
        'wuhanui:after:absolute wuhanui:after:bg-foreground wuhanui:after:opacity-0 wuhanui:after:transition-opacity wuhanui:group-data-horizontal/tabs:after:inset-x-0 wuhanui:group-data-horizontal/tabs:after:bottom-[-5px] wuhanui:group-data-horizontal/tabs:after:h-0.5 wuhanui:group-data-vertical/tabs:after:inset-y-0 wuhanui:group-data-vertical/tabs:after:-right-1 wuhanui:group-data-vertical/tabs:after:w-0.5 wuhanui:group-data-[variant=line]/tabs-list:data-active:after:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('wuhanui:flex-1 wuhanui:text-sm wuhanui:outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }

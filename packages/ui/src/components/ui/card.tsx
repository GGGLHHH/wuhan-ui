import { cn } from '@/lib/utils'
import * as React from 'react'

function Card({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        'wuhanui:group/card wuhanui:flex wuhanui:flex-col wuhanui:gap-6 wuhanui:overflow-hidden wuhanui:rounded-xl wuhanui:bg-card wuhanui:py-6 wuhanui:text-sm wuhanui:text-card-foreground wuhanui:shadow-xs wuhanui:ring-1 wuhanui:ring-foreground/10 wuhanui:has-[>img:first-child]:pt-0 wuhanui:data-[size=sm]:gap-4 wuhanui:data-[size=sm]:py-4 wuhanui:*:[img:first-child]:rounded-t-xl wuhanui:*:[img:last-child]:rounded-b-xl',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'wuhanui:group/card-header wuhanui:@container/card-header wuhanui:grid wuhanui:auto-rows-min wuhanui:items-start wuhanui:gap-1 wuhanui:rounded-t-xl wuhanui:px-6 wuhanui:group-data-[size=sm]/card:px-4 wuhanui:has-data-[slot=card-action]:grid-cols-[1fr_auto] wuhanui:has-data-[slot=card-description]:grid-rows-[auto_auto] wuhanui:[.border-b]:pb-6 wuhanui:group-data-[size=sm]/card:[.border-b]:pb-4',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'wuhanui:text-base wuhanui:leading-normal wuhanui:font-medium wuhanui:group-data-[size=sm]/card:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('wuhanui:text-sm wuhanui:text-muted-foreground', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'wuhanui:col-start-2 wuhanui:row-span-2 wuhanui:row-start-1 wuhanui:self-start wuhanui:justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('wuhanui:px-6 wuhanui:group-data-[size=sm]/card:px-4', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'wuhanui:flex wuhanui:items-center wuhanui:rounded-b-xl wuhanui:px-6 wuhanui:group-data-[size=sm]/card:px-4 wuhanui:[.border-t]:pt-6 wuhanui:group-data-[size=sm]/card:[.border-t]:pt-4',
        className,
      )}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }

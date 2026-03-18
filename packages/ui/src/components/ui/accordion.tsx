import { cn } from '@/lib/utils'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import * as React from 'react'

function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn('wuhanui:flex wuhanui:w-full wuhanui:flex-col', className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('wuhanui:not-last:border-b', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="wuhanui:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'wuhanui:group/accordion-trigger wuhanui:relative wuhanui:flex wuhanui:flex-1 wuhanui:items-start wuhanui:justify-between wuhanui:rounded-md wuhanui:border wuhanui:border-transparent wuhanui:py-4 wuhanui:text-left wuhanui:text-sm wuhanui:font-medium wuhanui:transition-all wuhanui:outline-none wuhanui:hover:underline wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:focus-visible:after:border-ring wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50 wuhanui:**:data-[slot=accordion-trigger-icon]:ml-auto wuhanui:**:data-[slot=accordion-trigger-icon]:size-4 wuhanui:**:data-[slot=accordion-trigger-icon]:text-muted-foreground',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="wuhanui:pointer-events-none wuhanui:shrink-0 wuhanui:group-aria-expanded/accordion-trigger:hidden"
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className="wuhanui:pointer-events-none wuhanui:hidden wuhanui:shrink-0 wuhanui:group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="wuhanui:overflow-hidden wuhanui:text-sm wuhanui:data-open:animate-accordion-down wuhanui:data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          'wuhanui:h-(--radix-accordion-content-height) wuhanui:pt-0 wuhanui:pb-4 wuhanui:[&_a]:underline wuhanui:[&_a]:underline-offset-3 wuhanui:[&_a]:hover:text-foreground wuhanui:[&_p:not(:last-child)]:mb-4',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

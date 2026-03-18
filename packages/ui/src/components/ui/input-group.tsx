import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

function InputGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'wuhanui:group/input-group wuhanui:relative wuhanui:flex wuhanui:h-9 wuhanui:w-full wuhanui:min-w-0 wuhanui:items-center wuhanui:rounded-md wuhanui:border wuhanui:border-input wuhanui:shadow-xs wuhanui:transition-[color,box-shadow] wuhanui:outline-none wuhanui:in-data-[slot=combobox-content]:focus-within:border-inherit wuhanui:in-data-[slot=combobox-content]:focus-within:ring-0 wuhanui:has-[[data-slot=input-group-control]:focus-visible]:border-ring wuhanui:has-[[data-slot=input-group-control]:focus-visible]:ring-3 wuhanui:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 wuhanui:has-[[data-slot][aria-invalid=true]]:border-destructive wuhanui:has-[[data-slot][aria-invalid=true]]:ring-3 wuhanui:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 wuhanui:has-[>[data-align=block-end]]:h-auto wuhanui:has-[>[data-align=block-end]]:flex-col wuhanui:has-[>[data-align=block-start]]:h-auto wuhanui:has-[>[data-align=block-start]]:flex-col wuhanui:has-[>textarea]:h-auto wuhanui:dark:bg-input/30 wuhanui:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 wuhanui:has-[>[data-align=block-end]]:[&>input]:pt-3 wuhanui:has-[>[data-align=block-start]]:[&>input]:pb-3 wuhanui:has-[>[data-align=inline-end]]:[&>input]:pr-1.5 wuhanui:has-[>[data-align=inline-start]]:[&>input]:pl-1.5',
        className,
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  'wuhanui:flex wuhanui:h-auto wuhanui:cursor-text wuhanui:items-center wuhanui:justify-center wuhanui:gap-2 wuhanui:py-1.5 wuhanui:text-sm wuhanui:font-medium wuhanui:text-muted-foreground wuhanui:select-none wuhanui:group-data-[disabled=true]/input-group:opacity-50 wuhanui:[&>kbd]:rounded-[calc(var(--radius)-5px)] wuhanui:[&>svg:not([class*=size-])]:size-4',
  {
    variants: {
      align: {
        'inline-start':
          'wuhanui:order-first wuhanui:pl-2 wuhanui:has-[>button]:-ml-1 wuhanui:has-[>kbd]:ml-[-0.15rem]',
        'inline-end':
          'wuhanui:order-last wuhanui:pr-2 wuhanui:has-[>button]:-mr-1 wuhanui:has-[>kbd]:mr-[-0.15rem]',
        'block-start':
          'wuhanui:order-first wuhanui:w-full wuhanui:justify-start wuhanui:px-2.5 wuhanui:pt-2 wuhanui:group-has-[>input]/input-group:pt-2 wuhanui:[.border-b]:pb-2',
        'block-end':
          'wuhanui:order-last wuhanui:w-full wuhanui:justify-start wuhanui:px-2.5 wuhanui:pb-2 wuhanui:group-has-[>input]/input-group:pb-2 wuhanui:[.border-t]:pt-2',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
)

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  'wuhanui:flex wuhanui:items-center wuhanui:gap-2 wuhanui:text-sm wuhanui:shadow-none',
  {
    variants: {
      size: {
        xs: 'wuhanui:h-6 wuhanui:gap-1 wuhanui:rounded-[calc(var(--radius)-5px)] wuhanui:px-1.5 wuhanui:[&>svg:not([class*=size-])]:size-3.5',
        sm: 'wuhanui:',
        'icon-xs':
          'wuhanui:size-6 wuhanui:rounded-[calc(var(--radius)-5px)] wuhanui:p-0 wuhanui:has-[>svg]:p-0',
        'icon-sm': 'wuhanui:size-8 wuhanui:p-0 wuhanui:has-[>svg]:p-0',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  },
)

function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'wuhanui:flex wuhanui:items-center wuhanui:gap-2 wuhanui:text-sm wuhanui:text-muted-foreground wuhanui:[&_svg]:pointer-events-none wuhanui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function InputGroupInput({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'wuhanui:flex-1 wuhanui:rounded-none wuhanui:border-0 wuhanui:bg-transparent wuhanui:shadow-none wuhanui:ring-0 wuhanui:focus-visible:ring-0 wuhanui:aria-invalid:ring-0 wuhanui:dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'wuhanui:flex-1 wuhanui:resize-none wuhanui:rounded-none wuhanui:border-0 wuhanui:bg-transparent wuhanui:py-2 wuhanui:shadow-none wuhanui:ring-0 wuhanui:focus-visible:ring-0 wuhanui:aria-invalid:ring-0 wuhanui:dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}

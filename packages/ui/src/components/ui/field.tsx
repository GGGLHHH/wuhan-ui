'use client'

import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { useMemo } from 'react'

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'wuhanui:flex wuhanui:flex-col wuhanui:gap-6 wuhanui:has-[>[data-slot=checkbox-group]]:gap-3 wuhanui:has-[>[data-slot=radio-group]]:gap-3',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}: React.ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        'wuhanui:mb-3 wuhanui:font-medium wuhanui:data-[variant=label]:text-sm wuhanui:data-[variant=legend]:text-base',
        className,
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'wuhanui:group/field-group wuhanui:@container/field-group wuhanui:flex wuhanui:w-full wuhanui:flex-col wuhanui:gap-7 wuhanui:data-[slot=checkbox-group]:gap-3 wuhanui:*:data-[slot=field-group]:gap-4',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'wuhanui:group/field wuhanui:flex wuhanui:w-full wuhanui:gap-3 wuhanui:data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: 'wuhanui:flex-col wuhanui:*:w-full wuhanui:[&>.sr-only]:w-auto',
        horizontal:
          'wuhanui:flex-row wuhanui:items-center wuhanui:has-[>[data-slot=field-content]]:items-start wuhanui:*:data-[slot=field-label]:flex-auto wuhanui:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        responsive:
          'wuhanui:flex-col wuhanui:*:w-full wuhanui:@md/field-group:flex-row wuhanui:@md/field-group:items-center wuhanui:@md/field-group:*:w-auto wuhanui:@md/field-group:has-[>[data-slot=field-content]]:items-start wuhanui:@md/field-group:*:data-[slot=field-label]:flex-auto wuhanui:[&>.sr-only]:w-auto wuhanui:@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        'wuhanui:group/field-content wuhanui:flex wuhanui:flex-1 wuhanui:flex-col wuhanui:gap-1 wuhanui:leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        'wuhanui:group/field-label wuhanui:peer/field-label wuhanui:flex wuhanui:w-fit wuhanui:gap-2 wuhanui:leading-snug wuhanui:group-data-[disabled=true]/field:opacity-50 wuhanui:has-data-checked:border-primary/30 wuhanui:has-data-checked:bg-primary/5 wuhanui:has-[>[data-slot=field]]:rounded-md wuhanui:has-[>[data-slot=field]]:border wuhanui:*:data-[slot=field]:p-3 wuhanui:dark:has-data-checked:border-primary/20 wuhanui:dark:has-data-checked:bg-primary/10',
        'wuhanui:has-[>[data-slot=field]]:w-full wuhanui:has-[>[data-slot=field]]:flex-col',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        'wuhanui:flex wuhanui:w-fit wuhanui:items-center wuhanui:gap-2 wuhanui:text-sm wuhanui:leading-snug wuhanui:font-medium wuhanui:group-data-[disabled=true]/field:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        'wuhanui:text-left wuhanui:text-sm wuhanui:leading-normal wuhanui:font-normal wuhanui:text-muted-foreground wuhanui:group-has-data-horizontal/field:text-balance wuhanui:[[data-variant=legend]+&]:-mt-1.5',
        'wuhanui:last:mt-0 wuhanui:nth-last-2:-mt-1',
        'wuhanui:[&>a]:underline wuhanui:[&>a]:underline-offset-4 wuhanui:[&>a:hover]:text-primary',
        className,
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        'wuhanui:relative wuhanui:-my-2 wuhanui:h-5 wuhanui:text-sm wuhanui:group-data-[variant=outline]/field-group:-mb-2',
        className,
      )}
      {...props}
    >
      <Separator className="wuhanui:absolute wuhanui:inset-0 wuhanui:top-1/2" />
      {children && (
        <span
          className="wuhanui:relative wuhanui:mx-auto wuhanui:block wuhanui:w-fit wuhanui:bg-background wuhanui:px-2 wuhanui:text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="wuhanui:ml-4 wuhanui:flex wuhanui:list-disc wuhanui:flex-col wuhanui:gap-1">
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn('wuhanui:text-sm wuhanui:font-normal wuhanui:text-destructive', className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}

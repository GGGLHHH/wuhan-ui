import { cn } from '@/lib/utils'
import * as React from 'react'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'wuhanui:flex wuhanui:field-sizing-content wuhanui:min-h-16 wuhanui:w-full wuhanui:rounded-md wuhanui:border wuhanui:border-input wuhanui:bg-transparent wuhanui:px-2.5 wuhanui:py-2 wuhanui:text-base wuhanui:shadow-xs wuhanui:transition-[color,box-shadow] wuhanui:outline-none wuhanui:placeholder:text-muted-foreground wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:disabled:cursor-not-allowed wuhanui:disabled:opacity-50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:md:text-sm wuhanui:dark:bg-input/30 wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }

import { cn } from '@/lib/utils'
import * as React from 'react'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'wuhanui:h-9 wuhanui:w-full wuhanui:min-w-0 wuhanui:rounded-md wuhanui:border wuhanui:border-input wuhanui:bg-transparent wuhanui:px-2.5 wuhanui:py-1 wuhanui:text-base wuhanui:shadow-xs wuhanui:transition-[color,box-shadow] wuhanui:outline-none wuhanui:file:inline-flex wuhanui:file:h-7 wuhanui:file:border-0 wuhanui:file:bg-transparent wuhanui:file:text-sm wuhanui:file:font-medium wuhanui:file:text-foreground wuhanui:placeholder:text-muted-foreground wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:disabled:pointer-events-none wuhanui:disabled:cursor-not-allowed wuhanui:disabled:opacity-50 wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:md:text-sm wuhanui:dark:bg-input/30 wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  )
}

export { Input }

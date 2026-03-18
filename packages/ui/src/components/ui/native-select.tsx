import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import * as React from 'react'

type NativeSelectProps = Omit<React.ComponentProps<'select'>, 'size'> & {
  size?: 'sm' | 'default'
}

function NativeSelect({ className, size = 'default', ...props }: NativeSelectProps) {
  return (
    <div
      className={cn(
        'wuhanui:group/native-select wuhanui:relative wuhanui:w-fit wuhanui:has-[select:disabled]:opacity-50',
        className,
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="wuhanui:h-9 wuhanui:w-full wuhanui:min-w-0 wuhanui:appearance-none wuhanui:rounded-md wuhanui:border wuhanui:border-input wuhanui:bg-transparent wuhanui:py-1 wuhanui:pr-8 wuhanui:pl-2.5 wuhanui:text-sm wuhanui:shadow-xs wuhanui:transition-[color,box-shadow] wuhanui:outline-none wuhanui:select-none wuhanui:selection:bg-primary wuhanui:selection:text-primary-foreground wuhanui:placeholder:text-muted-foreground wuhanui:focus-visible:border-ring wuhanui:focus-visible:ring-3 wuhanui:focus-visible:ring-ring/50 wuhanui:disabled:pointer-events-none wuhanui:disabled:cursor-not-allowed wuhanui:aria-invalid:border-destructive wuhanui:aria-invalid:ring-3 wuhanui:aria-invalid:ring-destructive/20 wuhanui:data-[size=sm]:h-8 wuhanui:dark:bg-input/30 wuhanui:dark:hover:bg-input/50 wuhanui:dark:aria-invalid:border-destructive/50 wuhanui:dark:aria-invalid:ring-destructive/40"
        {...props}
      />
      <ChevronDownIcon
        className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:top-1/2 wuhanui:right-2.5 wuhanui:size-4 wuhanui:-translate-y-1/2 wuhanui:text-muted-foreground wuhanui:select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  )
}

function NativeSelectOption({ ...props }: React.ComponentProps<'option'>) {
  return <option data-slot="native-select-option" {...props} />
}

function NativeSelectOptGroup({ className, ...props }: React.ComponentProps<'optgroup'>) {
  return <optgroup data-slot="native-select-optgroup" className={cn(className)} {...props} />
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }

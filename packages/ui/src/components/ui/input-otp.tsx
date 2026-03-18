'use client'

import { cn } from '@/lib/utils'
import { OTPInput, OTPInputContext } from 'input-otp'
import { MinusIcon } from 'lucide-react'
import * as React from 'react'

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'cn-input-otp flex items-center has-disabled:opacity-50',
        containerClassName,
      )}
      spellCheck={false}
      className={cn('wuhanui:disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        'wuhanui:flex wuhanui:items-center wuhanui:rounded-md wuhanui:has-aria-invalid:border-destructive wuhanui:has-aria-invalid:ring-3 wuhanui:has-aria-invalid:ring-destructive/20 wuhanui:dark:has-aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:size-9 wuhanui:items-center wuhanui:justify-center wuhanui:border-y wuhanui:border-r wuhanui:border-input wuhanui:text-sm wuhanui:shadow-xs wuhanui:transition-all wuhanui:outline-none wuhanui:first:rounded-l-md wuhanui:first:border-l wuhanui:last:rounded-r-md wuhanui:aria-invalid:border-destructive wuhanui:data-[active=true]:z-10 wuhanui:data-[active=true]:border-ring wuhanui:data-[active=true]:ring-3 wuhanui:data-[active=true]:ring-ring/50 wuhanui:data-[active=true]:aria-invalid:border-destructive wuhanui:data-[active=true]:aria-invalid:ring-destructive/20 wuhanui:dark:bg-input/30 wuhanui:dark:data-[active=true]:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="wuhanui:pointer-events-none wuhanui:absolute wuhanui:inset-0 wuhanui:flex wuhanui:items-center wuhanui:justify-center">
          <div className="wuhanui:h-4 wuhanui:w-px wuhanui:animate-caret-blink wuhanui:bg-foreground wuhanui:duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-separator"
      className="wuhanui:flex wuhanui:items-center wuhanui:[&_svg:not([class*=size-])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

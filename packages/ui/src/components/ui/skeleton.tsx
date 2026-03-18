import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('wuhanui:animate-pulse wuhanui:rounded-md wuhanui:bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }

import { cn } from '@gedatou/ui'
import type { LucideIcon } from 'lucide-react'
import { X } from 'lucide-react'

import type { ITabsItem } from './types'

function isLucideIcon(value: unknown): value is LucideIcon {
  return !!value && typeof value === 'object' && '$$typeof' in value
}

interface TabItemViewProps {
  onClose?: (e: React.MouseEvent) => void
  showInteractive?: boolean
  isDragging?: boolean
  isActive?: boolean
  className?: string
  item: ITabsItem
}

export function TabItemView({
  item,
  isActive,
  isDragging,
  className,
  onClose,
  showInteractive = true,
}: TabItemViewProps) {
  const Icon = item.icon

  return (
    <div
      className={cn(
        'flex flex-nowrap items-center gap-x-1 rounded border px-2 py-1 transition-colors',
        isActive && 'border-accent-foreground/20 bg-accent',
        isDragging && 'opacity-50',
        className,
      )}
    >
      {isLucideIcon(Icon) && <Icon className="size-3.5" />}
      <span className="text-sm whitespace-nowrap">{item.title}</span>
      {!item.fixedTab && showInteractive && (
        <X className="hover:text-destructive size-3.5 cursor-pointer" onClick={onClose} />
      )}
      {!item.fixedTab && !showInteractive && <X className="size-3.5" />}
    </div>
  )
}

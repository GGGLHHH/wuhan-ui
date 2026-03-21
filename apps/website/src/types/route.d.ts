import type { LucideIcon } from 'lucide-react'
import '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    titleParams?: Record<string, unknown>
    hideInMenu?: boolean // 从菜单中隐藏（避免与 HTML hidden 属性冲突）
    titleKey?: string
    order?: number
    title?: string
    icon?: LucideIcon
    groupKey?: 'overview' | 'customComponents' | 'components'
  }

  interface HistoryState {
    titleParams?: Record<string, unknown>
    titleKey?: string
    title?: string
  }
}

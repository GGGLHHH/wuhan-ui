import type { IMenuItem } from '@/utils/route-utils'
import type { HistoryState } from '@tanstack/react-router'

// Tab item extends menu item with optional state for preserving navigation context
export interface ITabsItem extends IMenuItem {
  titleParams?: Record<string, unknown>
  search?: Record<string, unknown>
  state?: HistoryState
  titleKey?: string
  title: string
  hash?: string // URL hash (例如 #info, #settings)
}

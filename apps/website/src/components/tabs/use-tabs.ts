import { useStore } from '@tanstack/react-store'

import {
  addTab,
  closeAllTabs,
  closeOtherTabs,
  getActiveTab,
  removeTab,
  removeTabAndGetNext,
  removeTabs,
  reorderTabs,
  setActiveTab,
  tabsStore,
} from './tabs-store'

export function useTabs() {
  const tabs = useStore(tabsStore, (state) => state.tabs)
  const activeTabId = useStore(tabsStore, (state) => state.activeTabId)

  return {
    tabs,
    activeTabId,
    activeTab: getActiveTab(),

    addTab,
    removeTab,
    removeTabAndGetNext,
    removeTabs,
    setActiveTab,
    closeOtherTabs,
    closeAllTabs,
    reorderTabs,

    isActive: (id: string) => activeTabId === id,
    hasTab: (id: string) => tabs.some((tab) => tab.id === id),
    tabsCount: tabs.length,
  }
}

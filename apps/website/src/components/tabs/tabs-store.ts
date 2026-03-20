import { Store } from '@tanstack/react-store'
import type { LucideIcon } from 'lucide-react'

import type { ITabsItem } from './types'

export interface ITabsState {
  navigationHistory: string[]
  activeTabId: string | null
  tabs: ITabsItem[]
}

const MAX_HISTORY_SIZE = 20

const STORAGE_KEY = 'tanstack-tabs-cache'

function loadFromStorage(): ITabsState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return null
    }
    return JSON.parse(stored) as ITabsState
  } catch (error) {
    console.error('Failed to load tabs from localStorage:', error)
    return null
  }
}

function saveToStorage(state: ITabsState) {
  try {
    const serializable = {
      ...state,
      tabs: state.tabs.map((tab) =>
        Object.fromEntries(
          Object.entries(tab).filter(
            ([, v]) =>
              typeof v !== 'function' && !(typeof v === 'object' && v !== null && '$$typeof' in v),
          ),
        ),
      ),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable))
  } catch (error) {
    console.error('Failed to save tabs to localStorage:', error)
  }
}

let saveTimeoutId: ReturnType<typeof setTimeout> | null = null
const SAVE_DELAY = 100

function saveToStorageThrottled(state: ITabsState) {
  if (saveTimeoutId !== null) {
    clearTimeout(saveTimeoutId)
  }
  saveTimeoutId = setTimeout(() => {
    saveToStorage(state)
    saveTimeoutId = null
  }, SAVE_DELAY)
}

const initialState = loadFromStorage() || {
  tabs: [],
  activeTabId: null,
  navigationHistory: [],
}

export const tabsStore = new Store<ITabsState>(initialState)

tabsStore.subscribe(() => {
  saveToStorageThrottled(tabsStore.state)
})

function updateHistory(history: string[], tabId: string): string[] {
  const filtered = history.filter((id) => id !== tabId)
  const newHistory = [tabId, ...filtered]
  return newHistory.slice(0, MAX_HISTORY_SIZE)
}

export function addTab(item: ITabsItem) {
  tabsStore.setState((state) => {
    const existingIndex = state.tabs.findIndex((tab) => tab.id === item.id)
    const newHistory = updateHistory(state.navigationHistory, item.id)

    if (existingIndex !== -1) {
      const updatedTabs = [...state.tabs]
      updatedTabs[existingIndex] = {
        ...updatedTabs[existingIndex],
        ...item,
      }

      return {
        ...state,
        tabs: updatedTabs,
        activeTabId: item.id,
        navigationHistory: newHistory,
      }
    }

    return {
      tabs: [...state.tabs, item],
      activeTabId: item.id,
      navigationHistory: newHistory,
    }
  })
}

function _removeTabInternal(id: string, newActiveTabId?: string | null) {
  tabsStore.setState((state) => {
    const currentIndex = state.tabs.findIndex((tab) => tab.id === id)

    if (currentIndex === -1) {
      return state
    }

    const targetTab = state.tabs[currentIndex]
    if (targetTab.fixedTab) {
      console.warn(`Cannot remove fixed tab: ${targetTab.title}`)
      return state
    }

    const newTabs = state.tabs.filter((tab) => tab.id !== id)
    const newHistory = state.navigationHistory.filter((historyId) => historyId !== id)

    let finalActiveTabId = state.activeTabId
    if (newActiveTabId !== undefined) {
      finalActiveTabId = newActiveTabId
    } else if (state.activeTabId === id) {
      if (newTabs.length === 0) {
        finalActiveTabId = null
      } else if (currentIndex > 0) {
        finalActiveTabId = newTabs[currentIndex - 1].id
      } else {
        finalActiveTabId = newTabs[0].id
      }
    }

    return {
      tabs: newTabs,
      activeTabId: finalActiveTabId,
      navigationHistory: newHistory,
    }
  })
}

export function removeTab(id: string) {
  _removeTabInternal(id)
}

export function removeTabAndGetNext(id: string): ITabsItem | null {
  const state = tabsStore.state
  const targetTab = state.tabs.find((tab) => tab.id === id)

  if (!targetTab) {
    return null
  }

  if (targetTab.fixedTab) {
    console.warn(`Cannot remove fixed tab: ${targetTab.title}`)
    return null
  }

  if (state.activeTabId !== id) {
    _removeTabInternal(id)
    return null
  }

  const nextTab = findNextTabFromHistory(id)
  _removeTabInternal(id, nextTab?.id || null)
  return nextTab
}

export function setActiveTab(id: string) {
  tabsStore.setState((state) => {
    const tabExists = state.tabs.some((tab) => tab.id === id)

    if (!tabExists) {
      return state
    }

    const newHistory = updateHistory(state.navigationHistory, id)

    return {
      ...state,
      activeTabId: id,
      navigationHistory: newHistory,
    }
  })
}

export function removeTabs(ids: string[]) {
  if (ids.length === 0) return

  tabsStore.setState((state) => {
    const idsSet = new Set(ids)
    const newTabs = state.tabs.filter((tab) => !idsSet.has(tab.id))
    const newHistory = state.navigationHistory.filter((historyId) => !idsSet.has(historyId))

    let newActiveTabId = state.activeTabId
    if (state.activeTabId && idsSet.has(state.activeTabId)) {
      if (newTabs.length === 0) {
        newActiveTabId = null
      } else {
        const nextTab = findNextTabFromHistory(state.activeTabId)
        newActiveTabId = nextTab?.id || newTabs[0].id
      }
    }

    return {
      tabs: newTabs,
      activeTabId: newActiveTabId,
      navigationHistory: newHistory,
    }
  })
}

export function closeOtherTabs(id: string) {
  tabsStore.setState((state) => {
    const targetTab = state.tabs.find((tab) => tab.id === id)

    if (!targetTab) {
      return state
    }

    const newTabs = state.tabs.filter((tab) => tab.id === id || tab.fixedTab)

    const newHistory = state.navigationHistory.filter((historyId) =>
      newTabs.some((tab) => tab.id === historyId),
    )

    return {
      tabs: newTabs,
      activeTabId: id,
      navigationHistory: newHistory,
    }
  })
}

export function closeAllTabs() {
  tabsStore.setState((state) => {
    const fixedTabs = state.tabs.filter((tab) => tab.fixedTab)

    const newHistory = state.navigationHistory.filter((historyId) =>
      fixedTabs.some((tab) => tab.id === historyId),
    )

    return {
      tabs: fixedTabs,
      activeTabId: fixedTabs.length > 0 ? fixedTabs[0].id : null,
      navigationHistory: newHistory,
    }
  })
}

export function getActiveTab(): ITabsItem | null {
  const state = tabsStore.state
  return state.tabs.find((tab) => tab.id === state.activeTabId) || null
}

export function findNextTabFromHistory(excludeId: string): ITabsItem | null {
  const state = tabsStore.state
  const remainingTabs = state.tabs.filter((tab) => tab.id !== excludeId)

  if (remainingTabs.length === 0) {
    return null
  }

  for (const historyId of state.navigationHistory) {
    if (historyId === excludeId) {
      continue
    }
    const matchingTab = remainingTabs.find((tab) => tab.id === historyId)
    if (matchingTab) {
      return matchingTab
    }
  }

  return remainingTabs.find((tab) => tab.fixedTab) || remainingTabs[0]
}

export function initializeFixedTabs(fixedTabs: ITabsItem[]) {
  tabsStore.setState((state) => {
    const existingTabsMap = new Map(state.tabs.map((tab) => [tab.id, tab]))

    for (const fixedTab of fixedTabs) {
      if (!existingTabsMap.has(fixedTab.id)) {
        existingTabsMap.set(fixedTab.id, fixedTab)
      } else {
        const existing = existingTabsMap.get(fixedTab.id)!
        existingTabsMap.set(fixedTab.id, { ...existing, ...fixedTab })
      }
    }

    const mergedTabs = Array.from(existingTabsMap.values())

    let activeTabId = state.activeTabId
    if (!activeTabId || !mergedTabs.some((tab) => tab.id === activeTabId)) {
      activeTabId = fixedTabs.length > 0 ? fixedTabs[0].id : mergedTabs[0]?.id || null
    }

    const cleanedHistory = state.navigationHistory.filter((historyId) =>
      mergedTabs.some((tab) => tab.id === historyId),
    )

    return {
      tabs: mergedTabs,
      activeTabId,
      navigationHistory: cleanedHistory,
    }
  })
}

export function reorderTabs(newTabs: ITabsItem[]) {
  tabsStore.setState((state) => {
    return {
      ...state,
      tabs: newTabs,
    }
  })
}

export function clearTabsCache() {
  try {
    localStorage.removeItem(STORAGE_KEY)

    tabsStore.setState(() => ({
      tabs: [],
      activeTabId: null,
      navigationHistory: [],
    }))
  } catch (error) {
    console.error('Failed to clear tabs cache:', error)
  }
}

// Restore non-serializable icon references from route tree after loading from localStorage
export function restoreTabIcons(iconMap: Map<string, LucideIcon>) {
  tabsStore.setState((state) => {
    const hasTabsWithoutIcon = state.tabs.some((tab) => !tab.icon && iconMap.has(tab.id))
    if (!hasTabsWithoutIcon) {
      return state
    }

    return {
      ...state,
      tabs: state.tabs.map((tab) => {
        if (!tab.icon && iconMap.has(tab.id)) {
          return { ...tab, icon: iconMap.get(tab.id) }
        }
        return tab
      }),
    }
  })
}

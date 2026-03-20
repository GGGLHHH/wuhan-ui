import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  cn,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@gedatou/ui'
import { useNavigate } from '@tanstack/react-router'
import { partition } from 'es-toolkit'
import { ArrowLeft, ArrowRight, ListX, XCircle } from 'lucide-react'
import { useCallback, useMemo } from 'react'

import { TabItemView } from './tab-item-view'
import type { ITabsItem } from './types'
import { useScrollIntoView } from './use-scroll-into-view'
import { useTabs } from './use-tabs'

interface IProps {
  item: ITabsItem
}

export function TabItem({ item }: IProps) {
  const navigate = useNavigate()
  const {
    activeTabId,
    setActiveTab,
    removeTabAndGetNext,
    removeTabs,
    tabs,
    closeOtherTabs,
    closeAllTabs,
  } = useTabs()
  const isActive = activeTabId === item.id
  const isFixed = item.fixedTab === true

  const navigateToTab = useCallback(
    (tab: ITabsItem) => {
      setActiveTab(tab.id)
      void navigate({
        to: tab.path,
        state: tab.state,
        search: tab.search,
        hash: tab.hash,
      })
    },
    [navigate, setActiveTab],
  )

  const {
    attributes,
    listeners,
    setNodeRef: setSortableRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    disabled: isFixed,
  })

  // Auto-scroll into view when tab becomes active
  const scrollRef = useScrollIntoView(isActive)

  // Merge refs
  const mergedRef = useCallback(
    (node: HTMLDivElement | null) => {
      setSortableRef(node)
      if (scrollRef) {
        scrollRef.current = node
      }
    },
    [setSortableRef, scrollRef],
  )

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const handleClick = () => {
    navigateToTab(item)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isFixed) {
      const nextTab = removeTabAndGetNext(item.id)

      if (nextTab) {
        navigateToTab(nextTab)
      } else if (isActive) {
        void navigate({ to: '/' })
      }
    }
  }

  const menuState = useMemo(() => {
    const currentIndex = tabs.findIndex((tab) => tab.id === item.id)
    const [closeableTabs] = partition(tabs, (tab) => !tab.fixedTab)

    return {
      currentIndex,
      hasCloseableLeft:
        currentIndex > 0 && tabs.slice(0, currentIndex).some((tab) => !tab.fixedTab),
      hasCloseableRight:
        currentIndex !== -1 &&
        currentIndex < tabs.length - 1 &&
        tabs.slice(currentIndex + 1).some((tab) => !tab.fixedTab),
      hasCloseableOthers: closeableTabs.some((tab) => tab.id !== item.id),
      hasCloseableAny: closeableTabs.length > 0,
    }
  }, [tabs, item.id])

  const handleCloseLeft = useCallback(() => {
    const { currentIndex } = menuState
    if (currentIndex <= 0) return

    const idsToRemove = tabs
      .slice(0, currentIndex)
      .filter((tab) => !tab.fixedTab)
      .map((tab) => tab.id)

    removeTabs(idsToRemove)
    navigateToTab(item)
  }, [menuState, tabs, removeTabs, navigateToTab, item])

  const handleCloseRight = useCallback(() => {
    const { currentIndex } = menuState
    if (currentIndex === -1 || currentIndex >= tabs.length - 1) return

    const idsToRemove = tabs
      .slice(currentIndex + 1)
      .filter((tab) => !tab.fixedTab)
      .map((tab) => tab.id)

    removeTabs(idsToRemove)
    navigateToTab(item)
  }, [menuState, tabs, removeTabs, navigateToTab, item])

  const handleCloseOthers = useCallback(() => {
    closeOtherTabs(item.id)
    navigateToTab(item)
  }, [closeOtherTabs, item, navigateToTab])

  const handleCloseAll = useCallback(() => {
    closeAllTabs()
    void navigate({ to: '/' })
  }, [closeAllTabs, navigate])

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div ref={mergedRef} style={style} {...attributes} {...listeners} onClick={handleClick}>
          <TabItemView
            className={cn('hover:bg-accent/50 cursor-pointer', isDragging && 'z-50')}
            isActive={isActive}
            isDragging={isDragging}
            item={item}
            onClose={handleClose}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem disabled={!menuState.hasCloseableLeft} onClick={handleCloseLeft}>
          <ArrowLeft className="size-4" />
          Close Left
        </ContextMenuItem>
        <ContextMenuItem disabled={!menuState.hasCloseableRight} onClick={handleCloseRight}>
          <ArrowRight className="size-4" />
          Close Right
        </ContextMenuItem>
        <ContextMenuItem disabled={!menuState.hasCloseableOthers} onClick={handleCloseOthers}>
          <ListX className="size-4" />
          Close Others
        </ContextMenuItem>
        <ContextMenuItem disabled={!menuState.hasCloseableAny} onClick={handleCloseAll}>
          <XCircle className="size-4" />
          Close All
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

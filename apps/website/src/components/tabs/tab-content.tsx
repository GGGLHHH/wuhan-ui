import type { DragEndEvent, DragStartEvent, UniqueIdentifier } from '@dnd-kit/core'
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'
import { useState } from 'react'

import { TabItem } from './tab-item'
import { TabItemView } from './tab-item-view'
import { useTabs } from './use-tabs'

export function TabContent() {
  const { tabs, tabsCount, reorderTabs } = useTabs()
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const fixedTabs = tabs.filter((tab) => tab.fixedTab)
  const nonFixedTabs = tabs.filter((tab) => !tab.fixedTab)

  if (tabsCount === 0) {
    return null
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = nonFixedTabs.findIndex((tab) => tab.id === active.id)
      const newIndex = nonFixedTabs.findIndex((tab) => tab.id === over.id)

      if (oldIndex !== -1 && newIndex !== -1) {
        const reorderedNonFixed = arrayMove(nonFixedTabs, oldIndex, newIndex)
        const newTabs = [...fixedTabs, ...reorderedNonFixed]
        reorderTabs(newTabs)
      }
    }

    setActiveId(null)
  }

  function handleDragCancel() {
    setActiveId(null)
  }

  const activeItem = tabs.find((tab) => tab.id === activeId)

  return (
    <DndContext
      collisionDetection={closestCenter}
      sensors={sensors}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="w-full overflow-hidden border-b px-2 py-1">
        <div className="scrollbar-hidden flex w-full flex-nowrap gap-2 overflow-x-auto">
          {/* Fixed tabs - not sortable */}
          {fixedTabs.map((tab) => (
            <TabItem key={tab.id} item={tab} />
          ))}

          {/* Non-fixed tabs - sortable */}
          <SortableContext
            items={nonFixedTabs.map((tab) => tab.id)}
            strategy={horizontalListSortingStrategy}
          >
            {nonFixedTabs.map((tab) => (
              <TabItem key={tab.id} item={tab} />
            ))}
          </SortableContext>
        </div>
      </div>

      <DragOverlay>
        {activeItem ? (
          <TabItemView
            className="shadow-lg"
            isActive={true}
            item={activeItem}
            showInteractive={false}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

import { routeTree } from '@/routeTree.gen'
import { buildGroupedMenuItems } from '@/utils/route-utils'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@gedatou/ui'
import { useNavigate } from '@tanstack/react-router'
import { useCallback, useEffect, useMemo } from 'react'

interface CommandMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const navigate = useNavigate()
  const menuGroups = useMemo(() => buildGroupedMenuItems(routeTree), [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onOpenChange])

  const handleSelect = useCallback(
    (path: string) => {
      onOpenChange(false)
      void navigate({ to: path })
    },
    [navigate, onOpenChange],
  )

  return (
    <CommandDialog
      title="Search"
      description="Search for a page to navigate to..."
      open={open}
      onOpenChange={onOpenChange}
    >
      <Command>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {menuGroups.map((group) => (
            <CommandGroup key={group.label ?? '__default'} heading={group.label}>
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <CommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() => handleSelect(item.path)}
                  >
                    {Icon && <Icon className="mr-2 size-4" />}
                    <span>{item.title}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}

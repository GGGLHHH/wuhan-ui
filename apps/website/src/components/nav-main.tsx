import { useSidebarNavigation } from '@/hooks/use-sidebar-navigation'
import type { IMenuItem } from '@/utils/route-utils'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@gedatou/ui'
import { Link, useMatchRoute } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import * as React from 'react'

// Context for sharing navigation state across components
const SidebarNavigationContext = React.createContext<ReturnType<
  typeof useSidebarNavigation
> | null>(null)

function useSidebarNavigationContext() {
  const context = React.use(SidebarNavigationContext)
  if (!context) {
    throw new Error(
      'useSidebarNavigationContext must be used within SidebarNavigationContext.Provider',
    )
  }
  return context
}

// 菜单图标组件
const MenuIcon = React.memo(({ icon: Icon }: { icon?: LucideIcon }) => {
  if (!Icon) return null
  return <Icon className="size-4 shrink-0" />
})
MenuIcon.displayName = 'MenuIcon'

// 菜单项激活状态 Hook
function useMenuItemActive(item: IMenuItem) {
  const matchRoute = useMatchRoute()

  const isActive = matchRoute({ to: item.path }) !== false
  const hasChildren = Boolean(item.children && item.children.length > 0)

  const hasActiveChild = Boolean(
    hasChildren && item.children?.some((subItem) => matchRoute({ to: subItem.path }) !== false),
  )

  const isParentActive = isActive || hasActiveChild

  return {
    isActive,
    hasChildren,
    hasActiveChild,
    isParentActive,
  }
}

// 子菜单项组件
const NavSubMenuItem = React.memo(({ item }: { item: IMenuItem }) => {
  const matchRoute = useMatchRoute()
  const { handleNavigate, isPending } = useSidebarNavigationContext()

  const isActive = matchRoute({ to: item.path }) !== false
  const isPendingNav = isPending(item.path)
  const shouldShowActive = isActive || isPendingNav

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    handleNavigate(item.path)
  }

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild isActive={shouldShowActive}>
        <Link className="cursor-pointer" to={item.path} onClick={handleClick}>
          <MenuIcon icon={item.icon} />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  )
})
NavSubMenuItem.displayName = 'NavSubMenuItem'

// 子菜单列表组件
const NavSubMenuList = React.memo(({ items }: { items: IMenuItem[] }) => {
  return (
    <SidebarMenuSub className="mt-0.5 mr-0 pr-0">
      {items.map((item) => (
        <NavSubMenuItem key={item.path} item={item} />
      ))}
    </SidebarMenuSub>
  )
})
NavSubMenuList.displayName = 'NavSubMenuList'

// 父级菜单项组件
const NavParentMenuItem = React.memo(
  ({ item, isParentActive }: { isParentActive: boolean; item: IMenuItem }) => {
    return (
      <>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="cursor-pointer"
            isActive={isParentActive}
            tooltip={item.title}
          >
            <MenuIcon icon={item.icon} />
            <span>{item.title}</span>
            <ChevronRight className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.children && <NavSubMenuList items={item.children} />}
        </CollapsibleContent>
      </>
    )
  },
)
NavParentMenuItem.displayName = 'NavParentMenuItem'

// 叶子菜单项组件
const NavLeafMenuItem = React.memo(({ item, isActive }: { isActive: boolean; item: IMenuItem }) => {
  const { handleNavigate, isPending } = useSidebarNavigationContext()

  const isPendingNav = isPending(item.path)
  const shouldShowActive = isActive || isPendingNav

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    handleNavigate(item.path)
  }

  return (
    <SidebarMenuButton asChild isActive={shouldShowActive} tooltip={item.title}>
      <Link className="cursor-pointer" to={item.path} onClick={handleClick}>
        <MenuIcon icon={item.icon} />
        <span>{item.title}</span>
      </Link>
    </SidebarMenuButton>
  )
})
NavLeafMenuItem.displayName = 'NavLeafMenuItem'

// 顶级菜单项组件
const NavMenuItem = React.memo(({ item }: { item: IMenuItem }) => {
  const { isActive, hasChildren, isParentActive } = useMenuItemActive(item)

  return (
    <Collapsible key={item.path} asChild className="group/collapsible" defaultOpen={isParentActive}>
      <SidebarMenuItem>
        {hasChildren ? (
          <NavParentMenuItem isParentActive={isParentActive} item={item} />
        ) : (
          <NavLeafMenuItem isActive={isActive} item={item} />
        )}
      </SidebarMenuItem>
    </Collapsible>
  )
})
NavMenuItem.displayName = 'NavMenuItem'

// 主导航菜单组件
export function NavMain({ items, label }: { items: IMenuItem[]; label?: string }) {
  const { isMobile, openMobile, setOpenMobile } = useSidebar()

  const navigation = useSidebarNavigation({
    isMobile,
    openMobile,
    setOpenMobile,
  })

  return (
    <SidebarNavigationContext value={navigation}>
      <SidebarGroup>
        {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <NavMenuItem key={item.id} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarNavigationContext>
  )
}

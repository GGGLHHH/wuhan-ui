import { NavMain } from '@/components/nav-main'
import { routeTree } from '@/routeTree.gen'
import { buildGroupedMenuItems } from '@/utils/route-utils'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@gedatou/ui'
import * as React from 'react'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const menuGroups = React.useMemo(() => buildGroupedMenuItems(routeTree), [])

  return (
    <Sidebar variant="inset" className="[&_[data-slot=sidebar-inner]]:bg-transparent" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="font-semibold" size="lg">
              Wuhan UI
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuGroups.map((group) => (
          <NavMain key={group.key} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

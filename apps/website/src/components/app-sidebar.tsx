import { NavMain } from '@/components/nav-main'
import { ThemeToggle } from '@/components/theme-toggle'
import { routeTree } from '@/routeTree.gen'
import { buildGroupedMenuItems } from '@/utils/route-utils'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
          <NavMain key={group.label ?? '__default'} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

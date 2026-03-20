import { NavMain } from '@/components/nav-main'
import { useNow } from '@/hooks/use-now'
import { routeTree } from '@/routeTree.gen'
import { buildGroupedMenuItems } from '@/utils/route-utils'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@gedatou/ui'
import { format } from 'date-fns'
import * as React from 'react'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const menuGroups = React.useMemo(() => buildGroupedMenuItems(routeTree), [])
  const { open } = useSidebar()
  const { now, pause, resume } = useNow({
    interval: 1000,
    controls: true,
  })

  // 侧边栏关闭时暂停，打开时恢复
  React.useEffect(() => {
    if (open) {
      resume()
    } else {
      pause()
    }
  }, [open, pause, resume])

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center justify-center" size="lg">
              {format(now, 'yyyy-MM-dd HH:mm:ss')}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuGroups.map((group) => (
          <NavMain key={group.label ?? '__default'} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

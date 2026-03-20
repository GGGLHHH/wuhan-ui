import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { useNow } from '@/hooks/use-now'
import { routeTree } from '@/routeTree.gen'
import { buildMenuItems } from '@/utils/route-utils'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@gedatou/ui'
import { format } from 'date-fns'
import * as React from 'react'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const menuItems = React.useMemo(() => buildMenuItems(routeTree), [])
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
        <NavMain items={menuItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}

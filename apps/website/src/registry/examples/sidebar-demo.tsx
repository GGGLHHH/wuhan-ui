import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@gedatou/ui'
import { HomeIcon, SettingsIcon, UsersIcon, FileTextIcon, InboxIcon } from 'lucide-react'

const items = [
  { title: '首页', icon: HomeIcon },
  { title: '收件箱', icon: InboxIcon },
  { title: '文档', icon: FileTextIcon },
  { title: '团队', icon: UsersIcon },
  { title: '设置', icon: SettingsIcon },
]

export default function SidebarDemo() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-lg border">
      <SidebarProvider>
        <Sidebar collapsible="none" className="w-[200px] border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>应用</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground text-sm">主内容区域</p>
        </main>
      </SidebarProvider>
    </div>
  )
}

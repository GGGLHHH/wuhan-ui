import { AppSidebar } from '@/components/app-sidebar'
import { BreadcrumbNav } from '@/components/layouts/breadcrumb-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { buildIconMap, getFixedTabs } from '@/utils/route-utils'
import { Separator, SidebarInset, SidebarProvider } from '@gedatou/ui'
import { useEffect, useState } from 'react'

import { FullscreenTrigger } from '../fullscreen-trigger'
import { SidebarTrigger } from '../sidebar-trigger'
import { TabContent } from '../tabs/tab-content'
import { initializeFixedTabs, restoreTabIcons } from '../tabs/tabs-store'
import { useRouteTabs } from '../tabs/use-route-tabs'

const SIDEBAR_STORAGE_KEY = 'sidebar_open_state'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const cached = localStorage.getItem(SIDEBAR_STORAGE_KEY)
    return cached ? JSON.parse(cached) : true
  })

  const handleSidebarOpenChange = (open: boolean) => {
    setSidebarOpen(open)
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(open))
  }

  // Initialize fixed tabs and restore icons on mount
  useEffect(() => {
    const iconMap = buildIconMap()
    restoreTabIcons(iconMap)
    const fixedTabs = getFixedTabs()
    initializeFixedTabs(fixedTabs)
  }, [])

  // Automatically sync route changes with tabs
  useRouteTabs()

  return (
    <SidebarProvider open={sidebarOpen} onOpenChange={handleSidebarOpenChange}>
      <AppSidebar />
      <SidebarInset className="h-svh overflow-hidden">
        <div className="bg-background sticky top-0 z-40 shrink-0">
          <header className="bg-background flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <FullscreenTrigger />
            <Separator className="mr-2 h-full" orientation="vertical" />
            <BreadcrumbNav />
            <div className="ml-auto flex items-center gap-1">
              <ThemeToggle />
            </div>
          </header>
          <TabContent />
        </div>
        <div
          data-page-content
          className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto p-4"
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

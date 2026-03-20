import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@gedatou/ui'
import { useState } from 'react'

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

  return (
    <SidebarProvider
      className="bg-background!"
      open={sidebarOpen}
      onOpenChange={handleSidebarOpenChange}
    >
      <AppSidebar />
      <SidebarInset className="h-svh overflow-hidden md:m-0! md:rounded-none! md:shadow-none!">
        <div className="via-border absolute top-12 bottom-0 left-0 hidden w-px bg-linear-to-b from-transparent to-transparent lg:block" />
        <div
          data-page-content
          className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto p-8"
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

import { AppSidebar } from '@/components/app-sidebar'
import { CommandMenu } from '@/components/command-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { ScrollContainerProvider } from '@/hooks/use-scroll-container'
import { Button, Kbd, SidebarInset, SidebarProvider } from '@gedatou/ui'
import { SearchIcon } from 'lucide-react'
import { useRef, useState } from 'react'

const SIDEBAR_STORAGE_KEY = 'sidebar_open_state'
const GITHUB_URL = 'https://github.com/GGGLHHH/wuhan-ui'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [commandOpen, setCommandOpen] = useState(false)
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
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <SidebarInset className="h-svh overflow-hidden md:m-0! md:rounded-none! md:shadow-none!">
        <header className="flex h-18 shrink-0 items-center gap-2 px-4">
          <div className="ml-auto flex items-center gap-1">
            <Button
              variant="outline"
              className="text-muted-foreground relative h-8 w-full justify-start rounded-lg text-sm sm:w-64 sm:pr-12"
              onClick={() => setCommandOpen(true)}
            >
              <div className="absolute left-1.5 flex items-center gap-1">
                <SearchIcon className="mr-2 size-4" />
                Search...
              </div>
              <span className="pointer-events-none absolute right-1.5 hidden gap-1 sm:flex">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="size-7" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </header>
        <div className="via-border absolute top-12 bottom-0 left-0 hidden w-px bg-linear-to-b from-transparent to-transparent lg:block" />
        <div
          ref={scrollRef}
          data-page-content
          className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto p-8 pt-4"
        >
          <ScrollContainerProvider value={scrollRef}>{children}</ScrollContainerProvider>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

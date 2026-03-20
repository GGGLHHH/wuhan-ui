import { TooltipProvider } from '@gedatou/ui'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from 'next-themes'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Outlet />
        <TanStackRouterDevtools />
      </TooltipProvider>
    </ThemeProvider>
  ),
})

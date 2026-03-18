import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { PanelLeftIcon } from 'lucide-react'
import { Slot } from 'radix-ui'
import * as React from 'react'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open],
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            '--sidebar-width': SIDEBAR_WIDTH,
            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          'wuhanui:group/sidebar-wrapper wuhanui:flex wuhanui:min-h-svh wuhanui:w-full wuhanui:has-data-[variant=inset]:bg-sidebar',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  dir,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'wuhanui:flex wuhanui:h-full wuhanui:w-(--sidebar-width) wuhanui:flex-col wuhanui:bg-sidebar wuhanui:text-sidebar-foreground',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          dir={dir}
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="wuhanui:w-(--sidebar-width) wuhanui:bg-sidebar wuhanui:p-0 wuhanui:text-sidebar-foreground wuhanui:[&>button]:hidden"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="wuhanui:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="wuhanui:flex wuhanui:h-full wuhanui:w-full wuhanui:flex-col">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="wuhanui:group wuhanui:peer wuhanui:hidden wuhanui:text-sidebar-foreground wuhanui:md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'wuhanui:relative wuhanui:w-(--sidebar-width) wuhanui:bg-transparent wuhanui:transition-[width] wuhanui:duration-200 wuhanui:ease-linear',
          'wuhanui:group-data-[collapsible=offcanvas]:w-0',
          'wuhanui:group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'wuhanui:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'wuhanui:group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <div
        data-slot="sidebar-container"
        data-side={side}
        className={cn(
          'wuhanui:fixed wuhanui:inset-y-0 wuhanui:z-10 wuhanui:hidden wuhanui:h-svh wuhanui:w-(--sidebar-width) wuhanui:transition-[left,right,width] wuhanui:duration-200 wuhanui:ease-linear wuhanui:data-[side=left]:left-0 wuhanui:data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] wuhanui:data-[side=right]:right-0 wuhanui:data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] wuhanui:md:flex',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'wuhanui:p-2 wuhanui:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'wuhanui:group-data-[collapsible=icon]:w-(--sidebar-width-icon) wuhanui:group-data-[side=left]:border-r wuhanui:group-data-[side=right]:border-l',
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="wuhanui:flex wuhanui:size-full wuhanui:flex-col wuhanui:bg-sidebar wuhanui:group-data-[variant=floating]:rounded-lg wuhanui:group-data-[variant=floating]:shadow-sm wuhanui:group-data-[variant=floating]:ring-1 wuhanui:group-data-[variant=floating]:ring-sidebar-border"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon className="wuhanui:" />
      <span className="wuhanui:sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'wuhanui:absolute wuhanui:inset-y-0 wuhanui:z-20 wuhanui:hidden wuhanui:w-4 wuhanui:transition-all wuhanui:ease-linear wuhanui:group-data-[side=left]:-right-4 wuhanui:group-data-[side=right]:left-0 wuhanui:after:absolute wuhanui:after:inset-y-0 wuhanui:after:start-1/2 wuhanui:after:w-[2px] wuhanui:hover:after:bg-sidebar-border wuhanui:sm:flex wuhanui:ltr:-translate-x-1/2 wuhanui:rtl:-translate-x-1/2',
        'wuhanui:in-data-[side=left]:cursor-w-resize wuhanui:in-data-[side=right]:cursor-e-resize',
        'wuhanui:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize wuhanui:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'wuhanui:group-data-[collapsible=offcanvas]:translate-x-0 wuhanui:group-data-[collapsible=offcanvas]:after:left-full wuhanui:hover:group-data-[collapsible=offcanvas]:bg-sidebar',
        'wuhanui:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        'wuhanui:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:w-full wuhanui:flex-1 wuhanui:flex-col wuhanui:bg-background wuhanui:md:peer-data-[variant=inset]:m-2 wuhanui:md:peer-data-[variant=inset]:ml-0 wuhanui:md:peer-data-[variant=inset]:rounded-xl wuhanui:md:peer-data-[variant=inset]:shadow-sm wuhanui:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn(
        'wuhanui:h-8 wuhanui:w-full wuhanui:bg-background wuhanui:shadow-none',
        className,
      )}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('wuhanui:flex wuhanui:flex-col wuhanui:gap-2 wuhanui:p-2', className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('wuhanui:flex wuhanui:flex-col wuhanui:gap-2 wuhanui:p-2', className)}
      {...props}
    />
  )
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('wuhanui:mx-2 wuhanui:w-auto wuhanui:bg-sidebar-border', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'wuhanui:no-scrollbar wuhanui:flex wuhanui:min-h-0 wuhanui:flex-1 wuhanui:flex-col wuhanui:gap-2 wuhanui:overflow-auto wuhanui:group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(
        'wuhanui:relative wuhanui:flex wuhanui:w-full wuhanui:min-w-0 wuhanui:flex-col wuhanui:p-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'wuhanui:flex wuhanui:h-8 wuhanui:shrink-0 wuhanui:items-center wuhanui:rounded-md wuhanui:px-2 wuhanui:text-xs wuhanui:font-medium wuhanui:text-sidebar-foreground/70 wuhanui:ring-sidebar-ring wuhanui:outline-hidden wuhanui:transition-[margin,opacity] wuhanui:duration-200 wuhanui:ease-linear wuhanui:group-data-[collapsible=icon]:-mt-8 wuhanui:group-data-[collapsible=icon]:opacity-0 wuhanui:focus-visible:ring-2 wuhanui:[&>svg]:size-4 wuhanui:[&>svg]:shrink-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'wuhanui:absolute wuhanui:top-3.5 wuhanui:right-3 wuhanui:flex wuhanui:aspect-square wuhanui:w-5 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-md wuhanui:p-0 wuhanui:text-sidebar-foreground wuhanui:ring-sidebar-ring wuhanui:outline-hidden wuhanui:transition-transform wuhanui:group-data-[collapsible=icon]:hidden wuhanui:after:absolute wuhanui:after:-inset-2 wuhanui:hover:bg-sidebar-accent wuhanui:hover:text-sidebar-accent-foreground wuhanui:focus-visible:ring-2 wuhanui:md:after:hidden wuhanui:[&>svg]:size-4 wuhanui:[&>svg]:shrink-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('wuhanui:w-full wuhanui:text-sm', className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn(
        'wuhanui:flex wuhanui:w-full wuhanui:min-w-0 wuhanui:flex-col wuhanui:gap-1',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('wuhanui:group/menu-item wuhanui:relative', className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  'wuhanui:peer/menu-button wuhanui:group/menu-button wuhanui:flex wuhanui:w-full wuhanui:items-center wuhanui:gap-2 wuhanui:overflow-hidden wuhanui:rounded-md wuhanui:p-2 wuhanui:text-left wuhanui:text-sm wuhanui:ring-sidebar-ring wuhanui:outline-hidden wuhanui:transition-[width,height,padding] wuhanui:group-has-data-[sidebar=menu-action]/menu-item:pr-8 wuhanui:group-data-[collapsible=icon]:size-8! wuhanui:group-data-[collapsible=icon]:p-2! wuhanui:hover:bg-sidebar-accent wuhanui:hover:text-sidebar-accent-foreground wuhanui:focus-visible:ring-2 wuhanui:active:bg-sidebar-accent wuhanui:active:text-sidebar-accent-foreground wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50 wuhanui:aria-disabled:pointer-events-none wuhanui:aria-disabled:opacity-50 wuhanui:data-open:hover:bg-sidebar-accent wuhanui:data-open:hover:text-sidebar-accent-foreground wuhanui:data-active:bg-sidebar-accent wuhanui:data-active:font-medium wuhanui:data-active:text-sidebar-accent-foreground wuhanui:[&_svg]:size-4 wuhanui:[&_svg]:shrink-0 wuhanui:[&>span:last-child]:truncate',
  {
    variants: {
      variant: {
        default: 'wuhanui:hover:bg-sidebar-accent wuhanui:hover:text-sidebar-accent-foreground',
        outline:
          'wuhanui:bg-background wuhanui:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] wuhanui:hover:bg-sidebar-accent wuhanui:hover:text-sidebar-accent-foreground wuhanui:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'wuhanui:h-8 wuhanui:text-sm',
        sm: 'wuhanui:h-7 wuhanui:text-xs',
        lg: 'wuhanui:h-12 wuhanui:text-sm wuhanui:group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : 'button'
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'wuhanui:absolute wuhanui:top-1.5 wuhanui:right-1 wuhanui:flex wuhanui:aspect-square wuhanui:w-5 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-md wuhanui:p-0 wuhanui:text-sidebar-foreground wuhanui:ring-sidebar-ring wuhanui:outline-hidden wuhanui:transition-transform wuhanui:group-data-[collapsible=icon]:hidden wuhanui:peer-hover/menu-button:text-sidebar-accent-foreground wuhanui:peer-data-[size=default]/menu-button:top-1.5 wuhanui:peer-data-[size=lg]/menu-button:top-2.5 wuhanui:peer-data-[size=sm]/menu-button:top-1 wuhanui:after:absolute wuhanui:after:-inset-2 wuhanui:hover:bg-sidebar-accent wuhanui:hover:text-sidebar-accent-foreground wuhanui:focus-visible:ring-2 wuhanui:md:after:hidden wuhanui:[&>svg]:size-4 wuhanui:[&>svg]:shrink-0',
        showOnHover &&
          'wuhanui:group-focus-within/menu-item:opacity-100 wuhanui:group-hover/menu-item:opacity-100 wuhanui:peer-data-active/menu-button:text-sidebar-accent-foreground wuhanui:aria-expanded:opacity-100 wuhanui:md:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'wuhanui:pointer-events-none wuhanui:absolute wuhanui:right-1 wuhanui:flex wuhanui:h-5 wuhanui:min-w-5 wuhanui:items-center wuhanui:justify-center wuhanui:rounded-md wuhanui:px-1 wuhanui:text-xs wuhanui:font-medium wuhanui:text-sidebar-foreground wuhanui:tabular-nums wuhanui:select-none wuhanui:group-data-[collapsible=icon]:hidden wuhanui:peer-hover/menu-button:text-sidebar-accent-foreground wuhanui:peer-data-[size=default]/menu-button:top-1.5 wuhanui:peer-data-[size=lg]/menu-button:top-2.5 wuhanui:peer-data-[size=sm]/menu-button:top-1 wuhanui:peer-data-active/menu-button:text-sidebar-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const [width] = React.useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  })

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn(
        'wuhanui:flex wuhanui:h-8 wuhanui:items-center wuhanui:gap-2 wuhanui:rounded-md wuhanui:px-2',
        className,
      )}
      {...props}
    >
      {showIcon && (
        <Skeleton className="wuhanui:size-4 wuhanui:rounded-md" data-sidebar="menu-skeleton-icon" />
      )}
      <Skeleton
        className="wuhanui:h-4 wuhanui:max-w-(--skeleton-width) wuhanui:flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'wuhanui:mx-3.5 wuhanui:flex wuhanui:min-w-0 wuhanui:translate-x-px wuhanui:flex-col wuhanui:gap-1 wuhanui:border-l wuhanui:border-sidebar-border wuhanui:px-2.5 wuhanui:py-0.5 wuhanui:group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('wuhanui:group/menu-sub-item wuhanui:relative', className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot.Root : 'a'

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'wuhanui:flex wuhanui:h-7 wuhanui:min-w-0 wuhanui:-translate-x-px wuhanui:items-center wuhanui:gap-2 wuhanui:overflow-hidden wuhanui:rounded-md wuhanui:px-2 wuhanui:text-sidebar-foreground wuhanui:ring-sidebar-ring wuhanui:outline-hidden wuhanui:group-data-[collapsible=icon]:hidden wuhanui:hover:bg-sidebar-accent wuhanui:hover:text-sidebar-accent-foreground wuhanui:focus-visible:ring-2 wuhanui:active:bg-sidebar-accent wuhanui:active:text-sidebar-accent-foreground wuhanui:disabled:pointer-events-none wuhanui:disabled:opacity-50 wuhanui:aria-disabled:pointer-events-none wuhanui:aria-disabled:opacity-50 wuhanui:data-[size=md]:text-sm wuhanui:data-[size=sm]:text-xs wuhanui:data-active:bg-sidebar-accent wuhanui:data-active:text-sidebar-accent-foreground wuhanui:[&>span:last-child]:truncate wuhanui:[&>svg]:size-4 wuhanui:[&>svg]:shrink-0 wuhanui:[&>svg]:text-sidebar-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

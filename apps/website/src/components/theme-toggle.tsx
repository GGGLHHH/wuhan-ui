import { toggleThemeWithTransition } from '@/utils/theme-transition'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@gedatou/ui'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()

  const handleThemeChange = (newTheme: string) => {
    if (theme === newTheme) {
      return
    }

    const newResolvedTheme = newTheme === 'system' ? systemTheme : newTheme

    if (resolvedTheme === newResolvedTheme) {
      setTheme(newTheme)
      return
    }

    toggleThemeWithTransition(() => {
      setTheme(newTheme)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-7" size="icon" variant="ghost">
          {theme === 'system' ? (
            <Monitor className="size-4" />
          ) : (
            <>
              <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            </>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>
          <Sun className="size-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')}>
          <Moon className="size-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('system')}>
          <Monitor className="size-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { useNavigate } from '@tanstack/react-router'
import { useCallback, useRef, useState } from 'react'

interface SidebarNavigationOptions {
  setOpenMobile?: (open: boolean) => void
  openMobile?: boolean
  isMobile?: boolean
}

/**
 * 侧边栏导航 Hook - 提供立即的视觉反馈
 *
 * 使用乐观 UI 模式：点击时立即更新本地状态，路由完成后自动同步
 */
export function useSidebarNavigation(options?: SidebarNavigationOptions) {
  const navigate = useNavigate()
  const { isMobile, openMobile, setOpenMobile } = options || {}

  const [pendingPath, setPendingPath] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleNavigate = useCallback(
    (path: string) => {
      if (isMobile && openMobile && setOpenMobile) {
        setOpenMobile(false)
      }

      setPendingPath(path)
      void navigate({ to: path } as any)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setPendingPath(null)
      }, 400)
    },
    [navigate, isMobile, openMobile, setOpenMobile],
  )

  const isPending = useCallback(
    (path: string) => {
      return pendingPath === path
    },
    [pendingPath],
  )

  return {
    handleNavigate,
    isPending,
    pendingPath,
  }
}

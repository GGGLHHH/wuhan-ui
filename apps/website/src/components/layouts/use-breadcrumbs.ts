import { useRouteSync } from '@/hooks/use-route-sync'
import { useState } from 'react'

export interface BreadcrumbItemData {
  title: string
  path: string
  icon?: string
  id: string
}

export function useBreadcrumbs() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemData[]>([])

  useRouteSync((matches) => {
    const withStaticData = matches.filter(
      (match) => match.staticData?.title || match.staticData?.titleKey,
    )

    const newBreadcrumbs = withStaticData.map((match) => {
      return {
        id: match.id,
        title: match.staticData?.title || '',
        path: match.pathname,
      }
    })

    setBreadcrumbs(newBreadcrumbs)
  })

  return breadcrumbs
}

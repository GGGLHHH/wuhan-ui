import { useRouteSync } from '@/hooks/use-route-sync'

import { addTab } from './tabs-store'
import type { ITabsItem } from './types'

export function useRouteTabs() {
  useRouteSync((matches, location) => {
    const currentMatch = matches
      .filter((match) => match.staticData?.title || match.staticData?.titleKey)
      .pop()

    if (!currentMatch) {
      return
    }

    const staticData = currentMatch.staticData

    const tabItem: ITabsItem = {
      id: currentMatch.routeId as any,
      path: currentMatch.pathname,
      title: staticData?.title || 'Untitled',
      titleKey: staticData?.titleKey,
      titleParams: staticData?.titleParams as Record<string, unknown> | undefined,
      icon: staticData?.icon,
      order: staticData?.order,
      state: location?.state,
      search: location?.search as Record<string, unknown> | undefined,
      hash: location?.hash,
    }

    addTab(tabItem)
  })
}

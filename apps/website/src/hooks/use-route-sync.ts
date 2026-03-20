import type { MakeRouteMatchUnion, RegisteredRouter, RouterState } from '@tanstack/react-router'
import { useMatches, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

// Type-safe route matches based on registered routes
type RouteMatches = Array<MakeRouteMatchUnion<RegisteredRouter>>

// Type-safe location based on registered router
type RouterLocation = RouterState<RegisteredRouter['routeTree']>['location']

/**
 * Check if router matches and location are in sync
 * Simply compares the last match pathname with current location pathname
 */
function isRouteInSync(matches: RouteMatches, location: RouterLocation | undefined): boolean {
  const lastMatch = matches[matches.length - 1]

  if (!lastMatch || !location) {
    return false
  }

  return lastMatch.pathname === location.pathname
}

/**
 * Execute a callback when router matches and location are in sync
 *
 * This prevents race conditions during navigation where matches might be updated
 * before location, or vice versa. The callback is only invoked when they are in sync.
 */
export function useRouteSync(
  callback: (matches: RouteMatches, location: RouterLocation | undefined) => void,
  syncTrigger?: unknown,
): void {
  const matches = useMatches()
  const location = useRouterState({ select: (s) => s.location })

  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    if (!isRouteInSync(matches, location)) {
      return
    }

    callbackRef.current(matches, location)
  }, [matches, location, syncTrigger])
}

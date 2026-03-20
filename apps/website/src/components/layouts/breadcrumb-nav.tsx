import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@gedatou/ui'
import { Link } from '@tanstack/react-router'
import * as React from 'react'

import type { BreadcrumbItemData } from './use-breadcrumbs'
import { useBreadcrumbs } from './use-breadcrumbs'

const BreadcrumbNavItem = React.memo(
  ({ item, isLast }: { item: BreadcrumbItemData; isLast: boolean }) => {
    const isRoot = item.path === '/'
    const isClickable = !isLast && !isRoot

    return (
      <>
        <BreadcrumbItem>
          {isClickable ? (
            <BreadcrumbLink asChild>
              <Link to={item.path}>{item.title}</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{item.title}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </>
    )
  },
)
BreadcrumbNavItem.displayName = 'BreadcrumbNavItem'

export function BreadcrumbNav() {
  const breadcrumbs = useBreadcrumbs()

  if (breadcrumbs.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => (
          <BreadcrumbNavItem key={item.id} isLast={index === breadcrumbs.length - 1} item={item} />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

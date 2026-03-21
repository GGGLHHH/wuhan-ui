import {
  DEFAULT_ROUTE_GROUP_INDEX,
  DEFAULT_ROUTE_GROUP_KEY,
  ROUTE_GROUPS,
} from '@/constants/route-groups'
import type { RouteGroupKey } from '@/constants/route-groups'
import type { FileRouteTypes } from '@/routeTree.gen'
import { routeTree } from '@/routeTree.gen'
import type { StaticDataRouteOption } from '@tanstack/react-router'
import { flatMap, orderBy } from 'es-toolkit'
import { CircleHelp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type IMenuItem = StaticDataRouteOption & {
  path: FileRouteTypes['to'] | (string & {})
  titleParams?: Record<string, unknown>
  id: FileRouteTypes['id']
  children?: IMenuItem[]
  titleKey?: string
  icon?: LucideIcon
  groupKey?: RouteGroupKey
}

export interface IMenuGroup {
  key: string
  label?: string
  items: IMenuItem[]
}

const DEFAULT_ICON: LucideIcon = CircleHelp
const DEFAULT_ORDER = 999

type RouteTreeType = typeof routeTree

type ResolvedMenuGroup = {
  appearanceIndex: number
  groupIndex: number
} & IMenuGroup

/**
 * 从 TanStack Router 的路由树构建菜单项
 *
 * 路由结构采用布局路由（Layout Routes）模式：
 * - __root
 *   - _dashboard (布局路由，包含侧边栏和顶栏)
 *     - index (实际 URL: /)
 *     - about (实际 URL: /about)
 *     - users (实际 URL: /users)
 *   - login (实际 URL: /login，全屏页面，无布局)
 *
 * 菜单仅显示 _dashboard 布局下的页面，全屏页面（如 login）不出现在侧边栏
 *
 * @param tree - 路由树根节点
 * @returns 菜单项数组
 */
export function buildMenuItems(tree: RouteTreeType = routeTree): IMenuItem[] {
  const children = tree.children

  if (!children || !Array.isArray(children)) {
    return []
  }

  // 查找 _dashboard 布局路由
  const dashboardRoute = children.find((route) => route.id === '/_dashboard')

  // 如果找到 _dashboard 布局路由，从其子路由构建菜单
  if (dashboardRoute?.children && Array.isArray(dashboardRoute.children)) {
    return processRoutes(dashboardRoute.children)
  }

  // 兜底：如果没有找到 _dashboard，仍然处理所有子路由
  // 但过滤掉布局路由（以下划线开头的路由）
  const filteredChildren = children.filter((route) => !route.id?.startsWith('/_'))

  return processRoutes(filteredChildren)
}

/**
 * 递归处理路由节点
 */
function processRoutes(routes: RouteTreeType[]): IMenuItem[] {
  // 转换并过滤掉 null 值
  const items = flatMap(routes, (route) => {
    const item = convertRouteToMenuItem(route)
    return item ? [item] : []
  })

  // 按 order 排序
  return orderBy(items, [(item) => item.order ?? DEFAULT_ORDER], ['asc'])
}

/**
 * 将单个路由节点转换为菜单项
 */
function convertRouteToMenuItem(route: RouteTreeType): IMenuItem | null {
  const staticData = route.options?.staticData

  // 没有 staticData 或标记为隐藏，跳过
  if (!staticData || staticData.hideInMenu) {
    return null
  }

  // 获取完整路径：fullPath 是 TanStack Router 生成的完整路径
  const routePath = route.fullPath

  // Must have either title or titleKey and path
  if ((!staticData.title && !staticData.titleKey) || !routePath) {
    return null
  }

  const menuItem: IMenuItem = {
    path: routePath,
    title: staticData.title || '',
    titleKey: staticData.titleKey,
    titleParams: staticData.titleParams,
    icon: staticData.icon || DEFAULT_ICON,
    order: staticData.order,
    id: route.id,
    groupKey: staticData.groupKey,
  }

  // 递归处理子路由
  const children = route.children
  if (children && Array.isArray(children)) {
    const childItems = processRoutes(children)
    if (childItems.length > 0) {
      menuItem.children = childItems
    }
  }

  return menuItem
}

function resolveMenuGroup(groupKey?: RouteGroupKey | (string & {})) {
  if (!groupKey) {
    return {
      key: DEFAULT_ROUTE_GROUP_KEY,
      label: undefined,
      groupIndex: DEFAULT_ROUTE_GROUP_INDEX,
    }
  }

  if (groupKey in ROUTE_GROUPS) {
    const group = ROUTE_GROUPS[groupKey as RouteGroupKey]

    return {
      key: groupKey,
      label: group.label,
      groupIndex: group.groupIndex,
    }
  }

  return {
    key: groupKey,
    label: groupKey,
    groupIndex: DEFAULT_ROUTE_GROUP_INDEX,
  }
}

/**
 * 将菜单项按 groupKey 字段分组
 * 无 groupKey 的项归入默认分组（label 为 undefined）
 */
export function buildGroupedMenuItems(tree: RouteTreeType = routeTree): IMenuGroup[] {
  const items = buildMenuItems(tree)
  const groupMap = new Map<string, ResolvedMenuGroup>()

  for (const item of items) {
    const resolvedGroup = resolveMenuGroup(item.groupKey)
    const existingGroup = groupMap.get(resolvedGroup.key)

    if (existingGroup) {
      existingGroup.items.push(item)
      continue
    }

    groupMap.set(resolvedGroup.key, {
      ...resolvedGroup,
      appearanceIndex: groupMap.size,
      items: [item],
    })
  }

  return orderBy(
    Array.from(groupMap.values()),
    [(group) => group.groupIndex, (group) => group.appearanceIndex],
    ['asc', 'asc'],
  ).map(({ key, label, items }) => ({
    key,
    label,
    items,
  }))
}

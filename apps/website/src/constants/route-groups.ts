export const ROUTE_GROUPS = {
  overview: {
    label: '概览',
    groupIndex: 0,
  },
  customComponents: {
    label: '自定义组件',
    groupIndex: 1,
  },
  components: {
    label: 'Components',
    groupIndex: 2,
  },
} as const

export type RouteGroupKey = keyof typeof ROUTE_GROUPS

export const DEFAULT_ROUTE_GROUP_INDEX = 999
export const DEFAULT_ROUTE_GROUP_KEY = '__ungrouped'

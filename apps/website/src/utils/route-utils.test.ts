import { describe, expect, test } from 'vite-plus/test'

import { buildGroupedMenuItems } from './route-utils'

describe('buildGroupedMenuItems', () => {
  test('groups routes by groupKey and sorts groups by configured order', () => {
    const tree = {
      children: [
        {
          id: '/_dashboard',
          children: [
            {
              id: '/_dashboard/docs/button',
              fullPath: '/docs/button',
              options: {
                staticData: {
                  title: 'Button',
                  groupKey: 'components',
                },
              },
            },
            {
              id: '/_dashboard/docs/aurora',
              fullPath: '/docs/aurora',
              options: {
                staticData: {
                  title: 'Aurora',
                  groupKey: 'customComponents',
                },
              },
            },
            {
              id: '/_dashboard/',
              fullPath: '/',
              options: {
                staticData: {
                  title: 'Home',
                  groupKey: 'overview',
                  order: 1,
                },
              },
            },
          ],
        },
      ],
    } as any

    const groups = buildGroupedMenuItems(tree)

    expect(groups.map((group) => group.label)).toEqual(['概览', '自定义组件', 'Components'])
    expect(groups.map((group) => group.items.map((item) => item.title))).toEqual([
      ['Home'],
      ['Aurora'],
      ['Button'],
    ])
  })
})

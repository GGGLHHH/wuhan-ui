import { expect, test } from 'vite-plus/test'

import { cn } from '../src/index.js'

test('cn merges class names', () => {
  expect(cn('px-2', 'py-1')).toBe('px-2 py-1')
})

test('cn handles conflicting tailwind classes', () => {
  expect(cn('px-2', 'px-4')).toBe('px-4')
})

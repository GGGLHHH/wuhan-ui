import { describe, expect, test } from 'vite-plus/test'

import { calcStaggerDelay } from '../src/components/StaggerReveal'

describe('calcStaggerDelay', () => {
  // Default behavior: derive interval from duration / firstBatchSize
  test('first batch items get incremental delay derived from duration', () => {
    expect(calcStaggerDelay({ index: 0, firstBatchSize: 3, duration: 0.6 })).toBe(0)
    expect(calcStaggerDelay({ index: 1, firstBatchSize: 3, duration: 0.6 })).toBe(0.2)
    expect(calcStaggerDelay({ index: 2, firstBatchSize: 3, duration: 0.6 })).toBe(0.4)
  })

  test('items after first batch get zero delay', () => {
    expect(calcStaggerDelay({ index: 3, firstBatchSize: 3, duration: 0.6 })).toBe(0)
    expect(calcStaggerDelay({ index: 10, firstBatchSize: 3, duration: 0.6 })).toBe(0)
    expect(calcStaggerDelay({ index: 99, firstBatchSize: 3, duration: 0.6 })).toBe(0)
  })

  test('single visible item gets zero delay', () => {
    expect(calcStaggerDelay({ index: 0, firstBatchSize: 1, duration: 0.5 })).toBe(0)
  })

  test('zero first batch size returns zero delay', () => {
    expect(calcStaggerDelay({ index: 0, firstBatchSize: 0, duration: 0.5 })).toBe(0)
  })

  // Explicit stagger prop overrides duration-derived interval
  test('explicit stagger overrides duration-derived interval', () => {
    expect(calcStaggerDelay({ index: 0, firstBatchSize: 3, duration: 0.6, stagger: 0.15 })).toBe(0)
    expect(calcStaggerDelay({ index: 1, firstBatchSize: 3, duration: 0.6, stagger: 0.15 })).toBe(
      0.15,
    )
    expect(calcStaggerDelay({ index: 2, firstBatchSize: 3, duration: 0.6, stagger: 0.15 })).toBe(
      0.3,
    )
  })

  test('explicit stagger still returns zero for items after first batch', () => {
    expect(calcStaggerDelay({ index: 3, firstBatchSize: 3, duration: 0.6, stagger: 0.15 })).toBe(0)
    expect(calcStaggerDelay({ index: 50, firstBatchSize: 3, duration: 0.6, stagger: 0.15 })).toBe(0)
  })
})

import { motion, useReducedMotion } from 'motion/react'
import {
  Children,
  type ComponentProps,
  type RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

export interface StaggerRevealProps extends ComponentProps<'div'> {
  /** Optional interval between initially visible items (seconds). Defaults to duration / firstBatchSize. */
  stagger?: number
  /** Animation duration per child (seconds) */
  duration?: number
  /** Initial Y-axis offset in pixels */
  distance?: number
  /** Scroll container ref for viewport detection (defaults to window) */
  root?: RefObject<Element | null>
}

export function calcStaggerDelay({
  index,
  firstBatchSize,
  duration,
  stagger,
}: {
  index: number
  firstBatchSize: number
  duration: number
  stagger?: number
}): number {
  if (firstBatchSize <= 1 || index >= firstBatchSize) return 0
  const step = stagger ?? duration / firstBatchSize
  return Number.parseFloat((index * step).toFixed(10))
}

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

function isVisibleInRoot(element: Element, rootElement: Element | null) {
  const rect = element.getBoundingClientRect()

  if (rootElement) {
    const rootRect = rootElement.getBoundingClientRect()
    return rect.bottom > rootRect.top && rect.top < rootRect.bottom
  }

  return rect.bottom > 0 && rect.top < window.innerHeight
}

/**
 * DOM-based stagger animation for cases where React children can't be split
 * (e.g. MDX wrapper passes a single element tree containing multiple DOM children)
 */
function useDomStagger(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    duration,
    distance,
    stagger,
    root,
    enabled,
  }: {
    duration: number
    distance: number
    stagger?: number
    root?: RefObject<Element | null>
    enabled: boolean
  },
) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const animatedSet = useRef(new WeakSet<Element>())

  const animateElement = useCallback(
    (el: Element, delay: number) => {
      if (animatedSet.current.has(el)) return
      animatedSet.current.add(el)
      el.animate(
        [
          { opacity: 0, transform: `translateY(${distance}px)` },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          fill: 'both',
          easing: 'ease-out',
        },
      )
    },
    [duration, distance],
  )

  useIsomorphicLayoutEffect(() => {
    if (!enabled) return
    const container = containerRef.current
    if (!container) return

    // Find the actual content wrapper (MDX wraps in a div)
    const target = container.children.length === 1 ? container.children[0] : container
    const domChildren = Array.from(target.children)
    if (domChildren.length === 0) return

    const rootElement = root?.current ?? null
    const visibleCount = domChildren.filter((el) => isVisibleInRoot(el, rootElement)).length
    const firstBatchSize = visibleCount

    // Animate initially visible elements with stagger
    domChildren.forEach((el, index) => {
      if (index < firstBatchSize) {
        const delay = calcStaggerDelay({ index, firstBatchSize, duration, stagger })
        animateElement(el, delay)
      }
    })

    // Observe remaining elements for scroll-triggered animation
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animateElement(entry.target, 0)
            observerRef.current?.unobserve(entry.target)
          }
        }
      },
      {
        root: rootElement,
        threshold: 0.1,
      },
    )

    domChildren.forEach((el, index) => {
      if (index >= firstBatchSize) {
        observerRef.current?.observe(el)
      }
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [enabled, containerRef, root, duration, distance, stagger, animateElement])
}

export function StaggerReveal({
  children,
  stagger,
  duration = 0.5,
  distance = 20,
  className,
  root,
  ...props
}: StaggerRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const items = Children.toArray(children)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const [ready, setReady] = useState(false)
  const [firstBatchSize, setFirstBatchSize] = useState(0)

  // Use DOM mode when there's only 1 React child (e.g. MDX wrapper)
  const useDomMode = items.length <= 1
  useDomStagger(containerRef, {
    duration,
    distance,
    stagger,
    root,
    enabled: useDomMode && !shouldReduceMotion,
  })

  useIsomorphicLayoutEffect(() => {
    if (useDomMode) return
    const visibleCount = itemRefs.current.filter((element) => {
      return element ? isVisibleInRoot(element, root?.current ?? null) : false
    }).length

    setFirstBatchSize(visibleCount)
    setReady(true)
  }, [items.length, root, useDomMode])

  if (shouldReduceMotion) {
    return (
      <div ref={containerRef} className={className} {...props}>
        {children}
      </div>
    )
  }

  // DOM mode: render children as-is, animate via Web Animations API
  if (useDomMode) {
    return (
      <div ref={containerRef} className={className} {...props}>
        {children}
      </div>
    )
  }

  // React mode: wrap each child in motion.div
  return (
    <div ref={containerRef} className={className} {...props}>
      {items.map((child, index) => {
        const isInitialBatch = ready && index < firstBatchSize
        const initialDelay = calcStaggerDelay({ index, firstBatchSize, duration, stagger })

        return (
          <motion.div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            ref={(node) => {
              itemRefs.current[index] = node
            }}
            initial={{ opacity: 0, y: distance }}
            animate={isInitialBatch ? { opacity: 1, y: 0 } : undefined}
            whileInView={ready && !isInitialBatch ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration, delay: isInitialBatch ? initialDelay : 0 }}
            viewport={root ? { once: true, amount: 0.1, root } : { once: true, amount: 0.1 }}
          >
            {child}
          </motion.div>
        )
      })}
    </div>
  )
}

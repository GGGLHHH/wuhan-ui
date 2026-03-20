import { useEffect, useRef } from 'react'

export function useScrollIntoView(
  isActive: boolean,
  options: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  },
) {
  const elementRef = useRef<HTMLDivElement>(null)
  const prevActiveRef = useRef<boolean>(false)

  useEffect(() => {
    if (isActive && !prevActiveRef.current && elementRef.current) {
      requestAnimationFrame(() => {
        elementRef.current?.scrollIntoView(options)
      })
    }
    prevActiveRef.current = isActive
  }, [isActive, options])

  return elementRef
}

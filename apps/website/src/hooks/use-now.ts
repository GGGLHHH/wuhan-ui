import { useCallback, useEffect, useRef, useState } from 'react'

interface UseNowOptions {
  interval?: number | 'requestAnimationFrame'
  immediate?: boolean
  controls?: boolean
}

interface UseNowReturn {
  resume: () => void
  pause: () => void
  now: Date
}

export function useNow(options: UseNowOptions & { controls: true }): UseNowReturn
export function useNow(options?: UseNowOptions & { controls?: false }): Date
export function useNow(options: UseNowOptions = {}): Date | UseNowReturn {
  const { interval = 1000, controls = false, immediate = true } = options

  const [now, setNow] = useState<Date>(() => new Date())
  const isActiveRef = useRef<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const isInitializedRef = useRef<boolean>(false)

  const update = useCallback(() => {
    setNow(new Date())
  }, [])

  const cleanup = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current)
      rafIdRef.current = null
    }
  }, [])

  const pause = useCallback(() => {
    isActiveRef.current = false
    cleanup()
  }, [cleanup])

  const startTimer = useCallback(() => {
    cleanup()

    if (interval === 'requestAnimationFrame') {
      const loop = () => {
        if (!isActiveRef.current) return
        update()
        rafIdRef.current = requestAnimationFrame(loop)
      }
      rafIdRef.current = requestAnimationFrame(loop)
    } else {
      const validInterval = typeof interval === 'number' && interval > 0 ? interval : 1000
      timerRef.current = setInterval(update, validInterval)
    }
  }, [cleanup, update, interval])

  const resume = useCallback(() => {
    if (isActiveRef.current) return

    isActiveRef.current = true
    update()
    startTimer()
  }, [update, startTimer])

  useEffect(() => {
    if (!isInitializedRef.current) {
      isInitializedRef.current = true
      if (immediate) {
        isActiveRef.current = true
      }
    }

    if (isActiveRef.current) {
      startTimer()
    }

    return cleanup
  }, [immediate, startTimer, cleanup])

  if (controls) {
    return { now, pause, resume }
  }

  return now
}

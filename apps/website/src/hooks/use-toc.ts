import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  depth: number
}

export function useToc() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const container = document.querySelector('[data-page-content]')
    if (!container) return

    const headings = container.querySelectorAll<HTMLHeadingElement>('h2[id], h3[id]')
    const tocItems: TocItem[] = Array.from(headings).map((h) => ({
      id: h.id,
      text: h.textContent ?? '',
      depth: h.tagName === 'H2' ? 2 : 3,
    }))
    setItems(tocItems)

    if (tocItems.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        root: container,
        rootMargin: '0px 0px -80% 0px',
      },
    )

    for (const h of headings) {
      observer.observe(h)
    }

    return () => observer.disconnect()
  }, [])

  return { items, activeId }
}

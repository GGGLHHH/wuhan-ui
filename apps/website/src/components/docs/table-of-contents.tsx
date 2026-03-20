import { useToc } from '@/hooks/use-toc'
import { cn } from '@/lib/utils'

export function TableOfContents() {
  const { items, activeId } = useToc()

  if (items.length === 0) return null

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    const container = document.querySelector('[data-page-content]')
    const target = document.getElementById(id)
    if (!container || !target) return

    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const offset = targetRect.top - containerRect.top + container.scrollTop

    container.scrollTo({ top: offset, behavior: 'smooth' })
  }

  return (
    <nav className="hidden w-48 shrink-0 self-stretch xl:block">
      <div className="sticky top-0 space-y-1 py-4 text-sm">
        <p className="mb-2 font-medium">On This Page</p>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={cn(
              'text-muted-foreground hover:text-foreground block py-1 leading-snug transition-colors',
              item.depth === 3 && 'pl-3',
              activeId === item.id && 'text-foreground font-medium',
            )}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  )
}

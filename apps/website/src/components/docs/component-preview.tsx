import { Button } from '@gedatou/ui'
import { Check, Clipboard } from 'lucide-react'
import { type ReactNode, useCallback, useRef, useState } from 'react'
import ShikiHighlighter from 'react-shiki/web'

interface ComponentPreviewProps {
  children: ReactNode
  code: string
  language?: string
}

const COLLAPSED_HEIGHT = 150

export function ComponentPreview({ children, code, language = 'tsx' }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className="not-prose mt-4 mb-12 flex flex-col overflow-hidden rounded-xl border">
      {/* Preview */}
      <div className="flex min-h-[280px] items-center justify-center">{children}</div>
      {/* Code */}
      <div className="relative">
        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopy}
          className="bg-muted/80 hover:bg-muted absolute top-3 right-3 z-10 inline-flex size-7 items-center justify-center rounded-md transition-colors"
        >
          {copied ? <Check className="size-3.5" /> : <Clipboard className="size-3.5" />}
        </button>
        <div
          ref={codeRef}
          className="overflow-hidden border-t transition-[max-height] duration-300 ease-in-out [&_pre]:!m-0 [&_pre]:!rounded-none [&_pre]:!border-0"
          style={{ maxHeight: isExpanded ? codeRef.current?.scrollHeight : COLLAPSED_HEIGHT }}
        >
          <div className="text-sm">
            <ShikiHighlighter
              language={language}
              theme={{ light: 'github-light', dark: 'github-dark' }}
              defaultColor="light-dark()"
              showLineNumbers
              showLanguage={false}
            >
              {code.trim()}
            </ShikiHighlighter>
          </div>
        </div>
        {/* Expand overlay */}
        <div
          className={`to-background absolute inset-x-0 bottom-0 flex h-20 items-end justify-center bg-linear-to-b from-transparent pb-3 transition-opacity duration-300 ${
            isExpanded ? 'pointer-events-none opacity-0' : 'cursor-pointer opacity-100'
          }`}
          onClick={() => !isExpanded && setIsExpanded(true)}
        >
          <Button variant="outline" size="sm" className="rounded-lg shadow-none">
            View Code
          </Button>
        </div>
      </div>
      <div
        className={`overflow-hidden border-t transition-all duration-300 ${
          isExpanded ? 'max-h-12 opacity-100' : 'max-h-0 border-t-transparent opacity-0'
        }`}
      >
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground w-full rounded-none"
          onClick={() => setIsExpanded(false)}
        >
          Collapse
        </Button>
      </div>
    </div>
  )
}

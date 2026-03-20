import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { useCallback, useState } from 'react'
import ShikiHighlighter from 'react-shiki/web'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = 'tsx', className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className={cn('relative overflow-hidden rounded-lg border', className)}>
      <button
        type="button"
        onClick={handleCopy}
        className="bg-muted/80 hover:bg-muted absolute top-2.5 right-2.5 z-10 inline-flex size-7 items-center justify-center rounded-md transition-colors"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </button>
      <div className="text-sm [&_pre]:m-0! [&_pre]:rounded-none! [&_pre]:border-0!">
        <ShikiHighlighter
          language={language}
          theme={{ light: 'github-light', dark: 'github-dark' }}
          defaultColor="light-dark()"
          showLanguage={false}
        >
          {code.trim()}
        </ShikiHighlighter>
      </div>
    </div>
  )
}

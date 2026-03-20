import { Tabs, TabsContent, TabsList, TabsTrigger } from '@gedatou/ui'
import { Check, Clipboard } from 'lucide-react'
import { type ReactNode, useCallback, useState } from 'react'
import ShikiHighlighter from 'react-shiki/web'

interface ComponentPreviewProps {
  children: ReactNode
  code: string
  language?: string
}

export function ComponentPreview({ children, code, language = 'tsx' }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className="not-prose">
      <Tabs defaultValue="preview">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <button
            type="button"
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors"
          >
            {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <TabsContent value="preview">
          <div className="border-border flex min-h-[120px] items-center justify-center rounded-lg border p-6">
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="overflow-x-auto rounded-lg text-sm [&_pre]:!rounded-lg [&_pre]:!p-4">
            <ShikiHighlighter
              language={language}
              theme={{ light: 'github-light', dark: 'github-dark' }}
              defaultColor="light-dark()"
              showLineNumbers
            >
              {code.trim()}
            </ShikiHighlighter>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

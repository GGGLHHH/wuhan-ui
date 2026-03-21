import { DirectionProvider } from '@gedatou/ui'

export default function DirectionDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col gap-2 rounded-lg border p-4">
        <p className="text-muted-foreground text-sm">当前方向：RTL（从右到左）</p>
        <p>هذا نص عربي للتوضيح — 这是一段阿拉伯语示例文本</p>
      </div>
    </DirectionProvider>
  )
}

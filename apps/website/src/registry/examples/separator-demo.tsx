import { Separator } from '@gedatou/ui'

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Wuhan UI</h4>
        <p className="text-muted-foreground text-sm">一个开源的 React 组件库。</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>文档</div>
        <Separator orientation="vertical" />
        <div>组件</div>
        <Separator orientation="vertical" />
        <div>主题</div>
      </div>
    </div>
  )
}

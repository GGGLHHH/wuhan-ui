import { Toggle } from '@gedatou/ui'
import { Bold, Italic, Underline } from 'lucide-react'

export default function ToggleDemo() {
  return (
    <div className="flex items-center gap-2">
      <Toggle aria-label="切换粗体">
        <Bold />
      </Toggle>
      <Toggle aria-label="切换斜体">
        <Italic />
      </Toggle>
      <Toggle aria-label="切换下划线">
        <Underline />
      </Toggle>
    </div>
  )
}

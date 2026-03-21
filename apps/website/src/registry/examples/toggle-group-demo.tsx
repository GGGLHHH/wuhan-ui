import { ToggleGroup, ToggleGroupItem } from '@gedatou/ui'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="左对齐">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="居中对齐">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="右对齐">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

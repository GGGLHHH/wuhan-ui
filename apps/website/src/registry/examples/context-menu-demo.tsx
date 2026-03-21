import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@gedatou/ui'
import { useState } from 'react'

export default function ContextMenuDemo() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showUrls, setShowUrls] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <ContextMenu>
      <ContextMenuTrigger className="text-muted-foreground flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        右键点击此处
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          返回 <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          前进 <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          刷新 <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>更多工具</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>保存页面为...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>开发者工具</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
          显示书签栏 <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
          显示完整网址
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>联系人</ContextMenuLabel>
        <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
          <ContextMenuRadioItem value="pedro">Pedro</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

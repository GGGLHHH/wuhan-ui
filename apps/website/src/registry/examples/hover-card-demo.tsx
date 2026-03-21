import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@gedatou/ui'
import { CalendarDays } from 'lucide-react'

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@wuhan-ui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>WU</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@wuhan-ui</h4>
            <p className="text-sm">一套精心设计的 React UI 组件库。</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 size-4 opacity-70" />
              <span className="text-muted-foreground text-xs">创建于 2024 年 1 月</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

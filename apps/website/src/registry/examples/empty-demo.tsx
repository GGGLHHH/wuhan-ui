import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@gedatou/ui'
import { Inbox } from 'lucide-react'

export default function EmptyDemo() {
  return (
    <Empty className="min-h-[320px] border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-5" />
        </EmptyMedia>
        <EmptyTitle>暂无数据</EmptyTitle>
        <EmptyDescription>
          当前列表中还没有内容，你可以先创建一条记录，或稍后刷新页面重试。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>新建内容</Button>
      </EmptyContent>
    </Empty>
  )
}

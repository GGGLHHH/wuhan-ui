import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@gedatou/ui'
import { Badge } from '@gedatou/ui'
import { FileText, ImageIcon, Music } from 'lucide-react'

export default function ItemDemo() {
  return (
    <ItemGroup className="max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FileText className="text-blue-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>项目文档</ItemTitle>
          <ItemDescription>最近更新于 2 小时前</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">文档</Badge>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ImageIcon className="text-green-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>设计稿</ItemTitle>
          <ItemDescription>包含 12 个页面的 UI 设计</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">设计</Badge>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Music className="text-purple-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>播客录音</ItemTitle>
          <ItemDescription>时长 45 分钟</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">音频</Badge>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}

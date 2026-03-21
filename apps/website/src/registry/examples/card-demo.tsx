import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@gedatou/ui'

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>卡片标题</CardTitle>
        <CardDescription>这是一段卡片描述文字。</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            操作
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>卡片内容区域，可以放置任意内容。</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          取消
        </Button>
        <Button size="sm" className="ml-auto">
          确认
        </Button>
      </CardFooter>
    </Card>
  )
}

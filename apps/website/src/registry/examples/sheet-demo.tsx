import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetContentClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@gedatou/ui'

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">打开面板</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetContentClose />
        <SheetHeader>
          <SheetTitle>编辑个人资料</SheetTitle>
          <SheetDescription>在这里修改你的个人信息，完成后点击保存。</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="name">名称</Label>
            <Input id="name" defaultValue="Wuhan UI" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">用户名</Label>
            <Input id="username" defaultValue="@wuhanui" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">保存</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

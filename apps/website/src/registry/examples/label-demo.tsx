import { Label } from '@gedatou/ui'
import { Input } from '@gedatou/ui'

export default function LabelDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">邮箱</Label>
        <Input type="email" id="email" placeholder="请输入邮箱" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">用户名</Label>
        <Input type="text" id="username" placeholder="请输入用户名" />
      </div>
    </div>
  )
}

import { Input } from '@gedatou/ui'

export default function InputDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input type="text" placeholder="请输入内容" />
      <Input type="email" placeholder="请输入邮箱" />
      <Input type="password" placeholder="请输入密码" />
      <Input disabled placeholder="禁用状态" />
    </div>
  )
}

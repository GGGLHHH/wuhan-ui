import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@gedatou/ui'
import { Eye, Mail, Search } from 'lucide-react'

export default function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Search />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="搜索..." />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Mail />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="请输入邮箱" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@gmail.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="password" placeholder="请输入密码" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <Eye />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

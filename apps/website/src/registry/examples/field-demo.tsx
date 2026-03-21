import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
} from '@gedatou/ui'

export default function FieldDemo() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="username">用户名</FieldLabel>
        <FieldContent>
          <Input id="username" placeholder="请输入用户名" />
          <FieldDescription>这将作为你的公开显示名称。</FieldDescription>
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="email">邮箱</FieldLabel>
        <FieldContent>
          <Input id="email" type="email" placeholder="请输入邮箱" />
          <FieldError>请输入有效的邮箱地址。</FieldError>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}

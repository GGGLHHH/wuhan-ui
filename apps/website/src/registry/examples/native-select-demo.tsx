import { NativeSelect, NativeSelectOption } from '@gedatou/ui'

export default function NativeSelectDemo() {
  return (
    <NativeSelect>
      <NativeSelectOption value="" disabled>
        请选择水果
      </NativeSelectOption>
      <NativeSelectOption value="apple">苹果</NativeSelectOption>
      <NativeSelectOption value="banana">香蕉</NativeSelectOption>
      <NativeSelectOption value="orange">橙子</NativeSelectOption>
      <NativeSelectOption value="grape">葡萄</NativeSelectOption>
    </NativeSelect>
  )
}

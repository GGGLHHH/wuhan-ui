import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@gedatou/ui'

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择水果" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="grape">葡萄</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
          <SelectItem value="watermelon">西瓜</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

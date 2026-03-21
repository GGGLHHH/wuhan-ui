import { Checkbox } from '@gedatou/ui'

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        同意服务条款
      </label>
    </div>
  )
}

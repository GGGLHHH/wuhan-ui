import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@gedatou/ui'

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">打开弹出框</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>尺寸设置</PopoverTitle>
          <PopoverDescription>设置当前图层的宽度和高度。</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm" htmlFor="width">
              宽度
            </label>
            <input
              id="width"
              defaultValue="100%"
              className="col-span-2 h-8 rounded-md border px-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm" htmlFor="height">
              高度
            </label>
            <input
              id="height"
              defaultValue="25px"
              className="col-span-2 h-8 rounded-md border px-2 text-sm"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

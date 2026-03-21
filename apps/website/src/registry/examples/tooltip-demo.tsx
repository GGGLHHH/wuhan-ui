import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@gedatou/ui'

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">悬停查看提示</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>这是一个工具提示</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

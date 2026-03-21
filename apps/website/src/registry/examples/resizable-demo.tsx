import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@gedatou/ui'

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">面板一</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">面板二</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

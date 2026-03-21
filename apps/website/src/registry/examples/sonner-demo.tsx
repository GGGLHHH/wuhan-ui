import { Button, Toaster } from '@gedatou/ui'
import { toast } from 'sonner'

export default function SonnerDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast('事件已创建')}>
          默认
        </Button>
        <Button variant="outline" onClick={() => toast.success('操作成功')}>
          成功
        </Button>
        <Button variant="outline" onClick={() => toast.error('操作失败')}>
          错误
        </Button>
        <Button variant="outline" onClick={() => toast.info('这是一条提示')}>
          信息
        </Button>
        <Button variant="outline" onClick={() => toast.warning('请注意')}>
          警告
        </Button>
      </div>
      <Toaster />
    </div>
  )
}

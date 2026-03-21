import { Alert, AlertDescription, AlertTitle } from '@gedatou/ui'
import { Info } from 'lucide-react'

export default function AlertDemo() {
  return (
    <Alert>
      <Info />
      <AlertTitle>提示</AlertTitle>
      <AlertDescription>这是一条默认样式的提示信息。</AlertDescription>
    </Alert>
  )
}

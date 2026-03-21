import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@gedatou/ui'
import { Bold, Italic, Underline } from 'lucide-react'

export default function ButtonGroupDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button variant="outline">
          <Bold />
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline">
          <Italic />
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline">
          <Underline />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <Button variant="outline">example.com</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </div>
  )
}

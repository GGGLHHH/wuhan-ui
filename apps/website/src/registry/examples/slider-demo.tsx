import { Slider } from '@gedatou/ui'

export default function SliderDemo() {
  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  )
}

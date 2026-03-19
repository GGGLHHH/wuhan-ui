import { Aurora } from '@gedatou/ui'

export function App() {
  return (
    <div className="relative h-screen w-full bg-black">
      <Aurora colorStops={['#5227FF', '#5b117e', '#42119c']} amplitude={1} blend={1} />
    </div>
  )
}

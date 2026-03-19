import { Aurora } from '@gedatou/ui'

export function App() {
  return (
    <div className="relative h-screen w-full bg-[#060010]">
      <Aurora colorStops={['#5227FF', '#5b117e', '#42119c']} amplitude={1} blend={1} />
      {/* <Silk speed={5} scale={1} color="#d8135b" noiseIntensity={1.5} rotation={0} /> */}
    </div>
  )
}

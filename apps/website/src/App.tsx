import { Aurora, LoadingPage } from '@gedatou/ui'

export function App() {
  return (
    <div className="relative h-screen w-full bg-[#060010]">
      <div className="absolute inset-0">
        <Aurora colorStops={['#5227FF', '#5b117e', '#42119c']} amplitude={1} blend={1} />
      </div>
      <LoadingPage />
      {/* <Silk speed={5} scale={1} color="#d8135b" noiseIntensity={1.5} rotation={0} /> */}
    </div>
  )
}

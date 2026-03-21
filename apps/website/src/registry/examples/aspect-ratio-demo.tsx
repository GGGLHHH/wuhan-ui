import { AspectRatio } from '@gedatou/ui'

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&dpr=2&q=80"
          alt="Landscape"
          className="size-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  )
}

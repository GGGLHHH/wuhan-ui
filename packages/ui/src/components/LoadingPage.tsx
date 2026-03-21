import { DotLottieReact as DR, type DotLottieReactProps } from '@lottiefiles/dotlottie-react'

export type LoadingPageProps = DotLottieReactProps

export const LoadingPage = (props: LoadingPageProps) => {
  return (
    <DR
      {...props}
      src="https://lottie.host/f0b9f1f2-0678-4b48-8dd4-5a05d1fa7f37/fNy0mmIl6L.lottie"
      loop
      autoplay
    />
  )
}

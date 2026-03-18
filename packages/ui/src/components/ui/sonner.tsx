import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="wuhanui:toaster wuhanui:group"
      icons={{
        success: <CircleCheckIcon className="wuhanui:size-4" />,
        info: <InfoIcon className="wuhanui:size-4" />,
        warning: <TriangleAlertIcon className="wuhanui:size-4" />,
        error: <OctagonXIcon className="wuhanui:size-4" />,
        loading: <Loader2Icon className="wuhanui:size-4 wuhanui:animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: 'cn-toast',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

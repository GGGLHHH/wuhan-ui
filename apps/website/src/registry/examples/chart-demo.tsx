import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@gedatou/ui'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const chartData = [
  { month: '1月', desktop: 186, mobile: 80 },
  { month: '2月', desktop: 305, mobile: 200 },
  { month: '3月', desktop: 237, mobile: 120 },
  { month: '4月', desktop: 73, mobile: 190 },
  { month: '5月', desktop: 209, mobile: 130 },
  { month: '6月', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: '桌面端',
    color: 'hsl(221.2 83.2% 53.3%)',
  },
  mobile: {
    label: '移动端',
    color: 'hsl(262.1 83.3% 57.8%)',
  },
} satisfies ChartConfig

export default function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

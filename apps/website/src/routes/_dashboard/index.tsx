import { CodeBlock } from '@/components/home/code-block'
import { InstallTabs } from '@/components/home/install-tabs'
import LoadingPageDemoSource from '@/registry/examples/loading-page-demo.tsx?raw'
import { Aurora, StaggerReveal } from '@gedatou/ui'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Home } from 'lucide-react'
export const Route = createFileRoute('/_dashboard/')({
  staticData: {
    title: 'Home',
    icon: Home,
    order: 1,
    groupKey: 'overview',
  },
  component: HomePage,
})

function HomePage() {
  return (
    <StaggerReveal className="flex flex-col gap-8">
      {/* Hero */}
      <div className="relative -mx-8 -mt-8 flex min-h-90 items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Aurora speed={0.6} amplitude={0.8} blend={0.6} />
        </div>
        <div className="relative z-10 px-8 py-16 text-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-wide text-white sm:text-6xl">
            <span style={{ paddingRight: '3em' }}>愿世界和平</span>
            <br />
            <span style={{ paddingLeft: '3.2em' }}>盼升职加薪</span>
          </h1>
          <p className="mb-3 font-mono text-sm text-green-300">@gedatou/ui</p>
          <p className="text-3xl font-bold tracking-tight text-white/80 sm:text-4xl">Wuhan UI</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/coustom/aurora"
              className="inline-flex items-center gap-1.5 rounded-lg bg-green-400 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-green-300"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      {/* Install */}
      <section>
        <h2 className="text-xl font-bold">安装</h2>
        <InstallTabs className="mt-4" />
        <p className="text-muted-foreground mt-4 text-sm">然后在入口文件中引入样式：</p>
        <CodeBlock code="import '@gedatou/ui/styles.css'" className="mt-2" />
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-xl font-bold">例如:</h2>
        <CodeBlock code={LoadingPageDemoSource} className="mt-4" />
      </section>
    </StaggerReveal>
  )
}

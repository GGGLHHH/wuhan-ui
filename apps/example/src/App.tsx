import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Aurora,
  LoadingPage,
} from '@gedatou/ui'

export function App() {
  return (
    <main className="page-shell relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#060010]">
        <Aurora colorStops={['#5227FF', '#5b117e', '#42119c']} amplitude={1} blend={1} />
      </div>
      <div className="content-shell relative z-10">
        <LoadingPage />
        <Card className="example-card">
          <CardHeader>
            <CardTitle>npm registry consumer</CardTitle>
            <CardDescription>
              This example installs the published @gedatou/ui package from npm and renders its
              public components.
            </CardDescription>
          </CardHeader>
          <CardContent className="content-stack">
            <p className="helper-text">
              The styles below are loaded from <code>@gedatou/ui/styles.css</code>, not from local
              workspace sources.
            </p>
          </CardContent>
          <CardFooter className="footer-actions">
            <Button>Install from npm</Button>
            <Button variant="outline">Build and verify</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

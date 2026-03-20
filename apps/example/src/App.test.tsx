import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from 'vite-plus/test'

import { App } from './App'

test('renders npm consumer example with published ui components', () => {
  const html = renderToStaticMarkup(<App />)

  expect(html).toContain('npm registry consumer')
  expect(html).toContain('Install from npm')
})

test('renders aurora as a background layer behind foreground content', () => {
  const html = renderToStaticMarkup(<App />)

  expect(html).toContain('page-shell relative isolate')
  expect(html).toContain('pointer-events-none absolute inset-0 -z-10')
  expect(html).toContain('content-shell relative z-10')
})

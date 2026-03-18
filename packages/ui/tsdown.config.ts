import { defineConfig } from 'vite-plus/pack'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  unbundle: true,
  dts: {
    // tsgo: true,
  },
  deps: {
    neverBundle: ['react', 'react-dom', 'react/jsx-runtime'],
  },
})

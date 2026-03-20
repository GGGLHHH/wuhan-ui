import path from 'node:path'

import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import rehypeSlug from 'rehype-slug'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    { enforce: 'pre', ...mdx({ rehypePlugins: [rehypeSlug] }) },
    tailwindcss(),
    codeInspectorPlugin({
      bundler: 'vite',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

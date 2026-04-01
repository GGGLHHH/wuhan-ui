import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  lint: {
    plugins: ['react', 'typescript'],
    options: { typeAware: true, typeCheck: true },
    ignorePatterns: [
      'src/routeTree.gen.ts',
      'src/contracts/generated/**',
      'routeTree.gen.ts',
      'apps/website/src/routeTree.gen.ts',
      '.claude/**',
      '.codex/**',
    ],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      'jsx-a11y/autocomplete-valid': 'off',
      'no-unused-vars': ['error', { fix: { imports: 'fix' } }],
      'restrict-template-expressions': 'off',
    },
    overrides: [
      {
        files: ['src/routes/__root.tsx'],
        rules: {
          'react/no-danger': 'off',
        },
      },
    ],
  },
  fmt: {
    ignorePatterns: ['apps/website/src/routeTree.gen.ts', '.claude/**', '.codex/**'],
    printWidth: 100,
    singleQuote: true,
    semi: false,
    trailingComma: 'all',
    arrowParens: 'always',
    sortImports: {
      internalPattern: ['#/*', '@/*'],
    },
    sortTailwindcss: {
      functions: ['cn', 'clsx', 'cva'],
    },
  },
})

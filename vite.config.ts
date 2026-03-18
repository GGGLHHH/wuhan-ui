import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  lint: {
    plugins: ['react', 'typescript'],
    options: { typeAware: true, typeCheck: true },
    ignorePatterns: ['src/routeTree.gen.ts', 'src/contracts/generated/**'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      'jsx-a11y/autocomplete-valid': 'off',
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

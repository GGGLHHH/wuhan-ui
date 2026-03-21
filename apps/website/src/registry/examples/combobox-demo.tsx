import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@gedatou/ui'
import { useState } from 'react'

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'astro', label: 'Astro' },
]

export default function ComboboxDemo() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <Combobox value={value} onValueChange={setValue}>
      <ComboboxInput placeholder="选择框架..." showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>未找到匹配项</ComboboxEmpty>
          {frameworks.map((item) => (
            <ComboboxItem key={item.value} value={item.value}>
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

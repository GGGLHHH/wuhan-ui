import { createContext, useContext, type RefObject } from 'react'

const ScrollContainerContext = createContext<RefObject<Element | null> | undefined>(undefined)

export const ScrollContainerProvider = ScrollContainerContext.Provider

export function useScrollContainer() {
  return useContext(ScrollContainerContext)
}

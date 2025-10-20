'use client'

import { useContext, createContext } from 'react'
import Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
  scrollTo: (target: string | HTMLElement | number, options?: {
    offset?: number
    duration?: number
    easing?: (t: number) => number
  }) => void
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {}
})

export function useLenis() {
  return useContext(LenisContext)
}

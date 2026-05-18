'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface LenisProviderProps {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    // Initialize Lenis with fixed config (no object dep to avoid infinite re-init)
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    })

    // Make Lenis instance globally available
    if (typeof window !== 'undefined') {
      ;(window as Window & { lenis?: Lenis }).lenis = lenisRef.current
    }

    // Connect to requestAnimationFrame loop
    function raf(time: number) {
      lenisRef.current?.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      if (typeof window !== 'undefined') {
        delete (window as Window & { lenis?: Lenis }).lenis
      }
    }
  }, [])

  // Handle scroll-to functionality for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor && lenisRef.current) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const targetElement = document.querySelector(href) as HTMLElement
          if (targetElement) {
            lenisRef.current.scrollTo(targetElement, {
              offset: 0,
              duration: 1.5,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return <>{children}</>
}

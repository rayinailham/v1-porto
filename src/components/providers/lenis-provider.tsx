'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface LenisProviderProps {
  children: React.ReactNode
  options?: {
    duration?: number
    easing?: (t: number) => number
    direction?: 'vertical' | 'horizontal'
    gestureDirection?: 'vertical' | 'horizontal' | 'both'
    smooth?: boolean
    mouseMultiplier?: number
    smoothTouch?: boolean
    touchMultiplier?: number
    infinite?: boolean
    autoResize?: boolean
    content?: HTMLElement
    wrapper?: HTMLElement
    wheelEvents?: {
      target?: HTMLElement
      events?: boolean
    }
    touchEvents?: {
      target?: HTMLElement
      events?: boolean
    }
  }
}

export function LenisProvider({ children, options = {} }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    // Default Lenis configuration optimized for smooth scrolling
    const defaultOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      direction: 'vertical' as const,
      gestureDirection: 'vertical' as const,
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      ...options
    }

    // Initialize Lenis
    lenisRef.current = new Lenis(defaultOptions)

    // Make Lenis instance globally available for scroll snap hook
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
  }, [options])

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

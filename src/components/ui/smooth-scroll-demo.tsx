'use client'

import { useRef, useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScrollDemo() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Get the global Lenis instance
    const checkLenis = () => {
      // Try to find the Lenis instance from window or create a new one
      if (typeof window !== 'undefined') {
        const lenisInstance = (window as Window & { lenis?: Lenis }).lenis
        if (lenisInstance) {
          lenisRef.current = lenisInstance
        }
      }
    }

    checkLenis()
    const interval = setInterval(checkLenis, 100)

    return () => clearInterval(interval)
  }, [])

  const scrollTo = (target: string | HTMLElement | number, options?: {
    offset?: number
    duration?: number
    easing?: (t: number) => number
  }) => {
    if (!lenisRef.current) return

    const scrollOptions = {
      offset: options?.offset || 0,
      duration: options?.duration || 1.5,
      easing: options?.easing || ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)))
    }

    if (typeof target === 'string') {
      if (target.startsWith('#')) {
        const element = document.querySelector(target) as HTMLElement
        if (element) {
          lenisRef.current.scrollTo(element, scrollOptions)
        }
      } else {
        lenisRef.current.scrollTo(target, scrollOptions)
      }
    } else if (typeof target === 'number') {
      lenisRef.current.scrollTo(target, scrollOptions)
    } else {
      lenisRef.current.scrollTo(target, scrollOptions)
    }
  }

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleScrollToTop}
        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors"
        title="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}

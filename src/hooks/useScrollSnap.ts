'use client'

import { useEffect, useRef, useCallback } from 'react'

interface ScrollSnapOptions {
  snapThreshold?: number // Distance from top to trigger snap (default: 75px)
  snapDuration?: number // Duration of snap animation (default: 800ms)
  enabled?: boolean // Enable/disable snapping (default: true)
  sectionSelector?: string // Selector for sections to snap to (default: 'section')
}

export function useScrollSnap({
  snapThreshold = 75,
  snapDuration = 800,
  enabled = true,
  sectionSelector = 'section'
}: ScrollSnapOptions = {}) {
  const lenisRef = useRef<any>(null)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const lastScrollTimeRef = useRef(0)
  const sectionsRef = useRef<HTMLElement[]>([])

  // Get Lenis instance from global window or find it
  const getLenisInstance = useCallback(() => {
    if (lenisRef.current) return lenisRef.current
    
    // Try to get Lenis from window (if globally available)
    if (typeof window !== 'undefined' && (window as any).lenis) {
      lenisRef.current = (window as any).lenis
      return lenisRef.current
    }
    
    // Try to find Lenis instance in the DOM
    const lenisElements = document.querySelectorAll('[data-lenis]')
    if (lenisElements.length > 0) {
      const lenisElement = lenisElements[0] as any
      if (lenisElement.lenis) {
        lenisRef.current = lenisElement.lenis
        return lenisRef.current
      }
    }
    
    return null
  }, [])

  // Find all sections that should be snap targets
  const updateSections = useCallback(() => {
    const sections = document.querySelectorAll(sectionSelector)
    sectionsRef.current = Array.from(sections) as HTMLElement[]
  }, [sectionSelector])

  // Calculate distance from top of viewport to section
  const getSectionDistance = useCallback((section: HTMLElement) => {
    const rect = section.getBoundingClientRect()
    return Math.abs(rect.top)
  }, [])

  // Find the closest section within snap threshold
  const findClosestSection = useCallback(() => {
    let closestSection: HTMLElement | null = null
    let minDistance = Infinity

    sectionsRef.current.forEach(section => {
      const distance = getSectionDistance(section)
      if (distance < minDistance && distance <= snapThreshold) {
        minDistance = distance
        closestSection = section
      }
    })

    return { section: closestSection, distance: minDistance }
  }, [getSectionDistance, snapThreshold])

  // Snap to a specific section
  const snapToSection = useCallback((section: HTMLElement) => {
    const lenis = getLenisInstance()
    if (!lenis || isScrollingRef.current) return

    isScrollingRef.current = true
    
    // Use Lenis scrollTo with element for smooth animation
    lenis.scrollTo(section, {
      offset: 0,
      duration: snapDuration / 1000, // Convert to seconds
      easing: (t: number) => {
        // Custom easing function for natural snap feel
        const easeOutQuart = 1 - Math.pow(1 - t, 4)
        return easeOutQuart
      }
    })

    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false
    }, snapDuration + 100)
  }, [getLenisInstance, snapDuration])

  // Handle scroll events with debouncing
  const handleScroll = useCallback(() => {
    if (!enabled || isScrollingRef.current) return

    const currentTime = Date.now()
    lastScrollTimeRef.current = currentTime

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Debounce scroll handling
    scrollTimeoutRef.current = setTimeout(() => {
      // Only snap if scroll ended recently (within 150ms)
      const timeSinceLastScroll = Date.now() - lastScrollTimeRef.current
      
      if (timeSinceLastScroll >= 150) {
        const { section } = findClosestSection()
        
        if (section) {
          snapToSection(section)
        }
      }
    }, 150)
  }, [enabled, findClosestSection, snapToSection])

  // Initialize scroll snap functionality
  useEffect(() => {
    if (!enabled) return

    updateSections()
    
    // Store Lenis instance globally for easy access
    const lenis = getLenisInstance()
    if (lenis) {
      (window as any).lenis = lenis
    }

    // Add scroll event listener
    const scrollHandler = () => handleScroll()
    window.addEventListener('scroll', scrollHandler, { passive: true })

    // Watch for DOM changes (dynamic content)
    const observer = new MutationObserver(() => {
      updateSections()
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollHandler)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      observer.disconnect()
    }
  }, [enabled, updateSections, getLenisInstance, handleScroll])

  // Manual snap function for external use
  const snapTo = useCallback((sectionId: string) => {
    const section = document.querySelector(sectionId) as HTMLElement
    if (section) {
      snapToSection(section)
    }
  }, [snapToSection])

  return {
    snapTo,
    updateSections,
    enabled
  }
}

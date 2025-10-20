'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useEffect, useState } from 'react'

export const AnimatedCornerBraces = () => {
  const { scrollY, isVisible } = useScrollAnimation()
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Calculate transform values based on scroll and initial load
  const getTransform = (position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
    let xOffset = 0
    let yOffset = 0
    
    // Initial position (outside)
    if (isInitialLoad) {
      switch (position) {
        case 'top-left':
          xOffset = -100
          yOffset = -100
          break
        case 'top-right':
          xOffset = 100
          yOffset = -100
          break
        case 'bottom-left':
          xOffset = -100
          yOffset = 100
          break
        case 'bottom-right':
          xOffset = 100
          yOffset = 100
          break
      }
    } else {
      // Scroll-based movement
      const scrollProgress = Math.min(scrollY / 400, 1) // Normalize scroll to 0-1
      
      switch (position) {
        case 'top-left':
          xOffset = -80 * scrollProgress // Move left
          yOffset = -80 * scrollProgress // Move up
          break
        case 'top-right':
          xOffset = 80 * scrollProgress // Move right
          yOffset = -80 * scrollProgress // Move up
          break
        case 'bottom-left':
          xOffset = -80 * scrollProgress // Move left
          yOffset = 80 * scrollProgress // Move down
          break
        case 'bottom-right':
          xOffset = 80 * scrollProgress // Move right
          yOffset = 80 * scrollProgress // Move down
          break
      }
    }
    
    return `translate(${xOffset}px, ${yOffset}px)`
  }

  const getOpacity = () => {
    if (isInitialLoad) return 0
    
    const scrollProgress = Math.min(scrollY / 300, 1)
    return isVisible ? 1 - scrollProgress : 0
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top-left corner brace */}
      <div 
        className="absolute top-8 left-8 w-24 h-24 border-l-4 border-t-4 border-gray-800 rounded-tl-3xl"
        style={{
          opacity: getOpacity(),
          transform: getTransform('top-left'),
          transitionProperty: 'opacity, transform',
          transitionDuration: isInitialLoad ? '1.2s' : '0.4s',
          transitionTimingFunction: isInitialLoad ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'ease-out',
          transitionDelay: isInitialLoad ? '0s' : '0s'
        }}
      ></div>
      
      {/* Top-right corner brace */}
      <div 
        className="absolute top-8 right-8 w-24 h-24 border-r-4 border-t-4 border-gray-800 rounded-tr-3xl"
        style={{
          opacity: getOpacity(),
          transform: getTransform('top-right'),
          transitionProperty: 'opacity, transform',
          transitionDuration: isInitialLoad ? '1.2s' : '0.4s',
          transitionTimingFunction: isInitialLoad ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'ease-out',
          transitionDelay: isInitialLoad ? '0.1s' : '0s'
        }}
      ></div>
      
      {/* Bottom-left corner brace */}
      <div 
        className="absolute bottom-8 left-8 w-24 h-24 border-l-4 border-b-4 border-gray-800 rounded-bl-3xl"
        style={{
          opacity: getOpacity(),
          transform: getTransform('bottom-left'),
          transitionProperty: 'opacity, transform',
          transitionDuration: isInitialLoad ? '1.2s' : '0.4s',
          transitionTimingFunction: isInitialLoad ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'ease-out',
          transitionDelay: isInitialLoad ? '0.2s' : '0s'
        }}
      ></div>
      
      {/* Bottom-right corner brace */}
      <div 
        className="absolute bottom-8 right-8 w-24 h-24 border-r-4 border-b-4 border-gray-800 rounded-br-3xl"
        style={{
          opacity: getOpacity(),
          transform: getTransform('bottom-right'),
          transitionProperty: 'opacity, transform',
          transitionDuration: isInitialLoad ? '1.2s' : '0.4s',
          transitionTimingFunction: isInitialLoad ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'ease-out',
          transitionDelay: isInitialLoad ? '0.3s' : '0s'
        }}
      ></div>
    </div>
  )
}

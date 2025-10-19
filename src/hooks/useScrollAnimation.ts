import { useState, useEffect } from 'react'

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Hide corner braces when scrolling down, show when at top
      const heroHeight = window.innerHeight
      const shouldBeVisible = currentScrollY < heroHeight * 0.5
      setIsVisible(shouldBeVisible)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Set initial state
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, isVisible }
}

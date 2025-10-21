import { RefObject, useEffect, useState, useCallback } from "react"

export const useMouseVector = (
  containerRef?: RefObject<HTMLElement | SVGElement>,
  isActive: boolean = true
) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [vector, setVector] = useState({ dx: 0, dy: 0 })

  const updatePosition = useCallback((x: number, y: number) => {
    let newX, newY

    if (containerRef && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      newX = x - rect.left
      newY = y - rect.top
    } else {
      newX = x
      newY = y
    }

    // Calculate the movement vector
    const dx = newX - position.x
    const dy = newY - position.y

    setVector({ dx, dy })
    setPosition({ x: newX, y: newY })
  }, [containerRef, position.x, position.y])

  useEffect(() => {
    // Don't set up listeners if not active
    if (!isActive) return

    let lastPosition = { x: 0, y: 0 }

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY)
    }

    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    }

    // Listen for both mouse and touch events
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [isActive, updatePosition])

  // Reset position and vector when inactive
  useEffect(() => {
    if (!isActive) {
      setPosition({ x: 0, y: 0 })
      setVector({ dx: 0, dy: 0 })
    }
  }, [isActive])

  return { position, vector }
}
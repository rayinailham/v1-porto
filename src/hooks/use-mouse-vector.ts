import { RefObject, useEffect, useRef, useState, useCallback } from "react"

export const useMouseVector = (
  containerRef?: RefObject<HTMLElement | SVGElement>,
  isActive: boolean = true
) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [vector, setVector] = useState({ dx: 0, dy: 0 })
  const positionRef = useRef({ x: 0, y: 0 })

  const updatePosition = useCallback((x: number, y: number) => {
    let newX: number, newY: number

    if (containerRef && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      newX = x - rect.left
      newY = y - rect.top
    } else {
      newX = x
      newY = y
    }

    const dx = newX - positionRef.current.x
    const dy = newY - positionRef.current.y

    positionRef.current = { x: newX, y: newY }
    setVector({ dx, dy })
    setPosition({ x: newX, y: newY })
  }, [containerRef])

  useEffect(() => {
    if (!isActive) return

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY)
    }

    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [isActive, updatePosition])

  useEffect(() => {
    if (!isActive) {
      positionRef.current = { x: 0, y: 0 }
      setPosition({ x: 0, y: 0 })
      setVector({ dx: 0, dy: 0 })
    }
  }, [isActive])

  return { position, vector }
}
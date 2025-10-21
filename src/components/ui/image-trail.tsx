import { Children, useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AnimationSequence,
  motion,
  Target,
  Transition,
  useAnimate,
  useAnimationFrame,
} from "framer-motion"
import { v4 as uuidv4 } from "uuid"

import { useMouseVector } from "@/hooks/use-mouse-vector"

type TrailSegment = [Target, Transition]

type TrailAnimationSequence = TrailSegment[]

interface ImageTrailProps {
  children: React.ReactNode
  containerRef?: React.RefObject<HTMLElement>
  newOnTop?: boolean
  rotationRange?: number
  animationSequence?: TrailAnimationSequence // Updated type
  interval?: number
  velocityDependentSpawn?: boolean
}

interface TrailItem {
  id: string
  x: number
  y: number
  rotation: number
  animationSequence: TrailAnimationSequence // Updated type
  scale: number
  child: React.ReactNode
}

const ImageTrail = ({
  children,
  newOnTop = true,
  rotationRange = 15,
  containerRef,
  animationSequence = [
    [{ scale: 1.3 }, { duration: 0.2, ease: "circOut" }],
    [{ scale: 0 }, { duration: 0.6, ease: "circIn" }],
  ],
  interval = 500,
}: ImageTrailProps) => {
  const trailRef = useRef<TrailItem[]>([])
  const [isVisible, setIsVisible] = useState(true)
  const lastAddedTimeRef = useRef<number>(0)
  const { position: mousePosition } =
    useMouseVector(containerRef, isVisible)
  const lastMousePosRef = useRef(mousePosition)
  const currentIndexRef = useRef(0)
  // Convert children to array for random selection
  const childrenArray = useMemo(() => Children.toArray(children), [children])

  // Check if container is visible in viewport
  useEffect(() => {
    if (!containerRef?.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        
        // Clear all trail items when not visible
        if (!entry.isIntersecting) {
          trailRef.current = []
        }
      },
      {
        threshold: 0.2 // Trigger when 10% of the element is visible
      }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [containerRef])

  // Batch updates using useCallback
  const addToTrail = useCallback(
    (mousePos: { x: number; y: number }) => {
      const newItem: TrailItem = {
        id: uuidv4(),
        x: mousePos.x,
        y: mousePos.y,
        rotation: (Math.random() - 0.5) * rotationRange * 2,
        animationSequence,
        scale: 1,
        child: childrenArray[currentIndexRef.current],
      }

      // Increment index and wrap around if needed
      currentIndexRef.current =
        (currentIndexRef.current + 1) % childrenArray.length

      if (newOnTop) {
        trailRef.current.push(newItem)
      } else {
        trailRef.current.unshift(newItem)
      }
    },
    [childrenArray, rotationRange, animationSequence, newOnTop]
  )

  const removeFromTrail = useCallback((itemId: string) => {
    const index = trailRef.current.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      trailRef.current.splice(index, 1)
    }
  }, [])

  useAnimationFrame((time) => {
    // Skip if container is not visible
    if (!isVisible) return

    // Skip if mouse hasn't moved
    if (
      lastMousePosRef.current.x === mousePosition.x &&
      lastMousePosRef.current.y === mousePosition.y
    ) {
      return
    }
    lastMousePosRef.current = mousePosition

    const currentTime = time

    if (currentTime - lastAddedTimeRef.current < interval) {
      return
    }

    lastAddedTimeRef.current = currentTime

    addToTrail(mousePosition)
  })

  return (
    <div className="relative w-full h-full pointer-events-none">
      {trailRef.current.map((item) => (
        <TrailItem key={item.id} item={item} onComplete={removeFromTrail} />
      ))}
    </div>
  )
}

interface TrailItemProps {
  item: TrailItem
  onComplete: (id: string) => void
}

const TrailItem = ({ item, onComplete }: TrailItemProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const sequence = item.animationSequence.map((segment: TrailSegment) => [
      scope.current,
      ...segment,
    ])

    animate(sequence as AnimationSequence).then(() => {
      onComplete(item.id)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      ref={scope}
      key={item.id}
      className="absolute"
      style={{
        left: item.x,
        top: item.y,
        rotate: item.rotation,
      }}
    >
      {item.child}
    </motion.div>
  )
}

export { ImageTrail }
'use client'

import { useRef, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion'

export const useScrollReveal = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  return { ref, controls, isInView }
}

export default useScrollReveal
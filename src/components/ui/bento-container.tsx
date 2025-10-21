'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface BentoCellProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const BentoCell: React.FC<BentoCellProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#aeaba818] rounded-2xl p-4 flex items-center justify-center transition-all duration-240  ${className}`}>
      {children}
    </div>
  )
}

export const LeftBentoContainer: React.FC = () => {
  const { ref, controls } = useScrollReveal()

  const variants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      className="h-full flex flex-col pt-8 gap-4 pb-12"
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
    >
      {/* Row 1: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3 flex-1">
        <BentoCell className="col-span-3 h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 2: 2 cells (2fr and 1fr) */}
      <div className="grid grid-cols-3 gap-4 flex-1" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 3: 3 cells (each 1fr) */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 4: 2 cells (1fr and 2fr) */}
      <div className="grid grid-cols-3 gap-4 flex-1" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 5: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        <BentoCell className="col-span-3 h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 6: 2 cells (3fr and 1fr) */}
      <div className="grid grid-cols-4 gap-4 flex-1" style={{ gridTemplateColumns: '3fr 1fr' }}>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>
    </motion.div>
  )
}

export const RightBentoContainer: React.FC = () => {
  const { ref, controls } = useScrollReveal()

  const variants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      className="h-full flex flex-col pt-8 gap-4 pb-12"
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
    >
      {/* Row 1: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3 flex-1">
        <BentoCell className="col-span-3 h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 2: 2 cells (2fr and 1fr) */}
      <div className="grid grid-cols-3 gap-4 flex-1" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 3: 3 cells (each 1fr) */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 4: 2 cells (1fr and 2fr) */}
      <div className="grid grid-cols-3 gap-4 flex-1" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 5: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        <BentoCell className="col-span-3 h-full">
          <></>
        </BentoCell>
      </div>

      {/* Row 6: 2 cells (3fr and 1fr) */}
      <div className="grid grid-cols-4 gap-4 flex-1" style={{ gridTemplateColumns: '3fr 1fr' }}>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
        <BentoCell className="h-full">
          <></>
        </BentoCell>
      </div>
    </motion.div>
  )
}

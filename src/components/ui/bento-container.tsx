'use client'

import React from 'react'

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
  return (
    <div className="h-full flex flex-col pt-8 gap-4 pb-12">
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
    </div>
  )
}

export const RightBentoContainer: React.FC = () => {
  return (
    <div className="h-full flex flex-col pt-8 gap-4 pb-12">
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
    </div>
  )
}

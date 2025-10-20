'use client'

import React from 'react'

interface BentoCellProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const BentoCell: React.FC<BentoCellProps> = ({ children, className = '', style }) => {
  return (
    <div className={`bg-white/40 backdrop-blur-sm rounded-lg border border-gray-200/40 p-4 flex items-center justify-center transition-all duration-240 hover:bg-white/60 hover:border-gray-300/40 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/20 ${className}`} style={style}>
      {children}
    </div>
  )
}

export const LeftBentoContainer: React.FC = () => {
  return (
    <div className="h-full flex flex-col pt-8 gap-6 pb-8">
      {/* Row 1: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3">
        <BentoCell className="col-span-3" style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 2: 2 cells (2fr and 1fr) */}
      <div className="grid grid-cols-3 gap-6" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 3: 3 cells (each 1fr) */}
      <div className="grid grid-cols-3 gap-6">
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 4: 2 cells (1fr and 2fr) */}
      <div className="grid grid-cols-3 gap-6" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 5: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3 gap-6">
        <BentoCell className="col-span-3" style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 6: 2 cells (3fr and 1fr) */}
      <div className="grid grid-cols-4 gap-6" style={{ gridTemplateColumns: '3fr 1fr' }}>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>
    </div>
  )
}

export const RightBentoContainer: React.FC = () => {
  return (
    <div className="h-full flex flex-col pt-8 gap-6 pb-8">
      {/* Row 1: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3">
        <BentoCell className="col-span-3" style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 2: 2 cells (2fr and 1fr) */}
      <div className="grid grid-cols-3 gap-6" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 3: 3 cells (each 1fr) */}
      <div className="grid grid-cols-3 gap-6">
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 4: 2 cells (1fr and 2fr) */}
      <div className="grid grid-cols-3 gap-6" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 5: 1 cell taking all 3 columns */}
      <div className="grid grid-cols-3 gap-6">
        <BentoCell className="col-span-3" style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>

      {/* Row 6: 2 cells (3fr and 1fr) */}
      <div className="grid grid-cols-4 gap-6" style={{ gridTemplateColumns: '3fr 1fr' }}>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
        <BentoCell style={{ height: '110px' }}>
          <></>
        </BentoCell>
      </div>
    </div>
  )
}

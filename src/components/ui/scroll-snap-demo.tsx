'use client'

import { useState } from 'react'
import { useScrollSnap } from '@/hooks/useScrollSnap'

export function ScrollSnapDemo() {
  const [isSnapEnabled, setIsSnapEnabled] = useState(true)
  
  const { snapTo } = useScrollSnap({
    snapThreshold: 75,
    snapDuration: 800,
    enabled: isSnapEnabled,
    sectionSelector: 'section'
  })

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 p-4 space-y-2">
      <div className="text-white text-sm font-medium mb-2">Scroll Snap Controls</div>
      
      <button
        onClick={() => setIsSnapEnabled(!isSnapEnabled)}
        className={`w-full px-3 py-2 rounded text-xs font-medium transition-colors ${
          isSnapEnabled 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-gray-600 hover:bg-gray-700 text-gray-300'
        }`}
      >
        Snap: {isSnapEnabled ? 'ON' : 'OFF'}
      </button>

      <div className="space-y-1">
        <button
          onClick={() => snapTo('#hero')}
          className="w-full px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
        >
          Go to Hero
        </button>
        <button
          onClick={() => snapTo('#about')}
          className="w-full px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
        >
          Go to About
        </button>
        <button
          onClick={() => snapTo('#projects')}
          className="w-full px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
        >
          Go to Projects
        </button>
      </div>

      <div className="text-xs text-gray-400 pt-2 border-t border-gray-700">
        <div>Threshold: 75px</div>
        <div>Duration: 800ms</div>
      </div>
    </div>
  )
}

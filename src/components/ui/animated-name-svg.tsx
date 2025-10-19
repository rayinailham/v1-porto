'use client'

import { useEffect, useRef, useState } from 'react'

export function AnimatedNameSVG() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (svgRef.current) {
      observer.observe(svgRef.current)
    }
    
    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current)
      }
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      width="400"
      height="120"
      viewBox="0 0 400 120"
      className="w-full h-auto max-w-md"
    >
      <defs>
        <linearGradient id="nameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      
      {/* Rayina */}
      <path
        d="M 20 60 Q 25 30, 35 25 T 45 35 Q 48 45, 45 55 T 35 70 Q 30 75, 25 70 T 20 60"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 100,
          strokeDashoffset: isVisible ? 0 : 100,
          transition: 'stroke-dashoffset 1.5s ease-in-out'
        }}
      />
      
      <path
        d="M 55 25 Q 58 40, 60 60 T 62 85"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 80,
          strokeDashoffset: isVisible ? 0 : 80,
          transition: 'stroke-dashoffset 1.5s ease-in-out 0.2s'
        }}
      />
      
      <path
        d="M 75 40 Q 85 35, 90 40 T 88 55 Q 85 65, 80 60 T 75 40"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 60,
          strokeDashoffset: isVisible ? 0 : 60,
          transition: 'stroke-dashoffset 1.5s ease-in-out 0.4s'
        }}
      />
      
      <path
        d="M 95 25 Q 98 45, 100 65 T 102 85"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 80,
          strokeDashoffset: isVisible ? 0 : 80,
          transition: 'stroke-dashoffset 1.5s ease-in-out 0.6s'
        }}
      />
      
      <path
        d="M 115 35 Q 125 30, 130 35 T 128 50 Q 125 60, 120 55 T 115 35"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 60,
          strokeDashoffset: isVisible ? 0 : 60,
          transition: 'stroke-dashoffset 1.5s ease-in-out 0.8s'
        }}
      />
      
      <path
        d="M 135 25 Q 138 45, 140 65 T 142 85"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 80,
          strokeDashoffset: isVisible ? 0 : 80,
          transition: 'stroke-dashoffset 1.5s ease-in-out 1s'
        }}
      />
      
      {/* Space */}
      
      {/* Ilham */}
      <path
        d="M 180 25 Q 183 45, 185 65 T 187 85"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 80,
          strokeDashoffset: isVisible ? 0 : 80,
          transition: 'stroke-dashoffset 1.5s ease-in-out 1.2s'
        }}
      />
      
      <path
        d="M 200 30 Q 205 25, 210 30 T 208 45 Q 205 55, 200 50 T 200 30"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 60,
          strokeDashoffset: isVisible ? 0 : 60,
          transition: 'stroke-dashoffset 1.5s ease-in-out 1.4s'
        }}
      />
      
      <path
        d="M 220 25 Q 223 40, 225 60 T 227 85"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 80,
          strokeDashoffset: isVisible ? 0 : 80,
          transition: 'stroke-dashoffset 1.5s ease-in-out 1.6s'
        }}
      />
      
      <path
        d="M 240 35 Q 250 30, 255 35 T 253 50 Q 250 60, 245 55 T 240 35"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 60,
          strokeDashoffset: isVisible ? 0 : 60,
          transition: 'stroke-dashoffset 1.5s ease-in-out 1.8s'
        }}
      />
      
      <path
        d="M 260 25 Q 263 45, 265 65 T 267 85"
        stroke="url(#nameGradient)"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 80,
          strokeDashoffset: isVisible ? 0 : 80,
          transition: 'stroke-dashoffset 1.5s ease-in-out 2s'
        }}
      />
      
      {/* Decorative underline */}
      <path
        d="M 15 95 Q 200 90, 385 95"
        stroke="url(#nameGradient)"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        className={isVisible ? 'animate-draw-path' : ''}
        style={{
          strokeDasharray: 400,
          strokeDashoffset: isVisible ? 0 : 400,
          transition: 'stroke-dashoffset 2s ease-in-out 2.2s'
        }}
      />
    </svg>
  )
}

'use client'

import { useRef } from "react"
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { AnimatedCornerBraces } from '@/components/ui/animated-corner-braces'
import { ImageTrail } from '@/components/ui/image-trail'

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Local optimized WebP images from public/image-trails folder
  const images = [
    "/image-trails/MiComet image 3.webp",
    "/image-trails/Suichan image 4.webp",
    "/image-trails/Suichan image 5.webp",
    "/image-trails/Suichan image 6.webp",
    "/image-trails/MiComet image 7.webp",
    "/image-trails/Suichan image 8.webp",
  ]

  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gray-50 relative">
      {/* ImageTrail Background */}
      <div className="absolute inset-0 z-0" ref={ref}>
        <ImageTrail 
          containerRef={ref}
          interval={150}
          rotationRange={20}
        >
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-32 h-32 rounded-lg opacity-70 select-none pointer-events-none"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="object-cover absolute inset-0 select-none pointer-events-none"
                draggable="false"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      {/* Animated Corner Braces */}
      <AnimatedCornerBraces />
      
      {/* Halftone Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Halftone dot pattern - barely visible small dots */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px),
              radial-gradient(circle, rgba(0,0,0,0.02) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '12px 12px, 24px 24px',
            backgroundPosition: '0 0, 6px 6px',
            mixBlendMode: 'multiply'
          }}
        ></div>
        {/* Additional halftone texture - small dots */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,0,0,0.04) 1.2px, transparent 1.2px),
              radial-gradient(circle at 75% 25%, rgba(0,0,0,0.03) 1.8px, transparent 1.8px),
              radial-gradient(circle at 25% 75%, rgba(0,0,0,0.03) 1.8px, transparent 1.8px),
              radial-gradient(circle at 75% 75%, rgba(0,0,0,0.04) 1.2px, transparent 1.2px)
            `,
            backgroundSize: '30px 30px',
            mixBlendMode: 'multiply'
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold select-none cursor-default bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500 mb-6">
          Rayin
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto cursor-default">
          Creative developer crafting exceptional digital experiences
        </p>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}

export default HeroSection
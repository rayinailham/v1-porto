'use client'

import { useRef } from "react"
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { AnimatedCornerBraces } from '@/components/ui/animated-corner-braces'
import { ImageTrail } from '@/components/ui/image-trail'

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Unsplash images that definitely exist
  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
  ].map(url => `${url}?auto=format&fit=crop&w=150&q=80`)

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
              className="flex relative overflow-hidden w-16 h-16 rounded-lg opacity-70"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="object-cover absolute inset-0"
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
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold select-none bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500 mb-6">
          Rayin
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Creative developer crafting exceptional digital experiences
        </p>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}

export default HeroSection
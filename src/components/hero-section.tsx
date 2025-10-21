'use client'

import { useRef, useEffect, useMemo } from "react"
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { AnimatedCornerBraces } from '@/components/ui/animated-corner-braces'
import { ImageTrail } from '@/components/ui/image-trail'

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  // All 10 optimized WebP images from public/image-trails folder
  const images = useMemo(() => [
    "/image-trails/FubuMiComet image 9.webp",
    "/image-trails/MiComet image 3.webp",
    "/image-trails/MiComet image 7.webp",
    "/image-trails/MiComet image 10.webp",
    "/image-trails/Suichan image 4.webp",
    "/image-trails/Suichan image 5.webp",
    "/image-trails/Suichan image 6.webp",
    "/image-trails/Suichan image 8.webp",
    "/image-trails/Suichan image 12.webp",
    "/image-trails/Suichan image 13.webp",
  ], [])

  // Preload images for smoother performance
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gray-50 relative">
      {/* ImageTrail Background */}
      <div className="absolute inset-0 z-0" ref={ref}>
        <ImageTrail
          containerRef={ref}
          interval={150}
          rotationRange={25}
          animationSequence={[
            [{ scale: 1.2, opacity: 0.8 }, { duration: 0.5, ease: "circOut" }],
            [{ scale: 0.9, opacity: 0.6 }, { duration: 0.8, ease: "circIn" }],
            [{ scale: 0, opacity: 0 }, { duration: 0.5, ease: "circIn" }],
          ]}
        >
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-28 h-28 rounded-xl opacity-80 select-none pointer-events-none"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="object-cover absolute inset-0 select-none pointer-events-none"
                draggable={false}
                loading="eager"
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
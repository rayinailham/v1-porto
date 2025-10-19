'use client'

import { EnhancedMarquee } from '@/components/ui/enhanced-marquee'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { NavBarDemo } from '@/components/ui/tubelight-navbar-demo'
import { AnimatedCornerBraces } from '@/components/ui/animated-corner-braces'
import { AnimatedNameSVG } from '@/components/ui/animated-name-svg'
import { ProfileSection } from '@/components/ui/profile-section'
import { SkillsTable } from '@/components/ui/skills-table'
import { useScrollSnap } from '@/hooks/useScrollSnap'
import Image from 'next/image'

export default function Home() {
  // Initialize scroll snap with 50px threshold and 300ms duration
  useScrollSnap({
    snapThreshold: 50,
    snapDuration: 300,
    enabled: true,
    sectionSelector: 'section'
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <NavBarDemo />
      {/* Hero Section - 100vh with Marquee */}
      <section id="hero" className="h-screen flex items-center justify-center bg-black relative">
        {/* Animated Corner Braces */}
        <AnimatedCornerBraces />
        
        {/* Halftone Vignette Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtler vignette gradient */}
          <div className="absolute inset-0" 
            style={{
              background: 'radial-gradient(circle at center, transparent 10%, rgba(128,128,128,0.15) 150%, rgba(64,64,64,0.3) 100%)'
            }}
          ></div>
          {/* Halftone dot pattern - barely visible small dots */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.03) 1.5px, transparent 1.5px)
              `,
              backgroundSize: '12px 12px, 24px 24px',
              backgroundPosition: '0 0, 6px 6px',
              mixBlendMode: 'overlay'
            }}
          ></div>
          {/* Additional halftone texture - small dots */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1.2px, transparent 1.2px),
                radial-gradient(circle at 75% 25%, rgba(255,255,255,0.04) 1.8px, transparent 1.8px),
                radial-gradient(circle at 25% 75%, rgba(255,255,255,0.04) 1.8px, transparent 1.8px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1.2px, transparent 1.2px)
              `,
              backgroundSize: '30px 30px',
              mixBlendMode: 'screen'
            }}
          ></div>
        </div>
        <EnhancedMarquee 
          text="A Diamond In The Rough!" 
          fontSize="md"
          duration={15}
          repeat={10}
          strokeWidth="1.5px"
          enableVariableProximity={true}
          proximityRadius={200}
          proximityFalloff="gaussian"
          fromFontVariationSettings="'opsz' 9, 'GRAD' 0"
          toFontVariationSettings="'opsz' 40, 'GRAD' 200"
        />
        
        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* About Me Section */}
      <section id="about" className="h-screen bg-black relative">
        {/* 3-column layout container */}
        <div className="container mx-auto h-full px-4">
          <div className="grid grid-cols-3 h-full" style={{ gridTemplateColumns: '1fr 2.5fr 1fr' }}>
            
            {/* Left Column - Empty for now */}
            <div className="flex items-center justify-center">
              {/* Content will be added later */}
            </div>
            
            {/* Center Column - Bento Grid */}
            <div className="h-full flex flex-col justify-center p-8">
              <div className="grid grid-cols-2 gap-6 max-h-[800px]">
                
                {/* Top Cell - Spans 2 columns */}
                <div className="col-span-2 flex items-center justify-center p-10 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/30 h-[300px] mt-8">
                  <AnimatedNameSVG />
                </div>
                
                {/* Bottom Left Cell - Profile */}
                <div className="px-4 py-6 flex flex-col justify-center">
                  <ProfileSection />
                </div>
                
                {/* Bottom Right Cell - Skills Table */}
                <div className="px-4 py-6 flex flex-col justify-center">
                  <SkillsTable />
                </div>
              </div>
            </div>
            
            {/* Right Column - Empty for now */}
            <div className="flex items-center justify-center">
              {/* Content will be added later */}
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-gray-900 relative">
        <div className="container mx-auto h-full px-4">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">Project {project}</h3>
                    <p className="text-gray-300 mb-4">
                      A innovative web application built with modern technologies to solve real-world problems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs">React</span>
                      <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs">Node.js</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

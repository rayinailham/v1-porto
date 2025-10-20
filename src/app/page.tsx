'use client'

import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { AnimatedCornerBraces } from '@/components/ui/animated-corner-braces'
import { ProfileSection } from '@/components/ui/profile-section'
import { SkillsTable } from '@/components/ui/skills-table'
import { LeftBentoContainer, RightBentoContainer } from '@/components/ui/bento-container'
import { useScrollSnap } from '@/hooks/useScrollSnap'

export default function Home() {
  // Initialize scroll snap with 50px threshold and 300ms duration
  useScrollSnap({
    snapThreshold: 50,
    snapDuration: 300,
    enabled: true,
    sectionSelector: 'section'
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 100vh with Marquee */}
      <section id="hero" className="h-screen flex items-center justify-center bg-gray-50 relative">
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
        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* About Me Section */}
      <section id="about" className="h-screen bg-gray-50 relative pt-16">
        {/* 3-column layout container */}
        <div className="container mx-auto h-full px-4">
          <div className="grid grid-cols-3 h-full gap-6" style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>
            
            {/* Left Column - Bento Container */}
            <LeftBentoContainer />
            
            {/* Center Column - Bento Grid */}
            <div className="h-full flex flex-col justify-center pt-8 pb-8">
              <div className="grid grid-cols-2 h-full">
                
                {/* Top Cell - Spans 2 columns */}
                <div className="col-span-2 flex items-center justify-center bg-[#aeaba818] border border-[#efefef] backdrop-blur-sm rounded-2xl" style={{ height: '350px' }}>
                 
                </div>
                
                {/* Bottom Left Cell - Profile */}
                <div className="flex flex-col justify-center rounded-lg">
                  <ProfileSection />
                </div>
                
                {/* Bottom Right Cell - Skills Table */}
                <div className="flex flex-col justify-center">
                  <SkillsTable />
                </div>
              </div>
            </div>
            
            {/* Right Column - Bento Container */}
            <RightBentoContainer />
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-[#aeaba818] relative">
        <div className="container mx-auto h-full px-4">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors shadow-sm hover:shadow-md">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Project {project}</h3>
                    <p className="text-gray-600 mb-4">
                      A innovative web application built with modern technologies to solve real-world problems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">React</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Node.js</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen bg-gray-50 relative">
        <div className="container mx-auto h-full px-4">
          <div className="h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-gray-600 mb-8">
                I&#39;m always interested in hearing about new opportunities and exciting projects.
                Feel free to reach out if you&#39;d like to collaborate!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Send Email
                </button>
                <button className="px-8 py-3 border border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

'use client'

import HeroSection from '@/components/hero-section'
import { ProfileSection } from '@/components/ui/profile-section'
import { SkillsTable } from '@/components/ui/skills-table'
import { LeftBentoContainer, RightBentoContainer } from '@/components/ui/bento-container'
import { useScrollSnap } from '@/hooks/useScrollSnap'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import ProjectSection from '@/components/project-section'

// Top Bar Component with scroll animation
const TopBar = () => {
  const { ref, controls } = useScrollReveal()

  const variants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      className="col-span-2 flex items-center justify-center bg-[#aeaba818] border border-[#efefef] backdrop-blur-sm rounded-2xl"
      style={{ height: '350px' }}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
    >
      {/* You can add content here if needed */}
    </motion.div>
  )
}

export default function Home() {
  // Initialize scroll snap with optimized settings for smoother transition
  useScrollSnap({
    snapThreshold: 300,  // Increased threshold for easier triggering
    snapDuration: 500,   // Slightly longer duration for smoother feel
    enabled: true,
    sectionSelector: 'section'
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

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
                <TopBar />
                
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
      <ProjectSection />

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

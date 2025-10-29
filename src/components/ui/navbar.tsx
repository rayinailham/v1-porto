'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 flex justify-center z-50 transition-all duration-300 ease-in-out"
      style={{
        paddingTop: scrolled ? '15px' : '5px',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          width: scrolled ? '1100px' : '1100px',
        }}
      >
        <div
          className={`rounded-3xl transition-all duration-300 ease-in-out ${
            scrolled
              ? 'backdrop-blur-md bg-white/20 border border-white/30 shadow-lg'
              : 'bg-transparent'
          }`}
          style={{
            padding: scrolled ? '12px 24px' : '12px 28px',
          }}
        >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-space-grotesk font-weight-heading transition-colors duration-300 ${
              scrolled ? 'text-gray-900 text-2xl' : 'text-gray-900 text-2xl'
            }`}>
              Rayin993
            </h1>
          </div>

          {/* Section Links */}
          <div className="flex items-center space-x-8">
            <a
              href="#hero"
              className={`font-nunito body-text transition-colors duration-300 hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`font-nunito body-text transition-colors duration-300 hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`font-nunito body-text transition-colors duration-300 hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`font-nunito body-text transition-colors duration-300 hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Contact Me Button */}
          <div className="flex-shrink-0">
            <button
              className={`font-nunito caption-text px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              onClick={() => window.open('https://wa.me/6287814745115', '_blank')}
            >
              Contact Me
            </button>
          </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
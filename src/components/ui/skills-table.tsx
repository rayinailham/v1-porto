'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function SkillsTable() {
  const { ref, controls } = useScrollReveal()

  const variants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      className="text-white text-sm"
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }}
    >
      <table className="w-full border-collapse">
        <tbody>
          {/* Skills Row */}
          <tr className="border-b border-gray-700">
            <td className="py-3 pr-4 font-medium text-gray-800 align-top w-20">
              Skills
            </td>
            <td className="py-3 text-gray-700 leading-relaxed">
              <span className="line-clamp-2">
                Web Dev, System Design, Clipping, Leadership, etc.
              </span>
            </td>
          </tr>
          
          {/* Tools Row */}
          <tr className="border-b border-gray-700">
            <td className="py-3 pr-4 font-medium text-gray-800 align-top w-20">
              Tools
            </td>
            <td className="py-3 text-gray-700 leading-relaxed">
              <span className="line-clamp-2">
                VS Code, Premiere Pro, Figma, Next.js, Express.js, etc.
              </span>
            </td>
          </tr>
          
          {/* Things I Like Row */}
          <tr className="border-b border-gray-700">
            <td className="py-3 pr-4 font-medium text-gray-800 align-top w-20">
              I Like
            </td>
            <td className="py-3 text-gray-700 leading-relaxed">
              <span className="line-clamp-2">
                Hoshimachi Suisei, Microservice, Quotes, Clean design, etc.
              </span>
            </td>
          </tr>
          
          {/* Quotes Row */}
          <tr>
            <td className="py-3 pr-4 font-medium text-gray-800 align-top w-20">
              Quote
            </td>
            <td className="py-3 text-gray-700 italic leading-relaxed">
              <span className="line-clamp-2">
                &ldquo;The wound is the place where the Light enters you.&rdquo; - Rumi
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  )
}

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress for the indicator
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.8, 0])

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      style={{ opacity }}
    >
      {/* Three animated chevrons */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1
            }}
          >
            <ChevronDown 
              className="w-6 h-6 text-black opacity-60 dark:text-white"
              strokeWidth={2}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

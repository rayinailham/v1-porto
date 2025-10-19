"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useRef } from "react"
import VariableProximity from "./variable-proximity"

interface EnhancedMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  repeat?: number
  duration?: number
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  strokeWidth?: string
  enableVariableProximity?: boolean
  proximityRadius?: number
  proximityFalloff?: 'linear' | 'exponential' | 'gaussian'
  fromFontVariationSettings?: string
  toFontVariationSettings?: string
}

const fontSizeClasses = {
  sm: "text-5xl sm:text-6xl md:text-7xl",
  md: "text-6xl sm:text-7xl md:text-8xl",
  lg: "text-7xl sm:text-8xl md:text-9xl",
  xl: "text-8xl sm:text-9xl md:text-[10rem]",
  "2xl": "text-9xl sm:text-[10rem] md:text-[11rem]",
  "3xl": "text-[10rem] sm:text-[11rem] md:text-[12rem]",
}

export const EnhancedMarquee = React.forwardRef<HTMLDivElement, EnhancedMarqueeProps>(
  ({
    className,
    text,
    repeat = 4,
    duration = 20,
    fontSize = "lg",
    strokeWidth = "1px",
    enableVariableProximity = false,
    proximityRadius = 100,
    proximityFalloff = 'linear',
    fromFontVariationSettings = "'wght' 400, 'opsz' 9",
    toFontVariationSettings = "'wght' 1000, 'opsz' 40",
    ...props
  }, ref) => {
    const { theme } = useTheme()
    const isDark = theme === "dark"
    const containerRef = useRef<HTMLDivElement>(null)

    const renderTextContent = (text: string, index: number) => {
      if (enableVariableProximity && containerRef) {
        return (
          <VariableProximity
            key={index}
            label={text}
            fromFontVariationSettings={fromFontVariationSettings}
            toFontVariationSettings={toFontVariationSettings}
            containerRef={containerRef}
            radius={proximityRadius}
            falloff={proximityFalloff}
            className={cn(
              fontSizeClasses[fontSize],
              "font-light tracking-tight pb-4 cursor-default"
            )}
            style={{
              WebkitTextStroke: `${strokeWidth} white`,
              color: 'transparent',
            }}
          />
        )
      }

      return (
        <span
          key={index}
          className={cn(
            fontSizeClasses[fontSize],
            "font-light text-transparent tracking-tight font-poppins pb-4 cursor-default"
          )}
          style={{
            WebkitTextStroke: `${strokeWidth} white`,
          }}
        >
          {text}
        </span>
      )
    }

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative w-screen overflow-hidden",
          className
        )}
        {...props}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ 
            x: ["0%", "-50%"]
          }}
          transition={{ 
            repeat: Number.POSITIVE_INFINITY, 
            ease: "linear", 
            duration,
          }}
        >
          {[...Array(repeat * 2)].map((_, index) => (
            <div key={index} className="flex items-center px-6">
              {renderTextContent(text, index)}
            </div>
          ))}
        </motion.div>
      </div>
    )
  }
)

EnhancedMarquee.displayName = "EnhancedMarquee"

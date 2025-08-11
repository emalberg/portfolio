import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { ANIMATION_CONSTANTS } from '@/constants/constants'
import type { KeywordDisplayProps } from '../types'

export function KeywordDisplay({
  keyword,
  isVisible,
  isScrambling,
  scrambledText,
  animationDuration
}: KeywordDisplayProps) {
  return (
    <motion.span
      key={keyword}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -20, 
        scale: isVisible ? 1 : 0.95 
      }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ 
        duration: animationDuration / 1000, 
        ease: ANIMATION_CONSTANTS.DEFAULT_EASING
      }}
      className="inline text-accent font-semibold font-mono"
    >
      <span className={cn(
        isScrambling && 'animate-pulse',
        isScrambling && 'text-accent/70'
      )}>
        {isScrambling ? scrambledText : keyword}
      </span>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible && !isScrambling ? 1 : 0 }}
        transition={{ 
          duration: animationDuration / 1000,
          delay: ANIMATION_CONSTANTS.UNDERLINE_DELAY,
          ease: "easeOut"
        }}
      />
    </motion.span>
  )
}

"use client"
import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { 
  ANIMATION_CONSTANTS, 
  SCRAMBLE_CONSTANTS 
} from '@/constants/constants'
import { useAnimatedKeyword } from '@/hooks'
import { KeywordDisplay } from '@/components/KeywordDisplay/KeywordDisplay'
import type { AnimatedKeywordProps } from './types'

export default function AnimatedKeyword({ 
  keywords, 
  className,
  interval = ANIMATION_CONSTANTS.DEFAULT_INTERVAL,
  animationDuration = ANIMATION_CONSTANTS.DEFAULT_ANIMATION_DURATION,
  scrambleDuration = ANIMATION_CONSTANTS.DEFAULT_SCRAMBLE_DURATION,
  'aria-label': ariaLabel = 'Animated keywords'
}: AnimatedKeywordProps) {
  const {
    currentIndex,
    isVisible,
    scrambledText,
    isScrambling,
    currentKeyword
  } = useAnimatedKeyword({
    keywords,
    interval,
    animationDuration,
    scrambleDuration
  })

  if (!keywords || keywords.length === 0) {
    return null
  }

  return (
    <span 
      className={cn('inline relative', className)}
      role="text"
      aria-label={ariaLabel}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <KeywordDisplay
          keyword={currentKeyword}
          isVisible={isVisible}
          isScrambling={isScrambling}
          scrambledText={scrambledText}
          animationDuration={animationDuration}
        />
      </AnimatePresence>
    </span>
  )
}

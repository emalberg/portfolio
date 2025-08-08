"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { 
  ANIMATION_CONSTANTS, 
  SCRAMBLE_CONSTANTS 
} from '@/constants/constants'

interface AnimatedKeywordProps {
  keywords: string[]
  className?: string
  interval?: number
  animationDuration?: number
  scrambleDuration?: number
  'aria-label'?: string
}

export default function AnimatedKeyword({ 
  keywords, 
  className,
  interval = ANIMATION_CONSTANTS.DEFAULT_INTERVAL,
  animationDuration = ANIMATION_CONSTANTS.DEFAULT_ANIMATION_DURATION,
  scrambleDuration = ANIMATION_CONSTANTS.DEFAULT_SCRAMBLE_DURATION,
  'aria-label': ariaLabel = 'Animated keywords'
}: AnimatedKeywordProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [scrambledText, setScrambledText] = useState('')
  const [isScrambling, setIsScrambling] = useState(false)
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const mainTimerRef = useRef<NodeJS.Timeout | null>(null)

  const generateScrambledText = useCallback((targetLength: number) => {
    let result = ''
    for (let i = 0; i < targetLength; i++) {
      result += SCRAMBLE_CONSTANTS.CHARACTERS.charAt(
        Math.floor(Math.random() * SCRAMBLE_CONSTANTS.CHARACTERS.length)
      )
    }
    return result
  }, [])

  const scrambleText = useCallback((targetText: string) => {
    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current)
      scrambleIntervalRef.current = null
    }

    setIsScrambling(true)
    const targetLength = targetText.length
    let iterations = 0
    const maxIterations = ANIMATION_CONSTANTS.MAX_SCRAMBLE_ITERATIONS

    scrambleIntervalRef.current = setInterval(() => {
      iterations++
      
      if (iterations >= maxIterations) {
        setScrambledText(targetText)
        setIsScrambling(false)
        if (scrambleIntervalRef.current) {
          clearInterval(scrambleIntervalRef.current)
          scrambleIntervalRef.current = null
        }
      } else {
        let newText = ''
        const progress = iterations / maxIterations
        
        for (let i = 0; i < targetLength; i++) {
          const charProbability = Math.min(
            progress + (Math.random() * ANIMATION_CONSTANTS.SCRAMBLE_PROBABILITY_OFFSET), 
            1
          )
          
          if (Math.random() < charProbability) {
            newText += targetText[i]
          } else {
            newText += SCRAMBLE_CONSTANTS.CHARACTERS.charAt(
              Math.floor(Math.random() * SCRAMBLE_CONSTANTS.CHARACTERS.length)
            )
          }
        }
        setScrambledText(newText)
      }
    }, scrambleDuration / maxIterations)
  }, [scrambleDuration])

  const changeToNextKeyword = useCallback(() => {
    if (keywords.length <= 1) return

    setIsVisible(false)
    
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % keywords.length
      setCurrentIndex(nextIndex)
      const nextKeyword = keywords[nextIndex]
      
      scrambleText(nextKeyword)
      setIsVisible(true)
    }, animationDuration * ANIMATION_CONSTANTS.FADE_DELAY_MULTIPLIER)
  }, [keywords.length, currentIndex, animationDuration, scrambleText])

  useEffect(() => {
    if (keywords.length <= 1) return

    if (mainTimerRef.current) {
      clearInterval(mainTimerRef.current)
    }

    mainTimerRef.current = setInterval(() => {
      changeToNextKeyword()
    }, interval)

    return () => {
      if (mainTimerRef.current) {
        clearInterval(mainTimerRef.current)
        mainTimerRef.current = null
      }
    }
  }, [keywords.length, interval, changeToNextKeyword])

  useEffect(() => {
    if (keywords.length > 0) {
      setScrambledText(keywords[0])
    }
  }, [keywords])

  useEffect(() => {
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current)
        scrambleIntervalRef.current = null
      }
      if (mainTimerRef.current) {
        clearInterval(mainTimerRef.current)
        mainTimerRef.current = null
      }
    }
  }, [])

  if (!keywords || keywords.length === 0) {
    return null
  }

  const currentKeyword = keywords[currentIndex]

  return (
    <span 
      className={cn('inline relative', className)}
      role="text"
      aria-label={ariaLabel}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentKeyword}
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
            {isScrambling ? scrambledText : currentKeyword}
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
      </AnimatePresence>
    </span>
  )
}

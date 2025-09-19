import { useState, useEffect, useCallback, useRef } from 'react'
import { 
  ANIMATION_CONSTANTS, 
  SCRAMBLE_CONSTANTS 
} from '@/constants/constants'
import type { UseAnimatedKeywordProps } from '@/components/AnimatedKeywords/types'

export function useAnimatedKeyword({
  keywords,
  interval,
  animationDuration,
  scrambleDuration
}: UseAnimatedKeywordProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [scrambledText, setScrambledText] = useState('')
  const [isScrambling, setIsScrambling] = useState(false)
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const mainTimerRef = useRef<NodeJS.Timeout | null>(null)

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
  }, [currentIndex, animationDuration, scrambleText, keywords])

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

  return {
    currentIndex,
    isVisible,
    scrambledText,
    isScrambling,
    currentKeyword: keywords[currentIndex] || ''
  }
}

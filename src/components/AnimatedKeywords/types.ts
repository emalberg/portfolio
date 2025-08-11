export interface AnimatedKeywordProps {
  keywords: string[]
  className?: string
  interval?: number
  animationDuration?: number
  scrambleDuration?: number
  'aria-label'?: string
}

export interface UseAnimatedKeywordProps {
  keywords: string[]
  interval: number
  animationDuration: number
  scrambleDuration: number
}

export interface KeywordDisplayProps {
  keyword: string
  isVisible: boolean
  isScrambling: boolean
  scrambledText: string
  animationDuration: number
}

import React from 'react'
import { cn } from '@/lib/utils'
import Bio from '@/components/Bio/Bio'
import AnimatedKeyword from '@/components/AnimatedKeywords/AnimatedKeyword'
import type { HeroSectionProps } from './types'
import { combineKeywords } from './utils'
import { 
  DEFAULT_CONTENT, 
  ACCESSIBILITY_CONSTANTS,
  ANIMATION_CONSTANTS,
  COMPONENT_IDS
} from '@/constants/constants'

export default function HeroSection({
  name = DEFAULT_CONTENT.NAME,
  phrase = DEFAULT_CONTENT.PHRASE,
  keywords = DEFAULT_CONTENT.KEYWORDS,
  bio1Title = DEFAULT_CONTENT.BIO.about.title,
  bio1Content = DEFAULT_CONTENT.BIO.about.content,
  bio2Title = DEFAULT_CONTENT.BIO.work.title,
  bio2Content = DEFAULT_CONTENT.BIO.work.content,
  backgroundImage,
  className
}: HeroSectionProps) {
  const bioTabs = [
    {
      id: COMPONENT_IDS.BIO_TABS.about,
      title: bio1Title,
      content: bio1Content
    },
    {
      id: COMPONENT_IDS.BIO_TABS.work,
      title: bio2Title,
      content: bio2Content
    }
  ]

  const allKeywords = combineKeywords(keywords)

  return (
    <section 
      className={cn(
        "relative min-h-auto flex items-center justify-center overflow-hidden py-8 pb-16 sm:pb-12 lg:py-15",
        className
      )}
      aria-labelledby={ACCESSIBILITY_CONSTANTS.ARIA_LABELS.heroSection}
      role={ACCESSIBILITY_CONSTANTS.ROLES.section}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden={ACCESSIBILITY_CONSTANTS.ARIA_LABELS.backgroundImage}
      >
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        ) : (
          <div className="absolute inset-0 hero-gradient" />
        )}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Name and Phrase */}
          <div className="text-center lg:text-left space-y-4">
            <h1 
              id={ACCESSIBILITY_CONSTANTS.ARIA_LABELS.heroSection}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
            >
              {name}
            </h1>
            <div className="text-xl sm:text-2xl text-primary-foreground/90 max-w-lg mx-auto lg:mx-0">
              {phrase}{' '}
              <AnimatedKeyword 
                keywords={allKeywords}
                className="text-accent font-semibold"
                interval={ANIMATION_CONSTANTS.DEFAULT_INTERVAL}
                animationDuration={ANIMATION_CONSTANTS.DEFAULT_ANIMATION_DURATION}
                scrambleDuration={ANIMATION_CONSTANTS.DEFAULT_SCRAMBLE_DURATION}
                aria-label="Animated keywords that describe what I develop"
              />
            </div>
          </div>

          {/* Right Side - Tabbed Bio */}
          <div className="mt-8 mb-16 sm:mb-12 lg:my-15">
            <Bio 
              tabs={bioTabs}
              className="text-primary-foreground"
              aria-label="Personal and professional information"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

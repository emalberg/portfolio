// Animation and timing constants
export const ANIMATION_CONSTANTS = {
  // AnimatedKeyword component
  DEFAULT_INTERVAL: 10000, // 10 seconds
  DEFAULT_ANIMATION_DURATION: 1000, // 1 second
  DEFAULT_SCRAMBLE_DURATION: 2000, // 2 seconds
  MAX_SCRAMBLE_ITERATIONS: 40,
  SCRAMBLE_PROBABILITY_OFFSET: 0.3,
  FADE_DELAY_MULTIPLIER: 0.5,
  
  // Bio component
  TAB_ANIMATION_DURATION: 0.3,
  TAB_ANIMATION_EASE: "easeInOut" as const,
  
  // General animations
  DEFAULT_EASING: [0.4, 0.0, 0.2, 1] as const,
  UNDERLINE_DELAY: 0.2,
} as const

// Scramble effect constants
export const SCRAMBLE_CONSTANTS = {
  CHARACTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~',
} as const

// Accessibility constants
export const ACCESSIBILITY_CONSTANTS = {
  ARIA_LABELS: {
    heroSection: 'hero-heading',
    backgroundImage: 'true',
  },
  ROLES: {
    section: 'region',
  },
} as const

// Default content constants
export const DEFAULT_CONTENT = {
  NAME: "Your Name",
  PHRASE: "I develop",
  KEYWORDS: {
    technologies: ["web applications", "mobile apps", "APIs", "full-stack solutions"],
    creative: ["user-centered experiences", "data-driven interfaces", "interactive UIs"]
  },
  BIO: {
    about: {
      title: "About Me",
      content: "A passionate developer with expertise in modern web technologies and a love for creating beautiful, functional applications."
    },
    work: {
      title: "What I Do", 
      content: "I specialize in full-stack development, focusing on React, TypeScript, and modern web frameworks to build scalable solutions."
    }
  },
}

// Component IDs
export const COMPONENT_IDS = {
  BIO_TABS: {
    about: 'about',
    work: 'work',
  },
} as const

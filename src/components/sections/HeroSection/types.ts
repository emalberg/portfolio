// Strapi data types for the Hero Section
export interface StrapiHeroSection {
  Name: string
  Phrase: string
  Keyword: {
    technologies?: string[]
    creative?: string[]
  }
  Personal_Bio: unknown[] // Rich text content from Strapi
  Professional_Bio: unknown[] // Rich text content from Strapi
  Personal_Bio_Title: string
  Professional_Bio_Title: string
  Background?: {
    url: string
    alternativeText?: string
  }
}

export interface StrapiResponse {
  data: {
    id: number
    Hero_Section: StrapiHeroSection
    // ... other sections
  }
  meta: unknown
}

// Component prop types
export interface KeywordData {
  technologies?: string[]
  creative?: string[]
}

import type { Social } from '@/components/SocialLink/types'

export interface HeroSectionProps {
  name?: string
  phrase?: string
  keywords?: {
    technologies: string[]
    creative: string[]
  }
  bio1Title?: string
  bio1Content?: string
  bio2Title?: string
  bio2Content?: string
  backgroundImage?: string
  className?: string
  socials?: Social[]
}

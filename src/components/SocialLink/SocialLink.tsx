'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import type { SocialLinkProps } from './types'
import { getOptimizedImagePropsWithSize } from '@/lib/image-utils'
import { getStrapiAssetUrl } from '@/utils/strapi-transformers'

export default function SocialLink({
  social,
  variant = 'mobile',
  index = 0
}: SocialLinkProps & { index?: number }) {
  const isMobile = variant === 'mobile'
  
  const baseClasses = "inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

  const mobileClasses = `${baseClasses} text-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors`

  const iconUrl = getStrapiAssetUrl(social.Icon.url)

  if (isMobile) {
    return (
      <a
        href={social.Link}
        target="_blank"
        rel="noopener noreferrer"
        className={mobileClasses}
        aria-label={`Visit ${social.Name} profile`}
        title={`Open ${social.Name} in a new tab`}
      >
        <Image
          src={iconUrl}
          alt={social.Icon.alternativeText}
          className="w-6 h-6 filter invert"
          width={social.Icon.width}
          height={social.Icon.height}
          {...getOptimizedImagePropsWithSize('social-icon', social.Icon.width, social.Icon.height)}
        />
        <span className="font-medium text-sm text-primary-foreground">
          {social.Name}
        </span>
      </a>
    )
  }

  // Calculate position for multiple social links
  const topPosition = `calc(50vh - ${index * 4}rem)`

  return (
    <motion.a
      href={social.Link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-0 z-50 bg-accent/90 backdrop-blur-sm border-r border-t border-b border-border rounded-r-full shadow-lg overflow-hidden"
      style={{ 
        top: topPosition
      }}
      aria-label={`Visit ${social.Name} profile`}
      title={`Open ${social.Name} in a new tab`}
      initial={{ x: "-70%" }}
      animate={{ x: "-70%" }}
      whileHover={{ x: 0 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <div className="flex items-end justify-end gap-10 px-3 py-2 min-w-32">
        <span className="font-medium text-sm text-foreground whitespace-nowrap">
          {social.Name}
        </span>
        <Image
          src={iconUrl}
          alt={social.Icon.alternativeText}
          className="w-5 h-5 flex-shrink-0"
          width={social.Icon.width}
          height={social.Icon.height}
          {...getOptimizedImagePropsWithSize('social-icon-small', social.Icon.width, social.Icon.height)}
        />
      </div>
    </motion.a>
  )
}

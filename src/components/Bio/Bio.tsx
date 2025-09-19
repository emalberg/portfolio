"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { useBioTabs } from '@/hooks'
import { BioTabNavigation } from '@/components/BioTabNavigation/BioTabNavigation'
import { BioTabContent } from '@/components/BioTabContent/BioTabContent'
import type { BioProps } from './types'

export default function Bio({ tabs, className, 'aria-label': ariaLabel = 'Bio information' }: BioProps) {
  const { activeTab, activeTabData, handleTabChange } = useBioTabs(tabs)

  if (!tabs || tabs.length === 0) {
    return null
  }

  return (
    <div 
      className={cn("space-y-4", className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      <BioTabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      <BioTabContent
        activeTab={activeTab}
        activeTabData={activeTabData}
      />
    </div>
  )
}

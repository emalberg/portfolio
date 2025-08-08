"use client"
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'
import { 
  ANIMATION_CONSTANTS, 
  COMPONENT_IDS 
} from '@/constants/constants'

interface BioTab {
  id: string
  title: string
  content: string
}

interface BioProps {
  tabs: BioTab[]
  className?: string
  'aria-label'?: string
}

export default function Bio({ tabs, className, 'aria-label': ariaLabel = 'Bio information' }: BioProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')

  if (!tabs || tabs.length === 0) {
    return null
  }

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div 
      className={cn('space-y-4', className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {/* Tab Navigation */}
      <div 
        className="flex space-x-1 bg-card/10 backdrop-blur-sm rounded-lg p-1 border border-border"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            onClick={() => handleTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            className={cn(
              'flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
              activeTab === tab.id
                ? 'bg-primary/20 text-primary-foreground shadow-sm'
                : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-accent/10'
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: ANIMATION_CONSTANTS.TAB_ANIMATION_DURATION, 
              ease: ANIMATION_CONSTANTS.TAB_ANIMATION_EASE 
            }}
            className="w-full"
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-border h-auto py-8">
              <h2 className="text-lg font-semibold text-primary-foreground mb-3">
                {activeTabData.title}
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                {activeTabData.content}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

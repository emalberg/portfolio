import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  ANIMATION_CONSTANTS
} from '@/constants/constants'
import type { BioTabContentProps } from '../types'

export function BioTabContent({ activeTab, activeTabData }: BioTabContentProps) {
  return (
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
          <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 py-8 border border-border h-auto">
            <h2 className="text-lg font-semibold text-primary-foreground mb-3">
              {activeTabData.title}
            </h2>
            <p className="text-base text-primary-foreground/90 leading-relaxed">
              {activeTabData.content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

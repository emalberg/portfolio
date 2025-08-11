import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { BioTabNavigationProps } from '@/components/Bio/types'

export function BioTabNavigation({ tabs, activeTab, onTabChange }: BioTabNavigationProps) {
  return (
    <div 
      className="flex space-x-1 bg-card/10 backdrop-blur-sm rounded-lg p-1 border border-border"
      role="tablist"
    >
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          id={`tab-${tab.id}`}
          onClick={() => onTabChange(tab.id)}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          className={cn(
            "flex-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md",
            "bg-card/10 backdrop-blur-sm",
            activeTab === tab.id
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground'
          )}
        >
          {tab.title}
        </Button>
      ))}
    </div>
  )
}

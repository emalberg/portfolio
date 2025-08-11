import { useState } from 'react'
import type { BioTab } from '@/components/Bio/types'

export function useBioTabs(tabs: BioTab[]) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')
  
  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  return {
    activeTab,
    activeTabData,
    handleTabChange
  }
}

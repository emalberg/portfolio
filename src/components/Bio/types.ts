export interface BioTab {
  id: string
  title: string
  content: string
}

export interface BioProps {
  tabs: BioTab[]
  className?: string
  'aria-label'?: string
}

export interface BioTabNavigationProps {
  tabs: BioTab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export interface BioTabContentProps {
  activeTab: string
  activeTabData: BioTab
}

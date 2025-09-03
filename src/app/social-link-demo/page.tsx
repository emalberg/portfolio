import React from 'react'
import { SocialLink } from '@/components/SocialLink'
import { SAMPLE_SOCIAL_DATA } from '@/constants/constants'

// Sample social data for demo
const sampleSocials = SAMPLE_SOCIAL_DATA.SOCIAL_SECTION.Socials

export default function SocialLinkDemo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          SocialLink Component Demo
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Desktop Edge Social Links
            </h2>
            <p className="text-muted-foreground mb-6">
              These social links are positioned at the very left edge of the browser window. 
              Hover over them to see the smooth sliding animation that reveals the social network names.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">1</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Social icons are positioned at the very left edge of the browser window
                </span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">2</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  On hover, the container slides out to the right revealing the social network name
                </span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">3</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Text slides in from the left while the icon stays positioned on the right
                </span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">4</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Rounded right corners and border styling for a polished look
                </span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Component Features
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Uses Next.js Image component for optimized loading
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Framer Motion animations for smooth interactions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Edge-to-edge positioning with smooth rightward expansion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Text slides in from left while icon remains on the right
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Responsive design with mobile and desktop variants
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Accessible with proper ARIA labels and keyboard navigation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Social Links - Fixed left edge */}
      {sampleSocials.map((social, index) => (
        <SocialLink 
          key={social.id} 
          social={social} 
          variant="desktop"
          index={index}
        />
      ))}
    </div>
  )
}

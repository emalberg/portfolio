'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NavBarState } from './types';
import { NAVBAR_CONSTANTS, ACCESSIBILITY_CONSTANTS } from '@/constants/constants';
import { TransformedNavBarData } from '@/types/strapi';
import { NavBarLink } from '@/components/NavBarLink';
import { NavBarCTAButton } from '@/components/NavBarCTAButton';
import { MobileMenu } from '@/components/MobileMenu';
import { getOptimizedImageProps } from '@/lib/image-utils';
import { NavBarSkeleton } from '@/components/ui/loading-skeleton';

// Main NavBar Component
export default function NavBar({ data, className }: { data: TransformedNavBarData | null; className?: string }) {
  if (!data) {
    return <NavBarSkeleton />;
  }
  const [state, setState] = useState<NavBarState>({
    isScrolled: false,
    activeSection: null,
    textColor: 'dark'
  });

  // Smooth scroll to section
  const scrollToSection = useCallback((target: string) => {
    const element = document.getElementById(target);
    if (element) {
      const offset = NAVBAR_CONSTANTS.SCROLL_OFFSET;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Determine text color based on current section
  const getTextColorForSection = useCallback((sectionId: string | null): 'light' | 'dark' => {
    // Hero section (at top) should have light text, all other sections should have dark text
    if (sectionId === 'hero-section') {
      return 'light';
    }
    return 'dark';
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > NAVBAR_CONSTANTS.SCROLL_THRESHOLD;

      // Find active section based on scroll position
      const sections = data.links ? data.links.map(link => link.target) : [];
      // Add hero section to the list of sections to check
      sections.unshift('hero-section');
      let activeSection: string | null = null;

      // Check if we're in the hero section (at the top)
      const heroElement = document.getElementById('hero-section');
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        const offset = NAVBAR_CONSTANTS.SCROLL_OFFSET;
        
        if (heroRect.top <= offset && heroRect.bottom > offset) {
          activeSection = 'hero-section'; // In hero section = white text
        } else {
          // Check other sections
          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              
              if (rect.top <= offset && rect.bottom > offset) {
                activeSection = sectionId;
                break;
              }
            }
          }
        }
      }

      const textColor = getTextColorForSection(activeSection);

      setState(prev => ({
        ...prev,
        isScrolled,
        activeSection,
        textColor
      }));
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.links, getTextColorForSection]);

  // Sort links by order if they exist
  const sortedLinks = data.links ? [...data.links].sort((a, b) => a.order - b.order) : [];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        state.isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/10' 
          : 'bg-white/5 backdrop-blur-sm border-b border-white/10',
        className
      )}
      role="navigation"
      aria-label={ACCESSIBILITY_CONSTANTS.ARIA_LABELS.mainNavigation}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo/Brand - only render if logo data exists */}
          {data.logo?.url && (
            <div className="flex-shrink-0 relative">
              <Image
                onClick={() => scrollToSection('hero-section')}
                src={process.env.NEXT_PUBLIC_STRAPI_URL + data.logo.url}
                alt={data.logo.alt || 'Logo'}
                width={data.logo.width || 240}
                height={data.logo.height || 100}
                className={cn(
                  "h-16 w-auto transition-all duration-200 hover:opacity-80 transform translate-y-4 relative z-10",
                  state.textColor === 'light' 
                    ? 'brightness-100' 
                    : 'invert'
                )}
                tabIndex={0}
                {...getOptimizedImageProps('logo')}
              />
            </div>
          )}

          {/* Navigation Links - only render if links exist */}
          {sortedLinks.length > 0 && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {sortedLinks.map((link) => (
                  <NavBarLink
                    key={link.id}
                    name={link.name}
                    target={link.target}
                    onClick={scrollToSection}
                    className={cn(
                      'transition-colors duration-200',
                      state.textColor === 'light'
                        ? 'text-background hover:text-primary' 
                        : 'text-foreground hover:text-primary',
                      state.activeSection === link.target && 'text-primary font-semibold'
                    )}
                  />
                ))}
              </div>
            </div>
          )}

          {/* CTA Button - only render if CTA data exists */}
          {data.ctaButton?.text && data.ctaButton?.url && (
            <div className="flex-shrink-0">
              <NavBarCTAButton
                text={data.ctaButton.text}
                url={data.ctaButton.url}
                className="transition-all duration-200"
              />
            </div>
          )}

          {/* Mobile menu */}
          <MobileMenu
            links={sortedLinks}
            ctaButton={data.ctaButton}
            textColor={state.textColor}
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </nav>
  );
}

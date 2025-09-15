'use client';

import { cn } from '@/lib/utils';
import { NavBarLink } from '@/components/NavBarLink';
import { NavBarCTAButton } from '@/components/NavBarCTAButton';
import { ACCESSIBILITY_CONSTANTS } from '@/constants/constants';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';

interface MobileMenuProps {
  links: Array<{
    id: number;
    name: string;
    target: string;
    order: number;
  }>;
  ctaButton: {
    id: number;
    text: string;
    url: string;
    order: number;
  } | null;
  textColor: 'light' | 'dark';
  scrollToSection: (target: string) => void;
}

export default function MobileMenu({ 
  links, 
  ctaButton, 
  textColor, 
  scrollToSection 
}: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className={cn(
              'p-2 rounded-md transition-colors duration-200',
              textColor === 'light'
                ? 'text-background hover:bg-white/10' 
                : 'text-foreground hover:bg-accent'
            )}
            aria-label="Open mobile navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu-content"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80" id="mobile-menu-content">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6" role="navigation" aria-label={ACCESSIBILITY_CONSTANTS.ARIA_LABELS.mobileNavigation}>
            {/* Mobile Navigation Links */}
            {links.map((link) => (
              <NavBarLink
                key={link.id}
                name={link.name}
                target={link.target}
                onClick={scrollToSection}
                className="text-lg py-2 px-4 rounded-md transition-colors duration-200"
              />
            ))}
            
            {/* Mobile CTA Button */}
            {ctaButton?.text && ctaButton?.url && (
              <div className="pt-4">
                <NavBarCTAButton
                  text={ctaButton.text}
                  url={ctaButton.url}
                  className="w-full justify-center"
                />
              </div>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

import { cn } from '@/lib/utils';
import { ACCESSIBILITY_CONSTANTS } from '@/constants/constants';
import type { FooterProps } from './types';

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className={cn(
        'bg-muted/30 border-t border-border',
        'py-6 px-4 sm:px-6 lg:px-8',
        'text-center text-sm text-muted-foreground',
        className
      )}
      role="contentinfo"
      aria-label={ACCESSIBILITY_CONSTANTS.ARIA_LABELS.footer || 'Site footer'}
    >
      <div className="max-w-7xl mx-auto">
        <p>
          © {currentYear} Erich Malberg. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

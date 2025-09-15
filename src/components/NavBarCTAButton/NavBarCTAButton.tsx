import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface NavBarCTAButtonProps {
  text: string;
  url: string;
  className?: string;
}

export default function NavBarCTAButton({ text, url, className }: NavBarCTAButtonProps) {
  return (
    <Button
      asChild
      className={cn('transition-all duration-200', className)}
      aria-label={`${text} - Opens in new tab`}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </Button>
  );
}

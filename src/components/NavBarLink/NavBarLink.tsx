import { cn } from '@/lib/utils';

export interface NavBarLinkProps {
  name: string;
  target: string;
  onClick: (target: string) => void;
  className?: string;
}

export default function NavBarLink({ name, target, onClick, className }: NavBarLinkProps) {
  return (
    <a
      href={`#${target}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(target);
      }}
      className={cn(
        'px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md',
        className
      )}
      aria-label={`Navigate to ${name} section`}
    >
      {name}
    </a>
  );
}

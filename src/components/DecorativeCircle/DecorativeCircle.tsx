import React from 'react';
import { cn } from '@/lib/utils';
import type { DecorativeCircleProps } from '../DecorativeElements/types';

export function DecorativeCircle({ position, className }: DecorativeCircleProps) {
  const positionClasses = position === 'top-right' 
    ? '-top-40 -right-40'
    : '-bottom-40 -left-40';

  return (
    <div 
      className={cn(
        `absolute ${positionClasses} w-80 h-80 rounded-full blur-3xl`,
        className
      )} 
    />
  );
}

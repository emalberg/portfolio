import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { PaginationButtonProps } from '@/components/PaginationControls/types';

export function PaginationButton({ 
  onClick, 
  disabled = false, 
  variant, 
  children 
}: PaginationButtonProps) {
  const isPrevious = variant === 'previous';
  
  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.2 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        variant="outline"
        className="px-4 py-2 rounded-md bg-card/10 backdrop-blur-sm border border-border text-sm font-medium transition-all duration-200"
        aria-label={`${isPrevious ? 'Previous' : 'Next'} page`}
      >
        {children}
      </Button>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { PageNumbersProps } from '@/components/PaginationControls/types';
import { cn } from '@/lib/utils';

export function PageNumbers({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PageNumbersProps) {
  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center gap-2">
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="text-muted-foreground px-2">...</span>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={() => onPageChange(page as number)}
                size="icon"
                className={cn(
                  "w-10 h-10 rounded-md text-sm font-medium transition-all duration-200",
                  currentPage === page
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card/10 backdrop-blur-sm border border-border text-card-foreground/70 hover:bg-accent hover:text-accent-foreground"
                )}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </Button>
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

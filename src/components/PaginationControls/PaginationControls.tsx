'use client';

import { motion } from "motion/react";
import { PaginationButton } from '@/components/PaginationButton/PaginationButton'
import { PageNumbers } from '@/components/PageNumbers/PageNumbers'
import type { PaginationControlsProps } from './types';

export default function PaginationControls({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.5 } 
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center gap-4 mt-12"
    >
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="previous"
      >
        Previous
      </PaginationButton>
      
      <PageNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="next"
      >
        Next
      </PaginationButton>
    </motion.div>
  );
}

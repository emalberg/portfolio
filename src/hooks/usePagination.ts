import { useState, useEffect, useCallback } from 'react';
import { PROJECT_SECTION_CONSTANTS, COMPONENT_IDS } from '@/constants/constants';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  onDataChange?: () => void;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  currentItems: number[];
  handlePageChange: (page: number) => void;
}

export const usePagination = ({ 
  totalItems, 
  itemsPerPage = PROJECT_SECTION_CONSTANTS.GRID.PROJECTS_PER_PAGE,
  onDataChange 
}: UsePaginationProps): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Array.from({ length: totalItems }, (_, i) => i).slice(startIndex, endIndex);

  // Reset to first page when data changes
  useEffect(() => {
    setCurrentPage(1);
    onDataChange?.();
  }, [totalItems, onDataChange]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    
    // Scroll to top of section when page changes
    const section = document.getElementById(COMPONENT_IDS.PROJECT_SECTION);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Force a small delay to ensure state update before scroll
    setTimeout(() => {
      window.scrollTo({ 
        top: section?.offsetTop || 0, 
        behavior: 'smooth' 
      });
    }, PROJECT_SECTION_CONSTANTS.PAGINATION.SCROLL_DELAY);
  }, []);

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
  };
};

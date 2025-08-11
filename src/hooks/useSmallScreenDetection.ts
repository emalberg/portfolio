'use client';

import { useEffect, useState } from 'react';
import { SKILLS_SECTION_CONSTANTS } from '@/constants/constants';

/**
 * Hook to detect small screen breakpoint
 */
export const useSmallScreenDetection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => 
      setIsSmallScreen(window.innerWidth < SKILLS_SECTION_CONSTANTS.BREAKPOINTS.SMALL_SCREEN);
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isSmallScreen;
};

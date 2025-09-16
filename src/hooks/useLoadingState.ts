/**
 * Loading state management utilities
 */

import { useState, useEffect } from 'react';

// Hook for managing loading states with automatic timeout
export function useLoadingState(initialState = true, timeout = 5000) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [hasTimedOut, setHasTimedOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setHasTimedOut(true);
        setIsLoading(false);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isLoading, timeout]);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (!loading) {
      setHasTimedOut(false);
    }
  };

  return {
    isLoading,
    hasTimedOut,
    setLoading
  };
}

// Hook for staggered loading animations
export function useStaggeredLoading(items: any[], staggerDelay = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    items.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * staggerDelay);
      
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [items.length, staggerDelay]);

  return visibleItems;
}

// Utility for creating loading delays
export function createLoadingDelay(baseDelay = 0, index = 0, stagger = 100) {
  return baseDelay + (index * stagger);
}

// Loading state constants
export const LOADING_CONSTANTS = {
  DEFAULT_TIMEOUT: 5000,
  STAGGER_DELAY: 100,
  SECTION_DELAY: 200,
  CARD_DELAY: 150,
  ICON_DELAY: 50
} as const;

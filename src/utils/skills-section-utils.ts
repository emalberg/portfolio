import { SKILLS_SECTION_CONSTANTS } from '@/constants/constants';
import type { AnimationConfig, CarouselConfig } from '@/components/sections/SkillsSection/types';

/**
 * Creates animation configuration with theme-aware values for skills
 */
export const createSkillsSectionAnimation = (): AnimationConfig => ({
  container: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: SKILLS_SECTION_CONSTANTS.ANIMATION.CONTAINER_DURATION, 
        staggerChildren: SKILLS_SECTION_CONSTANTS.ANIMATION.STAGGER_CHILDREN 
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: SKILLS_SECTION_CONSTANTS.ANIMATION.ITEM_DURATION } 
    },
  },
});

/**
 * Creates carousel configuration based on screen size
 */
export const createCarouselConfig = (isSmallScreen: boolean): CarouselConfig => ({
  orientation: isSmallScreen ? "vertical" : "horizontal",
  itemsPerSlide: isSmallScreen ? 1 : 3,
  opts: { 
    align: SKILLS_SECTION_CONSTANTS.CAROUSEL.ALIGN, 
    loop: SKILLS_SECTION_CONSTANTS.CAROUSEL.LOOP 
  },
});

/**
 * Gets responsive container class names for skills
 */
export const getSkillsContainerClassName = (isSmallScreen: boolean): string => 
  `relative ${isSmallScreen ? 
    'max-w-xs' : 
    'max-w-sm sm:max-w-2xl lg:max-w-4xl'
  }`;

/**
 * Gets carousel content height class
 */
export const getCarouselContentHeight = (isSmallScreen: boolean): string =>
  isSmallScreen ? 'h-[220px]' : "";

/**
 * Gets skill item container classes
 */
export const getSkillItemClasses = (isSmallScreen: boolean): string =>
  `flex justify-center items-center ${isSmallScreen ? 
    'h-full p-2' : 
    'p-4'
  }`;

/**
 * Gets navigation arrow classes for skills
 */
export const getSkillsArrowClasses = (isSmallScreen: boolean, position: 'prev' | 'next'): string => {
  if (isSmallScreen) {
    return position === 'prev' 
      ? 'top-2 left-1/2 -translate-x-1/2 rotate-90'
      : 'bottom-2 left-1/2 -translate-x-1/2 rotate-90';
  }
  
  return position === 'prev' 
    ? 'left-2'
    : 'right-2';
};

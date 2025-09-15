import { PROJECT_SECTION_CONSTANTS } from '@/constants/constants';
import type { AnimationConfig } from '@/components/sections/ProjectSection/types';

/**
 * Creates animation configuration for the project section
 */
export const createProjectSectionAnimation = (): AnimationConfig => ({
  container: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: PROJECT_SECTION_CONSTANTS.ANIMATION.CONTAINER_DURATION, 
        staggerChildren: PROJECT_SECTION_CONSTANTS.ANIMATION.STAGGER_CHILDREN 
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: PROJECT_SECTION_CONSTANTS.ANIMATION.ITEM_DURATION } 
    },
  },
});

/**
 * Gets responsive grid classes for projects
 */
export const getProjectGridClasses = (): string => {
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
};

/**
 * Gets container classes with responsive padding for projects
 */
export const getProjectContainerClasses = (floatingStyles?: string): string => {
  const baseClasses = 'py-16 md:py-24 bg-background relative';
  return floatingStyles ? `${baseClasses} ${floatingStyles}` : baseClasses;
};

/**
 * Gets inner container classes for projects
 */
export const getProjectInnerContainerClasses = (): string => {
  return 'container mx-auto px-4';
};

/**
 * Gets grid container classes for projects - simplified to prevent stacking issues
 */
export const getProjectGridContainerClasses = (): string => {
  // Use a simpler approach to ensure proper grid layout
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8 md:mt-12';
};

/**
 * Validates project section data
 */
interface ProjectSectionDataCheck {
  Title: unknown;
  Projects: unknown[];
}

export const validateProjectSectionData = (data: unknown): data is ProjectSectionDataCheck => {
  if (!data || typeof data !== 'object' || data === null) {
    return false;
  }
  
  const obj = data as Record<string, unknown>;
  
  return !!(
    'Title' in obj &&
    'Projects' in obj &&
    Array.isArray(obj.Projects) &&
    obj.Projects.length > 0
  );
};

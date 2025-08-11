import { PROJECT_CARD_CONSTANTS } from '@/constants/constants';
import { ExternalLink, Github, FileText } from 'lucide-react';
import type { ProjectLink } from '@/components/ProjectCard/types';

/**
 * Gets the appropriate icon for a project link type
 */
export const getLinkIcon = (type: ProjectLink['type']) => {
  switch (type) {
    case 'demo':
      return ExternalLink;
    case 'repo':
      return Github;
    case 'docs':
      return FileText;
    default:
      return ExternalLink;
  }
};

/**
 * Gets the appropriate button variant for project links
 */
export const getLinkButtonVariant = (type: ProjectLink['type']): 'default' | 'secondary' | 'outline' => {
  switch (type) {
    case 'demo':
      return 'default'; // Primary styling for demos
    case 'repo':
      return 'secondary'; // Secondary styling for repositories
    case 'docs':
      return 'outline'; // Outline styling for documentation
    default:
      return 'outline';
  }
};

/**
 * Creates animation variants for the card flip effect
 */
export const createFlipVariants = () => ({
  front: {
    rotateY: 0,
    transition: {
      duration: PROJECT_CARD_CONSTANTS.ANIMATION.FLIP_DURATION,
      ease: PROJECT_CARD_CONSTANTS.ANIMATION.FLIP_EASE,
    },
  },
  back: {
    rotateY: 180,
    transition: {
      duration: PROJECT_CARD_CONSTANTS.ANIMATION.FLIP_DURATION,
      ease: PROJECT_CARD_CONSTANTS.ANIMATION.FLIP_EASE,
    },
  },
});

/**
 * Creates animation variants for button stagger effect
 */
export const createButtonStaggerVariants = () => ({
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * PROJECT_CARD_CONSTANTS.ANIMATION.STAGGER_DELAY,
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
});

/**
 * Creates hover animation variants
 */
export const createHoverVariants = () => ({
  rest: {
    scale: 1,
    transition: {
      duration: PROJECT_CARD_CONSTANTS.ANIMATION.HOVER_DURATION,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: PROJECT_CARD_CONSTANTS.ANIMATION.HOVER_SCALE,
    transition: {
      duration: PROJECT_CARD_CONSTANTS.ANIMATION.HOVER_DURATION,
      ease: "easeOut" as const,
    },
  },
});

/**
 * Validates project data
 */
interface ProjectDataCheck {
  name: unknown;
  description: unknown;
  image: unknown;
  links: unknown;
}

interface ProjectImageCheck {
  url: unknown;
  alt: unknown;
}

export const validateProjectData = (project: unknown): project is ProjectDataCheck => {
  if (!project || typeof project !== 'object' || project === null) {
    return false;
  }
  
  const obj = project as Record<string, unknown>;
  
  if (!('name' in obj) || !('description' in obj) || !('image' in obj) || !('links' in obj)) {
    return false;
  }
  
  if (typeof obj.name !== 'string' || typeof obj.description !== 'string') {
    return false;
  }
  
  if (typeof obj.image !== 'object' || obj.image === null) {
    return false;
  }
  
  const imageObj = obj.image as Record<string, unknown>;
  if (!('url' in imageObj) || !('alt' in imageObj)) {
    return false;
  }
  
  if (!Array.isArray(obj.links)) {
    return false;
  }
  
  return true;
};

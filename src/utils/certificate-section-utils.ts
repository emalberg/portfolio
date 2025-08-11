import { CERTIFICATE_SECTION_CONSTANTS } from '@/constants/constants';
import type { AnimationConfig } from '@/components/sections/CertificateSection/types';

/**
 * Creates animation configuration for the certificate section
 */
export const createCertificateSectionAnimation = (): AnimationConfig => ({
  container: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: CERTIFICATE_SECTION_CONSTANTS.ANIMATION.CONTAINER_DURATION, 
        staggerChildren: CERTIFICATE_SECTION_CONSTANTS.ANIMATION.STAGGER_CHILDREN 
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: CERTIFICATE_SECTION_CONSTANTS.ANIMATION.ITEM_DURATION } 
    },
  },
});

/**
 * Gets responsive grid classes for certificates
 */
export const getCertificateGridClasses = (): string => {
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
};

/**
 * Gets container classes with responsive padding for certificates
 */
export const getCertificateContainerClasses = (): string => {
  return 'py-16 md:py-24 bg-background relative';
};

/**
 * Gets inner container classes for certificates
 */
export const getCertificateInnerContainerClasses = (): string => {
  return 'container mx-auto px-4';
};

/**
 * Gets grid container classes for certificates
 */
export const getCertificateGridContainerClasses = (): string => {
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8 md:mt-12';
};

/**
 * Validates certificate section data
 */
interface CertificateSectionDataCheck {
  Title: unknown;
  Certificates: unknown[];
}

export const validateCertificateSectionData = (data: unknown): data is CertificateSectionDataCheck => {
  if (!data || typeof data !== 'object' || data === null) {
    return false;
  }
  
  const obj = data as Record<string, unknown>;
  
  return !!(
    'Title' in obj &&
    'Certificates' in obj &&
    Array.isArray(obj.Certificates) &&
    obj.Certificates.length > 0
  );
};

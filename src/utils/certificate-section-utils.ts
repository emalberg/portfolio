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
export const getCertificateContainerClasses = (floatingStyles?: string): string => {
  const baseClasses = 'py-16 md:py-24 bg-background relative';
  return floatingStyles ? `${baseClasses} ${floatingStyles}` : baseClasses;
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
 * Validates certificate section data with improved handling of empty/invalid data
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
    Array.isArray(obj.Certificates)
  );
};

/**
 * Validates individual certificate data
 */
interface CertificateDataCheck {
  id: unknown;
  name: unknown;
  issuer: unknown;
  dateReceived: unknown;
  expirationDate?: unknown;
  image: unknown;
}

export const validateCertificateData = (certificate: unknown): certificate is CertificateDataCheck => {
  if (!certificate || typeof certificate !== 'object' || certificate === null) {
    return false;
  }
  
  const obj = certificate as Record<string, unknown>;
  
  // Check if required fields exist
  if (!('id' in obj) || !('name' in obj) || !('issuer' in obj) || !('dateReceived' in obj) || !('image' in obj)) {
    return false;
  }
  
  // Check if id is a valid number
  if (typeof obj.id !== 'number' || obj.id <= 0) {
    return false;
  }
  
  // Check if name and issuer are valid strings (not undefined, null, or empty)
  if (typeof obj.name !== 'string' || !obj.name.trim() || 
      typeof obj.issuer !== 'string' || !obj.issuer.trim()) {
    return false;
  }
  
  // Check if dateReceived is a valid string
  if (typeof obj.dateReceived !== 'string' || !obj.dateReceived.trim()) {
    return false;
  }
  
  // Check if image is valid (can be null or object with url)
  if (obj.image !== null && (typeof obj.image !== 'object' || obj.image === null)) {
    return false;
  }
  
  // If image is an object, check if it has valid url
  if (obj.image && typeof obj.image === 'object') {
    const imageObj = obj.image as Record<string, unknown>;
    if (!('url' in imageObj) || typeof imageObj.url !== 'string' || !imageObj.url.trim()) {
      return false;
    }
  }
  
  return true;
};

/**
 * Filters out invalid certificates from an array
 */
export const filterValidCertificates = (certificates: unknown[]): CertificateDataCheck[] => {
  return certificates.filter((certificate): certificate is CertificateDataCheck => {
    return validateCertificateData(certificate);
  });
};

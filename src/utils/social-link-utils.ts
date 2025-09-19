import type { Social } from '@/components/SocialLink/types'

/**
 * Validates if a social link object has all required properties
 */
export function isValidSocial(social: unknown): social is Social {
  if (!social || typeof social !== 'object' || social === null) {
    return false;
  }
  
  const obj = social as Record<string, unknown>;
  
  return (
    typeof obj.id === 'number' &&
    typeof obj.Name === 'string' &&
    typeof obj.Link === 'string' &&
    Boolean(obj.Icon) &&
    typeof obj.Icon === 'object' &&
    obj.Icon !== null &&
    typeof (obj.Icon as Record<string, unknown>).url === 'string' &&
    typeof (obj.Icon as Record<string, unknown>).alternativeText === 'string'
  );
}

/**
 * Sorts social links by their order property
 */
export function sortSocialsByOrder(socials: Social[]): Social[] {
  return [...socials].sort((a, b) => a.Order - b.Order)
}

/**
 * Filters out invalid social links
 */
export function filterValidSocials(socials: unknown[]): Social[] {
  return socials.filter(isValidSocial)
}

/**
 * Formats social link data for display
 */
export function formatSocialLink(social: Social) {
  return {
    ...social,
    displayName: social.Name.trim(),
    displayUrl: social.Link.trim(),
    iconUrl: social.Icon.url,
    iconAlt: social.Icon.alternativeText || `${social.Name} icon`
  }
}

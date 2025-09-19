import type { Social } from '@/components/SocialLink/types'

/**
 * Validates if a social link object has all required properties
 */
export function isValidSocial(social: unknown): social is Social {
  return (
    social &&
    typeof social === 'object' &&
    social !== null &&
    'id' in social &&
    'Name' in social &&
    'Link' in social &&
    'Icon' in social &&
    typeof (social as any).id === 'number' &&
    typeof (social as any).Name === 'string' &&
    typeof (social as any).Link === 'string' &&
    (social as any).Icon &&
    typeof (social as any).Icon.url === 'string' &&
    typeof (social as any).Icon.alternativeText === 'string'
  )
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

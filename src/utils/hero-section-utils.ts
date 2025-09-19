import type { StrapiResponse, KeywordData } from '@/components/sections/HeroSection/types'

/**
 * Parses Strapi response data and extracts hero section information
 */
export function parseStrapiHeroData(strapiData: StrapiResponse) {
  const heroSection = strapiData.data.Hero_Section
  
  if (!heroSection) {
    return null
  }

  return {
    name: heroSection.Name,
    phrase: heroSection.Phrase,
    keywords: heroSection.Keyword,
    bio1Title: heroSection.Personal_Bio_Title,
    bio1Content: parseRichText(heroSection.Personal_Bio),
    bio2Title: heroSection.Professional_Bio_Title,
    bio2Content: parseRichText(heroSection.Professional_Bio),
    backgroundImage: heroSection.Background?.url
  }
}

/**
 * Parses Strapi rich text content into plain text
 */
interface RichTextBlock {
  type: string;
  children?: Array<{ text?: string }>;
}

function parseRichText(richTextContent: unknown[]): string {
  if (!Array.isArray(richTextContent)) {
    return ''
  }

  return richTextContent
    .map(block => {
      const typedBlock = block as RichTextBlock;
      if (typedBlock.type === 'paragraph' && Array.isArray(typedBlock.children)) {
        return typedBlock.children
          .map((child: { text?: string }) => child.text || '')
          .join('')
      }
      return ''
    })
    .join('\n')
    .trim()
}

/**
 * Combines keywords from different categories into a single array
 */
export function combineKeywords(keywords: KeywordData): string[] {
  const allKeywords: string[] = []
  
  if (keywords.technologies) {
    allKeywords.push(...keywords.technologies)
  }
  
  if (keywords.creative) {
    allKeywords.push(...keywords.creative)
  }
  
  return allKeywords
}

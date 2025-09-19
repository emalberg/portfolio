import { 
  StrapiHomePageData, 
  TransformedPageData, 
  TransformedHeroData, 
  TransformedSkillData, 
  TransformedProjectData, 
  TransformedCertificateData, 
  TransformedSocialData,
  TransformedNavBarData,
  StrapiRichText,
  StrapiHeroSection,
  StrapiSkillSection,
  StrapiProjectSection,
  StrapiCertificateSection,
  StrapiSocialSection,
  StrapiNavBarSection
} from '@/types/strapi';
import { filterValidProjects } from './project-card-utils';
import { filterValidCertificates } from './certificate-section-utils';

// Helper function to extract text from rich text content
function extractTextFromRichText(richText: StrapiRichText[]): string {
  if (!richText || !Array.isArray(richText)) return '';
  
  return richText
    .map(block => {
      if (block.children && Array.isArray(block.children)) {
        return block.children
          .map((child) => child.text || '')
          .join(' ');
      }
      return '';
    })
    .join(' ');
}

// Transform hero section data
function transformHeroSection(heroSection: StrapiHeroSection): TransformedHeroData {
  return {
    name: heroSection.Name || '',
    phrase: heroSection.Phrase || '',
    keywords: {
      technologies: heroSection.Keyword?.technologies || [],
      creative: heroSection.Keyword?.creative || []
    },
    bio: {
      about: {
        title: heroSection.Personal_Bio_Title || 'About Me',
        content: extractTextFromRichText(heroSection.Personal_Bio)
      },
      work: {
        title: heroSection.Professional_Bio_Title || 'What I Do',
        content: extractTextFromRichText(heroSection.Professional_Bio)
      }
    },
    background: heroSection.Background || null
  };
}

// Transform skills section data
function transformSkillSection(skillSection: StrapiSkillSection | null): TransformedSkillData | null {
  if (!skillSection) return null;
  
  return {
    title: skillSection.Title || '',
    subtitle: extractTextFromRichText(skillSection.Sub),
    skills: skillSection.Skills?.map((skill) => ({
      id: skill.id,
      name: skill.Name,
      icon: {
        url: skill.Icon?.url || '',
        alt: skill.Icon?.alternativeText || ''
      }
    })) || []
  };
}

// Transform projects section data
function transformProjectSection(projectSection: StrapiProjectSection | null): TransformedProjectData | null {
  if (!projectSection) return null;
  
  const rawProjects = projectSection.Projects?.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    image: {
      url: project.image?.url || '',
      alt: project.image?.alternativeText || ''
    },
    links: project.links || []
  })) || [];

  // Filter out invalid projects
  const validProjects = filterValidProjects(rawProjects);
  
  return {
    title: projectSection.Title || '',
    description: extractTextFromRichText(projectSection.Description),
    projects: validProjects as any[]
  };
}

// Transform certificates section data
function transformCertificateSection(certificateSection: StrapiCertificateSection | null): TransformedCertificateData | null {
  if (!certificateSection) return null;
  
  const rawCertificates = certificateSection.Certificates?.map((cert) => ({
    id: cert.id,
    name: cert.Name,
    issuer: cert.Issuer,
    dateReceived: cert.dateReceived,
    expirationDate: cert.expirationDate,
    image: cert.image ? {
      url: cert.image.url,
      alt: cert.image.alternativeText || ''
    } : null
  })) || [];

  // Filter out invalid certificates
  const validCertificates = filterValidCertificates(rawCertificates);
  
  return {
    title: certificateSection.Title || '',
    description: extractTextFromRichText(certificateSection.Description),
    certificates: validCertificates as any[]
  };
}

// Transform social section data
function transformSocialSection(socialSection: StrapiSocialSection): TransformedSocialData {
  if (!socialSection) return { socials: [] };
  
  return {
    socials: socialSection.Socials?.map((social) => ({
      id: social.id,
      name: social.Name,
      link: social.Link,
      icon: {
        name: social.Icon?.name || '',
        url: social.Icon?.url || '',
        alt: social.Icon?.alternativeText || ''
      },
      order: social.Order || 0
    })).sort((a, b) => a.order - b.order) || []
  };
}

// Transform navbar section data
function transformNavBarSection(navBarSection: StrapiNavBarSection | null): TransformedNavBarData | null {
  if (!navBarSection) return null;
  
  return {
    logo: navBarSection.Logo ? {
      url: navBarSection.Logo.url,
      alt: navBarSection.Logo.alternativeText,
      width: navBarSection.Logo.width,
      height: navBarSection.Logo.height
    } : null,
    links: navBarSection.Links?.map((link) => ({
      id: link.id,
      name: link.Name,
      target: link.Target || '',
      order: link.Order
    })).sort((a, b) => a.order - b.order) || [],
    ctaButton: navBarSection.CTAButton ? {
      id: navBarSection.CTAButton.id,
      text: navBarSection.CTAButton.text,
      url: navBarSection.CTAButton.url,
      order: navBarSection.CTAButton.order
    } : null
  };
}

// Main transformation function
export function transformStrapiData(data: StrapiHomePageData): TransformedPageData {
  const hero = transformHeroSection(data.Hero_Section);
  const skills = transformSkillSection(data.Skill_Section);
  const projects = transformProjectSection(data.Project_Section);
  const certificates = transformCertificateSection(data.Certificate_Section);
  const socials = transformSocialSection(data.Social_Section);

  // Create section order array based on available sections
  const sectionOrder = [
    { type: 'hero' as const, order: data.Hero_Section?.Order || 0 },
    ...(skills ? [{ type: 'skills' as const, order: data.Skill_Section?.Order || 1 }] : []),
    ...(projects ? [{ type: 'projects' as const, order: data.Project_Section?.Order || 2 }] : []),
    ...(certificates ? [{ type: 'certificates' as const, order: data.Certificate_Section?.Order || 3 }] : [])
  ].sort((a, b) => a.order - b.order);

  return {
    hero,
    skills,
    projects,
    certificates,
    socials,
    sectionOrder
  };
}

// Helper function to get the full URL for Strapi assets
export function getStrapiAssetUrl(url: string): string {
  if (!url) return '';
  
  // If it's already a full URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // If it's a relative URL, prepend the Strapi base URL
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  return `${strapiBaseUrl}${url}`;
}

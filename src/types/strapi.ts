// Strapi API response types
export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
    small?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
    medium?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
    large?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiRichText {
  type: string;
  children: Array<{
    type: string;
    text: string;
  }>;
}

export interface StrapiSkill {
  id: number;
  Name: string;
  Icon: {
    id: number;
    Name: string;
    SVG: StrapiImage;
  };
}

export interface StrapiSocial {
  Order: number;
  id: number;
  Name: string;
  Link: string;
  Icon: {
    id: number;
    Name: string;
    SVG: StrapiImage;
  };
}

export interface StrapiHeroSection {
  Order: number;
  id: number;
  Name: string;
  Phrase: string;
  Keyword: {
    technologies: string[];
    creative: string[];
  };
  Personal_Bio: StrapiRichText[];
  Professional_Bio: StrapiRichText[];
  Personal_Bio_Title: string;
  Professional_Bio_Title: string;
  Background: StrapiImage;
}

export interface StrapiSkillSection {
  Order: number;
  id: number;
  Title: string;
  Sub: StrapiRichText[];
  Skills: StrapiSkill[];
}

export interface StrapiProjectSection {
  Order: number;
  id: number;
  Title: string;
  Description: StrapiRichText[];
  Projects: Array<{
    id: number;
    name: string;
    description: string;
    image: StrapiImage;
    links: Array<{
      type: "demo" | "repo" | "docs";
      url: string;
      label: string;
    }>;
  }>;
}

export interface StrapiCertificateSection {
  Order: number;
  id: number;
  Title: string;
  Description: StrapiRichText[];
  Certificates: Array<{
    id: number;
    name: string;
    issuer: string;
    dateReceived: string;
    expirationDate?: string;
    image: StrapiImage;
  }>;
}

export interface StrapiSocialSection {
  id: number;
  Socials: StrapiSocial[];
}

export interface StrapiHomePageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Hero_Section: StrapiHeroSection;
  Skill_Section: StrapiSkillSection | null;
  Project_Section: StrapiProjectSection | null;
  Certificate_Section: StrapiCertificateSection | null;
  Social_Section: StrapiSocialSection;
}

export interface StrapiHomePageResponse {
  data: StrapiHomePageData;
  meta: Record<string, unknown>;
}

// Transformed data types for components
export interface TransformedHeroData {
  name: string;
  phrase: string;
  keywords: {
    technologies: string[];
    creative: string[];
  };
  bio: {
    about: {
      title: string;
      content: string;
    };
    work: {
      title: string;
      content: string;
    };
  };
  background: StrapiImage;
}

export interface TransformedSkillData {
  title: string;
  subtitle: string;
  skills: Array<{
    id: number;
    name: string;
    icon: {
      name: string;
      url: string;
      alt: string;
    };
  }>;
}

export interface TransformedProjectData {
  title: string;
  description: string;
  projects: Array<{
    id: number;
    name: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    links: Array<{
      type: "demo" | "repo" | "docs";
      url: string;
      label: string;
    }>;
  }>;
}

export interface TransformedCertificateData {
  title: string;
  description: string;
  certificates: Array<{
    id: number;
    name: string;
    issuer: string;
    dateReceived: string;
    expirationDate?: string;
    image: {
      url: string;
      alt: string;
    };
  }>;
}

export interface TransformedSocialData {
  socials: Array<{
    id: number;
    name: string;
    link: string;
    icon: {
      name: string;
      url: string;
      alt: string;
    };
    order: number;
  }>;
}

export interface TransformedPageData {
  hero: TransformedHeroData;
  skills: TransformedSkillData | null;
  projects: TransformedProjectData | null;
  certificates: TransformedCertificateData | null;
  socials: TransformedSocialData;
  sectionOrder: Array<{
    type: 'hero' | 'skills' | 'projects' | 'certificates';
    order: number;
  }>;
}

export interface SocialIcon {
  id: number;
  Name: string;
  SVG: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string;
    caption: string | null;
    width: number;
    height: number;
    formats: Record<string, unknown> | null;
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
  };
}

export interface Social {
  Order: number;
  id: number;
  Name: string;
  Link: string;
  Icon: SocialIcon;
}

export interface SocialLinkProps {
  social: Social;
  variant: 'mobile' | 'desktop';
  index?: number;
}

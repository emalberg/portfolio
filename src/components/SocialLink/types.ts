export interface Social {
  Order: number;
  id: number;
  Name: string;
  Link: string;
  Icon: {
    id: number;
    name: string;
    alternativeText: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface SocialLinkProps {
  social: Social;
  variant: 'mobile' | 'desktop';
  index?: number;
}

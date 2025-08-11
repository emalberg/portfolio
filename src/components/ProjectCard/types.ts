export interface ProjectLink {
  type: 'demo' | 'repo' | 'docs';
  url: string;
  label: string;
}

export interface ProjectData {
  id: string | number;
  name: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  links: ProjectLink[];
}

export interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export interface CardFaceProps {
  project: ProjectData;
  isFlipped: boolean;
  onFlip: () => void;
}

export interface ProjectActionButtonProps {
  link: ProjectLink;
  index: number;
}

import type { AnimationConfig } from '@/components/sections/ProjectSection/types';

export interface SectionHeaderProps {
  title: string;
  animations: AnimationConfig;
  description?: string;
}

export interface SectionElementProps {
  animations: AnimationConfig;
}

export interface SectionTitleProps extends SectionElementProps {
  title: string;
}

export interface SectionDescriptionProps extends SectionElementProps {
  description?: string;
}

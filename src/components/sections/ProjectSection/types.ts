import type { ProjectData } from '@/components/ProjectCard/types';

export interface ProjectSectionData {
  Order: number;
  id: number;
  Title: string;
  Description?: string;
  Projects: ProjectData[];
}

export interface ProjectSectionProps {
  data: ProjectSectionData;
}

export interface AnimationConfig {
  container: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
        staggerChildren: number;
      };
    };
  };
  item: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number };
    };
  };
}

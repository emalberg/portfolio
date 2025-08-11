import type { ProjectData } from '@/components/ProjectCard/types';
import type { AnimationConfig } from '@/components/sections/ProjectSection/types';

export interface ProjectGridProps {
  projects: ProjectData[];
  currentPage: number;
  animations: AnimationConfig;
}

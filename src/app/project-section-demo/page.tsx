import ProjectSection from '@/components/sections/ProjectSection';
import { SAMPLE_PROJECT_DATA } from '@/constants/constants';
import type { ProjectSectionData } from '@/components/sections/ProjectSection/types';

export default function ProjectSectionDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProjectSection data={SAMPLE_PROJECT_DATA.PROJECT_SECTION} />
    </div>
  );
}

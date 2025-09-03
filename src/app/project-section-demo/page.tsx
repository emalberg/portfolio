import ProjectSection from '@/components/sections/ProjectSection';
import { SAMPLE_PROJECT_DATA } from '@/constants/constants';

export default function ProjectSectionDemoPage() {
  const { PROJECT_SECTION } = SAMPLE_PROJECT_DATA;
  
  return (
    <div className="min-h-screen bg-background">
      <ProjectSection 
        title={PROJECT_SECTION.Title}
        description={PROJECT_SECTION.Description}
        projects={PROJECT_SECTION.Projects.map(project => ({
          id: project.id,
          name: project.name,
          description: project.description,
          image: {
            url: project.image.url,
            alt: project.image.alt
          },
          links: project.links
        }))}
      />
    </div>
  );
}

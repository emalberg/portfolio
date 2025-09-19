"use client"
import { useState, useEffect } from 'react';
import { motion } from "motion/react"
import { PROJECT_SECTION_CONSTANTS, COMPONENT_IDS } from '@/constants/constants';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import DecorativeElements from '@/components/DecorativeElements/DecorativeElements';
import PaginationControls from '@/components/PaginationControls';
import {
  createProjectSectionAnimation,
  getProjectContainerClasses,
  getProjectInnerContainerClasses,
  validateProjectSectionData,
  filterValidProjects,
} from '@/utils';
import { ProjectCardSkeleton } from '@/components/ui/loading-skeleton';
import { ProjectsEmptyState } from '@/components/ui/empty-state';

// Define project type
type ProjectData = {
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
};

export default function ProjectSection({ 
  title, 
  description, 
  projects,
  floatingStyles,
  isLoading = false
}: { 
  title: string; 
  description: string; 
  projects: ProjectData[];
  floatingStyles?: string;
  isLoading?: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const animations = createProjectSectionAnimation();

  // Transform and filter the new data format to the expected format
  const transformedProjects = projects.map(project => ({
    id: project.id,
    name: project.name,
    description: project.description,
    image: {
      url: project.image.url,
      alt: project.image.alt
    },
    links: project.links
  }));

  // Filter out invalid projects
  const validProjects = filterValidProjects(transformedProjects);

  // Create the data object expected by the existing components
  const sectionData = {
    Title: title,
    Description: description,
    Projects: validProjects
  };

  // Reset to first page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [projects]);

  // Handle skeleton to empty state transition
  useEffect(() => {
    if (!isLoading && validProjects.length === 0) {
      // Show skeleton for a brief moment, then show empty state
      const timer = setTimeout(() => {
        setShowEmptyState(true);
      }, 2000); // 2 second delay to show skeleton first

      return () => clearTimeout(timer);
    } else {
      setShowEmptyState(false);
    }
  }, [isLoading, validProjects.length]);

  // If no valid projects and showEmptyState is true, show empty state message
  if (!isLoading && validProjects.length === 0 && showEmptyState) {
    return (
      <section 
        id={COMPONENT_IDS.PROJECT_SECTION}
        className={getProjectContainerClasses(floatingStyles)}
      >
        <div className={getProjectInnerContainerClasses()}>
          <SectionHeader 
            title={sectionData.Title} 
            animations={animations}
            description={sectionData.Description}
          />
          <div className="max-w-2xl mx-auto mt-8 md:mt-12">
            <ProjectsEmptyState />
          </div>
        </div>
      </section>
    );
  }

  // If loading or no valid projects (but not showing empty state yet), show skeleton loading
  if (isLoading || (validProjects.length === 0 && !showEmptyState)) {
    return (
      <section 
        id={COMPONENT_IDS.PROJECT_SECTION}
        className={getProjectContainerClasses(floatingStyles)}
      >
        <div className={getProjectInnerContainerClasses()}>
          <SectionHeader 
            title={sectionData.Title} 
            animations={animations}
            description={sectionData.Description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 md:mt-12">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectCardSkeleton key={`skeleton-${index}`} delay={index * 150} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Validate project section data
  if (!validateProjectSectionData(sectionData)) {
    console.warn('ProjectSection: Invalid project section data provided', sectionData);
    return null;
  }

  // Pagination logic: 9 projects per page (3x3 grid)
  const projectsPerPage = 9;
  const totalPages = Math.ceil(sectionData.Projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = sectionData.Projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of section when page changes
    const section = document.getElementById(COMPONENT_IDS.PROJECT_SECTION);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Force a small delay to ensure state update before scroll
    setTimeout(() => {
      window.scrollTo({ top: section?.offsetTop || 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section 
      id={COMPONENT_IDS.PROJECT_SECTION}
      className={getProjectContainerClasses(floatingStyles)}
    >
      <div className={getProjectInnerContainerClasses()}>
        <SectionHeader 
          title={sectionData.Title} 
          animations={animations}
          description={sectionData.Description}
        />

        <motion.div
          key={`page-${currentPage}`}
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: false, 
            amount: PROJECT_SECTION_CONSTANTS.ANIMATION.GRID_VIEWPORT_AMOUNT 
          }}
        >
          {/* Grid layout with reduced spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 md:mt-12">
            {isLoading ? (
              // Show skeleton cards while loading
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  variants={animations.item}
                  className="w-full h-full"
                >
                  <ProjectCardSkeleton delay={index * 150} />
                </motion.div>
              ))
            ) : (
              currentProjects.map((project) => (
                <motion.div
                  key={`${project.id as number}-${currentPage}`}
                  variants={animations.item}
                  className="w-full h-full"
                >
                  <ProjectCard
                    project={{
                      id: project.id as number,
                      name: project.name as string,
                      description: project.description as string,
                      image: {
                        url: (project.image as { url: string; alt: string }).url,
                        alt: (project.image as { url: string; alt: string }).alt
                      },
                      links: project.links as Array<{
                        type: "demo" | "repo" | "docs";
                        url: string;
                        label: string;
                      }>
                    }}
                    className="w-full h-full"
                  />
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Pagination Controls */}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <DecorativeElements />
      </div>
    </section>
  );
}

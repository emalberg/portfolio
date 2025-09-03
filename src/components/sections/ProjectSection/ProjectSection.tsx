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
  getProjectGridContainerClasses,
  validateProjectSectionData,
} from '@/utils';
import type { ProjectSectionProps } from './types';

export default function ProjectSection({ 
  title, 
  description, 
  projects 
}: { 
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
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const animations = createProjectSectionAnimation();

  // Transform the new data format to the expected format
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

  // Create the data object expected by the existing components
  const sectionData = {
    Title: title,
    Description: description,
    Projects: transformedProjects
  };

  // Reset to first page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [projects]);

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
      className={getProjectContainerClasses()}
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
            {currentProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${currentPage}`}
                variants={animations.item}
                className="w-full h-full"
              >
                <ProjectCard
                  project={project}
                  className="w-full h-full"
                />
              </motion.div>
            ))}
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

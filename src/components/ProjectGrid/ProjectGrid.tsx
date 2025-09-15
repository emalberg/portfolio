'use client';

import { motion } from "motion/react";
import { PROJECT_SECTION_CONSTANTS } from '@/constants/constants';
import ProjectCard from '@/components/ProjectCard';
import type { ProjectGridProps } from './types';

export default function ProjectGrid({ 
  projects, 
  currentPage, 
  animations 
}: ProjectGridProps) {
  return (
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 md:mt-12">
        {projects.map((project) => (
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
  );
}

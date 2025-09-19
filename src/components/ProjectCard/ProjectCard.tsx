'use client';

import { useState } from 'react';
import { motion } from "motion/react";
import { COMPONENT_IDS } from '@/constants/constants';
import { CardFront, CardBack } from '../CardFace/CardFace';
import { createHoverVariants, validateProjectData } from '@/utils';
import type { ProjectCardProps } from './types';
import { ProjectCardSkeleton } from '@/components/ui/loading-skeleton';

export default function ProjectCard({ project, className = '', isLoading = false }: ProjectCardProps & { isLoading?: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const hoverVariants = createHoverVariants();

  // Show skeleton if loading
  if (isLoading) {
    return <ProjectCardSkeleton delay={0} />;
  }

  // Validate project data
  if (!validateProjectData(project)) {
    console.warn('ProjectCard: Invalid project data provided', project);
    return <ProjectCardSkeleton delay={0} />;
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  };

  return (
    <motion.div
      id={`${COMPONENT_IDS.PROJECT_CARD}-${project.id}`}
      className={`w-full h-full ${className}`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      role="article"
      aria-label={`Project card for ${project.name}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-describedby={`project-${project.id}-description`}
    >
      {/* Simple flip with CSS transition */}
      <div
        className="w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {!isFlipped ? (
          <CardFront
            project={project}
            onFlip={handleFlip}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              transform: 'rotateY(180deg)' // Counter-rotate to make text normal
            }}
          >
            <CardBack
              project={project}
              onFlip={handleFlip}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

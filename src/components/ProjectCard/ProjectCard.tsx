'use client';

import { useState } from 'react';
import { motion } from "motion/react";
import { COMPONENT_IDS } from '@/constants/constants';
import { CardFront, CardBack } from '../CardFace/CardFace';
import { createHoverVariants, validateProjectData } from '@/utils';
import type { ProjectCardProps } from './types';

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const hoverVariants = createHoverVariants();

  // Validate project data
  if (!validateProjectData(project)) {
    console.warn('ProjectCard: Invalid project data provided', project);
    return null;
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
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
            isFlipped={isFlipped}
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
              isFlipped={isFlipped}
              onFlip={handleFlip}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

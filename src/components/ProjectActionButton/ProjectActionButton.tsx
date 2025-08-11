'use client';

import { motion } from 'framer-motion';
import { PROJECT_CARD_CONSTANTS } from '@/constants/constants';
import { Button } from '@/components/ui/button';
import { getLinkIcon, getLinkButtonVariant, createButtonStaggerVariants } from '@/utils';
import type { ProjectActionButtonProps } from '../ProjectCard/types';

export default function ProjectActionButton({ link, index }: ProjectActionButtonProps) {
  const Icon = getLinkIcon(link.type);
  const buttonVariant = getLinkButtonVariant(link.type);
  const staggerVariants = createButtonStaggerVariants();

  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{
        scale: PROJECT_CARD_CONSTANTS.ANIMATION.BUTTON_HOVER_SCALE,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: PROJECT_CARD_CONSTANTS.ANIMATION.BUTTON_TAP_SCALE,
        transition: { duration: 0.1 },
      }}
    >
      <Button
        asChild
        variant={buttonVariant}
        size="default"
        className="w-full"
        aria-label={`Open ${link.label}`}
      >
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.url}
        >
          <Icon className="w-4 h-4" />
          {link.label}
        </a>
      </Button>
    </motion.div>
  );
}

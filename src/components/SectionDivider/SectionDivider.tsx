import React from 'react';
import { motion } from 'motion/react';
import type { SectionElementProps } from '../SectionHeader/types';

export function SectionDivider({ animations }: SectionElementProps) {
  return (
    <motion.div
      className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"
      variants={animations.item}
    />
  );
}

import React from 'react';
import { motion } from 'motion/react';
import type { SectionTitleProps } from '../SectionHeader/types';

export function SectionTitle({ title, animations }: SectionTitleProps) {
  return (
    <motion.h2
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
      variants={animations.item}
    >
      {title}
    </motion.h2>
  );
}

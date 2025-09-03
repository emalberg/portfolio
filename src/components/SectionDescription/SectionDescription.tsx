import React from 'react';
import { motion } from 'motion/react';
import type { SectionDescriptionProps } from '../SectionHeader/types';

export function SectionDescription({ description, animations }: SectionDescriptionProps) {
  return (
    <motion.p
      className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto"
      variants={animations.item}
    >
      {description || "Technologies and tools I use to bring ideas to life"}
    </motion.p>
  );
}

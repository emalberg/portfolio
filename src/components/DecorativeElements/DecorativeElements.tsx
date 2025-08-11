'use client';

import { motion } from 'framer-motion';
import { DECORATIVE_CONSTANTS } from '@/constants/constants';
import { DecorativeCircle } from '@/components/DecorativeCircle/DecorativeCircle';

export default function DecorativeElements() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: DECORATIVE_CONSTANTS.ANIMATION.OPACITY_FINAL }}
      viewport={{ once: true }}
      transition={{ duration: DECORATIVE_CONSTANTS.ANIMATION.FADE_IN_DURATION }}
    >
      <DecorativeCircle 
        position="top-right"
        className="bg-primary/5"
      />
      <DecorativeCircle 
        position="bottom-left"
        className="bg-accent/5"
      />
    </motion.div>
  );
}

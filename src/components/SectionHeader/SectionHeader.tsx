'use client';

import { motion } from "motion/react";
import { SKILLS_SECTION_CONSTANTS } from '@/constants/constants';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { SectionDivider } from '@/components/SectionDivider/SectionDivider';
import { SectionDescription } from '@/components/SectionDescription/SectionDescription';
import type { SectionHeaderProps } from './types';

export default function SectionHeader({ title, animations, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-12 md:mb-16"
      variants={animations.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: SKILLS_SECTION_CONSTANTS.ANIMATION.VIEWPORT_AMOUNT }}
    >
      <SectionTitle title={title} animations={animations} />
      <SectionDivider animations={animations} />
      <SectionDescription description={description} animations={animations} />
    </motion.div>
  );
}

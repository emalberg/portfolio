'use client';

import { motion } from 'framer-motion';
import { useSkillMouseTracking } from '@/hooks';
import { SkillIcon } from '@/components/SkillIcon/SkillIcon';
import { SkillName } from '@/components/SkillName/SkillName';
import type { SkillProps } from './types';

export default function Skill({ name, iconUrl, iconAlt }: SkillProps) {
  const { 
    mouseX, 
    mouseY, 
    springRotateX, 
    springRotateY, 
    handleMouseMove, 
    handleMouseLeave 
  } = useSkillMouseTracking();

  return (
    <motion.div
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <SkillIcon
          iconUrl={iconUrl}
          iconAlt={iconAlt}
          rotateX={springRotateX}
          rotateY={springRotateY}
        />
        <SkillName name={name} />
      </motion.div>
    </motion.div>
  );
}

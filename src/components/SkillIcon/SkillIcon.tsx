import React from 'react';
import { motion, useMotionValue } from 'motion/react';
import Image from 'next/image';
import { SKILL_CONSTANTS } from '@/constants/constants';
import type { SkillIconProps } from '../Skill/types';

export function SkillIcon({ iconUrl, iconAlt, rotateX, rotateY }: SkillIconProps) {
  return (
    <div className="relative z-10 flex items-center justify-center w-full h-full p-2">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ duration: SKILL_CONSTANTS.ANIMATION.TRANSITION_DURATION }}
      >
        <Image
          src={iconUrl}
          alt={iconAlt}
          width={48}
          height={48}
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
        />
      </motion.div>
    </div>
  );
}

export interface SkillProps {
  name: string;
  iconUrl: string;
  iconAlt: string;
}

import type { MotionValue } from 'framer-motion';

export interface SkillIconProps {
  iconUrl: string;
  iconAlt: string;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

export interface SkillNameProps {
  name: string;
}

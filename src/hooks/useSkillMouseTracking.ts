import { useMotionValue, useSpring, useTransform } from 'motion/react';
import { SKILL_CONSTANTS } from '@/constants/constants';

export function useSkillMouseTracking() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [25, -25]);
  const rotateY = useTransform(mouseX, [-100, 100], [-25, 25]);

  const springConfig = { 
    damping: SKILL_CONSTANTS.ANIMATION.SPRING_DAMPING, 
    stiffness: SKILL_CONSTANTS.ANIMATION.SPRING_STIFFNESS 
  };
  
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    
    const maxDistance = Math.min(rect.width, rect.height) / 2;
    const normalizedX = (deltaX / maxDistance) * 100;
    const normalizedY = (deltaY / maxDistance) * 100;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return {
    mouseX,
    mouseY,
    springRotateX,
    springRotateY,
    handleMouseMove,
    handleMouseLeave
  };
}

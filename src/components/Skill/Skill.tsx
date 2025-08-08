'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

interface SkillProps {
  name: string;
  iconUrl: string;
  iconAlt: string;
}

export default function Skill({ name, iconUrl, iconAlt }: SkillProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [25, -25]);
  const rotateY = useTransform(mouseX, [-100, 100], [-25, 25]);

  const springConfig = { damping: 15, stiffness: 400 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center for more responsive movement
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    
    // Normalize the movement for smoother response
    const maxDistance = Math.min(rect.width, rect.height) / 2;
    const normalizedX = (deltaX / maxDistance) * 100;
    const normalizedY = (deltaY / maxDistance) * 100;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
                    <motion.div
         className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col items-center justify-center"
         style={{
           transformStyle: 'preserve-3d',
         }}
       >
         {/* Icon container */}
         <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
           <motion.img
             src={iconUrl}
             alt={iconAlt}
             className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
             style={{
               rotateX: springRotateX,
               rotateY: springRotateY,
               transformStyle: 'preserve-3d',
             }}
             transition={{ duration: 0.2 }}
           />
         </div>

         {/* Skill name - always visible below */}
         <div className="absolute bottom-0 left-0 right-0 text-center">
           <span className="text-xs sm:text-sm font-medium text-foreground">
             {name}
           </span>
         </div>
       </motion.div>
    </motion.div>
  );
}

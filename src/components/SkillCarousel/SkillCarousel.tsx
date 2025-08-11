'use client';

import { motion } from 'framer-motion';
import Skill from '@/components/Skill';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SKILLS_SECTION_CONSTANTS } from '@/constants/constants';
import {
  getSkillsContainerClassName,
  getCarouselContentHeight,
  getSkillItemClasses,
  getSkillsArrowClasses,
} from '@/utils';
import type { SkillData, AnimationConfig, CarouselConfig } from '../sections/SkillsSection/types';

interface SkillCarouselProps {
  skills: SkillData[];
  isSmallScreen: boolean;
  animations: AnimationConfig;
  carouselConfig: CarouselConfig;
}

export default function SkillCarousel({ 
  skills, 
  isSmallScreen, 
  animations, 
  carouselConfig 
}: SkillCarouselProps) {
  return (
    <motion.div
      variants={animations.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: SKILLS_SECTION_CONSTANTS.ANIMATION.CAROUSEL_VIEWPORT_AMOUNT 
      }}
      className="flex justify-center"
    >
              <div className={getSkillsContainerClassName(isSmallScreen)}>
        <Carousel 
          orientation={carouselConfig.orientation}
          opts={carouselConfig.opts}
          className="w-full"
        >
          <CarouselContent className={getCarouselContentHeight(isSmallScreen)}>
            {skills.map((skill) => (
              <CarouselItem 
                key={skill.id}
                className={isSmallScreen ? "basis-full" : "basis-1/3"}
              >
                <div className={getSkillItemClasses(isSmallScreen)}>
                  <motion.div
                    variants={animations.item}
                    className="flex justify-center"
                  >
                    <Skill
                      name={skill.Name}
                      iconUrl={skill.Icon.SVG.url}
                      iconAlt={skill.Icon.SVG.alternativeText}
                    />
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={getSkillsArrowClasses(isSmallScreen, 'prev')} />
          <CarouselNext className={getSkillsArrowClasses(isSmallScreen, 'next')} />
        </Carousel>
      </div>
    </motion.div>
  );
}

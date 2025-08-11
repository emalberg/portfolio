'use client';

import { SKILLS_SECTION_CONSTANTS, COMPONENT_IDS } from '@/constants/constants';
import { 
  createSkillsSectionAnimation, 
  createCarouselConfig 
} from '@/utils';
import { useSmallScreenDetection } from '@/hooks';
import SectionHeader from '../../SectionHeader/SectionHeader';
import SkillCarousel from '../../SkillCarousel/SkillCarousel';
import DecorativeElements from '../../DecorativeElements/DecorativeElements';
import type { SkillsSectionProps } from './types';

export default function SkillsSection({ data }: SkillsSectionProps) {
  const isSmallScreen = useSmallScreenDetection();
  const animations = createSkillsSectionAnimation();
  const carouselConfig = createCarouselConfig(isSmallScreen);

  return (
    <section 
      id={COMPONENT_IDS.SKILLS_SECTION}
      className="py-16 md:py-24 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={data.Title} 
          animations={animations} 
        />

        <SkillCarousel
          skills={data.Skills}
          isSmallScreen={isSmallScreen}
          animations={animations}
          carouselConfig={carouselConfig}
        />

        <DecorativeElements />
      </div>
    </section>
  );
}

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

export default function SkillsSection({ 
  title, 
  subtitle, 
  skills 
}: { 
  title: string; 
  subtitle: string; 
  skills: Array<{
    id: number;
    name: string;
    icon: {
      name: string;
      url: string;
      alt: string;
    };
  }>;
}) {
  const isSmallScreen = useSmallScreenDetection();
  const animations = createSkillsSectionAnimation();
  const carouselConfig = createCarouselConfig(isSmallScreen);

  // Transform the new data format to the expected format
  const transformedSkills = skills.map(skill => ({
    id: skill.id,
    Name: skill.name,
    Icon: {
      Name: skill.icon.name,
      SVG: {
        url: skill.icon.url,
        alternativeText: skill.icon.alt
      }
    }
  }));

  // Create the data object expected by the existing components
  const sectionData = {
    Title: title,
    Sub: [{ type: 'paragraph', children: [{ type: 'text', text: subtitle }] }],
    Skills: transformedSkills
  };

  return (
    <section 
      id={COMPONENT_IDS.SKILLS_SECTION}
      className="py-16 md:py-24 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={sectionData.Title} 
          animations={animations} 
        />

        <SkillCarousel
          skills={sectionData.Skills}
          isSmallScreen={isSmallScreen}
          animations={animations}
          carouselConfig={carouselConfig}
        />

        <DecorativeElements />
      </div>
    </section>
  );
}

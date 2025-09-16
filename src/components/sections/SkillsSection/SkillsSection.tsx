'use client';

import { SKILLS_SECTION_CONSTANTS, COMPONENT_IDS } from '@/constants/constants';
import { 
  createSkillsSectionAnimation, 
  createCarouselConfig,
  getSkillsContainerClasses
} from '@/utils';
import { useSmallScreenDetection } from '@/hooks';
import SectionHeader from '../../SectionHeader/SectionHeader';
import SkillCarousel from '../../SkillCarousel/SkillCarousel';
import DecorativeElements from '../../DecorativeElements/DecorativeElements';
import type { SkillsSectionProps } from './types';
import { SkillCardSkeleton } from '@/components/ui/loading-skeleton';

export default function SkillsSection({ 
  title, 
  subtitle, 
  skills,
  floatingStyles,
  isLoading = false
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
  floatingStyles?: string;
  isLoading?: boolean;
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
        url: process.env.NEXT_PUBLIC_STRAPI_URL + skill.icon.url,
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
      className={getSkillsContainerClasses(floatingStyles)}
    >
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={sectionData.Title} 
          description={subtitle}
          animations={animations} 
        />

        {isLoading ? (
          // Show skeleton skills while loading
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkillCardSkeleton key={`skeleton-${index}`} delay={index * 100} />
            ))}
          </div>
        ) : (
          <SkillCarousel
            skills={sectionData.Skills}
            isSmallScreen={isSmallScreen}
            animations={animations}
            carouselConfig={carouselConfig}
          />
        )}

        <DecorativeElements />
      </div>
    </section>
  );
}

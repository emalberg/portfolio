import SkillsSection from '@/components/sections/SkillsSection';
import { SAMPLE_SKILLS_DATA } from '@/constants/constants';

export default function SkillsDemoPage() {
  const { SKILLS_SECTION } = SAMPLE_SKILLS_DATA;
  
  return (
    <div className="min-h-screen bg-background">
      <SkillsSection 
        title={SKILLS_SECTION.Title}
        subtitle="Technologies and tools I use to bring ideas to life"
        skills={SKILLS_SECTION.Skills.map(skill => ({
          id: skill.id,
          name: skill.Name,
          icon: {
            name: skill.Icon.Name,
            url: skill.Icon.SVG.url,
            alt: skill.Icon.SVG.alternativeText
          }
        }))}
      />
    </div>
  );
}

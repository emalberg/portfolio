import SkillsSection from '@/components/sections/SkillsSection';
import { SAMPLE_SKILLS_DATA } from '@/constants/constants';

export default function SkillsDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SkillsSection data={SAMPLE_SKILLS_DATA.SKILLS_SECTION} />
    </div>
  );
}

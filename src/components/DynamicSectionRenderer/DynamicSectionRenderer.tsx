import { Suspense } from 'react';
import { TransformedPageData } from '@/types/strapi';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection/SkillsSection';
import ProjectSection from '@/components/sections/ProjectSection/ProjectSection';
import CertificateSection from '@/components/sections/CertificateSection/CertificateSection';
import { SocialLink } from '@/components/SocialLink';
import { 
  HeroSkeleton, 
  SkillsSkeleton, 
  ProjectsSkeleton, 
  CertificatesSkeleton 
} from '@/components/ui/loading-skeleton';

interface DynamicSectionRendererProps {
  data: TransformedPageData;
}

// Section wrapper with CSS animations
function SectionWrapper({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const delayClass = delay > 0 ? `animate-delay-${Math.round(delay * 1000)}` : '';
  
  return (
    <div 
      className={`opacity-0 animate-fade-in-up ${delayClass}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}

// Hero section with loading fallback
function HeroSectionWithFallback({ data }: { data: TransformedPageData['hero'] }) {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <HeroSection
        name={data.name}
        phrase={data.phrase}
        keywords={data.keywords}
        bio1Title={data.bio.about.title}
        bio1Content={data.bio.about.content}
        bio2Title={data.bio.work.title}
        bio2Content={data.bio.work.content}
        backgroundImage={process.env.NEXT_PUBLIC_STRAPI_URL + data.background.url}
        socials={[]} // We'll handle socials separately
      />
    </Suspense>
  );
}

// Skills section with loading fallback
function SkillsSectionWithFallback({ data }: { data: TransformedPageData['skills'] }) {
  if (!data) return null;
  
  return (
    <Suspense fallback={<SkillsSkeleton />}>
      <SectionWrapper delay={0.1}>
        <SkillsSection
          title={data.title}
          subtitle={data.subtitle}
          skills={data.skills}
        />
      </SectionWrapper>
    </Suspense>
  );
}

// Projects section with loading fallback
function ProjectsSectionWithFallback({ data }: { data: TransformedPageData['projects'] }) {
  if (!data) return null;
  
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <SectionWrapper delay={0.2}>
        <ProjectSection
          title={data.title}
          description={data.description}
          projects={data.projects}
        />
      </SectionWrapper>
    </Suspense>
  );
}

// Certificates section with loading fallback
function CertificatesSectionWithFallback({ data }: { data: TransformedPageData['certificates'] }) {
  if (!data) return null;
  
  return (
    <Suspense fallback={<CertificatesSkeleton />}>
      <SectionWrapper delay={0.3}>
        <CertificateSection
          title={data.title}
          description={data.description}
          certificates={data.certificates}
        />
      </SectionWrapper>
    </Suspense>
  );
}

// Main dynamic section renderer
export function DynamicSectionRenderer({ data }: DynamicSectionRendererProps) {
  const { hero, skills, projects, certificates, socials, sectionOrder } = data;

  // Create a map of section types to their render functions
  const sectionRenderers = {
    hero: () => <HeroSectionWithFallback data={hero} />,
    skills: () => <SkillsSectionWithFallback data={skills} />,
    projects: () => <ProjectsSectionWithFallback data={projects} />,
    certificates: () => <CertificatesSectionWithFallback data={certificates} />,
  };

  return (
    <main>
      {/* Render sections in order */}
      {sectionOrder.map((section) => {
        const renderer = sectionRenderers[section.type];
        return renderer ? (
          <div key={`${section.type}-${section.order}`}>
            {renderer()}
          </div>
        ) : null;
      })}

      {/* Desktop Social Links - Fixed left side */}
      <div className="hidden lg:block">
        {socials.socials.map((social, index) => (
          <SocialLink
            key={social.id}
            social={{
              id: social.id,
              Name: social.name,
              Link: social.link,
              Icon: {
                id: social.id,
                Name: social.icon.name,
                SVG: {
                  id: social.id,
                  documentId: '',
                  name: social.icon.name,
                  alternativeText: social.icon.alt,
                  caption: null,
                  width: 24,
                  height: 24,
                  formats: null,
                  hash: '',
                  ext: '.svg',
                  mime: 'image/svg+xml',
                  size: 0,
                  url: social.icon.url,
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '',
                  updatedAt: '',
                  publishedAt: ''
                }
              },
              Order: social.order
            }}
            variant="desktop"
            index={index}
          />
        ))}
      </div>
    </main>
  );
}

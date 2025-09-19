import { Suspense } from 'react';
import { getStrapiAssetUrl } from '@/utils/strapi-transformers';
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
  isFallback?: boolean;
  lastUpdated?: string;
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
function HeroSectionWithFallback({ data, socials }: { data: TransformedPageData['hero']; socials: TransformedPageData['socials'] }) {
  // Transform socials data to match the expected format
  const transformedSocials = socials.socials.map((social) => ({
    id: social.id,
    Name: social.name,
    Link: social.link,
    Icon: {
      id: social.id,
      name: social.icon.name,
      alternativeText: social.icon.alt,
      width: 24,
      height: 24,
      url: social.icon.url,
    },
    Order: social.order
  }));

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
        backgroundImage={getStrapiAssetUrl(data.background.url)}
        socials={transformedSocials}
      />
    </Suspense>
  );
}

// Skills section with loading fallback
function SkillsSectionWithFallback({ data, floatingStyles }: { data: TransformedPageData['skills']; floatingStyles?: string }) {
  if (!data) return null;
  
  return (
    <Suspense fallback={<SkillsSkeleton />}>
      <SectionWrapper delay={0.1}>
        <SkillsSection
          title={data.title}
          subtitle={data.subtitle}
          skills={data.skills}
          floatingStyles={floatingStyles}
        />
      </SectionWrapper>
    </Suspense>
  );
}

// Projects section with loading fallback
function ProjectsSectionWithFallback({ data, floatingStyles }: { data: TransformedPageData['projects']; floatingStyles?: string }) {
  if (!data) return null;
  
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <SectionWrapper delay={0.2}>
        <ProjectSection
          title={data.title}
          description={data.description}
          projects={data.projects}
          floatingStyles={floatingStyles}
        />
      </SectionWrapper>
    </Suspense>
  );
}

// Certificates section with loading fallback
function CertificatesSectionWithFallback({ data, floatingStyles }: { data: TransformedPageData['certificates']; floatingStyles?: string }) {
  if (!data) return null;
  
  return (
    <Suspense fallback={<CertificatesSkeleton />}>
      <SectionWrapper delay={0.3}>
        <CertificateSection
          title={data.title}
          description={data.description}
          certificates={data.certificates}
          floatingStyles={floatingStyles}
        />
      </SectionWrapper>
    </Suspense>
  );
}

// Main dynamic section renderer
export function DynamicSectionRenderer({ data, isFallback = false, lastUpdated }: DynamicSectionRendererProps) {
  const { hero, skills, projects, certificates, socials, sectionOrder } = data;

  // Create a map of section types to their render functions
  const sectionRenderers = {
    hero: () => <HeroSectionWithFallback data={hero} socials={socials} />,
    skills: (floatingStyles?: string) => <SkillsSectionWithFallback data={skills} floatingStyles={floatingStyles} />,
    projects: (floatingStyles?: string) => <ProjectsSectionWithFallback data={projects} floatingStyles={floatingStyles} />,
    certificates: (floatingStyles?: string) => <CertificatesSectionWithFallback data={certificates} floatingStyles={floatingStyles} />,
  };

  return (
    <main>
      {/* Fallback indicator */}
      {isFallback && (
        <div className="fixed top-20 right-4 z-50 bg-yellow-100 border border-yellow-400 text-yellow-800 px-3 py-2 rounded-md text-sm shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span>Using cached data - Strapi unavailable</span>
          </div>
          {lastUpdated && (
            <div className="text-xs mt-1 opacity-75">
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </div>
          )}
        </div>
      )}

      {/* Render sections in order */}
      {sectionOrder.map((section) => {
        const renderer = sectionRenderers[section.type];
        const floatingStyles = section.order === 2 ? 'border border-gray-400 rounded-xl shadow-lg shadow-gray-200 m-3' : undefined;
        return renderer ? (
          <div key={`${section.type}-${section.order}`}>
            {renderer(floatingStyles)}
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
                name: social.icon.name,
                alternativeText: social.icon.alt,
                width: 24,
                height: 24,
                url: social.icon.url,
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

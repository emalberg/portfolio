interface SkeletonProps {
  className?: string;
  animate?: boolean;
}

// Animated skeleton base component with CSS animations
export function Skeleton({ className = '', animate = true }: SkeletonProps) {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700 rounded';
  const animationClasses = animate ? 'animate-pulse' : '';
  
  return (
    <div className={`${baseClasses} ${animationClasses} ${className}`} />
  );
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Name */}
        <Skeleton className="h-16 w-96 mx-auto" />
        
        {/* Phrase */}
        <Skeleton className="h-8 w-64 mx-auto" />
        
        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-32" />
          ))}
        </div>
        
        {/* Bio tabs */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
}

// Skills section skeleton
export function SkillsSkeleton() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <Skeleton className="h-16 w-16 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Projects section skeleton
export function ProjectsSkeleton() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Certificates section skeleton
export function CertificatesSkeleton() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Page loading skeleton
export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <SkillsSkeleton />
      <ProjectsSkeleton />
      <CertificatesSkeleton />
    </div>
  );
}

// Error state skeleton
export function ErrorSkeleton() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="text-center space-y-6">
        <Skeleton className="h-16 w-16 mx-auto rounded-full" />
        <Skeleton className="h-8 w-80 mx-auto" />
        <Skeleton className="h-6 w-64 mx-auto" />
        <Skeleton className="h-12 w-32 mx-auto" />
      </div>
    </div>
  );
}

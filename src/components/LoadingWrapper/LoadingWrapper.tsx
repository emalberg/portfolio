/**
 * Enhanced loading wrapper components
 */

import React from 'react';
import { 
  Skeleton, 
  HeroSkeleton, 
  SkillsSkeleton, 
  ProjectsSkeleton, 
  CertificatesSkeleton 
} from '@/components/ui/loading-skeleton';

interface LoadingWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  skeleton: React.ReactNode;
  className?: string;
}

// Generic loading wrapper
export function LoadingWrapper({ children, isLoading, skeleton, className = '' }: LoadingWrapperProps) {
  if (isLoading) {
    return <div className={className}>{skeleton}</div>;
  }
  
  return <>{children}</>;
}

// Section-specific loading wrappers
export function HeroLoadingWrapper({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) {
  return (
    <LoadingWrapper 
      isLoading={isLoading} 
      skeleton={<HeroSkeleton />}
      className="min-h-screen"
    >
      {children}
    </LoadingWrapper>
  );
}

export function SkillsLoadingWrapper({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) {
  return (
    <LoadingWrapper 
      isLoading={isLoading} 
      skeleton={<SkillsSkeleton />}
      className="py-20 px-8"
    >
      {children}
    </LoadingWrapper>
  );
}

export function ProjectsLoadingWrapper({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) {
  return (
    <LoadingWrapper 
      isLoading={isLoading} 
      skeleton={<ProjectsSkeleton />}
      className="py-20 px-8"
    >
      {children}
    </LoadingWrapper>
  );
}

export function CertificatesLoadingWrapper({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) {
  return (
    <LoadingWrapper 
      isLoading={isLoading} 
      skeleton={<CertificatesSkeleton />}
      className="py-20 px-8"
    >
      {children}
    </LoadingWrapper>
  );
}

// Grid loading wrapper for dynamic content
interface GridLoadingWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  itemCount: number;
  skeletonComponent: React.ComponentType<{ delay: number }>;
  className?: string;
}

export function GridLoadingWrapper({ 
  children, 
  isLoading, 
  itemCount, 
  skeletonComponent: SkeletonComponent,
  className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
}: GridLoadingWrapperProps) {
  if (isLoading) {
    return (
      <div className={className}>
        {Array.from({ length: itemCount }).map((_, index) => (
          <SkeletonComponent key={index} delay={index * 100} />
        ))}
      </div>
    );
  }
  
  return <>{children}</>;
}

// Inline loading indicator
export function InlineLoadingIndicator({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };
  
  return (
    <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-muted border-t-primary`} />
  );
}

// Loading overlay for modals/dialogs
export function LoadingOverlay({ isLoading, children }: { isLoading: boolean; children: React.ReactNode }) {
  if (!isLoading) return <>{children}</>;
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="flex flex-col items-center space-y-4">
          <InlineLoadingIndicator size="lg" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      {children}
    </div>
  );
}
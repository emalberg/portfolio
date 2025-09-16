'use client';
import React from 'react';
import { motion } from 'motion/react';

interface SkeletonProps {
  className?: string;
  animate?: boolean;
  delay?: number;
}

// Enhanced animated skeleton base component with Framer Motion
export function Skeleton({ className = '', animate = true, delay = 0 }: SkeletonProps) {
  const baseClasses = 'bg-muted rounded-md';
  
  if (!animate) {
    return <div className={`${baseClasses} ${className}`} />;
  }
  
  return (
    <motion.div 
      className={`${baseClasses} ${className}`}
      initial={{ opacity: 0.3 }}
      animate={{ 
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay / 1000
      }}
    />
  );
}

// Shimmer effect skeleton using Framer Motion
export function ShimmerSkeleton({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div 
      className={`bg-gradient-to-r from-muted via-primary/20 to-muted rounded-md ${className}`}
      initial={{ 
        backgroundPosition: '-200% 0',
        opacity: 0.3 
      }}
      animate={{ 
        backgroundPosition: '200% 0',
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        backgroundPosition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          delay: delay / 1000
        },
        opacity: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay / 1000
        }
      }}
      style={{
        backgroundSize: '200% 100%'
      }}
    />
  );
}

// Enhanced Hero section skeleton with staggered Motion animations
export function HeroSkeleton() {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background via-background to-muted/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl w-full space-y-8">
        {/* Name with shimmer effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <ShimmerSkeleton className="h-16 w-96 mx-auto" delay={0} />
        </motion.div>
        
        {/* Phrase with delay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Skeleton className="h-8 w-64 mx-auto" delay={200} />
        </motion.div>
        
        {/* Keywords with staggered animation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4 + (i * 0.1),
                type: "spring",
                stiffness: 200
              }}
            >
              <Skeleton className="h-6 w-32" delay={400 + (i * 100)} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bio tabs with enhanced styling */}
        <motion.div 
          className="max-w-2xl mx-auto space-y-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex gap-4 justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Skeleton className="h-10 w-24 rounded-lg" delay={800} />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <Skeleton className="h-10 w-24 rounded-lg" delay={900} />
            </motion.div>
          </div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.0 + (i * 0.1) }}
              >
                <Skeleton 
                  className={`h-4 ${i === 0 ? 'w-full' : i === 1 ? 'w-5/6' : i === 2 ? 'w-4/5' : 'w-3/4'}`} 
                  delay={1000 + (i * 100)} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Enhanced Skills section skeleton with realistic skill card animations
export function SkillsSkeleton() {
  return (
    <motion.div 
      className="py-20 px-8 bg-muted/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title with shimmer effect */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ShimmerSkeleton className="h-12 w-64 mx-auto" delay={0} />
          <Skeleton className="h-6 w-96 mx-auto" delay={200} />
        </motion.div>
        
        {/* Skills grid with staggered animations */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center space-y-3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (i * 0.1),
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              {/* Skill icon with circular shimmer */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ShimmerSkeleton 
                  className="h-16 w-16 rounded-full" 
                  delay={300 + (i * 100)} 
                />
                <div className="absolute inset-2 bg-background rounded-full" />
              </motion.div>
              {/* Skill name */}
              <Skeleton 
                className="h-4 w-20" 
                delay={400 + (i * 100)} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Enhanced Projects section skeleton matching actual project card layout
export function ProjectsSkeleton() {
  return (
    <motion.div 
      className="py-20 px-8 bg-muted/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title with shimmer effect */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ShimmerSkeleton className="h-12 w-64 mx-auto" delay={0} />
          <Skeleton className="h-6 w-96 mx-auto" delay={200} />
        </motion.div>
        
        {/* Projects grid with realistic card layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (i * 0.15),
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Project image */}
              <ShimmerSkeleton 
                className="h-48 w-full" 
                delay={300 + (i * 150)} 
              />
              
              {/* Project content */}
              <div className="p-6 space-y-4">
                {/* Project title */}
                <Skeleton 
                  className="h-6 w-3/4" 
                  delay={400 + (i * 150)} 
                />
                
                {/* Project description */}
                <div className="space-y-2">
                  <Skeleton 
                    className="h-4 w-full" 
                    delay={500 + (i * 150)} 
                  />
                  <Skeleton 
                    className="h-4 w-5/6" 
                    delay={550 + (i * 150)} 
                  />
                  <Skeleton 
                    className="h-4 w-4/5" 
                    delay={600 + (i * 150)} 
                  />
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Skeleton 
                    className="h-10 w-20 rounded-md" 
                    delay={700 + (i * 150)} 
                  />
                  <Skeleton 
                    className="h-10 w-20 rounded-md" 
                    delay={750 + (i * 150)} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Enhanced Certificates section skeleton with realistic certificate layout
export function CertificatesSkeleton() {
  return (
    <motion.div 
      className="py-20 px-8 bg-muted/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title with shimmer effect */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ShimmerSkeleton className="h-12 w-64 mx-auto" delay={0} />
          <Skeleton className="h-6 w-96 mx-auto" delay={200} />
        </motion.div>
        
        {/* Certificates grid with realistic certificate cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (i * 0.1),
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Certificate image */}
              <div className="relative w-full h-36">
                <ShimmerSkeleton 
                  className="w-full h-full" 
                  delay={300 + (i * 100)} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Certificate info */}
              <div className="p-4 space-y-3">
                <Skeleton 
                  className="h-5 w-3/4" 
                  delay={400 + (i * 100)} 
                />
                <Skeleton 
                  className="h-4 w-1/2" 
                  delay={450 + (i * 100)} 
                />
                <Skeleton 
                  className="h-3 w-1/3" 
                  delay={500 + (i * 100)} 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
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

// Enhanced Error state skeleton with better UX
export function ErrorSkeleton() {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background via-background to-muted/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-6 max-w-md">
        {/* Error icon */}
        <motion.div 
          className="relative mx-auto w-16 h-16"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 200
          }}
        >
          <ShimmerSkeleton className="w-16 h-16 rounded-full" delay={0} />
          <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
            <Skeleton className="w-6 h-6 rounded-full" delay={200} />
          </div>
        </motion.div>
        
        {/* Error message */}
        <motion.div 
          className="space-y-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ShimmerSkeleton className="h-8 w-80 mx-auto" delay={300} />
          <Skeleton className="h-6 w-64 mx-auto" delay={400} />
        </motion.div>
        
        {/* Retry button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Skeleton className="h-12 w-32 mx-auto rounded-lg" delay={500} />
        </motion.div>
      </div>
    </motion.div>
  );
}

// NavBar skeleton for loading states
export function NavBarSkeleton() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo skeleton */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Skeleton className="h-8 w-32" delay={0} />
          </motion.div>
          
          {/* Navigation links skeleton */}
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + (i * 0.05) }}
              >
                <Skeleton className="h-6 w-16" delay={100 + (i * 50)} />
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA button skeleton */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Skeleton className="h-10 w-24 rounded-lg" delay={300} />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

// Individual component skeletons for granular loading
export function ProjectCardSkeleton({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div 
      className="bg-card rounded-xl shadow-sm border border-border overflow-hidden"
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay / 1000,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <ShimmerSkeleton className="h-48 w-full" delay={delay} />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" delay={delay + 100} />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" delay={delay + 200} />
          <Skeleton className="h-4 w-5/6" delay={delay + 250} />
          <Skeleton className="h-4 w-4/5" delay={delay + 300} />
        </div>
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-10 w-20 rounded-md" delay={delay + 400} />
          <Skeleton className="h-10 w-20 rounded-md" delay={delay + 450} />
        </div>
      </div>
    </motion.div>
  );
}

export function SkillCardSkeleton({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div 
      className="flex flex-col items-center space-y-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: delay / 1000,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ShimmerSkeleton className="h-16 w-16 rounded-full" delay={delay} />
        <div className="absolute inset-2 bg-background rounded-full" />
      </motion.div>
      <Skeleton className="h-4 w-20" delay={delay + 100} />
    </motion.div>
  );
}

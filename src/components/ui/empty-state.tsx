'use client';

import { motion } from 'motion/react';
import { AlertCircle, Calendar, FolderOpen } from 'lucide-react';

interface EmptyStateProps {
  type: 'projects' | 'certificates';
  className?: string;
}

const emptyStateConfig = {
  projects: {
    icon: FolderOpen,
    title: 'No Projects Available',
    message: 'Sorry, no projects to show at this time. Please come back at another time.',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  certificates: {
    icon: Calendar,
    title: 'No Certificates Available',
    message: 'Sorry, no certificates to show at this time. Please come back at another time.',
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  }
} as const;

export function EmptyState({ type, className = '' }: EmptyStateProps) {
  const config = emptyStateConfig[type];
  const IconComponent = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col items-center justify-center p-8 md:p-12 rounded-lg border-2 border-dashed ${config.borderColor} ${config.bgColor} ${className}`}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className={`p-4 rounded-full ${config.bgColor} border-2 ${config.borderColor} mb-4`}
      >
        <IconComponent className={`w-8 h-8 ${config.iconColor}`} />
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="text-lg font-semibold text-gray-800 mb-2"
      >
        {config.title}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="text-sm text-gray-600 text-center max-w-md leading-relaxed"
      >
        {config.message}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-4 flex items-center gap-2 text-xs text-gray-500"
      >
        <AlertCircle className="w-4 h-4" />
        <span>Content will be updated soon</span>
      </motion.div>
    </motion.div>
  );
}

// Convenience components for specific use cases
export function ProjectsEmptyState({ className }: { className?: string }) {
  return <EmptyState type="projects" className={className} />;
}

export function CertificatesEmptyState({ className }: { className?: string }) {
  return <EmptyState type="certificates" className={className} />;
}

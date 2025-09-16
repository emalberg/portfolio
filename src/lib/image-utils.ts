/**
 * Image optimization utilities for Next.js Image components
 */

// Generate a simple blur data URL for different image types
export function generateBlurDataURL(width: number, height: number, color = '#f3f4f6'): string {
  const canvas = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${color}"/>
  </svg>`;
  
  return `data:image/svg+xml;base64,${Buffer.from(canvas).toString('base64')}`;
}

// Predefined blur data URLs for common use cases
export const BLUR_DATA_URLS = {
  // Generic placeholder for project images
  PROJECT_IMAGE: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  
  // Light gray placeholder for icons
  ICON_LIGHT: generateBlurDataURL(24, 24, '#f3f4f6'),
  ICON_SMALL: generateBlurDataURL(20, 20, '#f3f4f6'),
  ICON_LARGE: generateBlurDataURL(48, 48, '#f3f4f6'),
  
  // Certificate placeholder
  CERTIFICATE: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  
  // Logo placeholder
  LOGO: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
} as const;

// Responsive sizes for different image types
export const RESPONSIVE_SIZES = {
  LOGO: '(max-width: 768px) 120px, 240px',
  PROJECT_CARD: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  CERTIFICATE: '(max-width: 768px) 192px, 192px',
  SKILL_ICON: '(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px',
  SOCIAL_ICON: '24px',
  SOCIAL_ICON_SMALL: '20px'
} as const;

// Quality settings for different image types
export const IMAGE_QUALITY = {
  HIGH: 90,    // For logos and certificates
  MEDIUM: 85,  // For project images and social icons
  LOW: 75      // For background images
} as const;

// Image optimization configuration
export interface ImageOptimizationConfig {
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
}

// Helper function to determine if an image should use placeholder
function shouldUsePlaceholder(width: number, height: number): boolean {
  // Next.js recommends not using placeholder for images smaller than 40x40
  // This prevents performance warnings like:
  // "Image with src '...' is smaller than 40x40. Consider removing the 'placeholder' property to improve performance."
  return width >= 40 && height >= 40;
}

// Get optimized image props with dynamic sizing support
export function getOptimizedImagePropsWithSize(
  type: 'logo' | 'project' | 'certificate' | 'skill-icon' | 'social-icon' | 'social-icon-small',
  width: number,
  height: number,
  customConfig?: Partial<ImageOptimizationConfig>
): ImageOptimizationConfig {
  const baseConfig = getOptimizedImageProps(type, customConfig);
  
  // Override placeholder settings based on actual image dimensions
  if (!shouldUsePlaceholder(width, height)) {
    return {
      ...baseConfig,
      placeholder: undefined,
      blurDataURL: undefined
    };
  }
  
  return baseConfig;
}

// Get optimized image props based on image type
export function getOptimizedImageProps(
  type: 'logo' | 'project' | 'certificate' | 'skill-icon' | 'social-icon' | 'social-icon-small',
  customConfig?: Partial<ImageOptimizationConfig>
): ImageOptimizationConfig {
  const configs: Record<string, ImageOptimizationConfig> = {
    logo: {
      priority: true,
      placeholder: 'blur',
      blurDataURL: BLUR_DATA_URLS.LOGO,
      sizes: RESPONSIVE_SIZES.LOGO,
      quality: IMAGE_QUALITY.HIGH,
      loading: 'eager'
    },
    project: {
      priority: false,
      placeholder: 'blur',
      blurDataURL: BLUR_DATA_URLS.PROJECT_IMAGE,
      sizes: RESPONSIVE_SIZES.PROJECT_CARD,
      quality: IMAGE_QUALITY.MEDIUM,
      loading: 'lazy'
    },
    certificate: {
      priority: false,
      placeholder: 'blur',
      blurDataURL: BLUR_DATA_URLS.CERTIFICATE,
      sizes: RESPONSIVE_SIZES.CERTIFICATE,
      quality: IMAGE_QUALITY.HIGH,
      loading: 'lazy'
    },
    'skill-icon': {
      priority: false,
      placeholder: 'blur', // Keep placeholder for skill icons as they're typically 48px
      blurDataURL: BLUR_DATA_URLS.ICON_LARGE,
      sizes: RESPONSIVE_SIZES.SKILL_ICON,
      quality: IMAGE_QUALITY.HIGH,
      loading: 'lazy'
    },
    'social-icon': {
      priority: false,
      placeholder: shouldUsePlaceholder(24, 24) ? 'blur' : undefined,
      blurDataURL: shouldUsePlaceholder(24, 24) ? BLUR_DATA_URLS.ICON_LIGHT : undefined,
      sizes: RESPONSIVE_SIZES.SOCIAL_ICON,
      quality: IMAGE_QUALITY.MEDIUM,
      loading: 'lazy'
    },
    'social-icon-small': {
      priority: false,
      placeholder: shouldUsePlaceholder(20, 20) ? 'blur' : undefined,
      blurDataURL: shouldUsePlaceholder(20, 20) ? BLUR_DATA_URLS.ICON_SMALL : undefined,
      sizes: RESPONSIVE_SIZES.SOCIAL_ICON_SMALL,
      quality: IMAGE_QUALITY.MEDIUM,
      loading: 'lazy'
    }
  };

  return { ...configs[type], ...customConfig };
}

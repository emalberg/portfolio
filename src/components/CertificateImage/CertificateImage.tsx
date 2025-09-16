import Image from 'next/image';
import type { CertificateImageProps } from '../Certificate/types';
import { getOptimizedImageProps } from '@/lib/image-utils';

export function CertificateImage({ image }: CertificateImageProps) {
  // Don't render anything if no image is provided
  if (!image || !image.url) {
    return (
      <div className="relative w-48 h-36 overflow-hidden rounded-lg mx-auto bg-muted flex items-center justify-center">
        <div className="text-muted-foreground text-sm text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>No Image</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-48 h-36 overflow-hidden rounded-lg mx-auto">
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className="object-cover"
        {...getOptimizedImageProps('certificate')}
      />
    </div>
  );
}

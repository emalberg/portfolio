import Image from 'next/image';
import type { CertificateImageProps } from '../Certificate/types';

export function CertificateImage({ image }: CertificateImageProps) {
  return (
    <div className="relative w-48 h-36 overflow-hidden rounded-lg mx-auto">
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
}

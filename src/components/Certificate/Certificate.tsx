import { CertificateImage } from '../CertificateImage/CertificateImage';
import { CertificateInfo } from '../CertificateInfo/CertificateInfo';
import { Card, CardContent } from '../ui/card';
import type { CertificateProps } from './types';
import { Skeleton } from '@/components/ui/loading-skeleton';

export default function Certificate({
  name,
  issuer,
  dateReceived,
  expirationDate,
  image,
  isLoading = false
}: CertificateProps & { isLoading?: boolean }) {
  // Show skeleton if loading
  if (isLoading) {
    return (
      <Card className="flex flex-col space-y-4">
        <CardContent className="flex flex-col space-y-4 px-4 py-0">
          <div className="relative w-48 h-36 overflow-hidden rounded-lg mx-auto">
            <Skeleton className="w-full h-full" delay={0} />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-5 w-3/4 mx-auto" delay={100} />
            <Skeleton className="h-4 w-1/2 mx-auto" delay={150} />
            <Skeleton className="h-3 w-1/3 mx-auto" delay={200} />
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="flex flex-col space-y-4">
      <CardContent className="flex flex-col space-y-4 px-4 py-0">
        <CertificateImage image={image} />
        <CertificateInfo
          name={name}
          issuer={issuer}
          dateReceived={dateReceived}
          expirationDate={expirationDate}
        />
      </CardContent>
    </Card>
  );
}

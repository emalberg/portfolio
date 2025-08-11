import { CertificateImage } from '../CertificateImage/CertificateImage';
import { CertificateInfo } from '../CertificateInfo/CertificateInfo';
import { Card, CardContent } from '../ui/card';
import type { CertificateProps } from './types';

export default function Certificate({
  name,
  issuer,
  dateReceived,
  expirationDate,
  image
}: CertificateProps) {
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

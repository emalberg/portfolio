import { CertificateSection } from '@/components/sections/CertificateSection';
import { SAMPLE_CERTIFICATE_DATA } from '@/constants/constants';

export default function CertificatesDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <CertificateSection data={SAMPLE_CERTIFICATE_DATA.CERTIFICATES_SECTION} />
    </div>
  );
}

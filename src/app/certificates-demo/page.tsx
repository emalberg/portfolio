import { CertificateSection } from '@/components/sections/CertificateSection';
import { SAMPLE_CERTIFICATE_DATA } from '@/constants/constants';

export default function CertificatesDemoPage() {
  const { CERTIFICATES_SECTION } = SAMPLE_CERTIFICATE_DATA;
  
  return (
    <div className="min-h-screen bg-background">
      <CertificateSection 
        title={CERTIFICATES_SECTION.Title}
        description={CERTIFICATES_SECTION.Description}
        certificates={CERTIFICATES_SECTION.Certificates}
      />
    </div>
  );
}

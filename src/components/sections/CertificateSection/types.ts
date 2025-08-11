import type { CertificateProps } from '@/components/Certificate/types';

export interface CertificateData {
  id: number;
  name: string;
  issuer: string;
  dateReceived: string;
  expirationDate?: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface CertificateSectionData {
  Order: number;
  id: number;
  Title: string;
  Description?: string;
  Certificates: CertificateData[];
}

export interface CertificateSectionProps {
  data: CertificateSectionData;
}

export interface AnimationConfig {
  container: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
        staggerChildren: number;
      };
    };
  };
  item: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number };
    };
  };
}

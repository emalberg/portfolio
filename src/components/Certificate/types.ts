export interface CertificateProps {
  name: string;
  issuer: string;
  dateReceived: string;
  expirationDate?: string;
  image: {
    url: string;
    alt: string;
  } | null;
}

export interface CertificateImageProps {
  image: {
    url: string;
    alt: string;
  } | null;
}

export interface CertificateInfoProps {
  name: string;
  issuer: string;
  dateReceived: string;
  expirationDate?: string;
}

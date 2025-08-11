export interface CertificateProps {
  name: string;
  issuer: string;
  dateReceived: string;
  expirationDate?: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface CertificateImageProps {
  image: {
    url: string;
    alt: string;
  };
}

export interface CertificateInfoProps {
  name: string;
  issuer: string;
  dateReceived: string;
  expirationDate?: string;
}

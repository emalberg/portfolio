# Certificate Component

A simple, non-animated component for displaying professional certificates and achievements.

## Features

- **Clean Design**: Simple, professional appearance without animations
- **Flexible Layout**: Responsive grid layout that adapts to different screen sizes
- **Date Formatting**: Automatically formats dates in a user-friendly way
- **Optional Expiration**: Supports certificates with or without expiration dates
- **Image Display**: Shows certificate images with proper aspect ratio and fallback styling

## Props

```typescript
interface CertificateProps {
  name: string;           // Name of the certificate
  issuer: string;         // Organization issuing the certificate (e.g., "Zero To Mastery")
  dateReceived: string;   // Date when certificate was received (ISO date string)
  expirationDate?: string; // Optional expiration date (ISO date string)
  image: {
    url: string;          // URL to the certificate image
    alt: string;          // Alt text for accessibility
  };
}
```

## Usage

```tsx
import { Certificate } from '@/components/Certificate';

<Certificate
  name="Complete Web Developer Bootcamp"
  issuer="Zero To Mastery"
  dateReceived="2023-06-15"
  image={{
    url: "/certificate-image.jpg",
    alt: "Web Developer Bootcamp Certificate"
  }}
/>

// With expiration date
<Certificate
  name="React Developer Certification"
  issuer="Meta"
  dateReceived="2023-09-20"
  expirationDate="2025-09-20"
  image={{
    url: "/react-cert.jpg",
    alt: "React Developer Certificate"
  }}
/>
```

## Demo

Visit `/certificates-demo` to see the component in action with sample data.

## Styling

The component uses Tailwind CSS classes and includes:
- Hover effects (subtle shadow increase)
- Responsive grid layout
- Consistent spacing and typography
- Professional color scheme
- Border and shadow styling

## Accessibility

- Proper alt text for images
- Semantic HTML structure
- Clear visual hierarchy
- Readable typography

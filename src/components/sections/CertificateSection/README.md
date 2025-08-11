# CertificateSection Component

A section component for displaying professional certificates and achievements in a responsive grid layout.

## Features

- **Responsive Grid**: Automatically adapts to different screen sizes (1-4 columns)
- **Smooth Animations**: Framer Motion animations with staggered children effects
- **Theme Integration**: Uses the design system from `@globals.css`
- **Validation**: Built-in data validation with helpful console warnings
- **Accessibility**: Proper semantic HTML structure and ARIA support

## Props

```typescript
interface CertificateSectionProps {
  data: CertificateSectionData;
}

interface CertificateSectionData {
  Order: number;
  id: number;
  Title: string;
  Description?: string;
  Certificates: CertificateData[];
}
```

## Usage

```tsx
import { CertificateSection } from '@/components/sections/CertificateSection';

<CertificateSection data={certificateData} />
```

## Grid Layout

The component automatically creates a responsive grid:
- **Mobile**: 1 column
- **Tablet (md)**: 2 columns  
- **Desktop (lg)**: 3 columns
- **Large Desktop (xl)**: 4 columns

## Animation

Uses Framer Motion with:
- **Container**: Fades in from bottom with staggered children
- **Items**: Individual certificates animate in sequence
- **Viewport**: Triggers when 20% of the grid is visible

## Theme Integration

Automatically uses CSS custom properties from `@globals.css`:
- `--background` for section background
- `--card` for certificate backgrounds
- `--border` for borders and dividers
- Responsive spacing and typography

## Demo

Visit `/certificates-demo` to see the component in action with sample data.

## Structure

```
CertificateSection/
├── CertificateSection.tsx    # Main component
├── types.ts                 # TypeScript interfaces
├── utils.ts                 # Utility functions
├── index.ts                 # Exports
└── README.md               # Documentation
```

## Dependencies

- `@/components/Certificate` - Individual certificate display
- `@/components/SectionHeader` - Section title and description
- `@/components/DecorativeElements` - Visual enhancements
- `motion/react` - Animation library
- `@/constants/constants` - Animation and component constants

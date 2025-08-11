# SkillsSection Component

A clean, modular, and responsive skills section component that displays technologies and tools in an interactive carousel format.

## Features

- **Clean Architecture**: Modular component structure with separation of concerns
- **Type Safety**: Full TypeScript support with dedicated type definitions
- **Theme Integration**: Uses CSS custom properties from globals.css with theme-aware styling
- **Responsive Carousel**: Adaptive orientation (vertical on mobile, horizontal on desktop)
- **3D Tilt Effect**: Skills tilt towards mouse position on hover using Framer Motion
- **Smooth Animations**: Staggered entrance animations with configurable timing
- **Accessibility**: Proper ARIA labels and semantic HTML structure

## Architecture

```
SkillsSection/
├── SkillsSection.tsx       # Main component
├── types.ts                # TypeScript interfaces
├── utils.ts                # Utility functions and hooks
├── components/
│   ├── SectionHeader.tsx   # Header with title and decorative elements
│   ├── SkillCarousel.tsx   # Carousel with skills
│   └── DecorativeElements.tsx # Background decorative elements
├── README.md               # Documentation
└── index.ts                # Export barrel
```

## Usage

```tsx
import SkillsSection from '@/components/sections/SkillsSection';
import type { SkillsSectionData } from '@/components/sections/SkillsSection/types';

const skillsData: SkillsSectionData = {
  Order: 1,
  id: 4,
  Title: "Technologies",
  Skills: [
    {
      id: 1,
      Name: "JavaScript",
      Icon: {
        Name: "JavaScript",
        SVG: {
          url: "/javascript-logo.svg",
          alternativeText: "JavaScript Icon"
        }
      }
    }
    // ... more skills
  ]
};

function MyPage() {
  return <SkillsSection data={skillsData} />;
}
```

## Configuration

All constants are centralized in `@/constants/constants.ts`:

- **Breakpoints**: Screen size detection
- **Animation timings**: Duration, stagger, and easing
- **Spacing**: Padding, margins, and positioning
- **Carousel settings**: Height, alignment, and loop behavior

## Components

### Core Components
- **SkillsSection**: Main container component
- **SectionHeader**: Title, subtitle, and decorative line
- **SkillCarousel**: Responsive carousel with navigation
- **DecorativeElements**: Background gradient circles

### External Dependencies
- **Skill Component**: Individual skill cards with 3D tilt effect (`@/components/Skill`)
- **UI Carousel**: Shadcn/ui carousel components with Embla Carousel

## Responsive Behavior

- **Mobile (< 768px)**: Vertical carousel, 1 skill per slide, compact layout
- **Desktop (≥ 768px)**: Horizontal carousel, 3 skills per slide, spacious layout

## Styling

- **Theme Colors**: Uses CSS custom properties (primary, accent, background, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Framer Motion with theme-aware configurations
- **Typography**: Responsive text sizing with proper contrast

## Demo

Visit `/skills-demo` to see the component in action with sample data.

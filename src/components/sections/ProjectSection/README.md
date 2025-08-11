# ProjectSection Component

A clean, modular project showcase section that displays project cards in a responsive grid layout with smooth animations.

## Features

- **Clean Architecture**: Modular component structure with separation of concerns
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Theme Integration**: Uses CSS custom properties from globals.css
- **Responsive Grid**: Adaptive layout (1 column mobile, 2 tablet, 3 desktop)
- **Smooth Animations**: Staggered entrance animations using Framer Motion
- **Project Cards**: Interactive flip cards with action buttons
- **Flexible Content**: Optional description and customizable project data

## Architecture

```
ProjectSection/
├── ProjectSection.tsx      # Main component
├── types.ts               # TypeScript interfaces
├── utils.ts               # Utility functions and helpers
├── README.md              # Documentation
└── index.ts               # Export barrel

Dependencies:
├── ProjectCard/           # Individual project cards
├── SectionHeader/         # Reusable section header
└── DecorativeElements/    # Background decorative elements
```

## Usage

```tsx
import ProjectSection from '@/components/sections/ProjectSection';
import type { ProjectSectionData } from '@/components/sections/ProjectSection/types';

const projectSectionData: ProjectSectionData = {
  Order: 2,
  id: 1,
  Title: "Featured Projects",
  Description: "A showcase of my recent work and creative solutions.",
  Projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce solution...",
      image: {
        url: "/project-screenshot.jpg",
        alt: "Project screenshot"
      },
      links: [
        {
          type: "demo",
          url: "https://demo.example.com",
          label: "Live Demo"
        },
        {
          type: "repo",
          url: "https://github.com/user/project",
          label: "GitHub Repo"
        }
      ]
    }
    // ... more projects
  ]
};

function ProjectsPage() {
  return <ProjectSection data={projectSectionData} />;
}
```

## Configuration

All constants are centralized in `@/constants/constants.ts`:

- **Animation settings**: Duration, stagger timing, and viewport amounts
- **Grid layout**: Responsive column counts and spacing
- **Spacing**: Section padding, margins, and container sizing

## Data Structure

```typescript
interface ProjectSectionData {
  Order: number;
  id: number;
  Title: string;
  Description?: string;  // Optional section description
  Projects: ProjectData[];
}

interface ProjectData {
  id: string | number;
  name: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  links: ProjectLink[];
}
```

## Responsive Layout

- **Mobile (≤768px)**: 1 column layout with centered cards
- **Tablet (769-1023px)**: 2 column grid
- **Desktop (≥1024px)**: 3 column grid
- **Max Width**: 7xl container (1280px) for optimal readability

## Features

### Section Header
- Dynamic title and optional description
- Decorative gradient line element
- Smooth entrance animations
- Theme-aware typography

### Project Grid
- Responsive CSS Grid layout
- Staggered card animations
- Proper spacing and alignment
- Centered card positioning

### Project Cards
- Interactive flip animations
- Action buttons for demo/repo/docs
- Dynamic height based on content
- Hover effects and transitions

## Styling

- **Theme Colors**: Uses CSS custom properties (primary, accent, background, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Framer Motion with optimized performance
- **Typography**: Consistent text sizing and hierarchy

## Validation

The component includes built-in validation:
- Required fields: Title, Projects array
- Console warnings for invalid data
- Graceful fallbacks for missing information

## Demo

Visit `/project-section-demo` to see the component in action with sample data including 5 different projects showcasing various card heights and content types.

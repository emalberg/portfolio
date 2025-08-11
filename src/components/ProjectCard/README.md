# ProjectCard Component

A clean, modular, and interactive project card component with flip animations and theme integration.

## Features

- **Clean Architecture**: Modular component structure with separation of concerns
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Theme Integration**: Uses CSS custom properties from globals.css
- **Flip Animation**: Smooth 3D card flip effect on click using Framer Motion
- **Action Buttons**: Configurable buttons for demo, repository, and documentation links
- **Responsive Design**: Mobile-first approach with proper image handling
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## Architecture

```
ProjectCard/
├── ProjectCard.tsx         # Main component
├── types.ts               # TypeScript interfaces
├── utils.ts               # Utility functions and animations
├── README.md              # Documentation
└── index.ts               # Export barrel

Related Components:
├── CardFace/
│   └── CardFace.tsx       # Front and back card faces
└── ProjectActionButton/
    └── ProjectActionButton.tsx # Action buttons with theme styling
```

## Usage

```tsx
import ProjectCard from '@/components/ProjectCard';
import type { ProjectData } from '@/components/ProjectCard/types';

const project: ProjectData = {
  id: 1,
  name: "My Awesome Project",
  description: "A description of what this project does and its key features.",
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
    },
    {
      type: "docs",
      url: "https://docs.example.com",
      label: "Documentation"
    }
  ]
};

function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard project={project} />
    </div>
  );
}
```

## Configuration

All constants are centralized in `@/constants/constants.ts`:

- **Animation settings**: Flip duration, easing, and hover effects
- **Dimensions**: Card height, image aspect ratio
- **Button types**: Demo, repository, and documentation
- **Spacing**: Consistent padding and gaps

## Component Structure

### Main Components
- **ProjectCard**: Main container with flip logic
- **CardFront**: Displays project image, name, and description
- **CardBack**: Shows action buttons and navigation
- **ProjectActionButton**: Individual action buttons with theme styling

### Features

#### Card Front
- Project image with hover zoom effect
- Project name and description
- Visual indicator for interaction
- Gradient overlay for better text contrast

#### Card Back
- Action buttons with type-specific styling
- Staggered button animations
- Back navigation
- Centered layout with proper spacing

#### Animations
- **3D Flip Effect**: Smooth card rotation on click
- **Hover Effects**: Subtle scale animation
- **Button Stagger**: Sequential button appearance
- **Image Zoom**: Hover effect on project images

## Button Types

- **Demo** (`demo`): Primary button style for live demonstrations
- **Repository** (`repo`): Secondary button style for source code
- **Documentation** (`docs`): Accent button style for documentation

## Styling

- **Theme Colors**: Uses CSS custom properties (primary, secondary, accent, etc.)
- **Responsive Images**: Next.js Image component with optimization
- **Consistent Spacing**: Theme-aware padding and margins
- **Accessibility**: Focus states and proper contrast ratios

## Data Validation

The component includes built-in validation for project data:
- Required fields: name, description, image.url, image.alt, links array
- Console warnings for invalid data
- Graceful fallbacks for missing information

## Demo

Visit `/project-demo` to see the component in action with sample data.

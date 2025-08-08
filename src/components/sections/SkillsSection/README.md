# SkillsSection Component

A responsive skills section component that displays technologies and tools in an interactive carousel format.

## Features

- **Interactive Carousel**: Horizontal scrolling carousel with navigation buttons
- **3D Tilt Effect**: Skills tilt towards mouse position on hover using Framer Motion
- **Responsive Design**: Adapts to different screen sizes
- **Theme Integration**: Uses CSS custom properties from globals.css
- **Smooth Animations**: Staggered entrance animations and hover effects

## Usage

```tsx
import SkillsSection from '@/components/sections/SkillsSection';

const skillsData = {
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

## Data Structure

The component expects data matching the Strapi schema:

```typescript
interface SkillsSectionData {
  Order: number;
  id: number;
  Title: string;
  Skills: SkillData[];
}

interface SkillData {
  id: number;
  Name: string;
  Icon: {
    Name: string;
    SVG: {
      url: string;
      alternativeText: string;
    };
  };
}
```

## Components

### Skill Component
- Located in `src/components/Skill/`
- Individual skill card with 3D tilt effect
- Hover animations and glow effects
- Responsive sizing

### Carousel Component
- Located in `src/components/Carousel/`
- Horizontal scrolling container
- Navigation buttons (left/right)
- Smooth scrolling behavior
- Scroll indicators

## Styling

The component uses:
- Tailwind CSS for layout and spacing
- CSS custom properties from globals.css for colors
- Framer Motion for animations
- Responsive breakpoints (sm, md, lg)

## Demo

Visit `/skills-demo` to see the component in action with sample data.

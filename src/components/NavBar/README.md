# NavBar Component

A sticky navigation bar component that provides smooth scrolling navigation to different sections of the portfolio.

## Features

- **Sticky Positioning**: Fixed at the top of the page with smooth transitions
- **Dynamic Text Color**: Automatically adjusts text color based on the current section (light for dark backgrounds, dark for light backgrounds)
- **Smooth Scrolling**: Clicking navigation links smoothly scrolls to the target section
- **Responsive Design**: Adapts to different screen sizes with mobile menu support
- **CTA Button**: Configurable call-to-action button for external links
- **Translucent Background**: Backdrop blur effect when scrolled for better readability

## Usage

The NavBar is automatically integrated into the layout and receives its data from a separate Strapi API endpoint (`/api/navbar`). The data is fetched server-side in the layout component and passed directly as props to the NavBar component.

### Data Flow

1. **Layout** fetches NavBar data from `/api/navbar` endpoint
2. **NavBar** component receives the data as props and renders the UI

### Strapi Configuration

Configure the NavBar in your Strapi CMS with the following structure:

```json
{
  "NavBar_Section": {
    "Order": 0,
    "Logo": {
      "url": "/path/to/logo.png",
      "alternativeText": "Portfolio Logo",
      "width": 120,
      "height": 40
    },
    "Links": [
      {
        "id": 1,
        "name": "Skills",
        "target": "skills-section",
        "order": 1
      },
      {
        "id": 2,
        "name": "Projects", 
        "target": "project-section",
        "order": 2
      },
      {
        "id": 3,
        "name": "Certificates",
        "target": "certificates-section", 
        "order": 3
      }
    ],
    "CTAButton": {
      "id": 1,
      "text": "View Blog",
      "url": "https://your-blog.com",
      "order": 0
    }
  }
}
```

### Section IDs

Make sure your sections have the correct IDs for navigation to work:

- `skills-section` - Skills section
- `project-section` - Projects section  
- `certificates-section` - Certificates section
- `hero-section` - Hero section (for text color detection)

## Components

### NavBar
Main navigation component that receives data as props and handles sticky positioning, scroll behavior, and UI rendering.

## Styling

The NavBar uses Tailwind CSS classes and includes:

- Fixed positioning with `fixed top-0 left-0 right-0`
- Z-index of 50 for proper layering
- Backdrop blur effect with `backdrop-blur-md`
- Smooth transitions with `transition-all duration-300`
- Responsive breakpoints for mobile/desktop

## Accessibility

- Proper ARIA labels for navigation
- Keyboard navigation support
- Focus management for interactive elements
- Semantic HTML structure

## Customization

You can customize the NavBar behavior by modifying:

- `NAVBAR_CONSTANTS` in `src/constants/constants.ts`
- Text color detection logic in the `getTextColorForSection` function
- Scroll offset and threshold values
- Animation durations and easing

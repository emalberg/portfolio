# HeroSection Component

A responsive, accessible hero section component for portfolio websites with animated tabbed bio content and dynamic keyword cycling with scramble effects.

## Features

- ✅ Responsive design (mobile-first approach)
- ✅ Accessible with proper ARIA labels and semantic HTML
- ✅ Background image support with overlay
- ✅ Customizable content (name, phrase, bios)
- ✅ Animated tabbed bio component with Framer Motion
- ✅ Dynamic keyword cycling with scramble text animation
- ✅ Strapi CMS integration support
- ✅ Glassmorphism effect on bio cards
- ✅ Clean, modern design

## Usage

### Basic Usage

```tsx
import HeroSection from '@/components/sections/HeroSection/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection 
        name="Your Name"
        phrase="I develop"
        keywords={{
          technologies: ["web applications", "mobile apps", "APIs"],
          creative: ["user-centered experiences", "interactive UIs"]
        }}
        bio1Title="About Me"
        bio1Content="Your first bio content..."
        bio2Title="What I Do"
        bio2Content="Your second bio content..."
        backgroundImage="/path/to/your/image.jpg"
      />
    </main>
  )
}
```

### Strapi Integration

```tsx
import HeroSection from '@/components/sections/HeroSection/HeroSection'
import { parseStrapiHeroData } from '@/components/sections/HeroSection/utils'

export default function Home({ strapiData }) {
  const heroData = parseStrapiHeroData(strapiData)
  
  if (!heroData) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <HeroSection {...heroData} />
    </main>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `"Your Name"` | The main heading/name to display |
| `phrase` | `string` | `"I develop"` | The subtitle/phrase before the animated keyword |
| `keywords` | `KeywordData` | `{ technologies: [...], creative: [...] }` | Keywords to cycle through |
| `bio1Title` | `string` | `"About Me"` | Title for the first bio tab |
| `bio1Content` | `string` | `"A passionate developer..."` | Content for the first bio tab |
| `bio2Title` | `string` | `"What I Do"` | Title for the second bio tab |
| `bio2Content` | `string` | `"I specialize in..."` | Content for the second bio tab |
| `backgroundImage` | `string` | `undefined` | Path to the background image |
| `className` | `string` | `undefined` | Additional CSS classes |

## Keyword Data Structure

```tsx
interface KeywordData {
  technologies?: string[]  // Technology-related keywords
  creative?: string[]      // Creative/design-related keywords
}
```

## AnimatedKeyword Component

The AnimatedKeyword component features:

- **Cycling Animation**: Automatically cycles through keywords every minute
- **Scramble Text Effect**: Text appears to be randomly shuffling before settling
- **Smooth Transitions**: Framer Motion animations with fade and slide effects
- **Customizable Timing**: Configurable interval, animation duration, and scramble duration
- **Visual Effects**: Animated underline, scale effects, and color changes during scramble
- **Accessibility**: Screen reader friendly with proper ARIA labels

### AnimatedKeyword Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `keywords` | `string[]` | `[]` | Array of keywords to cycle through |
| `className` | `string` | `undefined` | Additional CSS classes |
| `interval` | `number` | `60000` | Time between keyword changes (ms) |
| `animationDuration` | `number` | `1000` | Animation duration (ms) |
| `scrambleDuration` | `number` | `2000` | Scramble effect duration (ms) |

### Scramble Animation Features

- **Character Randomization**: Uses a variety of characters (letters, numbers, symbols)
- **Progressive Reveal**: Characters are revealed from left to right with randomness
- **Visual Feedback**: Color changes and pulse animation during scramble
- **Smooth Transitions**: 50 iterations for smooth scramble effect
- **Monospace Font**: Uses `font-mono` for consistent character spacing

## Bio Component

The Bio component now features:

- **Tabbed Interface**: Two tabs that can be switched between
- **Smooth Animations**: Framer Motion animations when switching between tabs
- **Glassmorphism Design**: Semi-transparent cards with backdrop blur
- **Responsive Design**: Works well on all screen sizes

### Bio Tab Structure

```tsx
interface BioTab {
  id: string      // Unique identifier for the tab
  title: string   // Tab title displayed in the navigation
  content: string // Tab content displayed in the card
}
```

## Strapi Integration

The component includes utilities for parsing Strapi CMS data:

### Strapi Data Structure

```tsx
interface StrapiHeroSection {
  Name: string
  Phrase: string
  Keyword: {
    technologies?: string[]
    creative?: string[]
  }
  Personal_Bio: any[] // Rich text content
  Professional_Bio: any[] // Rich text content
  Personal_Bio_Title: string
  Professional_Bio_Title: string
  Background?: {
    url: string
    alternativeText?: string
  }
}
```

### Utility Functions

- `parseStrapiHeroData()`: Parses Strapi response into component props
- `combineKeywords()`: Combines keywords from different categories
- `parseRichText()`: Converts Strapi rich text to plain text

## Background Image

To use a background image:

1. Place your image in the `public` directory
2. Reference it in the `backgroundImage` prop (e.g., `"/my-image.jpg"`)
3. The component will automatically add a dark overlay for better text readability
4. If no image is provided, a beautiful gradient background will be used

## Accessibility

- Uses semantic `<section>` element
- Proper ARIA labeling with `aria-labelledby`
- Background image marked as decorative with `aria-hidden="true"`
- Responsive text sizing for better readability
- High contrast text on dark overlay
- Keyboard navigation support for tabs
- Screen reader support for animated keywords

## Responsive Design

- Mobile-first approach
- Grid layout that stacks on mobile, side-by-side on desktop
- Responsive typography (4xl → 5xl → 6xl)
- Proper spacing and padding adjustments
- Bio tabs work seamlessly across all devices
- Animated keywords adapt to different screen sizes

## Animations

The component uses Framer Motion for smooth animations:

- **Keyword Cycling**: Smooth fade and slide transitions when switching keywords
- **Scramble Text Effect**: Random character shuffling before revealing final keyword
- **Tab Switching**: Smooth fade and slide transitions when switching between tabs
- **Content Loading**: Animated entrance for tab content
- **Hover Effects**: Subtle hover animations on interactive elements
- **Underline Animation**: Animated underline effect for keywords

## Styling

The component uses Tailwind CSS classes and includes:
- Glassmorphism effect on bio cards (`backdrop-blur-sm`)
- Smooth transitions and hover effects
- Modern typography with proper line heights
- Consistent spacing using Tailwind's spacing scale
- Beautiful gradient fallback background
- Custom blue accent color for keywords
- Monospace font for scramble effect
- Pulse animation during scramble

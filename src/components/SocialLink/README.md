# SocialLink Component

A versatile social media link component that adapts to mobile and desktop layouts with smooth sliding animations powered by Framer Motion.

## Features

- **Responsive Design**: Automatically adapts between mobile and desktop variants
- **Edge-to-Edge Positioning**: Desktop icons positioned at the very left edge of the browser
- **Smooth Animations**: Rightward expansion with text sliding in from the left
- **Next.js Image**: Optimized image loading with Next.js Image component
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Theme Integration**: Uses CSS custom properties for consistent theming
- **Performance**: Optimized transitions and minimal re-renders

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `social` | `Social` | - | Social media data object (required) |
| `className` | `string` | - | Additional CSS classes |
| `variant` | `'mobile' \| 'desktop'` | `'desktop'` | Layout variant |
| `showLabel` | `boolean` | `false` | Force label visibility |

## Usage

### Basic Usage
```tsx
import { SocialLink } from '@/components/SocialLink'

<SocialLink social={socialData} />
```

### Mobile Variant
```tsx
<SocialLink 
  social={socialData} 
  variant="mobile" 
/>
```

### Force Label Display
```tsx
<SocialLink 
  social={socialData} 
  showLabel={true} 
/>
```

## Animation Behavior

### Desktop Variant
- **Initial State**: Icon positioned at the very left edge of the browser window
- **Hover Effect**: 
  - Container expands smoothly to the right
  - Text slides in from the left with opacity fade
  - Icon remains positioned on the right side
  - Rounded right corners and border styling for polished appearance
  - Backdrop blur and border effects enhance visual appeal

### Mobile Variant
- **Display**: Inline layout with icon and text always visible
- **Hover**: Subtle background color change and scale effect

## Data Structure

The component expects a `Social` object with the following structure:

```typescript
interface Social {
  Order: number
  id: number
  Name: string
  Link: string
  Icon: SocialIcon
}
```

## Styling

The component uses:
- **Tailwind CSS** for layout and spacing
- **CSS custom properties** from `globals.css` for theming
- **Framer Motion** for smooth animations
- **Next.js Image** for optimized image loading

It automatically adapts to light/dark themes and maintains consistency with the overall design system.

## Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus visible indicators
- Semantic HTML structure
- Smooth animations respect `prefers-reduced-motion`

## Dependencies

- `framer-motion` for animations
- `next/image` for optimized images
- `@/lib/utils` for utility functions

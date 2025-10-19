# Scroll Snap Implementation

## Overview

This implementation provides a smooth snapping effect for sections on your portfolio website. The page automatically snaps to align sections when they are within a specified proximity (75px) of the viewport top during scrolling.

## Features

- **Proximity-based snapping**: Only snaps when sections are within 50-100px range (configurable)
- **Full viewport sections**: Each section occupies 100% of the viewport height
- **Smooth animations**: Uses Lenis for natural, smooth scrolling animations
- **Cross-browser compatibility**: Works consistently across all modern browsers
- **Configurable parameters**: Easy to adjust snap threshold, duration, and behavior
- **Manual control**: Programmatic snap functionality available

## Implementation Details

### Core Components

1. **useScrollSnap Hook** (`src/hooks/useScrollSnap.ts`)
   - Main logic for proximity detection and snapping
   - Integrates with Lenis for smooth animations
   - Debounced scroll handling for performance

2. **Enhanced Lenis Provider** (`src/components/providers/lenis-provider.tsx`)
   - Makes Lenis instance globally accessible
   - Handles anchor link smooth scrolling

3. **CSS Enhancements** (`src/styles/globals.css`)
   - Scroll-snap alignment properties
   - Performance optimizations
   - Cross-browser compatibility fixes

4. **Demo Controls** (`src/components/ui/scroll-snap-demo.tsx`)
   - Interactive testing interface
   - Toggle snap on/off
   - Manual navigation to sections

### How It Works

1. **Section Detection**: Automatically finds all `<section>` elements on the page
2. **Proximity Monitoring**: Continuously monitors scroll position and calculates distance to each section
3. **Snap Trigger**: When a section is within the 75px threshold and scrolling stops, it triggers a snap
4. **Smooth Animation**: Uses Lenis to smoothly animate to the target section
5. **Debouncing**: Prevents excessive snap attempts during rapid scrolling

### Configuration Options

```typescript
useScrollSnap({
  snapThreshold: 75,        // Distance in pixels to trigger snap
  snapDuration: 800,        // Animation duration in milliseconds
  enabled: true,           // Enable/disable snapping
  sectionSelector: 'section' // CSS selector for snap targets
})
```

## Usage

### Basic Implementation

```typescript
import { useScrollSnap } from '@/hooks/useScrollSnap'

export default function MyPage() {
  useScrollSnap({
    snapThreshold: 75,
    snapDuration: 800,
    enabled: true,
    sectionSelector: 'section'
  })

  return (
    <div>
      <section id="hero" className="h-screen">Hero content</section>
      <section id="about" className="h-screen">About content</section>
      <section id="projects" className="h-screen">Projects content</section>
    </div>
  )
}
```

### Manual Snap Control

```typescript
import { useScrollSnap } from '@/hooks/useScrollSnap'

function MyComponent() {
  const { snapTo } = useScrollSnap()

  const handleNavigate = () => {
    snapTo('#about') // Snap to about section
  }

  return <button onClick={handleNavigate}>Go to About</button>
}
```

## Section Requirements

For optimal snapping behavior, sections should:

1. **Have full viewport height**: Use `h-screen` class or `height: 100vh`
2. **Have unique IDs**: For navigation and targeting
3. **Use semantic HTML**: `<section>` elements (recommended)

```html
<section id="hero" className="h-screen">
  <!-- Content -->
</section>

<section id="about" className="h-screen">
  <!-- Content -->
</section>
```

## Performance Considerations

- **Debounced Events**: Scroll events are debounced to prevent performance issues
- **Passive Listeners**: Uses passive event listeners for better scroll performance
- **Mutation Observer**: Automatically updates section list when DOM changes
- **Memory Management**: Proper cleanup of event listeners and timeouts

## Browser Compatibility

- **Chrome/Edge**: Full support with native scroll-snap
- **Firefox**: Full support with custom implementation
- **Safari**: Full support with touch optimizations
- **Mobile**: Optimized for touch devices with momentum scrolling handling

## Testing

Use the included demo controls (`ScrollSnapDemo` component) to:

- Toggle snapping on/off
- Manually navigate to sections
- Test different threshold values
- Verify cross-browser behavior

## Customization

### Adjust Snap Threshold

```typescript
// More aggressive snapping (50px threshold)
useScrollSnap({ snapThreshold: 50 })

// Less aggressive snapping (100px threshold)
useScrollSnap({ snapThreshold: 100 })
```

### Change Animation Duration

```typescript
// Faster snap (400ms)
useScrollSnap({ snapDuration: 400 })

// Slower snap (1200ms)
useScrollSnap({ snapDuration: 1200 })
```

### Custom Section Selectors

```typescript
// Snap to different elements
useScrollSnap({ sectionSelector: '.snap-section' })

// Multiple selectors
useScrollSnap({ sectionSelector: 'section, .snap-target' })
```

## Troubleshooting

### Snap Not Working

1. Ensure sections have `h-screen` class or `height: 100vh`
2. Check that Lenis is properly initialized
3. Verify section IDs are unique
4. Use demo controls to test functionality

### Performance Issues

1. Reduce snap threshold for less frequent snapping
2. Increase debounce delay in the hook
3. Check for conflicting scroll event listeners

### Mobile Issues

1. Ensure touch events are properly handled
2. Test momentum scrolling behavior
3. Verify viewport height calculations

## Future Enhancements

- **Directional Snapping**: Different thresholds for up/down scrolling
- **Multi-axis Support**: Horizontal snapping support
- **Easing Customization**: More animation easing options
- **Progress Indicators**: Visual feedback during snap animations
- **Accessibility**: Enhanced keyboard navigation support

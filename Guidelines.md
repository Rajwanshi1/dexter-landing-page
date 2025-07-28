# Dexter Landing Page Design Guidelines

## Project Overview
Dexter is an AI-powered DeFi agent landing page built with the "Flagship Theme 2.0" design system. The project emphasizes sophisticated microinteractions, premium design standards, and mobile responsiveness while maintaining focus on community building through Discord engagement.

## Design System: Flagship Theme 2.0

### Color Palette
Our color system is built around an ultra-dark foundation with bright accent colors:

**Core Colors:**
- **Ultra Dark Base**: `#0C0C0D` - Primary background and text
- **Carbon**: `#1A1A1B` - Card backgrounds and elevated surfaces  
- **Graphite**: `#2A2A2A` - Secondary backgrounds and borders
- **Grey**: `#8B8B8B` - Muted text and secondary elements
- **Light Grey**: `#E0E0E0` - Light mode borders and inputs
- **Primary Signal**: `#bded63` - Primary brand color for CTAs and highlights
- **Primary Soft**: `rgba(189, 237, 99, 0.1)` - Subtle backgrounds
- **Primary Glow**: `rgba(189, 237, 99, 0.2)` - Glow effects and emphasis

**Usage Rules:**
- Always use the ultra-dark base (`#0C0C0D`) as the primary background
- Primary signal color (`#bded63`) should be used sparingly for maximum impact
- Use carbon and graphite for layered depth and visual hierarchy
- Maintain high contrast ratios for accessibility

### Typography System

**Font Families:**
- **Display/Headlines**: Space Grotesk (primary brand font)
- **Body Text**: Inter (readable and clean)
- **Labels/Code**: IBM Plex Mono (technical elements)

**Typography Scale:**
- **Display**: 64px (4rem) - Hero headlines, major titles
- **Headline**: 36px (2.25rem) - Section headers
- **Subhead**: 20px (1.25rem) - Secondary text, descriptions
- **Body**: 16px (1rem) - Standard text content
- **Label**: 12px (0.75rem) - Uppercase technical labels, metadata
- **Button**: 16px (1rem) - Interactive elements

**Typography Rules:**
- Never override font-size, font-weight, or line-height with Tailwind classes unless specifically requested
- Use semantic typography classes (.text-display, .text-headline, etc.)
- Maintain consistent line-height ratios for readability
- Labels should always be uppercase with letter-spacing for technical feel

### Layout & Spacing

**Container System:**
- Use `.container-dexter` for consistent max-width (1280px) and responsive padding
- Responsive padding: 24px mobile, 32px tablet, 48px desktop

**Grid Patterns:**
- Hero: 2-column layout (content + visual space)
- Features: 3-column grid on desktop, stacked on mobile
- Sections: Consistent vertical rhythm with proper spacing

**Responsive Breakpoints:**
- Mobile-first approach
- Maintain visual hierarchy across all screen sizes
- Ensure touch targets are minimum 44px on mobile

## Component Guidelines

### Buttons
**Primary Button:**
- Background: `#bded63` (primary signal color)
- Text: Black (`#000000`) for maximum contrast
- Hover: Subtle darkening with lift animation
- Include pulse-ring effect for primary actions

**Secondary Button:**
- Ghost variant with border-glow hover effect
- Text color adapts to theme (muted-foreground → foreground on hover)

**Usage:**
- One primary button per section maximum
- Use secondary buttons for supporting actions
- Always include proper hover states and microinteractions

### Cards & Surfaces
- Use carbon (`#1A1A1B`) for elevated surfaces
- Subtle border with graphite color
- Rounded corners using design system radius values
- Implement hover-lift animation for interactive cards

### Icons & Graphics
**Animated Icons:**
- How It Works section uses custom animated SVG icons
- Maintain consistent sizing and timing across all animated elements
- Use SVG for scalability and performance
- Colors should use the established dark theme palette

**Icon Specifications:**
- Standard size: 32x32px viewBox
- Animation duration: 2.5s for consistency
- Smooth easing with spline curves
- Subtle opacity and transform animations

## Animation & Microinteractions

### Animation Principles
- **Subtle & Purposeful**: Animations should enhance UX, not distract
- **Consistent Timing**: Use 0.2-0.3s for hover states, 2.5s for looping animations
- **Smooth Easing**: Cubic-bezier curves for natural motion
- **Performance**: Prefer transform and opacity changes over layout shifts

### Standard Animations
- **hover-lift**: Translate up 2px with subtle shadow
- **fade-in-up**: Entry animation with 20px vertical offset
- **gentle-pulse**: Subtle opacity cycling for ambient elements
- **border-glow**: Hover state for interactive elements
- **blink-dot**: 1.2s opacity pulse for text emphasis

### Interactive States
- All interactive elements must have clear hover and active states
- Use glow effects for emphasis without being overwhelming
- Maintain accessibility with sufficient contrast in all states

## Section-Specific Guidelines

### Hero Section
- Split layout with content left, visual space right
- Animated headline with blinking period effect
- Three-feature grid below CTAs with technical labels
- Scroll indicator at bottom with gentle pulse animation

### Metrics Section
- Counter animations with staggered timing
- Large display numbers with descriptive labels
- Use primary signal color for emphasis
- Maintain data hierarchy with consistent spacing

### How It Works Section
- Three-column layout with animated icons above text
- Icons should be consistent in size and animation timing
- Technical language with clear, concise explanations
- Use label typography for step indicators

### Trust Section
- Protocol logos in organized grid
- Subtle hover states without being distracting
- Maintain brand recognition while fitting dark theme

### CTA Sections
- Focus on Discord community building
- Primary button prominence with supporting secondary actions
- Clear value propositions with benefit-focused copy

## Technical Guidelines

### CSS Architecture
- Use CSS custom properties for consistent theming
- Layer system: base → components → utilities
- Maintain Tailwind v4 compatibility
- Avoid style attribute overrides when possible

### Performance
- Optimize animations for 60fps
- Use transform and opacity for smooth animations
- Lazy load images where appropriate
- Minimize layout shifts

### Accessibility
- Maintain WCAG AA contrast ratios
- Provide reduced motion preferences
- Ensure keyboard navigation for all interactive elements
- Use semantic HTML structure

## Content & Messaging

### Tone of Voice
- **Technical yet approachable**: Emphasize sophistication without complexity
- **Confidence**: Assert capabilities without overselling
- **Clarity**: Use precise language for financial/technical concepts

### Key Messaging Themes
- Autonomous operation (24/7, hands-off)
- Risk-aware intelligence
- Gas efficiency and optimization
- Self-custodial control
- Community-first approach

### CTA Strategy
- Focus on Discord community engagement pre-launch
- Use action-oriented language ("Join Discord", "How it Works")
- Maintain single primary CTA per section

## Quality Standards

### Visual Polish
- Pixel-perfect alignment and spacing
- Consistent visual hierarchy
- Smooth interactions across all devices
- Professional gradient treatments

### Code Quality
- Component modularity and reusability
- Consistent naming conventions
- Clear separation of concerns
- TypeScript for type safety

### Testing Priorities
- Cross-browser compatibility
- Mobile responsiveness
- Animation performance
- Accessibility compliance
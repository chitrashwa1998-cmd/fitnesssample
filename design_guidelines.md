# Design Guidelines: Fitness Influencer Portfolio Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from high-energy fitness brands like Nike Training Club, Peloton, and successful fitness influencer sites. The design will emphasize motion, energy, and transformation through bold typography, dynamic imagery, and vibrant accents.

## Core Design Principles

1. **High-Energy Aesthetic**: Bold, confident design that motivates and inspires action
2. **Visual Storytelling**: Transformation-focused with strong before/after narratives
3. **Action-Oriented**: Every section drives toward engagement and enrollment
4. **Authentic & Personal**: Balance professional polish with approachable personality

## Typography

**Font Families** (via Google Fonts):
- **Headings**: Montserrat (Bold 700, ExtraBold 800) - strong, athletic presence
- **Body**: Inter (Regular 400, Medium 500) - clean, readable
- **Accents**: Montserrat (SemiBold 600) - for CTAs and labels

**Scale**:
- Hero Title: 3.5rem (desktop) / 2.5rem (mobile)
- Section Headings: 2.5rem (desktop) / 1.75rem (mobile)
- Card Titles: 1.5rem
- Body Text: 1rem / 1.125rem
- CTA Buttons: 1.125rem (SemiBold)

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop) / py-12 (mobile)
- Card padding: p-6
- Element spacing: gap-8 (desktop) / gap-6 (mobile)
- Container max-width: max-w-7xl

**Grid Structure**:
- Programs/Services: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Blog Cards: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Instagram Grid: 3x3 (desktop) / 2 columns (mobile)
- Brand Logos: 4-5 per row (desktop) / 2-3 (mobile)

## Component Library

### Hero Section
- Full-width background image (1920x1080 minimum)
- Dark overlay (opacity: 0.4) for text contrast
- Centered content with vertical centering
- Two CTAs side-by-side (primary + secondary style)
- Social icons row below CTAs (Icon size: 24px, gap-6)
- Height: 90vh (desktop) / 70vh (mobile)

### About Me Section
- Two-column layout: 60% text / 40% image (desktop)
- Single column stacked (mobile)
- Certification badges in grid format (2x2 or 3x2)
- Image: Portrait or action shot, rounded corners (8px)

### Program Cards
- Card structure: Image top, content below
- Aspect ratio: 4:3 for program images
- Hover effect: lift (translateY: -8px) with shadow increase
- Each card includes icon/image, title, 2-3 line description, CTA button
- Border radius: 12px

### Client Transformations
- Before/After slider with 3-5 transformation pairs
- Each slide: side-by-side images with center divider
- Testimonial text below images (max-w-2xl, centered)
- Navigation arrows and dots
- Aspect ratio: 3:4 for transformation photos

### Blog Cards
- Vertical card layout: Image (16:9), title, excerpt, Read More link
- 3-4 cards in grid
- Image overlay with category tag
- Hover: image zoom effect (scale: 1.05)

### Brand Collaboration
- Grayscale logo treatment with hover color reveal
- Even spacing in flexible grid
- Logo height: 60px (desktop) / 40px (mobile)
- "Work With Me" CTA centered below logos

### Social Media Integration
- Instagram grid: Square images (1:1), 9 images visible
- Video section: 2-3 video thumbnails with play overlay icons
- Embed placeholders with aspect ratio containers

### Contact Section
- Centered layout with contact details stacked
- Icon + text pairs (phone, email)
- Social media icon row (larger size: 32px)
- Background treatment: subtle gradient or texture

## Navigation

**Header**:
- Sticky navigation bar
- Logo/name left, menu items right
- Mobile: Hamburger menu
- Height: 80px
- Background: Semi-transparent with backdrop blur on scroll

**Menu Items**: Home, About, Programs, Transformations, Blog, Contact

## Interactive Elements

### Buttons
**Primary CTA**:
- Bold background with high contrast text
- Padding: px-8 py-4
- Border radius: 8px
- Font weight: 600
- Hover: brightness increase (1.1)

**Secondary CTA**:
- Outlined style with transparent background
- Same padding and border radius
- Hover: background fill

**Buttons on Images**: Background blur effect (backdrop-blur-sm) with semi-transparent background

### Animations
- Smooth scroll behavior enabled
- Fade-in on scroll for sections (using Intersection Observer)
- Transition duration: 0.3s for hovers, 0.6s for scroll animations
- Slider transitions: 0.5s ease-in-out

## Images

**Hero Section**: Full-width dynamic training image showing influencer in action (gym setting, outdoor workout, or training session). High-energy, well-lit, professional quality.

**About Me**: Professional portrait or action shot (training, posing) - authentic and approachable.

**Program Cards**: Each program gets a relevant image (home workout setup, gym equipment, meal prep, challenge graphics).

**Transformations**: Before/After client photos - consistent lighting and angles, same poses.

**Blog Cards**: Featured images related to fitness tips (workout demonstrations, nutrition, lifestyle).

**Instagram Grid**: Curated feed showcase (workouts, meals, lifestyle, client wins).

**Video Thumbnails**: Eye-catching frames from YouTube/TikTok content with play button overlays.

## Responsive Breakpoints
- Mobile: < 768px (single column layouts)
- Tablet: 768px - 1024px (2 column grids)
- Desktop: > 1024px (multi-column grids)

## Accessibility
- All interactive elements keyboard accessible
- Social media icons have aria-labels
- Sufficient contrast ratios (4.5:1 minimum)
- Focus states visible on all interactive elements
- Alt text for all images describing content

This design creates a high-impact, conversion-focused portfolio that positions the influencer as a credible fitness authority while maintaining an energetic, motivating aesthetic throughout.
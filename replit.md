# Fitness Influencer Portfolio Website

## Overview

This is a modern fitness influencer portfolio website built as a **frontend-only single-page application**. The site showcases fitness programs, transformations, blog content, and brand collaborations for a fitness coach/influencer. It features a high-energy, action-oriented design inspired by brands like Nike Training Club and Peloton, with bold typography and visual storytelling focused on transformation narratives.

The application is designed to drive user engagement and program enrollment through compelling visual content and clear calls-to-action. **This is a static website with no backend functionality, database, or user authentication.**

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (single-page application pattern)

**UI Component System**
- shadcn/ui component library (New York style variant) providing pre-built, accessible components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (light/dark mode support via HSL color system)

**Design System**
- Typography: Montserrat for headings (bold, athletic feel), Inter for body text
- Spacing system based on Tailwind's 4px unit scale
- Responsive grid layouts: 3-column desktop → 2-column tablet → 1-column mobile
- Component-driven architecture with reusable UI primitives

**State Management**
- React hooks for local component state (useState, useEffect)
- No server state - all content is static
- Custom hooks for cross-cutting concerns (scroll detection, mobile menu)

**Content Structure**
- All content is defined as static JavaScript/TypeScript objects within components
- No API calls, no database queries, no external data fetching
- Images imported directly via Vite's asset handling system

### Server Architecture (Development Only)

**Minimal Express Server**
- Express.js serves the Vite dev server during development
- Production: Static HTML/CSS/JS files served directly
- No API routes, no backend logic, no database connections
- Server only handles static file serving via Vite

### Page Sections

The single-page application includes these sections (in order):
1. **Hero** - Full-screen background with tagline, dual CTAs, and social media icons
2. **About Me** - Bio, certifications, and portrait photo
3. **Programs & Services** - 4 program cards (Home Workouts, Gym Plans, Diet Plans, 30-Day Challenge)
4. **Client Transformations** - Interactive before/after slider with testimonials
5. **Blog** - 4 blog post cards with categories and excerpts
6. **Brand Collaborations** - Partner brand names with "Work With Me" CTA
7. **Contact** - Display-only email, phone, and social media links
8. **Footer** - Copyright notice

**Removed Sections:**
- Social Media Integration (Instagram Feed and Latest Videos) - Previously existed but removed per user request

### External Dependencies

**UI Component Libraries**
- Radix UI for 20+ accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- Embla Carousel for touch-friendly image carousels
- React Icons (specifically react-icons/si for TikTok icon)
- Lucide React for consistent iconography

**Styling & Design**
- Tailwind CSS with custom configuration and design tokens
- PostCSS with Autoprefixer for CSS processing
- Google Fonts integration (Montserrat, Inter, and others)
- class-variance-authority (CVA) for variant-based component styling

**Development Tools**
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)
- TypeScript compiler for type checking (noEmit mode, bundler handles compilation)

**Utilities**
- date-fns for date manipulation
- clsx + tailwind-merge for conditional className handling
- nanoid for unique ID generation
- cmdk for command palette functionality

**Asset Management**
- Static assets served from attached_assets directory
- Generated images stored in attached_assets/generated_images
- Vite alias (@assets) for asset imports
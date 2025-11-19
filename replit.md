# Fitness Influencer Portfolio Website

## Overview

This is a modern fitness influencer portfolio website built as a full-stack web application. The site showcases fitness programs, transformations, blog content, and social media presence for a fitness coach/influencer. It features a high-energy, action-oriented design inspired by brands like Nike Training Club and Peloton, with bold typography and visual storytelling focused on transformation narratives.

The application is designed to drive user engagement and program enrollment through compelling visual content and clear calls-to-action.

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
- TanStack Query (React Query) for server state management and data fetching
- React hooks for local component state
- Custom hooks for cross-cutting concerns (mobile detection, toast notifications)

**Form Handling**
- React Hook Form for performant form state management
- Zod for schema validation via @hookform/resolvers

### Backend Architecture

**Server Framework**
- Express.js running on Node.js for HTTP server
- TypeScript for type safety across server code
- ESM (ES Modules) as the module system

**Development vs Production**
- Development: tsx for running TypeScript directly with hot reload
- Production: esbuild bundles server code into optimized JavaScript
- Vite handles frontend bundling in both environments

**API Design**
- RESTful API pattern with routes prefixed under `/api`
- JSON request/response bodies
- Request logging middleware for API endpoints
- Session support infrastructure via connect-pg-simple (PostgreSQL session store)

**Request Processing**
- Raw body capture for webhook verification scenarios
- JSON and URL-encoded body parsing
- Credential-based request handling (cookies enabled)

### Data Storage

**Database**
- PostgreSQL as the primary database (via Neon serverless driver)
- Drizzle ORM for type-safe database queries and schema management
- Schema-first approach with TypeScript types inferred from database schema

**Schema Design**
- Users table with UUID primary keys, unique usernames, and password fields
- Zod schemas generated from Drizzle schemas for runtime validation
- Migration system via drizzle-kit for schema versioning

**Data Access Layer**
- Storage interface pattern (IStorage) for abstraction
- In-memory implementation (MemStorage) for development/testing
- Database implementation ready to swap in for production
- CRUD operations encapsulated behind storage interface

### External Dependencies

**Database & Infrastructure**
- Neon serverless PostgreSQL for scalable, serverless database hosting
- Database connection via connection string (DATABASE_URL environment variable)

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
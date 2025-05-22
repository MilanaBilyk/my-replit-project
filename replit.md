# InclusiveLearn Platform

## Overview

InclusiveLearn is an educational platform designed to adapt learning materials for children with dyslexia and dysgraphia. The application provides text adaptation tools, text-to-speech functionality, and interactive exercises to create an inclusive learning environment.

The platform is built using a modern full-stack architecture with React on the frontend and Express on the backend, with Drizzle ORM for database interactions. The UI is designed to be accessible, with support for dyslexia-friendly fonts and color schemes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state
- **Accessibility**: Custom hooks for text-to-speech functionality and special fonts

The frontend is organized into a component-based architecture with a clear separation of UI components, pages, and utilities. Components are built using shadcn/ui, which provides a consistent design system based on Radix UI primitives.

### Backend

- **Server**: Express.js with TypeScript
- **API**: RESTful API structure
- **Database Access**: Drizzle ORM
- **Authentication**: Not fully implemented yet, but structure exists in the storage module

The backend follows a modular architecture with separate files for routes, storage access, and server setup.

### Database

- **ORM**: Drizzle ORM
- **Schema**: Defined in `shared/schema.ts` including users, adapted texts, and exercise results tables
- **Storage**: Currently using in-memory storage for development, but designed to use PostgreSQL in production

## Key Components

### Frontend Components

1. **Page Components**:
   - `Home`: Landing page with multiple sections
   - `NotFound`: 404 error page

2. **UI Components**:
   - Comprehensive UI library using shadcn/ui (buttons, inputs, cards, etc.)
   - Custom components like `Header`, `Footer`, `HeroSection`, etc.
   - Text adaptation components

3. **Hooks**:
   - `useSpeech`: Custom hook for text-to-speech functionality
   - `useIsMobile`: Responsive design helper
   - `useToast`: Notification system

### Backend Components

1. **API Routes**:
   - Health check endpoint
   - TTS settings endpoint
   - Structure for future user-related endpoints

2. **Storage**:
   - Interface for database operations
   - Currently implemented with in-memory storage for development

3. **Schema**:
   - User model
   - Adapted texts model
   - Exercise results model

## Data Flow

1. **Text Adaptation Flow**:
   - User inputs or uploads text
   - Frontend sends text to backend for processing
   - Backend applies adaptation rules based on user preferences
   - Adapted text is returned to frontend for display

2. **Exercise Flow**:
   - User selects an exercise
   - Frontend presents interactive elements
   - User completes the exercise
   - Results are sent to backend for storage
   - Progress is tracked for the user

3. **User Settings Flow**:
   - User updates preferences (font, colors, speech settings)
   - Settings are stored in user profile
   - Applied across the platform for a consistent experience

## External Dependencies

1. **UI Components**:
   - Radix UI: Accessible component primitives
   - shadcn/ui: Component library built on Radix
   - Tailwind CSS: Utility-first CSS framework

2. **Data Handling**:
   - React Query: Data fetching and caching
   - Drizzle ORM: Database interactions
   - Zod: Schema validation

3. **Accessibility**:
   - Web Speech API (browser native)
   - Special fonts (OpenDyslexic)

4. **Development**:
   - Vite: Build tool
   - TypeScript: Type safety
   - ESBuild: Bundling

## Deployment Strategy

The application is configured for deployment on Replit with automatic scaling:

1. **Development**:
   - `npm run dev`: Starts Vite dev server and Express backend
   - Hot module reloading for frontend development

2. **Production Build**:
   - `npm run build`: Builds frontend assets with Vite and bundles backend with ESBuild
   - Static assets are served from `dist/public`

3. **Production Run**:
   - `npm run start`: Launches the production server

4. **Database Setup**:
   - Currently using in-memory storage, but designed to use PostgreSQL
   - Database migrations can be applied with `npm run db:push`

The application is configured for automatic deployment through Replit's deployment target system, with appropriate port configuration (5000 locally mapped to 80 externally).
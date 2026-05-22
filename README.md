# AI Fitness Trainer

An intelligent fitness coaching platform that uses AI-powered voice conversations to create personalized workout and diet plans.

## Project Definition

AI Fitness Trainer is a modern web application that replaces traditional fitness apps with an AI-driven voice interface. Users have a natural conversation with an AI assistant to generate fully customized fitness and diet programs based on their goals, fitness level, available equipment, dietary restrictions, and injuries.

The platform eliminates the friction of filling out long forms — users simply talk to the AI, describe their needs, and receive a complete personalized plan.

## Proposal

**Problem:** Most fitness apps use rigid, static plans or tedious form-based generators. They fail to adapt to individual needs, ignore user context (injuries, equipment, dietary restrictions), and offer no conversational experience.

**Solution:** An AI-powered voice agent that conducts an intake conversation, understands the user's unique circumstances, and generates a tailored fitness program — including workout routines with sets/reps and a complete diet plan with daily calorie targets and meal suggestions.

**Key differentiators:**
- Voice-first onboarding via Vapi AI — no forms, just conversation
- Real-time plan generation stored in Convex
- Personalized workout plans with exercise routines, sets, reps, and scheduling
- Personalized diet plans with daily calorie targets and meal suggestions
- Profile management with plan switching and history
- Terminal-style UI aesthetic with cyberpunk design
- Internationalization support (English, German, Portuguese)

## Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 15** (App Router) | React framework with server components, routing, and Turbopack |
| **React 19** | UI component library |
| **TypeScript** | Type-safe development |
| **Convex** | Backend database, real-time sync, serverless functions |
| **Clerk** | Authentication and user management |
| **next-intl** | Internationalization (i18n) with EN, DE, PT locales |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **shadcn/ui** (Radix UI) | Accessible UI component primitives |
| **Lucide React** | Icon library |
| **Vapi AI** | Voice AI SDK for conversational intake |
| **Google Generative AI** | AI model integration for plan generation |
| **class-variance-authority** | Component variant management |
| **tailwind-merge** | Tailwind class conflict resolution |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

Required variables:
- `CONVEX_DEPLOYMENT` — Convex deployment URL
- `NEXT_PUBLIC_CONVEX_URL` — Convex client URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `CLERK_SECRET_KEY` — Clerk secret key
- `NEXT_PUBLIC_VAPI_WORKFLOW_ID` — Vapi AI workflow ID
- `NEXT_PUBLIC_VAPI_API_KEY` — Vapi AI API key

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/[locale]/          # Internationalized routes
│   ├── (auth)/            # Sign-in / Sign-up pages
│   ├── generate-program/  # Voice AI onboarding page
│   ├── profile/           # User profile with plans
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── UserPrograms.tsx
│   ├── NoFitnessPlan.tsx
│   ├── ProfileHeader.tsx
│   ├── TerminalOverlay.tsx
│   └── CornerElements.tsx
├── i18n/                  # Internationalization config
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
├── messages/              # Translation JSON files
│   ├── en.json
│   ├── de.json
│   └── pt.json
├── convex/                # Convex backend functions
├── providers/             # React context providers
├── lib/                   # Utility functions
├── constants/             # Constants and mock data
└── middleware.ts          # i18n + auth middleware
```

## Internationalization

The app supports three locales:
- **English** (`en`) — default
- **German** (`de`)
- **Portuguese** (`pt`)

Locale is detected automatically from the URL path and can be switched via the locale prefix (e.g., `/de/profile`).

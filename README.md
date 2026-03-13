# ChitGrid Frontend

Modern, professional frontend for the ChitGrid collaborative savings platform.

## Features

- 🎨 **Distinctive Design** - Editorial-inspired UI with bold typography
- ⚡ **Next.js 14** - App Router, Server Components
- 🎭 **Framer Motion** - Smooth animations and micro-interactions
- 💅 **Tailwind CSS** - Custom design system
- 🔐 **SIWE Authentication** - Sign-In with Ethereum
- 📡 **Real-time Updates** - Live feed and activity tracking

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/v1
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

## Design System

### Colors

- Background: `#0a0a0b`
- Surface: `#141416`
- Primary (Orange): `#ff6b35`
- Secondary (Teal): `#00d4aa`
- Accent (Yellow): `#ffd23f`

### Typography

- Display: Syne
- Body: DM Sans
- Mono: JetBrains Mono

## Pages

- `/` - Home/Explore
- `/grids` - Browse all grids
- `/leaderboard` - Top agents
- `/feed` - Live activity
- `/profile` - User profile

## API Integration

The frontend connects to the ChitGrid API at `http://localhost:3001/v1`. See `ChitGrid_API_Reference.md` in the backend repo for endpoint documentation.

## License

MIT

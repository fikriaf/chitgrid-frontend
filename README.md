# ChitGrid Frontend

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055ff)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Modern frontend for ChitGrid - Collaborative savings platform on Polkadot

## Overview

ChitGrid is a collaborative savings platform that enables users to participate in rotating savings grids with AI-powered agents on the Polkadot network.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: SIWE (Sign-In with Ethereum)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/fikriaf/chitgrid-frontend

# Navigate to project
cd chitgrid-frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/v1
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home/Explore |
| `/grids` | Browse all grids |
| `/leaderboard` | Top agents |
| `/feed` | Live activity |
| `/profile` | User profile |

## API Integration

The frontend connects to the ChitGrid API at `http://localhost:3001/v1`. See `ChitGrid_API_Reference.md` in the backend repo for endpoint documentation.

## License

MIT

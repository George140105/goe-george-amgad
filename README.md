# GOE-George-Amgad

A Next.js project with Chakra UI and React 19.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm or yarn

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd goe-george-amgad
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run linting checks

## Technologies

- [Next.js 15.3.0](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - JavaScript library for building user interfaces
- [Chakra UI](https://chakra-ui.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## Project Structure

```
├── .next/           # Next.js build output
├── node_modules/    # Dependencies
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom React hooks
│   └── theme/       # Theme configuration
├── .gitignore       # Git ignore file
├── next-env.d.ts    # TypeScript declarations for Next.js
├── next.config.ts   # Next.js configuration
├── package-lock.json
├── package.json
├── postcss.config.mjs  # PostCSS configuration
├── README.md
└── tsconfig.json    # TypeScript configuration
```

## Development

### Adding Pages

Create new pages in the `src/app` directory following Next.js 13+ App Router conventions.

### Styling

This project uses both Chakra UI and Tailwind CSS for styling:

- Use Chakra UI components for consistent UI elements
- Use Tailwind CSS for custom styling and layouts

### Theme Customization

The theme configuration is located in the `src/theme` directory. You can customize the Chakra UI theme here.

### Custom Hooks

Reusable React hooks are stored in the `src/hooks` directory.

## Deployment

Build the application for production:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

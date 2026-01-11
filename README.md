# Currency Conversion Tool

A React application for converting currencies using the CurrencyBeacon API.

## Tech Stack

- **React** 19 with TypeScript
- **Vite** - Fast & light build tool
- **TanStack Query** - Server state management
- **TypeScript** - Type safety

## Requirements

- Node.js 18+ and npm (or other package manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/tomlos/currency-conversion-tool.git
cd currency-conversion-tool
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.sample` to `.env.local`:
   ```bash
   cp .env.sample .env.local
   ```
   - Add your CurrencyBeacon API key to `.env.local`:
   ```
   VITE_CURRENCY_BEACON_API_KEY=your_api_key_here
   ```
   

## Running the Application

### Development Server
Start the development server with hot module reloading:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Linting

Check code quality with ESLint:
```bash
npm run lint
```

## Environment Variables

- `VITE_CURRENCY_BEACON_API_KEY` - Your CurrencyBeacon API key (required)

For local development, create a `.env.local` file (not committed to git). Use `.env.sample` as a template.

## Project Structure & Architecture

For detailed information about tech stack choices, component structure, and design decisions, see [ARCHITECTURE.md](./ARCHITECTURE.md).
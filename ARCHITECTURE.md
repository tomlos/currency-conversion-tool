# Architecture & Design Decisions

## Tech Stack Choices

#### React
- Good for building user interface with reusable components
- Has large community and lots of libraries available
- Makes it easy to update UI when user changes currency or amount

#### TypeScript
- Helps catch bugs early - shows errors before code runs
- Makes code easier to understand - know what type of data each function needs
- Better developer experience

#### Vite
- Builds code much faster than other tools like Webpack or Create React App, good choice for simple POC

#### TanStack Query (React Query)
- Handles data fetching and caching automatically
- Takes care of loading and errors states
- Auto refetches, query invalidations


## Component Structure
#### Feature based architecture
  - Split into `CurrencyConverter` form as feature and `CurrencySelector` component
  - Each component has single responsibility - easier to test and reuse
#### Custom hooks (`useGetConvertedCurrency`, `useGetCurrencies`)
  - separate data fetching logic from UI components
  - Hooks wrap TanStack Query functionality (caching, loading states, error handling)
  - Keeps pure API calls (`currencyApi.ts`) separate from React Query logic

## Styling
#### Plain CSS
- provide only basic styles for elements, good for this POC
- no overkill with extra libraries


## TODO
#### Tests
- unit tests for API and UI elements with react-testing-library, consider of ussage Jest with Vite
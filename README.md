<<<<<<< HEAD
# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 
=======



## Week 3 · React, JSX & Tailwind Frontend Lab

![Application overview](./public/screenshots/Screenshot%202025-11-26%20114726.png)

This project is the Week 3 assignment for the PLP MERN July cohort. It focuses on modern front-end engineering practices with Vite, React, TypeScript, Tailwind CSS, routing, reusable components, hooks, context, and remote data fetching.

###  Tech Stack
- Vite + TypeScript for fast dev/build tooling
- React 18 with React Router for component-driven UI and navigation
- Tailwind CSS 3 for utility-first, fully responsive styling
- Custom hooks and React Context for state management and theming
- JSONPlaceholder REST API integration with pagination, search, and resilient states

### ⚙️ Getting Started
```bash
npm install
npm run dev
```

Other useful scripts:
- `npm run build` – type-checks and builds the production bundle
- `npm run preview` – serves the production build locally

###  Project Structure
```
src/
  components/   # Reusable UI primitives (Button, Card, layout, TaskManager, ApiExplorer…)
  context/      # Theme context powered by a custom localStorage hook
  hooks/        # Composable logic such as useLocalStorage
  pages/        # Routed views (Home, Tasks, Data Explorer, Not Found)
  types/        # Shared TypeScript types (e.g., Task)
  App.tsx       # Router definitions and layout wiring
  main.tsx      # Application bootstrap with ThemeProvider + Router
```

###  Key Features
- **Component architecture**: Navbar, layout shell, buttons, cards, footer, theme toggle, and modular feature components.
- **State management & hooks**: Task Manager uses `useState`, `useEffect`, context, and a custom `useLocalStorage` hook to persist tasks and theme preferences.
- **Task workflow**: Add, toggle, delete, and filter between All/Active/Completed views with live stats cards.
- **Theme system**: Global light/dark mode powered by `ThemeProvider` and Tailwind’s `dark` class strategy.
- **API Explorer**: Fetches posts from JSONPlaceholder with loading/error states, search, pagination (load more), and reset controls.
- **Responsive Tailwind UI**: Every screen adapts to mobile, tablet, and desktop with smooth transitions and subtle shadows.

###  Deployment
1. Build the app: `npm run build`
2. Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages (Vite output is static).
3. Update this README with the live URL and replace the placeholder SVG with real screenshots of your deployed UI.

###  Testing Checklist
- [ ] Verify `npm run dev` renders all routes without console errors.
- [ ] Exercise the Task Manager (add/complete/delete/filter) and confirm persistence after reload.
- [ ] Use the API Explorer search, reset, and load-more controls; observe loading/error states (toggle network offline for error).
- [ ] Toggle between light/dark themes and confirm Tailwind dark classes apply across pages.
- [ ] Run `npm run build` before pushing to ensure type safety and production readiness.

Happy building! Update this README with anything specific to your deployment or extra credit features you add. 🎯

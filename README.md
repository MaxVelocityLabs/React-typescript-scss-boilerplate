# React TypeScript SCSS Boilerplate

A modern, production-ready React boilerplate with TypeScript, Vite, and SCSS. This boilerplate provides a solid foundation for building scalable React applications with industry-standard tools and practices.

## 🤖 AI-Powered Development

This boilerplate includes comprehensive Cursor AI rules covering all aspects of development:

### 📝 File Naming & Structure Rules
- 🎯 **File Naming Conventions** - Complete suffix system: .component.tsx, .service.ts, .hook.ts, .type.ts, .util.ts, .const.ts, .styles.scss, .provider.tsx, .config.ts
- 📁 **Component Structure** - Each component gets its own folder with ComponentName.component.tsx, ComponentName.styles.scss, ComponentName.const.ts
- 📦 **Project Structure** - Detailed folder organization rules for app/, core/, shared/, modules/, styles/ directories
- 🔧 **Constants Management** - Dedicated .const.ts files for component-specific constants, no inline constants

### 🎨 Styling & CSS Rules
- 🎨 **BEM CSS Methodology** - Double underscores for elements (.topbar__left), double hyphens for modifiers
- 📏 **SCSS 7-1 Architecture** - Complete folder structure: abstracts/, vendors/, base/, layout/, components/, pages/, themes/
- 📐 **Rem Units** - 62.5% base font-size (1rem = 10px), consistent rem-based sizing
- 🚫 **No Inline Styles** - Use CSS classes or CSS modules, extract complex styling to SCSS files
- 🔍 **CSS Class Audits** - Regular audits to remove unused CSS classes and redundant styles
- 🎭 **SCSS Variable Management** - Use defined variables, avoid hardcoded values, remove unused variables

### 🔧 Code Quality & Refactoring Rules
- 🧹 **Code Cleanup** - Remove unused code, functions, variables, exports, debug code, commented code
- 📥 **Clean Imports** - Remove unused imports, clean up formatting and spacing
- 🎯 **Single Responsibility** - Each function has one purpose, split complex functions
- 🔍 **Debugging Code Removal** - Remove console.log statements, test functions, keep only essential error logging
- 👤 **Preserve User Changes** - Always check for user modifications before making changes, ask permission
- 📄 **File Creation** - Never use terminal commands, provide complete code blocks for manual creation

### ⚙️ Configuration & Setup Rules
- 📁 **Path Aliases** - Use @app, @shared, @core, @styles, @components instead of relative imports
- 🌍 **Environment Variables** - Use import.meta.env.VITE_* for sensitive configuration
- ⚡ **Hot Reload Configuration** - HMR enabled, error overlay, file watching with polling for WSL/Docker
- 🔧 **ESLint Configuration** - Import sorting, React rules, TypeScript support, consistent formatting
- 📦 **Package Scripts** - Essential scripts for development, building, linting, testing
- ✅ **Setup Validation** - Complete checklist for ESLint, TypeScript, SCSS, path aliases, hot reload

### 📊 State Management & Architecture
- 🔄 **React Context Patterns** - Use Context for cross-component communication, eliminate prop drilling
- 📝 **Form Management** - Move forms inside components that manage their state
- 🎨 **UI Library Integration** - Follow library-specific theme methods (Ant Design tokens, Material-UI sx prop)
- 🎭 **Theme Configuration** - Consistent theme setup, global color management, avoid component-specific overrides

**Benefits:** Comprehensive development guidelines covering file structure, styling, code quality, configuration, and architecture patterns for consistent, maintainable code.

## 📋 Using Cursor Rules

To maximize the benefits of AI-powered development, follow these simple instructions:

### 🔄 For Refactoring Existing Code
When you want to improve or modify existing code, simply ask Cursor:

**"Refactor project code according to rules.mdc"**

Cursor will automatically apply the boilerplate's coding standards, naming conventions, and best practices to your existing code.

### ✨ For Writing New Code
When creating new components, services, or features, ask Cursor:

**"Write new code according to setup.mdc"**

Cursor will generate code that follows the boilerplate's structure, file naming conventions, and architectural patterns.

### 💡 Pro Tips
- 🎯 **Be Specific** - Mention the type of component or feature you want to create
- 📁 **Reference Structure** - Ask Cursor to follow the project's folder structure
- 🎨 **Include Styling** - Request BEM methodology and SCSS patterns
- 🧪 **Add Tests** - Ask Cursor to include Jest + RTL tests for new components

**Example Prompts:**
- "Create a Button component according to setup.mdc with BEM styling and tests"
- "Refactor this component according to rules.mdc to use proper TypeScript types"
- "Write a custom hook according to setup.mdc for API data fetching"

## 🚀 Features

This boilerplate comes packed with modern development tools and best practices:

- ⚡ **Vite** - Lightning-fast build tool and development server with Hot Module Replacement (HMR) for instant updates
- ⚛️ **React 19** - Latest React with modern features including automatic batching, concurrent features, and improved performance
- 🔷 **TypeScript** - Full type safety with strict configuration for better development experience and fewer runtime errors
- 🎨 **SCSS** - 7-1 architecture for scalable styling with variables, mixins, and organized structure
- 📁 **Path Aliases** - Clean imports with @app, @shared, @components, @styles, and @assets for better code organization
- 🔧 **ESLint** - Comprehensive code linting with import sorting, React-specific rules, and TypeScript support
- 💅 **Prettier** - Consistent code formatting with pre-configured rules for TypeScript, React, and SCSS
- 📦 **Hot Reload** - Fast development with Hot Module Replacement preserving component state during updates
- 🧪 **Jest + RTL** - Complete testing framework with React Testing Library for component testing and coverage reports
- 🛣️ **React Router v6** - Modern client-side routing with declarative route definitions and nested routing support
- 🌍 **Environment Variables** - Type-safe environment configuration with Vite's built-in support
- 📦 **Modern React Patterns** - Functional components, hooks, context API, and latest React best practices
- 📚 **TSDoc Documentation** - Comprehensive API documentation generation with examples and type safety
- 🎨 **Airbnb ESLint Style Guide** - Industry-standard code quality rules and formatting
- 🔧 **Normalize CSS** - Cross-browser CSS reset for consistent styling

## 📁 Project Structure

This boilerplate follows a well-organized folder structure that scales with your application:

```
src/
├── app/                    # Main application code
│   ├── App.component.tsx   # Root App component with routing setup
│   ├── core/              # Core business logic and app-level code
│   │   ├── constants/     # Application-wide constants and configuration
│   │   ├── providers/     # React Context providers for global state
│   │   └── config/        # App configuration and environment setup
│   ├── shared/            # Shared resources used across the app
│   │   ├── components/    # Reusable UI components with their own folders
│   │   ├── contexts/      # React Context definitions and providers
│   │   ├── hooks/         # Custom React hooks for shared logic
│   │   ├── types/         # TypeScript type definitions and interfaces
│   │   ├── services/      # API services and external integrations
│   │   └── utils/         # Utility functions and helpers
│   ├── pages/             # Page components and modules
│   │   └── HomePage/      # Homepage feature module
│   │       ├── HomePage.component.tsx  # Homepage component
│   │       └── HomePage.styles.scss   # Homepage-specific styles
│   ├── routes/            # Routing configuration and route definitions
│   │   └── AppRoutes.component.tsx  # Main routing component
│   ├── styles/            # Global SCSS files (7-1 architecture)
│   │   ├── abstracts/     # SCSS variables, functions, mixins, placeholders
│   │   ├── vendors/        # Third-party CSS libraries and resets
│   │   ├── base/           # Base styles, typography, and global resets
│   │   ├── layout/         # Layout components (grid, containers, etc.)
│   │   ├── components/     # Shared utility classes and component styles
│   │   ├── pages/          # Page-specific styles (if needed)
│   │   └── themes/         # Theme variations (dark/light mode, etc.)
│   └── data/              # Static data files and mock data
├── assets/                # Static assets (images, icons, fonts, etc.)
├── main.tsx              # Application entry point with React 18+ createRoot
├── env.type.ts              # TypeScript definitions for environment variables
```

## 🛠️ Available Scripts

This boilerplate includes comprehensive yarn scripts for development, building, testing, and code quality:

- `yarn start` - Start development server with Hot Module Replacement (HMR) and automatic browser opening
- `yarn build` - Build optimized production bundle with TypeScript compilation and Vite bundling
- `yarn preview` - Preview the production build locally to test before deployment
- `yarn test` - Run Jest tests with React Testing Library for component testing
- `yarn test:watch` - Run tests in watch mode for continuous testing during development
- `yarn test:coverage` - Run tests with coverage reports to ensure code quality
- `yarn lint` - Run ESLint to check code quality and enforce coding standards
- `yarn lint:fix` - Automatically fix ESLint errors where possible
- `yarn format` - Format code with Prettier for consistent code style
- `yarn format:check` - Check if code is properly formatted without making changes
- `yarn type-check` - Run TypeScript compiler to check for type errors without emitting files
- `yarn docs` - Generate comprehensive API documentation with TSDoc
- `yarn docs:serve` - Generate documentation in watch mode for development
- `yarn docs:build` - Build documentation and show completion message
- `yarn clean` - Clean build artifacts and cache for fresh builds

## 📁 Path Aliases

This boilerplate uses path aliases to eliminate relative import hell and improve code readability. Configured in both TypeScript and Vite:

- `@app/*` - App-level code and core business logic (src/app/*)
- `@shared/*` - Shared resources, services, hooks, types, and utilities (src/app/shared/*)
- `@core/*` - Core business logic, providers, and configuration (src/app/core/*)
- `@components/*` - Reusable React components (src/components/*)
- `@styles/*` - SCSS files and global styles (src/styles/*)
- `@assets/*` - Static assets like images, icons, fonts (src/assets/*)

**Example usage:**
```typescript
// Instead of relative imports
import { Button } from '../../../shared/components/Button/Button.component';
import { useAuth } from '../../../../shared/hooks/useAuth.hook';

// Use clean path aliases
import { Button } from '@shared/components/Button/Button.component';
import { useAuth } from '@shared/hooks/useAuth.hook';
```

## 🎨 SCSS Architecture

This boilerplate follows the industry-standard 7-1 SCSS architecture for scalable and maintainable styling:

- **abstracts/** - SCSS variables, functions, mixins, and placeholders for reusable code
- **vendors/** - Third-party CSS libraries, resets, and external stylesheets
- **base/** - Base styles, typography, and global resets that apply to the entire application
- **layout/** - Layout components like grid systems, containers, and structural elements
- **components/** - Shared utility classes and component-specific styles
- **pages/** - Page-specific styles for individual routes or features
- **themes/** - Theme variations including dark/light mode and brand-specific styling

**Benefits:** Organized code, easy maintenance, scalable architecture, and clear separation of concerns.

## 📝 File Naming Convention

This boilerplate enforces consistent file naming with descriptive suffixes for immediate identification:

- `.component.tsx` - React components with JSX (e.g., Button.component.tsx)
- `.container.tsx` - Container components that manage state and data (e.g., UserDashboard.container.tsx)
- `.service.ts` - Service classes for API calls and business logic (e.g., ApiService.service.ts)
- `.hook.ts` - Custom React hooks for shared logic (e.g., useAuth.hook.ts)
- `.type.ts` - TypeScript type definitions and interfaces (e.g., User.type.ts)
- `.util.ts` - Utility functions and pure helpers (e.g., formatDate.util.ts)
- `.const.ts` - Constants, enums, and configuration objects (e.g., AppConstants.const.ts)
- `.styles.scss` - Component-specific SCSS styles (e.g., Button.styles.scss)
- `.config.ts` - Configuration files (e.g., DatabaseConfig.config.ts)
- `.provider.tsx` - React Context providers (e.g., ThemeProvider.provider.tsx)

**Benefits:** Clear file purpose, better IDE support, easier code navigation, and consistent team development.

## ⚠️ What's Not Covered

This boilerplate provides a solid foundation, but you'll need to add these features based on your project requirements:

- 🎨 **Custom Variables and Token System** - Design tokens, color palettes, spacing scales, and typography systems for consistent theming *(Coming Soon)*
- 🌙 **Theme Setup** - Dark/light mode implementation, theme switching, and theme-specific styling configurations *(Coming Soon)*
- 🔐 **Authentication System** - User login, registration, JWT handling, and protected routes
- 📊 **State Management** - Simple hook-based solutions (Redux not included, focusing on React hooks and Context API)
- 🌐 **API Integration** - REST/GraphQL clients, error handling, and data fetching patterns *(Coming Soon)*
- 📱 **Responsive Design** - Mobile-first design patterns and breakpoint management *(Coming Soon)*
- ♿ **Accessibility** - ARIA labels, keyboard navigation, and screen reader support
- 🚀 **Performance Optimization** - Code splitting, lazy loading, and bundle optimization
- 🔧 **Build Configuration** - Custom Vite plugins, environment-specific builds, and deployment setup *(Coming Soon)*
- 📦 **Component Library** - Reusable UI components, design system, and component documentation *(Coming Soon)*

**Note:** These features can be added incrementally as your project grows. The boilerplate provides the perfect foundation to build upon!

## 🚀 How to Use This Boilerplate

Follow these steps to customize this boilerplate for your project:

### 📋 Step 1: Remove Demo Content
You can safely remove these demo files and components:

- 🗑️ **Homepage Component** - Delete `src/app/pages/HomePage/` folder entirely
- 🗑️ **Homepage Route** - Remove the homepage route from `src/app/routes/AppRoutes.component.tsx`
- 🗑️ **Demo Styles** - Remove `src/app/pages/HomePage/HomePage.styles.scss` if not needed
- 🗑️ **README Content** - Replace `README.md` with your project documentation

### 🔧 Step 2: Configure Your Project
- 📝 **Update Package Name** - Change name in `package.json` to your project name
- 🌐 **Update HTML Title** - Modify `index.html` title and meta tags
- 🔧 **Environment Variables** - Copy `.env.example` to `.env` and add your values
- 📁 **Project Structure** - Add your components to `src/app/shared/components/`

### 🎨 Step 3: Customize Styling
- 🎨 **SCSS Variables** - Add your design tokens to `src/app/styles/abstracts/_variables.scss`
- 🎯 **Base Styles** - Customize `src/app/styles/base/_base.scss` for your typography and colors
- 📱 **Responsive Design** - Add breakpoints and mobile styles as needed
- 🎭 **Component Styles** - Create `.styles.scss` files for your components

### ⚡ Step 4: Start Development
- 🚀 **Run Development Server** - `yarn start` to begin development
- 📦 **Add Dependencies** - Use `yarn add` to install additional packages for your project
- 🧪 **Write Tests** - Use the Jest + RTL setup for testing your components
- 📝 **Follow Conventions** - Use the established file naming and BEM CSS patterns

**💡 Pro Tip:** Keep the boilerplate structure intact - it's designed to scale with your project. Only remove what you don't need!

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-boilerplate
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## License

**Created by Max Velocity Labs** under MIT License

Use it as you wish! This boilerplate is designed to kickstart your React projects with modern best practices.

Ready to build something amazing? Start coding! 🚀

*Happy coding with React + TypeScript + SCSS!*
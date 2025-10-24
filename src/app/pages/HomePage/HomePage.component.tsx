import '@styles/main.scss';
import './HomePage.styles.scss';

/**
 * Homepage component showcasing the boilerplate features and documentation
 * @component
 * @returns JSX element containing the homepage content
 * @example
 * ```tsx
 * <HomePageComponent />
 * ```
 */
export const HomePageComponent = () => {
  return (
    <div className="homepage">
      <div className="homepage__attribution">
        <h2>🚀 Created by <strong>Max Velocity Labs</strong> under MIT License</h2>
        <p>Use it as you wish! This boilerplate is designed to kickstart your React projects with modern best practices.</p>
      </div>

      <header className="homepage__header">
        <h1>React TypeScript SCSS Boilerplate</h1>
        <p>A modern, production-ready React boilerplate with TypeScript, Vite, and SCSS. This boilerplate provides a solid foundation for building scalable React applications with industry-standard tools and practices.</p>
      </header>

      <main className="homepage__content">
        <section className="homepage__section">
          <h2>🤖 AI-Powered Development</h2>
          <p>This boilerplate includes comprehensive Cursor AI rules covering all aspects of development:</p>
          
          <h3>📝 File Naming & Structure Rules</h3>
          <ul>
            <li>🎯 <strong>File Naming Conventions</strong> - Complete suffix system: .component.tsx, .service.ts, .hook.ts, .type.ts, .util.ts, .const.ts, .styles.scss, .provider.tsx, .config.ts</li>
            <li>📁 <strong>Component Structure</strong> - Each component gets its own folder with ComponentName.component.tsx, ComponentName.styles.scss, ComponentName.const.ts</li>
            <li>📦 <strong>Project Structure</strong> - Detailed folder organization rules for app/, core/, shared/, modules/, styles/ directories</li>
            <li>🔧 <strong>Constants Management</strong> - Dedicated .const.ts files for component-specific constants, no inline constants</li>
          </ul>

          <h3>🎨 Styling & CSS Rules</h3>
          <ul>
            <li>🎨 <strong>BEM CSS Methodology</strong> - Double underscores for elements (.topbar__left), double hyphens for modifiers</li>
            <li>📏 <strong>SCSS 7-1 Architecture</strong> - Complete folder structure: abstracts/, vendors/, base/, layout/, components/, pages/, themes/</li>
            <li>📐 <strong>Rem Units</strong> - 62.5% base font-size (1rem = 10px), consistent rem-based sizing</li>
            <li>🚫 <strong>No Inline Styles</strong> - Use CSS classes or CSS modules, extract complex styling to SCSS files</li>
            <li>🔍 <strong>CSS Class Audits</strong> - Regular audits to remove unused CSS classes and redundant styles</li>
            <li>🎭 <strong>SCSS Variable Management</strong> - Use defined variables, avoid hardcoded values, remove unused variables</li>
          </ul>

          <h3>🔧 Code Quality & Refactoring Rules</h3>
          <ul>
            <li>🧹 <strong>Code Cleanup</strong> - Remove unused code, functions, variables, exports, debug code, commented code</li>
            <li>📥 <strong>Clean Imports</strong> - Remove unused imports, clean up formatting and spacing</li>
            <li>🎯 <strong>Single Responsibility</strong> - Each function has one purpose, split complex functions</li>
            <li>🔍 <strong>Debugging Code Removal</strong> - Remove console.log statements, test functions, keep only essential error logging</li>
            <li>👤 <strong>Preserve User Changes</strong> - Always check for user modifications before making changes, ask permission</li>
            <li>📄 <strong>File Creation</strong> - Never use terminal commands, provide complete code blocks for manual creation</li>
          </ul>

          <h3>⚙️ Configuration & Setup Rules</h3>
          <ul>
            <li>📁 <strong>Path Aliases</strong> - Use @app, @shared, @core, @styles, @components instead of relative imports</li>
            <li>🌍 <strong>Environment Variables</strong> - Use import.meta.env.VITE_* for sensitive configuration</li>
            <li>⚡ <strong>Hot Reload Configuration</strong> - HMR enabled, error overlay, file watching with polling for WSL/Docker</li>
            <li>🔧 <strong>ESLint Configuration</strong> - Import sorting, React rules, TypeScript support, consistent formatting</li>
            <li>📦 <strong>Package Scripts</strong> - Essential scripts for development, building, linting, testing</li>
            <li>✅ <strong>Setup Validation</strong> - Complete checklist for ESLint, TypeScript, SCSS, path aliases, hot reload</li>
          </ul>

          <h3>📊 State Management & Architecture</h3>
          <ul>
            <li>🔄 <strong>React Context Patterns</strong> - Use Context for cross-component communication, eliminate prop drilling</li>
            <li>📝 <strong>Form Management</strong> - Move forms inside components that manage their state</li>
            <li>🎨 <strong>UI Library Integration</strong> - Follow library-specific theme methods (Ant Design tokens, Material-UI sx prop)</li>
            <li>🎭 <strong>Theme Configuration</strong> - Consistent theme setup, global color management, avoid component-specific overrides</li>
          </ul>

          <p><strong>Benefits:</strong> Comprehensive development guidelines covering file structure, styling, code quality, configuration, and architecture patterns for consistent, maintainable code.</p>
        </section>

        <section className="homepage__section">
          <h2>📋 Using Cursor Rules</h2>
          <p>To maximize the benefits of AI-powered development, follow these simple instructions:</p>
          
          <h3>🔄 For Refactoring Existing Code</h3>
          <p>When you want to improve or modify existing code, simply ask Cursor:</p>
          <div className="homepage__code">
            <strong>"Refactor project code according to rules.mdc"</strong>
          </div>
          <p>Cursor will automatically apply the boilerplate's coding standards, naming conventions, and best practices to your existing code.</p>

          <h3>✨ For Writing New Code</h3>
          <p>When creating new components, services, or features, ask Cursor:</p>
          <div className="homepage__code">
            <strong>"Write new code according to setup.mdc"</strong>
          </div>
          <p>Cursor will generate code that follows the boilerplate's structure, file naming conventions, and architectural patterns.</p>

          <h3>💡 Pro Tips</h3>
          <ul>
            <li>🎯 <strong>Be Specific</strong> - Mention the type of component or feature you want to create</li>
            <li>📁 <strong>Reference Structure</strong> - Ask Cursor to follow the project's folder structure</li>
            <li>🎨 <strong>Include Styling</strong> - Request BEM methodology and SCSS patterns</li>
            <li>🧪 <strong>Add Tests</strong> - Ask Cursor to include Jest + RTL tests for new components</li>
          </ul>

          <p><strong>Example Prompts:</strong></p>
          <div className="homepage__code">
            "Create a Button component according to setup.mdc with BEM styling and tests"<br/>
            "Refactor this component according to rules.mdc to use proper TypeScript types"<br/>
            "Write a custom hook according to setup.mdc for API data fetching"
          </div>
        </section>

        <section className="homepage__section">
          <h2>🚀 Features</h2>
          <p>This boilerplate comes packed with modern development tools and best practices:</p>
          <ul>
            <li>⚡ <strong>Vite</strong> - Lightning-fast build tool and development server with Hot Module Replacement (HMR) for instant updates</li>
            <li>⚛️ <strong>React 19</strong> - Latest React with modern features including automatic batching, concurrent features, and improved performance</li>
            <li>🔷 <strong>TypeScript</strong> - Full type safety with strict configuration for better development experience and fewer runtime errors</li>
            <li>🎨 <strong>SCSS</strong> - 7-1 architecture for scalable styling with variables, mixins, and organized structure</li>
            <li>📁 <strong>Path Aliases</strong> - Clean imports with @app, @shared, @components, @styles, and @assets for better code organization</li>
            <li>🔧 <strong>ESLint</strong> - Comprehensive code linting with import sorting, React-specific rules, and TypeScript support</li>
            <li>💅 <strong>Prettier</strong> - Consistent code formatting with pre-configured rules for TypeScript, React, and SCSS</li>
            <li>📦 <strong>Hot Reload</strong> - Fast development with Hot Module Replacement preserving component state during updates</li>
            <li>🧪 <strong>Jest + RTL</strong> - Complete testing framework with React Testing Library for component testing and coverage reports</li>
            <li>🛣️ <strong>React Router v6</strong> - Modern client-side routing with declarative route definitions and nested routing support</li>
            <li>🌍 <strong>Environment Variables</strong> - Type-safe environment configuration with Vite's built-in support</li>
            <li>📦 <strong>Modern React Patterns</strong> - Functional components, hooks, context API, and latest React best practices</li>
            <li>📚 <strong>TSDoc Documentation</strong> - Comprehensive API documentation generation with examples and type safety</li>
            <li>🎨 <strong>Airbnb ESLint Style Guide</strong> - Industry-standard code quality rules and formatting</li>
            <li>🔧 <strong>Normalize CSS</strong> - Cross-browser CSS reset for consistent styling</li>
          </ul>
        </section>

        <section className="homepage__section">
          <h2>📁 Project Structure</h2>
          <p>This boilerplate follows a well-organized folder structure that scales with your application:</p>
          <pre className="homepage__code">
{`src/
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
├── env.type.ts              # TypeScript definitions for environment variables`}
          </pre>
        </section>

        <section className="homepage__section">
          <h2>🛠️ Available Scripts</h2>
          <p>This boilerplate includes comprehensive yarn scripts for development, building, testing, and code quality:</p>
          <div className="homepage__scripts">
            <div className="homepage__script">
              <code>yarn start</code>
              <span>Start development server with Hot Module Replacement (HMR) and automatic browser opening</span>
            </div>
            <div className="homepage__script">
              <code>yarn build</code>
              <span>Build optimized production bundle with TypeScript compilation and Vite bundling</span>
            </div>
            <div className="homepage__script">
              <code>yarn preview</code>
              <span>Preview the production build locally to test before deployment</span>
            </div>
            <div className="homepage__script">
              <code>yarn test</code>
              <span>Run Jest tests with React Testing Library for component testing</span>
            </div>
            <div className="homepage__script">
              <code>yarn test:watch</code>
              <span>Run tests in watch mode for continuous testing during development</span>
            </div>
            <div className="homepage__script">
              <code>yarn test:coverage</code>
              <span>Run tests with coverage reports to ensure code quality</span>
            </div>
            <div className="homepage__script">
              <code>yarn lint</code>
              <span>Run ESLint to check code quality and enforce coding standards</span>
            </div>
            <div className="homepage__script">
              <code>yarn lint:fix</code>
              <span>Automatically fix ESLint errors where possible</span>
            </div>
            <div className="homepage__script">
              <code>yarn format</code>
              <span>Format code with Prettier for consistent code style</span>
            </div>
            <div className="homepage__script">
              <code>yarn format:check</code>
              <span>Check if code is properly formatted without making changes</span>
            </div>
            <div className="homepage__script">
              <code>yarn type-check</code>
              <span>Run TypeScript compiler to check for type errors without emitting files</span>
            </div>
            <div className="homepage__script">
              <code>yarn clean</code>
              <span>Clean build artifacts and cache for fresh builds</span>
            </div>
            <div className="homepage__script">
              <code>yarn docs</code>
              <span>Generate comprehensive API documentation with TSDoc</span>
            </div>
            <div className="homepage__script">
              <code>yarn docs:serve</code>
              <span>Generate documentation in watch mode for development</span>
            </div>
            <div className="homepage__script">
              <code>yarn docs:build</code>
              <span>Build documentation and show completion message</span>
            </div>
          </div>
        </section>

        <section className="homepage__section">
          <h2>📁 Path Aliases</h2>
          <p>This boilerplate uses path aliases to eliminate relative import hell and improve code readability. Configured in both TypeScript and Vite:</p>
          <ul>
            <li><code>@app/*</code> - App-level code and core business logic (src/app/*)</li>
            <li><code>@shared/*</code> - Shared resources, services, hooks, types, and utilities (src/app/shared/*)</li>
            <li><code>@core/*</code> - Core business logic, providers, and configuration (src/app/core/*)</li>
            <li><code>@components/*</code> - Reusable React components (src/components/*)</li>
            <li><code>@styles/*</code> - SCSS files and global styles (src/styles/*)</li>
            <li><code>@assets/*</code> - Static assets like images, icons, fonts (src/assets/*)</li>
          </ul>
          <p><strong>Example usage:</strong></p>
          <pre className="homepage__code">
{`// Instead of relative imports
import { Button } from '../../../shared/components/Button/Button.component';
import { useAuth } from '../../../../shared/hooks/useAuth.hook';

// Use clean path aliases
import { Button } from '@shared/components/Button/Button.component';
import { useAuth } from '@shared/hooks/useAuth.hook';`}
          </pre>
        </section>

        <section className="homepage__section">
          <h2>🎨 SCSS Architecture</h2>
          <p>This boilerplate follows the industry-standard 7-1 SCSS architecture for scalable and maintainable styling:</p>
          <ul>
            <li><strong>abstracts/</strong> - SCSS variables, functions, mixins, and placeholders for reusable code</li>
            <li><strong>vendors/</strong> - Third-party CSS libraries, resets, and external stylesheets</li>
            <li><strong>base/</strong> - Base styles, typography, and global resets that apply to the entire application</li>
            <li><strong>layout/</strong> - Layout components like grid systems, containers, and structural elements</li>
            <li><strong>components/</strong> - Shared utility classes and component-specific styles</li>
            <li><strong>pages/</strong> - Page-specific styles for individual routes or features</li>
            <li><strong>themes/</strong> - Theme variations including dark/light mode and brand-specific styling</li>
          </ul>
          <p><strong>Benefits:</strong> Organized code, easy maintenance, scalable architecture, and clear separation of concerns.</p>
        </section>

        <section className="homepage__section">
          <h2>📝 File Naming Convention</h2>
          <p>This boilerplate enforces consistent file naming with descriptive suffixes for immediate identification:</p>
          <ul>
            <li><code>.component.tsx</code> - React components with JSX (e.g., Button.component.tsx)</li>
            <li><code>.container.tsx</code> - Container components that manage state and data (e.g., UserDashboard.container.tsx)</li>
            <li><code>.service.ts</code> - Service classes for API calls and business logic (e.g., ApiService.service.ts)</li>
            <li><code>.hook.ts</code> - Custom React hooks for shared logic (e.g., useAuth.hook.ts)</li>
            <li><code>.type.ts</code> - TypeScript type definitions and interfaces (e.g., User.type.ts)</li>
            <li><code>.util.ts</code> - Utility functions and pure helpers (e.g., formatDate.util.ts)</li>
            <li><code>.const.ts</code> - Constants, enums, and configuration objects (e.g., AppConstants.const.ts)</li>
            <li><code>.styles.scss</code> - Component-specific SCSS styles (e.g., Button.styles.scss)</li>
            <li><code>.config.ts</code> - Configuration files (e.g., DatabaseConfig.config.ts)</li>
            <li><code>.provider.tsx</code> - React Context providers (e.g., ThemeProvider.provider.tsx)</li>
          </ul>
          <p><strong>Benefits:</strong> Clear file purpose, better IDE support, easier code navigation, and consistent team development.</p>
        </section>

        <section className="homepage__section">
          <h2>⚠️ What's Not Covered</h2>
          <p>This boilerplate provides a solid foundation, but you'll need to add these features based on your project requirements:</p>
          <ul>
            <li>🎨 <strong>Custom Variables and Token System</strong> - Design tokens, color palettes, spacing scales, and typography systems for consistent theming <em>(Coming Soon)</em></li>
            <li>🌙 <strong>Theme Setup</strong> - Dark/light mode implementation, theme switching, and theme-specific styling configurations <em>(Coming Soon)</em></li>
            <li>🔐 <strong>Authentication System</strong> - User login, registration, JWT handling, and protected routes</li>
            <li>📊 <strong>State Management</strong> - Simple hook-based solutions (Redux not included, focusing on React hooks and Context API)</li>
            <li>🌐 <strong>API Integration</strong> - REST/GraphQL clients, error handling, and data fetching patterns <em>(Coming Soon)</em></li>
            <li>📱 <strong>Responsive Design</strong> - Mobile-first design patterns and breakpoint management <em>(Coming Soon)</em></li>
            <li>♿ <strong>Accessibility</strong> - ARIA labels, keyboard navigation, and screen reader support</li>
            <li>🚀 <strong>Performance Optimization</strong> - Code splitting, lazy loading, and bundle optimization</li>
            <li>🔧 <strong>Build Configuration</strong> - Custom Vite plugins, environment-specific builds, and deployment setup <em>(Coming Soon)</em></li>
            <li>📦 <strong>Component Library</strong> - Reusable UI components, design system, and component documentation <em>(Coming Soon)</em></li>
          </ul>
          <p><strong>Note:</strong> These features can be added incrementally as your project grows. The boilerplate provides the perfect foundation to build upon!</p>
        </section>

        <section className="homepage__section">
          <h2>🚀 How to Use This Boilerplate</h2>
          <p>Follow these steps to customize this boilerplate for your project:</p>
          
          <h3>📋 Step 1: Remove Demo Content</h3>
          <p>You can safely remove these demo files and components:</p>
          <ul>
            <li>🗑️ <strong>Homepage Component</strong> - Delete <code>src/app/pages/HomePage/</code> folder entirely</li>
            <li>🗑️ <strong>Homepage Route</strong> - Remove the homepage route from <code>src/app/routes/AppRoutes.component.tsx</code></li>
            <li>🗑️ <strong>Demo Styles</strong> - Remove <code>src/app/pages/HomePage/HomePage.styles.scss</code> if not needed</li>
            <li>🗑️ <strong>README Content</strong> - Replace <code>README.md</code> with your project documentation</li>
          </ul>

          <h3>🔧 Step 2: Configure Your Project</h3>
          <ul>
            <li>📝 <strong>Update Package Name</strong> - Change name in <code>package.json</code> to your project name</li>
            <li>🌐 <strong>Update HTML Title</strong> - Modify <code>index.html</code> title and meta tags</li>
            <li>🔧 <strong>Environment Variables</strong> - Copy <code>.env.example</code> to <code>.env</code> and add your values</li>
            <li>📁 <strong>Project Structure</strong> - Add your components to <code>src/app/shared/components/</code></li>
          </ul>

          <h3>🎨 Step 3: Customize Styling</h3>
          <ul>
            <li>🎨 <strong>SCSS Variables</strong> - Add your design tokens to <code>src/app/styles/abstracts/_variables.scss</code></li>
            <li>🎯 <strong>Base Styles</strong> - Customize <code>src/app/styles/base/_base.scss</code> for your typography and colors</li>
            <li>📱 <strong>Responsive Design</strong> - Add breakpoints and mobile styles as needed</li>
            <li>🎭 <strong>Component Styles</strong> - Create <code>.styles.scss</code> files for your components</li>
          </ul>

          <h3>⚡ Step 4: Start Development</h3>
          <ul>
            <li>🚀 <strong>Run Development Server</strong> - <code>yarn start</code> to begin development</li>
            <li>📦 <strong>Add Dependencies</strong> - Use <code>yarn add</code> to install additional packages for your project</li>
            <li>🧪 <strong>Write Tests</strong> - Use the Jest + RTL setup for testing your components</li>
            <li>📝 <strong>Follow Conventions</strong> - Use the established file naming and BEM CSS patterns</li>
          </ul>

          <p><strong>💡 Pro Tip:</strong> Keep the boilerplate structure intact - it's designed to scale with your project. Only remove what you don't need!</p>
        </section>
      </main>

      <footer className="homepage__footer">
        <p>
          Ready to build something amazing? Start coding! 🚀
        </p>
        <p>
          <em>Happy coding with React + TypeScript + SCSS!</em>
        </p>
      </footer>
    </div>
  );
};

// Jest setup file for testing
import '@testing-library/jest-dom';

// Mock environment variables for tests
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_APP_TITLE: 'Test App',
    VITE_APP_VERSION: '1.0.0',
    VITE_APP_ENVIRONMENT: 'test',
    VITE_API_URL: 'http://localhost:3000/api',
    VITE_API_TIMEOUT: '10000',
    VITE_ENABLE_ANALYTICS: 'false',
    VITE_ENABLE_DEBUG: 'true',
  },
  writable: true,
});

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

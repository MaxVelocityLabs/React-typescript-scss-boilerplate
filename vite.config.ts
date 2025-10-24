import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@shared': path.resolve(__dirname, './src/app/shared'),
      '@core': path.resolve(__dirname, './src/app/core'),
      '@styles': path.resolve(__dirname, './src/app/styles'),
      '@components': path.resolve(__dirname, './src/app/shared/components'),
      '@utils': path.resolve(__dirname, './src/app/shared/utils'),
      '@constants': path.resolve(__dirname, './src/app/core/constants'),
    },
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
});

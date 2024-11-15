import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'features', replacement: '/src/features' },
      { find: 'shared', replacement: '/src/shared' },
    ],
  },
});

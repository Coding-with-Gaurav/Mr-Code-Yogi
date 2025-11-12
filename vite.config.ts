import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mr-Code-Yogi/',  // ← THIS IS REQUIRED FOR GITHUB PAGES
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
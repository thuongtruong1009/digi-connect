import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        'src'
      )}/`,
    },
    // extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [react()],
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    [svgr()],
    stylelint({
      fix: true,
      include: ['src/**/*.{css,scss,sass}'],
      exclude: ['node_modules', 'dist'],
      cache: true,
      emitError: true,
      emitWarning: true,
    }),
  ],
});

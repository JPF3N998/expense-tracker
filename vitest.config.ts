/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

const getResolved = (path: string) => {
  return resolve(__dirname, path);
};

const alias = {
  '@': getResolved('src'),
  '@components': getResolved('src/components'),
  '@config': getResolved('src/config'),
  '@constants': getResolved('src/constants'),
  '@models': getResolved('src/models'),
  '@views': getResolved('src/views'),
};

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    environment: 'jsdom',
  },
  resolve: { alias },
});

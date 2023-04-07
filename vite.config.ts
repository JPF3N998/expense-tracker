import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { getPathAliases } from './devUtils/pathAliases/getPathAliases';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('fluent-'),
        },
      },
    }),
  ],
  resolve: { alias: getPathAliases() },
});

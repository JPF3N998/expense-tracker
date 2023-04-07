import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// @ts-ignore
import pathAliases from './pathAliases.json';

const getResolved = (path: string) => {
  return resolve(__dirname, path);
};

/**
 * Reads
 * @returns Object with the path aliases
 */
const getPathAliases = (aliasesObj: Object) => {
  const output = Object.entries(aliasesObj).reduce(
    (accum, [aliasStr, path]: [string, string]) => {
      accum[aliasStr] = getResolved(path);
      return accum;
    },
    {}
  );
  console.info(`Aliases made: ${Object.keys(output)}`);

  return output;
};

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
  resolve: { alias: getPathAliases(pathAliases) },
});

import { resolve } from 'node:path';
import pathAliases from './pathAliases.json';

const getResolved = (path: string) => {
  return resolve(__dirname, '..', '..', path);
};

/**
 * Reads
 * @returns Object with the path aliases
 */
export const getPathAliases = (aliasesObj: Object = pathAliases) => {
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

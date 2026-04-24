/**
 * Copyright Naparajith T L (DrInfinite) 2026
 * SPDX-License-Identifier: MIT
 */

/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  singleQuote: true,
  proseWrap: 'always',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

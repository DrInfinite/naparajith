/**
 * Copyright Naparajith T L (DrInfinite) 2026
 * SPDX-License-Identifier: MIT
 */

import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    printWidth: 80,
    sortPackageJson: false,
    trailingComma: 'all',
    singleQuote: true,
    jsxSingleQuote: false,
    ignorePatterns: [],
  },
});

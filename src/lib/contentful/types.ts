/**
 * Copyright Naparajith (DrInfinite) T L 2026
 * SPDX-License-Identifier: MIT
 */

import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export type Quote = EntrySkeletonType<
  {
    quoteId: EntryFieldTypes.Symbol;
    author: EntryFieldTypes.Symbol;
    quote: EntryFieldTypes.Text;
    cite: EntryFieldTypes.Symbol;
  },
  'quotes'
>;

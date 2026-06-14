/**
 * Copyright DrInfinite 2024, 2026
 * SPDX-License-Identifier: MIT
 */

import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

type Quote = EntrySkeletonType<
  {
    quoteId: EntryFieldTypes.Symbol;
    author: EntryFieldTypes.Symbol;
    quote: EntryFieldTypes.Text;
    cite: EntryFieldTypes.Symbol;
  },
  'quotes'
>;

export type { Quote };

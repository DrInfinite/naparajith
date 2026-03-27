/**
 * Copyright Naparajith T L (DrInfinite) 2024, 2026
 * SPDX-License-Identifier: MIT
 */

import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export type Quote = EntrySkeletonType<
    {
        quoteId: EntryFieldTypes.Symbol;
        author: EntryFieldTypes.Symbol;
        quote: EntryFieldTypes.Text;
        cite: EntryFieldTypes.Symbol;
    },
    "quotes"
>;

export type LearningObjectives = EntrySkeletonType<
    { objective: EntryFieldTypes.Text },
    "learning"
>;

export type Author = EntrySkeletonType<
    {
        name: EntryFieldTypes.Symbol;
        occupation: EntryFieldTypes.Symbol;
        social: EntryFieldTypes.Symbol;
        image: EntryFieldTypes.Symbol;
    },
    "author"
>;

// export type Article = EntrySkeletonType<
//     {
//         title: EntryFieldTypes.Symbol;
//         description: EntryFieldTypes.Text;
//         slug: EntryFieldTypes.Symbol;
//         created: EntryFieldTypes.Date;
//         updated: EntryFieldTypes.Date;
//         image: EntryFieldTypes.AssetLink;
//         imageSource: EntryFieldTypes.Symbol;
//         author: EntryFieldTypes.EntryLink<Author>;
//         draft: EntryFieldTypes.Boolean;
//         content: EntryFieldTypes.Text;
//     },
//     "article"
// >;

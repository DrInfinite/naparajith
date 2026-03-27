/**
 * Copyright Naparajith T L (DrInfinite) 2024, 2026
 * SPDX-License-Identifier: MIT
 */

import type { Loader } from "astro/loaders";
import * as contentful from "contentful";
import type { EntrySkeletonType } from "contentful";

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export function contentLoader<T extends EntrySkeletonType>(
    content_type: T["contentTypeId"],
) {
    return {
        name: "content-loader",
        load: async ({ store, parseData }) => {
            const content = await contentfulClient.getEntries<T>({
                content_type,
            });

            store.clear();

            for (const item of content.items) {
                const id = item.sys.id;
                const data = await parseData({ id, data: item.fields });

                store.set({ id, data });
            }
        },
    } satisfies Loader;
}

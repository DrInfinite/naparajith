/**
 * Copyright Naparajith (DrInfinite) T L 2026
 * SPDX-License-Identifier: MIT
 */

import type { Loader } from 'astro/loaders';
import { createClient, type EntrySkeletonType } from 'contentful';

const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

function contentLoader<T extends EntrySkeletonType>(
  content_type: T['contentTypeId'],
) {
  return {
    name: 'contentful-content-loader',
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

export { contentfulClient, contentLoader };

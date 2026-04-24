/**
 * Copyright Naparajith (DrInfinite) T L 2026
 * SPDX-License-Identifier: MIT
 */

const EXTERNAL = {
  LINKEDIN: {
    icon: 'in',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/naparajith/',
  },
  LEETCODE: {
    icon: 'lc',
    title: 'Leetcode',
    url: 'https://leetcode.com/u/DrInfinite/',
  },
  GITHUB: {
    icon: 'gh',
    title: 'GitHub',
    url: 'https://github.com/DrInfinite',
  },
  GITLAB: {
    icon: 'gl',
    title: 'GitLab',
    url: 'https://gitlab.com/DrInfinite',
  },
  BLUESKY: {
    icon: 'bsky',
    title: 'Bluesky',
    url: 'https://bsky.app/profile/naparajith.in',
  },
  MASTODON: {
    icon: 'm',
    title: 'Mastodon',
    url: 'https://mastodon.social/@naparajith',
  },
} as const;

const INTERNAL = {
  HOME: {
    CTA: [
      EXTERNAL.LINKEDIN,
      {
        title: 'Resume',
        url: 'https://flowcv.com/resume/mdrssqq018',
      },
      EXTERNAL.GITHUB,
      { title: 'Blog', url: '/blog' },
      { title: 'Quotes', url: '/quotes' },
      // { title: 'Philosophy', url: '/philosophy' },
    ],
  },
} as const;

const EXTERNAL_ARRAY = Object.entries(EXTERNAL).map(([key, value]) => ({
  key,
  value,
}));

export { EXTERNAL, EXTERNAL_ARRAY, INTERNAL };

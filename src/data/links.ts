/**
 * Copyright DrInfinite 2024, 2026
 * SPDX-License-Identifier: MIT
 */

export const socials = [
  {
    href: 'https://flowcv.com/resume/mdrssqq018',
    title: 'Download my latest Resume',
    label: 'Resume',
  },
  {
    href: 'https://github.com/DrInfinite',
    title: 'GitHub - DrInfinite',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/naparajith/',
    title: 'LinkedIn - Naparajith T L',
    label: 'LinkedIn',
  },
  {
    href: 'https://leetcode.com/u/DrInfinite/',
    title: 'Leetcode - DrInfinite',
    label: 'Leetcode',
  },
  {
    href: 'https://bsky.app/profile/naparajith.in',
    title: 'Naparajith | DrInfinite (@naparajith.in)',
    label: 'BlueSky',
  },
  {
    href: 'https://mastodon.social/@naparajith',
    title: 'Naparajith | DrInfinite (@naparajjith.mastodon.social)',
    label: 'Mastodon',
  },
].sort((a, b) => a.label.localeCompare(b.label));

export const links = {
  header: [
    { href: '/', title: 'Home', draft: false },
    { href: '/profile', title: 'Profile', draft: false },
    { href: '/writings', title: 'Writings', draft: true },
    { href: '/projects', title: 'Projects', draft: false },
    { href: '/contact', title: 'Contact', draft: false },
    {
      href: 'https://flowcv.com/resume/264qpgm03ib8',
      title: 'Resume',
      draft: false,
    },
  ],
  home: [
    { href: '/profile', title: 'Profile', draft: false },
    { href: '/writings/blog', title: 'Blog', draft: false },
    { href: '/writings', title: 'Writings', draft: true },
    { href: '/quotes', title: 'Quotes', draft: false },
    { href: '/contact', title: 'Contact', draft: false },
    { href: '/projects', title: 'Projects', draft: false },
    { href: '/design', title: 'Design', draft: true },
    { href: '/pop-culture', title: 'Pop Culture', draft: true },
  ],
  footer: [
    { href: '/policy', title: 'Policy' },
    { href: '/license', title: 'License' },
    { href: '/notice', title: 'Notice' },
  ],
  writings: [
    {
      href: '/writings/blog',
      title: 'Blog',
      description:
        'Writings on topics that interest me but do not fit neatly into any other category.',
      draft: false,
    },
    {
      href: '/writings/activism',
      title: 'Activism',
      description:
        'Writings about causes I support and the social, political, and institutional issues I oppose.',
      draft: true,
    },
    {
      href: '/writings/musings',
      title: 'Musings',
      description:
        'Short reflections, observations, and ideas that I have been pondering.',
      draft: true,
    },
    {
      href: '/writings/philosophy',
      title: 'Philosophy',
      description:
        'Writings on philosophy, metaphysics, ethics, logic, and aesthetics.',
      draft: true,
    },
    {
      href: '/writings/science',
      title: 'Science',
      description:
        'Writings on scientific topics that have captured my interest or piqued my curiosity.',
      draft: true,
    },
    {
      href: '/writings/technology',
      title: 'Technology',
      description:
        'Writings on technical topics such as hardware, software and, systems engineering.',
      draft: true,
    },
  ].sort((a, b) => a.title.localeCompare(b.title)),
};

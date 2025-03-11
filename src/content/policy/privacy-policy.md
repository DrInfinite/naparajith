---
title: Privacy Policy
description: The official Privacy Policy for Naparajith's Portfolio
created: 11-15-2024
updated: 02-10-2025
---

<!--
This website is only meant to showcase the work and and skills of the author,
on a professional level. It also has a blog, containing the author's observations
and opinions on various topics. The views expressed are the author's own.
Copyright (C) 2024  T L Naparajith

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License Version 3 as published
by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/agpl-3.0.txt>.

Contact me through electronic mail: <naparajith@duck.com>
-->

## API Policy

This site references several third-party APIs to provide a better overall
experience. An exhaustive list of such services may be found below:

1. GitHub REST API
2. LeetCode GraphQL API

## Link Policy

Across the site, I have linked to various internal and external sources.
I follow a set of policies while linking you to said sources.
The policies are listed below.

### Links to Internal Sources

1. All links within the website do not have any type of analytics or tracking embedded.
2. With internal links, what you see is what you get.
3. Some JS may be fetched and executed to ensure a smooth and consistent experience.
4. The site and its various pages contain no NSFW or explicit content.
   All content adheres to a strict code.

### Links to External Sources

1. Any and all mentioned external links may contain non-free, commercial
   JavaScript for cookies, analytics and tracking.
2. I neither endorse nor reject any linked sites, their owners, their business
   models, their personal or their political views unless explicitly stated.
3. Externally linked sources may contain text, images or videos that may or
   may not suite the viewer. Either way, I take zero responsibility for appealing
   to or hurting the viewer's sentiments.
4. No external links link to NSFW or explicit content. All content adheres to a
   strict code.

## JavaScript Policy

There are several chunks of JavaScript that are executed to maintain a smooth
user experience across the site. A few kB of JS is shipped and executed in the
client for prefetching routes, handling dates, improving user navigation, switching
between light and dark mode and fetching dynamic content.

While the site may function as intended with JS blocked, some aspects may not
be in the way the user expects. Some elements may break when JS is disabled.

The following JS is executed on client-side to automatically set the theme
based on the Browser/OS theme.

```js
<script is:inline>
 const getThemePreference = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
   return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
 };
 const isDark = getThemePreference() === 'dark';
 document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

 if (typeof localStorage !== 'undefined') {
  const observer = new MutationObserver(() => {
   const isDark = document.documentElement.classList.contains('dark');
   localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
 }
</script>
```

### Disabling JavaScript

Disabling JS doesn't affect any of the site's core functionality, but does
remove automatic theme transitions that are a staple of Modern Applications.
When JS is disabled, the site is forced to be in light mode.

If you are not comfortable with script execution, don't like unauthorized access
to local storage or just simply don't like non-free JavaScript, you can proceed
by disabling JS for this site in particular or by installing the
<a href="https://addons.mozilla.org/en-US/firefox/addon/librejs/" target="_blank">
LibreJS</a> extension (only works on Mozilla-based browsers). Learn more about it
<a href="https://www.gnu.org/software/librejs/" target="_blank">here</a>.

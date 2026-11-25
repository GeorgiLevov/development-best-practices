> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Render MDX in Server Components with centralized component maps and `"use client"` dynamic facades

**When to use**: When building developer-authored documentation or interactive blogs with MDX in Next.js App Router.

**Rule**: Reserve MDX for developer-authored content (choose a visual CMS when non-developers write posts). For new Next.js apps, prefer `@next/mdx` or actively maintained `next-mdx-remote-client` over archived `next-mdx-remote` (archived April 2026; check advisories like CVE-2026-0969). Centralize custom tag overrides (`pre: CodeSnippet`, `a: Link`) and embedded interactive widgets in a shared `COMPONENT_MAP` passed to `<MDXRemote>`. Whenever an MDX widget uses `next/dynamic(() => import('./Widget'))`, put `'use client'` at the top of that facade/barrel file—omitting `'use client'` causes Next.js to bundle the widget on every post instead of lazy-loading it.

**Example**:
```jsx
// components/DivisionGroupsDemo/index.js — 'use client' is mandatory for lazy-loading!
'use client';
import dynamic from 'next/dynamic';

export default dynamic(() => import('./DivisionGroupsDemo'));

// helpers/mdx-components.js
import CodeSnippet from '@/components/CodeSnippet';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';

export default { pre: CodeSnippet, DivisionGroupsDemo };
```

**Avoid**: Adopting archived `next-mdx-remote` in new builds, scattering MDX component mappings inline across routes, or omitting `'use client'` in `next/dynamic` wrapper files.

**Source**: [Intro to MDX — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-blog/01-mdx), [MDX in Next.js — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-blog/01.02-mdx-in-next), [Blog Solution — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-blog/03.01-solution), [project-blog (main...solution) — GitHub](https://github.com/joy-of-react/project-blog/compare/main...solution), [Markdown and MDX — Next.js Docs](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

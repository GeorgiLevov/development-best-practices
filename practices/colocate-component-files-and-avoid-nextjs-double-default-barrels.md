> Full index: [index-react.md](index-react.md)

# Colocate component files by role and avoid double-default barrel exports in Next.js

**When to use**: When organizing directories, component modules, helpers, and hooks in a React or Next.js application.

**Rule**: Organize top-level `src/` directories by technical role (`components/`, `hooks/`, `helpers/`, `utils.ts`, `constants.ts`) rather than fluid product features whose boundaries drift over time. Give each non-trivial component its own folder (`ComponentName/ComponentName.tsx` plus an `index.ts` re-export) colocating sub-components, styles, types, and component-scoped helpers—and ignore rigid "one component per file" dogma for small internal pieces. In Next.js App Router, do not combine `export * from './Component'` with `export { default } from './Component'` inside `index.ts`, which triggers `Syntax error: the name default is exported multiple times`; re-export `default` (and any named exports) explicitly instead.

**Example**:
```text
src/
├── components/
│   └── FileViewer/
│       ├── FileViewer.tsx
│       ├── FileViewer.helpers.ts
│       ├── Sidebar.tsx
│       └── index.ts    # export { default } from './FileViewer';
├── hooks/
├── helpers/            # project-specific logic
└── utils.ts            # generic reusable utilities
```

**Avoid**: Creating `ComponentName/index.js` containing the component implementation (which floods editor tabs with `index.js`), or pairing `export *` with `export { default }` in Next.js App Router barrels.

**Source**: [Delightful React File/Directory Structure — Josh W. Comeau](https://www.joshwcomeau.com/react/file-structure/), [new-component README — GitHub](https://github.com/joshwcomeau/new-component)

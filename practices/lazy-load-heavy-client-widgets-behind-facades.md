> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Lazy-load heavy client widgets behind `next/dynamic` or `React.lazy` facade components

**When to use**: When rendering heavy client-only dependencies (LaTeX/KaTeX, rich editors, charting, 3D canvases, modals) that bloat the initial bundle or hydration budget.

**Rule**: Split heavy client widgets into separate JS chunks using `next/dynamic(() => import('./Widget'), { loading, ssr: false })` inside Client Components (note `ssr: false` is disallowed in Server Components) or module-level `React.lazy(() => import('./Widget'))` paired with `<Suspense fallback={...}>`. Always pass a **static string literal** inside `import('./Widget')` so the bundler can resolve chunks at build time—never dynamic template paths or runtime variables—and never declare `React.lazy()` inside a component render. Even when a heavy widget renders on initial mount, splitting it deprioritizes its hydration; wrap it in a **producer-side facade component** (e.g., `Latex.js`) that encapsulates `dynamic()`, its loading fallback, and third-party API mapping in one place.

**Example**:
```jsx
// components/Latex/Latex.js — producer-side facade hides dynamic() + library API
'use client';
import dynamic from 'next/dynamic';

const DynamicKatex = dynamic(() => import('./KatexRenderer'), {
  loading: () => <span className="math-placeholder">Loading formula...</span>,
  ssr: false,
});

export default function Latex({ children }) {
  return <DynamicKatex expression={children} />;
}
```

**Avoid**: Importing heavy visualization/editor packages eagerly at the top of pages, calling `React.lazy()` inside render (resets state every render), passing dynamic strings to `import()`, or scattering `next/dynamic` calls across every consumer.

**Source**: [Code Splitting & Lazy Loading — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/10-lazy-loading), [lazy-loading-examples — GitHub](https://github.com/joy-of-react/lazy-loading-examples), [Lazy Loading — Next.js Docs](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading), [React.lazy — React Docs](https://react.dev/reference/react/lazy), [Facade Pattern — Refactoring.Guru](https://refactoring.guru/design-patterns/facade)

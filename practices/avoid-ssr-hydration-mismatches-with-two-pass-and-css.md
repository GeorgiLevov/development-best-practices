> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Keep SSR Client Components browser-safe and prevent hydration mismatches without flashes

**When to use**: Whenever a `'use client'` component reads `window`, `localStorage`, viewport width, or live clock values during render.

**Rule**: Client Components (`'use client'`) are still **pre-rendered on the server** during SSR, where `window`, `document`, and `localStorage` do not exist and server/client markup must match during hydration. To read `localStorage` or browser state without throwing or flashing stale defaults, use **two-pass rendering**: initialize state to `null`, render a neutral placeholder/spinner while `null`, read storage in `useEffect` (skipping `localStorage.setItem` while `null`), and update state after mount. Replace JS `useMediaQuery` responsive branching with CSS media queries so layout stays RSC-compatible with zero mismatch. Reserve `suppressHydrationWarning` strictly for narrow, genuinely client-varying text leaves (like live clocks), never whole subtrees.

**Example**:
```jsx
'use client';
import React from 'react';

export default function PersistedCounter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const saved = window.localStorage.getItem('count');
    setCount(saved !== null ? Number(saved) : 0);
  }, []);

  React.useEffect(() => {
    if (count !== null) window.localStorage.setItem('count', String(count));
  }, [count]);

  if (count === null) return <Spinner />;
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

**Avoid**: Reading `window.localStorage` inside `useState(() => ...)` under SSR, defaulting to `0` or empty cart state that flickers after hydration, or silencing real structural bugs with `suppressHydrationWarning`.

**Source**: [SSR Gotchas — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/03.05-ssr-gotchas), [next-ssr-exercises (solution) — GitHub](https://github.com/joy-of-react/next-ssr-exercises/compare/main...solution), [hydrateRoot — React Docs](https://react.dev/reference/react-dom/client/hydrateRoot)

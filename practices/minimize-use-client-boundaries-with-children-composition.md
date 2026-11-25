> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Push `"use client"` boundaries down to interactive leaves and pass Server Components via `children`

**When to use**: When adding state, event listeners, browser hooks, or third-party client libraries inside an App Router layout or page.

**Rule**: Remember that `'use client'` marks the **module boundary** for the client bundle—every component imported directly into a `'use client'` file becomes a Client Component too. Keep pages and layouts as Server Components by pushing `'use client'` down to small interactive leaf components (`Censored`, `MainWrapper`, `LikeButton`) or thin client wrappers around Context/hooks (`SoundEnabledProvider`, `RespectMotionPreferences`). When an interactive wrapper needs to surround heavy Server Components (such as a collapsible syntax-highlighted block or layout provider), pass the Server Component subtree from a server parent via `children` or JSX slot props rather than importing it inside the client file.

**Example**:
```jsx
// Revealable.js ('use client' only wraps toggle state; children stay Server Components)
'use client';
import React from 'react';

export default function Revealable({ children }) {
  const [revealed, setRevealed] = React.useState(false);
  return revealed ? children : <button onClick={() => setRevealed(true)}>Reveal</button>;
}

// page.js (Server Component): <Code /> stays server-only!
import Revealable from './Revealable';
import { Code } from 'bright';

export default function Page({ snippet }) {
  return (
    <Revealable>
      <Code lang="js">{snippet}</Code>
    </Revealable>
  );
}
```

**Avoid**: Putting `'use client'` at the top of `layout.js` or `page.js` just to use one toggle or Context provider, or importing `styled-components` / `createContext` / `useState` directly in Server Components.

**Source**: [Client Components — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/03.03-client-components), [Client Boundaries — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/03.04-client-boundaries), [next-bright (solution) — GitHub](https://github.com/joy-of-react/next-bright/compare/main...solution), [next-hit-counter (toggleable) — GitHub](https://github.com/joy-of-react/next-hit-counter/compare/main...toggleable)

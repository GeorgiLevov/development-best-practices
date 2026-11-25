> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Wrap Motion trees in `<MotionConfig reducedMotion="user">` and provide opacity fallbacks

**When to use**: Whenever an application uses Motion (`motion/react`) for spatial, scale, or layout animations.

**Rule**: Wrap the application root in `<MotionConfig reducedMotion="user">`—encapsulated inside a thin `'use client'` `RespectMotionPreferences` wrapper in Next.js App Router `layout.js` so the layout itself remains a Server Component (and can still use the Metadata API). Motion later added its own `"use client"` directive, but an `"export *"` client-boundary error can remain, so the thin wrapper is still the right fix. `reducedMotion="user"` automatically disables transform and layout animations when the user's OS Reduce Motion setting is enabled while preserving non-vestibular `opacity` and color fades. When custom motion logic needs explicit branching (e.g., swapping slide-in `x`/`y` motion for a pure opacity fade, pausing auto-playing media, or disabling parallax), read `useReducedMotion()` from `"motion/react"`, and continue gating standalone CSS animations behind `@media (prefers-reduced-motion: no-preference)`. When testing, emulate the media query from the browser (Chrome DevTools Command Palette, Ctrl/Cmd+Shift+P, “reduce”) and refresh the page or iframe after toggling it.

**Example**:
```jsx
// RespectMotionPreferences.js ('use client' thin wrapper for Next.js layout.js)
'use client';
import { MotionConfig } from 'motion/react';

export default function RespectMotionPreferences({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

**Avoid**: Relying on `<MotionConfig>` to disable external CSS `@keyframes` animations, putting `'use client'` on `layout.js` directly instead of extracting a thin wrapper, or shipping un-gated parallax/slide motion.

**Source**: [Motion Accessibility — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/05-accessibility), [Disabling Motion in Next.js — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/05.01-disabling-in-next-js), [Motion Accessibility — Whimsical Animations](https://courses.joshwcomeau.com/wham/motion-and-react/05-accessibility), [Disabling Motion in Next.js — Whimsical Animations](https://courses.joshwcomeau.com/wham/motion-and-react/05.01-disabling-in-next-js), [useReducedMotion — Motion Docs](https://motion.dev/docs/react-use-reduced-motion), [Accessible Animations in React — Josh W. Comeau](https://www.joshwcomeau.com/react/prefers-reduced-motion/)

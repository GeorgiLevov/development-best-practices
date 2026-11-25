> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Tune Motion springs intentionally and pass `initial={false}` to suppress mount animations

**When to use**: When building interactive UI movement or physics-driven transitions in React with Motion (`motion/react`).

**Rule**: Import React primitives from `"motion/react"` (or `"motion/react-client"` inside React Server Components—the library renamed from `framer-motion` to `motion`), never call `motion.create()` inside render, and prefer `useMotionValue` over React state for continuous 60–120 fps updates. Add `initial={false}` on stateful `<motion.*>` elements that should reflect their initial state immediately on mount and animate only on subsequent updates. Reach for spring transitions (`type: 'spring'` with `stiffness`, `damping`, `mass`, and `restDelta`, or `visualDuration` + `bounce` when aligning timelines) for spatial motion—using separate enter/exit spring settings where helpful—and leave simple opacity or color fades in native CSS.

**Example**:
```jsx
import { motion } from 'motion/react';

function ToggleThumb({ isOn }) {
  return (
    <motion.span
      className="thumb"
      initial={false}
      animate={{ x: isOn ? 24 : 0 }}
      transition={{ type: 'spring', stiffness: 450, damping: 30, restDelta: 0.01 }}
    />
  );
}
```

**Avoid**: Animating initial mount position unintentionally because `initial={false}` was omitted, calling `motion.create()` inside a component body, or replacing trivial CSS color/opacity hovers with Motion JS overhead.

**Source**: [Intro to Motion — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/01-intro), [Spring Physics — Joy of React](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/02-springs), [Motion Component — Motion Docs](https://motion.dev/docs/react-motion-component), [Transitions — Motion Docs](https://motion.dev/docs/react-transitions), [A Friendly Introduction to Spring Physics — Josh W. Comeau](https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/)

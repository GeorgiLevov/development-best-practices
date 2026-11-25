> Full index: [index.md](index.md)

# Use `@keyframes` for mount, looped, multi-step, and pausable animations

**When to use**: When deciding between `transition` and `@keyframes`, or configuring keyframe loops and scoping.

**Rule**: Use `transition` to smooth state/interaction changes and `@keyframes` for mount-time, looped, multi-step, or pausable (`animation-play-state: running | paused`) animations. Use `animation-direction: alternate` to cut symmetrical grow/shrink loops in half, keep `animation-delay` separate from the `animation` shorthand (so it isn't confused with duration), and scope keyframe names via `styled-components`' `keyframes` helper or unique names; remember CSS applies the timing function *per keyframe step* (use WAAPI if one global ease is required).

**Example**:
```js
import styled, { keyframes } from 'styled-components';

const breathe = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.25); }
`;
const Orb = styled.div`
  animation: ${breathe} 2000ms ease-in-out infinite alternate;
  animation-delay: 300ms;
`;
```

**Avoid**: Writing duplicate `0% -> 50% -> 100%` bounce-back keyframes when `alternate` handles it, or defining generic global `@keyframes fadeIn` names that collide across stylesheets.

**Source**: [Keyframe Animations — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/03-keyframe-animations), [Dynamic Updates — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/05-dynamic-updates), [With styled-components — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/06-with-styled-components), [animation-play-state — Can I use](https://caniuse.com/?search=animation-play-state)

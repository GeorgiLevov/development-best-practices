> Full index: [index-animation.md](index-animation.md)

# Build self-resetting "boop" nudges and subtle icon squash-and-stretch micro-interactions

**When to use**: When adding playful hover/focus icon reactions, directional arrows, or tactile download/action icons.

**Rule**: Instead of leaving an icon tilted awkwardly for the entire hover duration via `:hover`, trigger an ephemeral **"boop"**: apply the transform on `mouseenter`/`focus` (via a reusable `useBoop` hook or `attachBoop` helper) and clear it after `~150ms` so spring easing carries the icon smoothly back to rest (`display: inline-block` on inline spans, `backface-visibility: hidden` to stabilize rendering). Apply Disney's **squash-and-stretch** subtly (`25%–50%` on large elements, exaggerated slightly at `16px–24px` icon sizes so motion reads clearly): when an arrow elongates forward, pull its shaft/tip inward slightly to conserve visual volume, or compress a downward icon against its baseline. When morphing SVG `d` paths for stretchy icons, use Motion (`<motion.path>`) rather than CSS transitions so Safari animates cleanly too.

**Example**:
```js
function attachBoop(trigger, onBoop, onReset, duration = 150) {
  let id;
  trigger.addEventListener('mouseenter', () => {
    window.clearTimeout(id);
    onBoop();
    id = window.setTimeout(onReset, duration);
  });
}
```

**Avoid**: Leaving icons permanently rotated at `15deg` while the cursor rests on them, or stretching an arrow without subtle cross-axis compression.

**Source**: [Boops — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/02.02-boop), [Squash and Stretch — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/03.01-squash-and-stretch), [A Whimsical Twist on Hover Transitions (`Boop`) — Josh W. Comeau](https://www.joshwcomeau.com/react/boop/)

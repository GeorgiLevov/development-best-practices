> Full index: [index-javascript.md](index-javascript.md)

# Write self-documenting timer math, clean up global listeners symmetrically, and guard outside clicks with `.contains()`

**When to use**: When scheduling timeouts/intervals, binding `window`/`document` event listeners, or implementing click-outside dismissals.

**Rule**: Express millisecond durations as readable multiplication (`3 * 60 * 1000` instead of `180000`) so intent is obvious without mental math. Always capture the ID returned by `setInterval` or `setTimeout` and pass it to `clearInterval`/`clearTimeout` during teardown. Register `window`/`document` listeners with a named function reference (or `AbortController` signal) so `removeEventListener` detaches the exact same handler cleanly. For click-outside behavior, check `!containerRef.current?.contains(event.target)` (or walk ancestors) rather than brittle class-name matching. When a timer or listener hook accepts a callback plus a delay or target, keep the delay/target in the Effect dependencies and read the latest callback through `useEffectEvent` so changing the callback does not tear down the interval, timeout, or listener.

**Example**:
```js
const THREE_MINUTES_MS = 3 * 60 * 1000;
const timerId = window.setTimeout(refreshSession, THREE_MINUTES_MS);
// On cleanup: window.clearTimeout(timerId);

// Click-outside check with AbortController + Node.contains()
const controller = new AbortController();
window.addEventListener(
  'pointerdown',
  (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  },
  { signal: controller.signal }
);
```

**Avoid**: Writing opaque millisecond literals like `86400000`, registering anonymous inline functions in `addEventListener` that cannot be removed, or forgetting to clean up timers/listeners.

**Source**: [Intervals and Timeouts — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/13-intervals-and-timeouts), [Global Events — Joy of React](https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/14-global-events), [useOnClickOutside — Joy of React](https://courses.joshwcomeau.com/joy-of-react/bonus-job-hunting-kit/05.08-use-on-click-outside-hook), [Node.contains() — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains), [Click Outside — react.gg](https://fireship.dev/c/react/click-outside-challenge), [Element: pointerdown event — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event), [useInterval — react.gg](https://fireship.dev/c/react/useinterval-challenge), [useTimeout — react.gg](https://fireship.dev/c/react/usetimeout-challenge), [useClickAway — react.gg](https://fireship.dev/c/react/useclickaway-challenge), [useEventListener — react.gg](https://fireship.dev/c/react/useeventlistener-challenge), [useInterval — usehooks](https://usehooks.com/useinterval)

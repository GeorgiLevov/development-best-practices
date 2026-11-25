> Full index: [index-react-hooks.md](index-react-hooks.md)

# Synchronize layout measurements before paint with `useLayoutEffect`

**When to use**: When the first paint must already include a measurement or layout subscription from the DOM or the browser (`getBoundingClientRect`, `ResizeObserver`, window size used to position a tooltip or scale a ruler).

**Rule**: Prefer `useEffect` for ordinary external synchronization so React can paint first. Switch to `useLayoutEffect` only when showing the pre-measurement UI would flicker or place something incorrectly. The hook's API matches `useEffect` (setup, optional cleanup, dependency array), but React runs it and flushes its state updates synchronously after DOM mutations and *before* the browser paints. Use a ref to the node you measure, and always disconnect observers or window listeners in cleanup. The same hook is the right place to lock `document.body` scroll (`overflow: hidden`) and restore the computed original value on cleanup, and to seed viewport size or scroll state that started as `null` on the server. Do not use it to "make an effect feel faster"—blocking paint without a layout dependency delays first paint for no benefit.

**Example**:
```jsx
const ref = React.useRef(null);
const [width, setWidth] = React.useState(null);

React.useLayoutEffect(() => {
  const node = ref.current;
  const observer = new ResizeObserver(([entry]) => {
    setWidth(entry.borderBoxSize[0].inlineSize);
  });
  observer.observe(node);
  return () => observer.disconnect();
}, []);
```

**Avoid**: Defaulting every "read the DOM" effect to `useLayoutEffect`, or leaving a `useEffect` measurement that flashes `null` dimensions (or a tooltip on the wrong side) for a frame.

**Source**: [Managing Advanced Effects — react.gg](https://fireship.dev/c/react/advanced-effects), [React Ruler — react.gg](https://fireship.dev/c/react/react-ruler-challenge), [Flexible Tooltip — react.gg](https://fireship.dev/c/react/flexible-tooltip-challenge), [useLayoutEffect — React Docs](https://react.dev/reference/react/useLayoutEffect), [useWindowSize — react.gg](https://fireship.dev/c/react/usewindowsize-challenge), [useLockBodyScroll — react.gg](https://fireship.dev/c/react/uselockbodyscroll-challenge), [useLockBodyScroll — usehooks](https://usehooks.com/uselockbodyscroll)

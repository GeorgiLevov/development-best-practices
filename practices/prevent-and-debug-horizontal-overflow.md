> Full index: [index.md](index.md)

# Prevent `100vw` horizontal overflow and debug overflowing boxes directly

**When to use**: When unexpected horizontal scrollbars appear on a page or full-width banner.

**Rule**: Prefer `width: 100%` over `width: 100vw` (since `100vw` ignores vertical scrollbar width on Windows/Linux), constrain large fixed widths or decorative SVGs, and debug horizontal overflow by finding elements whose `getBoundingClientRect().right > document.documentElement.clientWidth` (or toggling temporary outlines) instead of masking it with `overflow-x: hidden` on `html`/`body` (which breaks `position: sticky`).

**Example**:
```js
// Quick DevTools console check for overflowing elements
[...document.querySelectorAll('*')].filter(
  el => el.getBoundingClientRect().right > document.documentElement.clientWidth
);
```

**Avoid**: Slapping `body { overflow-x: hidden; }` on a page to hide overflow bugs and silently breaking every `position: sticky` header or sidebar.

**Source**: [Horizontal Overflow — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/14.2-horizontal-overflow)

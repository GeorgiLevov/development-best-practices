> Full index: [index.md](index.md)

# Avoid `transform` or `filter` on ancestors of `position: fixed` elements

**When to use**: When positioning fixed headers, floating action buttons, drawers, or modals.

**Rule**: Keep `position: fixed` elements outside any ancestor that sets `transform`, `filter`, `perspective`, `backdrop-filter`, or `will-change: transform`. Under the CSS specification, those properties turn the ancestor into the containing block for `fixed` descendants, making them anchor and scroll with the ancestor instead of the viewport.

**Example**:
```html
<div class="animated-page">
  <!-- Transformed content lives here -->
</div>
<!-- Fixed overlay mounted outside the transformed ancestor -->
<div class="fixed-banner">...</div>
```

**Avoid**: Wrapping an entire app shell in `transform` (even `transform: translateZ(0)`) or a page-transition wrapper while nesting `position: fixed` elements inside it.

**Source**: [Un-fixing Fixed Elements with CSS Transforms — Eric Meyer](http://meyerweb.com/eric/thoughts/2011/09/12/un-fixing-fixed-elements-with-css-transforms/), [Fixed Positioning — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/13-fixed)

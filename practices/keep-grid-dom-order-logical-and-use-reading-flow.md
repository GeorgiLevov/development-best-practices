> Full index: [index.md](index.md)

# Keep Grid DOM order logical and layer `reading-flow` when layouts reorder

**When to use**: When `grid-area`, explicit `grid-column`/`grid-row`, or `grid-auto-flow: dense` changes visual order relative to HTML.

**Rule**: Keep DOM order aligned with logical reading order first. When responsive `grid-template-areas` or `dense` packing prevents matching DOM order across all viewports, add `reading-flow: grid-rows` (or `grid-columns`, `flex-visual`, or `source-order` with child `reading-order`) as a progressive enhancement (~72.8% global support in Chrome/Edge/Opera/Samsung; not yet in Safari/Firefox) instead of positive `tabindex` hacks.

**Example**:
```css
.responsive-shell {
  display: grid;
  reading-flow: grid-rows;
  grid-template-areas:
    'header'
    'sidebar'
    'main';
}
@media (min-width: 48rem) {
  .responsive-shell {
    grid-template-areas:
      'sidebar header'
      'sidebar main';
    grid-template-columns: 250px 1fr;
  }
}
```

**Avoid**: Using `tabindex="1"`, `"2"`, `"3"` to patch scrambled Grid tab order (which breaks document focus flow and screen-reader trees).

**Source**: [Reading Flow — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/08.01-reading-flow), [Use CSS reading-flow — Chrome for Developers](https://developer.chrome.com/blog/reading-flow), [reading-flow — Can I use](https://caniuse.com/wf-reading-flow)

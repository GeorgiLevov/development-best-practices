> Full index: [index.md](index.md)

# Draw grid dividers via gap-exposed backgrounds or selective cell borders

**When to use**: When designs place hairline rules between CSS Grid cards or newspaper columns.

**Rule**: Because CSS Gap Decorations (`rule`, `row-rule`, `column-rule`, `rule-inset`, `rule-visibility-items`) are currently supported only in Chrome/Edge 149+ (~67.6% global usage), implement full-bleed grid dividers cross-browser by setting `background-color` to the divider color on the grid container with matching `gap` and `padding` and opaque cell backgrounds. Use selective cell borders + symmetric padding (or `rule` progressively) when dividers must be inset from the outer border.

**Example**:
```css
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  padding: 2px;
  background-color: var(--divider-color);
}
.story-grid > article {
  background-color: white;
  padding: 24px;
}
```

**Avoid**: Shipping `rule: 2px solid ...` as the sole mechanism for required grid dividers without checking Firefox/Safari support.

**Source**: [Grid Dividers — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/11-grid-dividers), [Gap Decorations Are Now Available — CSS-Tricks](https://css-tricks.com/css-gap-decorations-now-available/), [CSS Gaps Module Level 1 — W3C](https://www.w3.org/TR/css-gaps-1/#gap-decorations), [CSS rule — Can I use](https://caniuse.com/mdn-css_properties_rule)

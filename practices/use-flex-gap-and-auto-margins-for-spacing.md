> Full index: [index.md](index.md)

# Use `gap` and `margin: auto` to space and split flex items

**When to use**: When adding gutters between flex items or splitting left/right groups in a header or toolbar.

**Rule**: Use `gap` (~97.3% global support) on flex containers for clean inter-item spacing without `:last-child` margin hacks. To push a subset of items to the far edge along the main axis, apply `margin-inline-start: auto` (or `margin-right: auto` on the preceding item) instead of adding empty spacer `<div>` wrappers.

**Example**:
```css
.navbar {
  display: flex;
  align-items: center;
  gap: 16px;
}
.navbar .account-menu { margin-inline-start: auto; }
```

**Avoid**: Wrapping header sub-groups in extra `<div>`s solely to apply `justify-content: space-between`, or using negative-margin wrappers for flex gutters.

**Source**: [Gaps — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/09-gaps), [gap property for Flexbox — Can I use](https://caniuse.com/flexbox-gap)

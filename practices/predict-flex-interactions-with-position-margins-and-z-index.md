> Full index: [index.md](index.md)

# Predict how Flexbox interacts with `position`, margins, `z-index`, and `min-width`

**When to use**: When debugging unexpected sizing, stacking, spacing, or positioned children inside a flex container.

**Rule**: Account for Flexbox's cross-mode rules: `position: absolute` or `fixed` children leave the flex flow entirely; vertical margins never collapse between flex items or across flex containers; `z-index` works directly on static flex children without setting `position: relative`; and flex items default to `min-width: auto`, so add `min-width: 0` when text or children must shrink below intrinsic minimum width.

**Example**:
```css
.flex-card { display: flex; gap: 12px; }
.flex-card .title {
  min-width: 0;
  z-index: 1;
}
```

**Avoid**: Adding `position: relative` purely to unlock `z-index` on a flex child, or expecting adjacent flex margins to collapse like Flow margins.

**Source**: [Flex Interactions — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/11-flex-interactions)

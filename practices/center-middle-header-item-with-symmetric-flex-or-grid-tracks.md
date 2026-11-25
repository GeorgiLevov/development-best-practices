> Full index: [index.md](index.md)

# True-center a middle header slot with symmetric `flex: 1` sides or `1fr auto 1fr`

**When to use**: When a 3-slot header (`[Logo] [Nav or Title] [Actions]`) needs the middle item aligned to the exact center of the header rather than skewed by unequal left/right slot widths.

**Rule**: Do not rely on `justify-content: space-between`, which centers the middle item between the inner edges of its siblings instead of the container. Wrap the left and right slots in equal `flex: 1` containers (rendering an empty `<Filler />` if one side is empty), or use CSS Grid `grid-template-columns: 1fr auto 1fr` with `justify-items: start` and `justify-self: end` on the right slot.

**Example**:
```css
/* Flexbox: symmetric flanking wrappers (even when one side is empty) */
.header-flex { display: flex; align-items: baseline; }
.header-flex .side { flex: 1; }

/* Grid alternative: explicit outer tracks around an auto-sized center */
.header-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: start;
}
.header-grid .right-actions { justify-self: end; }
```

**Avoid**: Using `justify-content: space-between` and wondering why the logo or nav drifts off-center whenever the left logo and right button group differ in width.

**Source**: [sole-and-ankle-v2 (Exercise 2: Header) — CSS for JavaScript Developers](https://github.com/css-for-js/sole-and-ankle-v2), [new-grid-times-v2 (Exercise 1: Header) — CSS for JavaScript Developers](https://github.com/css-for-js/new-grid-times-v2)

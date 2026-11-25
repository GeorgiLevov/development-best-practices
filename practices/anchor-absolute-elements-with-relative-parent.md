> Full index: [index.md](index.md)

# Anchor `position: absolute` children with an explicit `position: relative` parent

**When to use**: When placing badges, icons, or overlays relative to a card, button, or input container.

**Rule**: Set `position: relative` on the intended anchor container because `position: absolute` elements anchor to their nearest non-`static` positioned ancestor (falling back to the initial viewport/document block if none exists). Remember `position: relative` without offsets stays in normal flow, and offsets shift only its paint position without disturbing siblings.

**Example**:
```css
.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  inset-inline-start: 12px;
  inset-block: 0;
  margin-block: auto;
}
```

**Avoid**: Adding `position: absolute` without marking its parent `position: relative`, causing the child to jump relative to the page root when scrolled or resized.

**Source**: [Absolute Positioning — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/02-absolute), [Containing Blocks — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/04-containing-blocks)

> Full index: [index.md](index.md)

# Pad scroll containers with matching negative margins so focus rings aren't clipped

**When to use**: When a horizontally or vertically scrollable list (`overflow: auto`) holds focusable buttons, swatches, or cards with box-shadows.

**Rule**: Because an `overflow: auto` scrollport clips focus outlines and `box-shadow`s right at its padding edge, add `padding` equal to the outline/shadow bleed (e.g., `22px`) and pull the container back out with matching negative `margin` on the affected edges so visual alignment with surrounding content stays intact while focus rings remain unclipped.

**Example**:
```css
.button-row {
  overflow: auto;
  white-space: nowrap;
  padding: 22px;
  margin-left: -22px;
  margin-right: -22px;
  margin-bottom: -22px;
}
```

**Avoid**: Setting `overflow: auto` directly on a tight wrapper around buttons or cards, slicing off half of their `:focus-visible` outlines and drop shadows.

**Source**: [character-creator-v2 (Exercise 3: Overflow) — CSS for JavaScript Developers](https://github.com/css-for-js/character-creator-v2)

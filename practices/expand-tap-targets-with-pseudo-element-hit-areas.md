> Full index: [index.md](index.md)

# Expand tap targets with an invisible pseudo-element hit area

**When to use**: When a small visual control (icon button, compact link) must meet the 44×44px minimum touch target without growing visually.

**Rule**: Make the control a containing block (`position: relative`) and add an absolutely-positioned `::after` with negative `inset` (e.g., `-8px`) so the clickable area extends beyond the visible box. Size the extension so the total target is at least 44×44px (overshoot when possible) and keep neighbouring targets from overlapping.

**Example**:
```css
.icon-button {
  position: relative;
  height: 32px;
}
.icon-button::after {
  --tap-increment: -8px;
  content: '';
  position: absolute;
  inset: var(--tap-increment);
}
```

**Avoid**: Enlarging padding and blowing up the visual design just to satisfy touch-size guidelines, or overlapping hit areas between adjacent controls.

**Source**: [Mobile UX Improvements — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/06-mobile-ux)

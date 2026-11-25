> Full index: [index.md](index.md)

# Keep `::before` and `::after` content decorative only

**When to use**: When adding arrows, badges, shapes, or extra text around an element.

**Rule**: Use `::before` and `::after` only for purely decorative styling with `content: ""`. Put meaningful text or icons in real HTML/component markup, because screen readers handle CSS `content` strings inconsistently.

**Example**:
```css
.badge::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}
```

**Avoid**: Injecting readable words or status messages via `content: "New!"` in CSS.

**Source**: [Pseudo-elements — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.02-pseudo-elements)

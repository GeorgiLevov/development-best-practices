> Full index: [index.md](index.md)

# Use `revert` in media queries to undo inherited layout, flex, or divider rules

**When to use**: When a responsive breakpoint turns off an earlier rule—such as unhiding a `display: none` element, dropping `flex: 1` or `grid-template-columns`, or removing list dividers when columns become rows.

**Rule**: Reach for the CSS `revert` keyword (`display: revert`, `flex: revert`, `grid-template-columns: revert`, `border-bottom: revert`) inside media queries instead of hard-coding guesses like `display: block` (which breaks `<span>`/`<a>` inline defaults) or duplicating base stylesheet values.

**Example**:
```css
.mobile-breadcrumbs { display: none; }

@media (max-width: 59.375rem) {
  .mobile-breadcrumbs { display: revert; }
  .logo-wrapper { flex: revert; }
  .opinion-item:not(:last-of-type) {
    border-bottom: revert;
    padding-bottom: revert;
    margin-bottom: revert;
  }
}
```

**Avoid**: Assuming `display: block` restores every hidden element accurately, or leaving redundant `border-bottom`/`padding-bottom` dividers active when a vertical stack turns horizontal.

**Source**: [sole-and-ankle-revisited-v2 — CSS for JavaScript Developers](https://github.com/css-for-js/sole-and-ankle-revisited-v2), [new-grid-times-v2 — CSS for JavaScript Developers](https://github.com/css-for-js/new-grid-times-v2)

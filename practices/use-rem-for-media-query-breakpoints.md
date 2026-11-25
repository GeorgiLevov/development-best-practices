> Full index: [index.md](index.md)

# Use `rem` for media query breakpoints

**When to use**: When defining viewport breakpoints in `@media (min-width: ...)` or `(max-width: ...)`.

**Rule**: Specify media-query breakpoints in `rem` rather than `px`. Think of breakpoints in terms of available space: if a user doubles their root font size, a `rem` breakpoint shifts them into the single-column layout instead of crowding a sidebar.

**Example**:
```css
/* Equivalent to 800px at default 16px root, 1600px at 32px root */
@media (min-width: 50rem) {
  .layout { display: grid; grid-template-columns: 16rem 1fr; }
}
```

**Avoid**: Using pixel breakpoints when sidebars and text are sized in `rem`.

**Source**: [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)

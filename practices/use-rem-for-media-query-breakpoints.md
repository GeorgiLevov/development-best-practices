> Full index: [index.md](index.md)

# Use `rem` for media query breakpoints

**When to use**: When defining viewport breakpoints in `@media (min-width: ...)` or `(max-width: ...)`.

**Rule**: Specify media-query breakpoints in `rem` or `em` rather than `px`, so a user who enlarges the **browser’s default font size** crosses into the simpler layout instead of crowding a sidebar. In a media query, `em` and `rem` both resolve against that browser default (the user’s preferred font size), **not** the `font-size` on `html` or `:root`—changing the root font in CSS will not shift the breakpoint. (Older engine differences around `em` vs `rem` in queries have been unified; there is no longer a Safari-specific reason to prefer `em`.) Sass `$variables` can store these lengths; CSS custom properties generally still cannot be used as breakpoint values.

**Example**:
```css
/* 50rem = 800px at a 16px browser default; 1600px if the user sets 32px */
@media (min-width: 50rem) {
  .layout { display: grid; grid-template-columns: 16rem 1fr; }
}
```

**Avoid**: Using pixel breakpoints when the layout is sized in `rem`, or assuming `html { font-size: 62.5% }` will move a `rem` media query.

**Source**: [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/), [PX, EM or REM Media Queries? — Zell Liew](https://zellwk.com/blog/media-query-units/), [@for — Beyond CSS](https://module-2.beyondcss.dev/lessons/for)

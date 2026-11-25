> Full index: [index.md](index.md)

# Stick to one media-query direction and name ranges clearly

**When to use**: When writing responsive CSS rules and organizing breakpoints across components.

**Rule**: Remember `@media` blocks add zero selector specificity—source order decides who wins—so place base rules before overrides. Pick one consistent direction (mobile-first `min-width` or desktop-first `max-width`) and reset overridden layout properties with `display: revert` rather than mixing `min-width` and `max-width` (which causes fractional-pixel gaps or overlaps). Choose layout-driven breakpoints in `rem` (e.g., around `550px`/`1100px`/`1500px` in `rem`) with unambiguous range names (`-and-up` / `-only`), never tied to device brands.

**Example**:
```css
.sidebar-layout {
  display: block;
  @media (min-width: 48rem) {
    display: flex;
    gap: 24px;
  }
}
```

**Avoid**: Mixing `@media (max-width: 599px)` and `@media (min-width: 600px)` (which misses `599.5px` on fractional DPI displays) or naming ambiguous `$medium` tokens.

**Source**: [Media Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/04-media-queries), [Breakpoints — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/07-breakpoints), [The 100% correct way to do CSS breakpoints — freeCodeCamp](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)

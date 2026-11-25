> Full index: [index.md](index.md)

# Master CSS `transform` order, percentages, `transform-origin`, and inline limits

**When to use**: When moving, scaling, rotating, or skewing elements without disturbing surrounding layout.

**Rule**: Use `transform` (`translate`, `scale`, `rotate`, `skew`) for layout-free visual transforms, noting percentages inside `translate()` resolve against the element's *own* width/height (ideal with `calc(100% + offset)`). Remember chained transforms apply right-to-left (so `rotate(...) translateX(...)` orbits around `transform-origin`), prefer `transform-origin` to set pivot points, and switch inline `<span>` elements to `inline-block`/`flex`/`grid` because Flow inline elements ignore transforms.

**Example**:
```css
@keyframes orbit {
  from { transform: rotate(0turn) translateX(80px); }
  to { transform: rotate(1turn) translateX(80px); }
}
.badge-pill {
  display: inline-block;
  transform: rotate(-4deg);
}
```

**Avoid**: Applying `transform: rotate(...)` to a bare `<span>` in Flow layout or reversing `translateX` and `rotate` order without checking how `transform-origin` pivots.

**Source**: [Transforms — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/01-transforms), [Create Diagonal Layouts — 9elements](https://9elements.com/blog/create-diagonal-layouts-like-it-s-2020/)

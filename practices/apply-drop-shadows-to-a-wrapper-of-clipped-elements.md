> Full index: [index.md](index.md)

# Apply drop shadows to a wrapper around `clip-path` elements

**When to use**: When a clipped shape (triangle, badge, ribbon) needs a shadow.

**Rule**: Filters are applied before `clip-path`, so a `drop-shadow()` on the clipped element itself gets clipped away. Put `filter: drop-shadow()` on an unclipped parent wrapper so the shadow contours the clipped shape; `box-shadow` won't work because it follows the rectangular box.

**Example**:
```html
<style>
  .shape-wrapper { filter: drop-shadow(1px 2px 4px hsl(0deg 0% 0% / 0.5)); }
  .triangle { clip-path: polygon(0% 100%, 50% 0%, 100% 100%); }
</style>
<div class="shape-wrapper">
  <div class="triangle"></div>
</div>
```

**Avoid**: Adding `filter` or `box-shadow` to the same element as `clip-path` and wondering why no shadow appears.

**Source**: [With Shadows — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/08.03-with-shadows)

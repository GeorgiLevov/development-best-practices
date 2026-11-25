> Full index: [index.md](index.md)

# Cut shapes with `clip-path` and animate polygons with matching points

**When to use**: When creating triangles, angled sections, circular reveals, or shape-morphing micro-interactions.

**Rule**: Use `clip-path: polygon()` (percent coordinates from the top-left), `circle()`, or `ellipse(rx ry at x y)` instead of transparent-border hacks; clipping doesn't affect layout. To transition between polygons, both must have the same number of points (duplicate points to fake fewer sides). Add `will-change: transform` to promote the element to its own layer, which cuts clip-path paint cost dramatically in Chrome (`will-change: clip-path` does not). Support is ~97% for basic shapes.

**Example**:
```css
.play-icon {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transition: clip-path 250ms;
  will-change: transform;
}
.toggle:hover .play-icon,
.toggle:focus-visible .play-icon {
  clip-path: polygon(0% 0%, 100% 50%, 100% 50%, 0% 100%); /* still 4 points */
}
```

**Avoid**: Transitioning between polygons with different point counts (it snaps instead of animating), or animating clip-path without layer promotion on large elements.

**Source**: [Clipping With clip-path — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/08-clip-path), [Animations — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/08.01-animated-clip-path), [Rounded Shapes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/08.02-round-shapes), [CSS clip-path — Can I use](https://caniuse.com/css-clip-path)

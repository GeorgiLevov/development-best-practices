> Full index: [index.md](index.md)

# Share `perspective`, chain `preserve-3d`, and isolate flattening properties

**When to use**: When creating 3D card tilts, intersecting 3D planes, or multi-layer 3D depth scenes.

**Rule**: Set `perspective: <px>` on a shared ancestor (preferring the `perspective` property over per-element `perspective()` when siblings share one 3D space) and apply `transform-style: preserve-3d` to the scene parent *and* every intermediate wrapper (`transform-style: inherit`) between it and the 3D-transformed descendant—because `transform-style` is not inherited. Keep `overflow`, `opacity < 1`, `filter`, `clip-path`, and `mix-blend-mode` on a separate outer wrapper, because applying them to a `preserve-3d` element flattens the 3D rendering context to 2D.

**Example**:
```css
.outer-clip { overflow: hidden; }
.scene {
  perspective: 500px;
  transform-style: preserve-3d;
}
.scene .card-link { transform-style: inherit; }
.scene .card { transform: rotateX(-35deg); }
```

**Avoid**: Putting `overflow: hidden` or `opacity: 0.9` on the same element as `transform-style: preserve-3d`, or expecting grandchildren to participate in 3D depth without forwarding `preserve-3d`.

**Source**: [3D Transforms — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/13-3d-transforms), [3D Rendering Contexts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/14-3d-rendering-contexts), [3D Gotchas — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/15-gotchas), [Things to Watch Out for With CSS 3D — CSS-Tricks](https://css-tricks.com/things-watch-working-css-3d/)

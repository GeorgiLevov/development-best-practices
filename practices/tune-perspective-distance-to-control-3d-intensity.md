> Full index: [index.md](index.md)

# Enable perspective explicitly and tune its distance for 3D intensity

**When to use**: When rotating or translating elements in 3D (`rotateX`, `rotateY`, `translateZ`) and the motion looks flat.

**Rule**: CSS 3D defaults to an isometric-style projection with no foreshortening: distant elements stay the same size, so 3D rotations look flat. Opt into perspective projection with the `perspective` property (on the parent) or `perspective()` (in the transform), and treat its length as the viewer's distance from the screen: smaller values (e.g., `250px`) are dramatic and attention-grabbing, larger values (e.g., `800px`+) are subtle. Use pixels and tune by eye, because physical units like `cm` are fixed at 1cm ≈ 38px and don't reflect real screens.

**Example**:
```css
.card-scene {
  perspective: 800px; /* subtle tilt for content cards */
}
.flip-scene {
  perspective: 250px; /* dramatic, attention-grabbing flip */
}
.card-scene .card:hover {
  transform: rotateY(15deg);
}
```

**Avoid**: Expecting `rotateX()`/`rotateY()` to look 3D without any perspective, picking `perspective: 20cm` hoping it maps to physical distance, or using tiny perspective values on everyday UI where subtle motion is enough.

**Source**: [3D Transforms — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/13-3d-transforms)

> Full index: [index.md](index.md)

# Design cohesive, layered, color-matched shadow tokens

**When to use**: When defining elevation styles for cards, dialogs, menus, and headers across an app or design system.

**Rule**: Use shadows deliberately (to signal elevation and draw attention), lit by one global light source: keep the same x:y offset ratio everywhere, and as elevation increases, grow offset and blur while lowering opacity. Stack several layers with doubling offsets/blur for softer, realistic shadows. Tint shadows with the background's hue (lower saturation and lightness) instead of transparent black, store the color in a `--shadow-color` variable redefined per surface, and publish a small set of elevation tokens (low/medium/high). Avoid animating layered shadows; test on low-end devices.

**Example**:
```css
:root {
  --shadow-color: 220deg 60% 50%;
  --shadow-elevation-low: 0.5px 1px 1px hsl(var(--shadow-color) / 0.7);
  --shadow-elevation-medium:
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333);
}
.dialog { box-shadow: var(--shadow-elevation-medium); }
```

**Avoid**: Tweaking each shadow in isolation (incongruent light directions that read as blurry borders), gray washed-out shadows on colored backgrounds, or animating multi-layer `box-shadow`.

**Source**: [Designing Shadows — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/03.05-shadow-design), [Smoother & sharper shadows with layered box-shadows — Tobias Ahlin](https://tobiasahlin.com/blog/layered-smooth-box-shadows/), [Introducing Shadow Palette Generator — Josh W. Comeau](https://www.joshwcomeau.com/css/introducing-shadow-palette-generator/)

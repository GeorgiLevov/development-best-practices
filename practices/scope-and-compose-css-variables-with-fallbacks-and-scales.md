> Full index: [index.md](index.md)

# Scope CSS variables on `html`, supply fallbacks, and use numbered scales

**When to use**: When defining design tokens, theme palettes, or reactive variables updated by media queries or JS.

**Rule**: Attach global custom properties to `html` (or `:root`) rather than `*` so inheritance flows cleanly down the DOM without matching every node. Scope component-specific overrides lower in the tree, provide safe fallback defaults via `var(--token, fallback)`, mutate reactive CSS variables from JS with `el.style.setProperty(...)`, and organize theme palettes with numbered scales (e.g., `--color-gray-100` to `900`, or `$fs-400` as the default size) rather than brittle names like `light`/`lighter`. Numbered steps leave room to insert a `350` later; a Sass `$size-8: 0.5rem` scale tied to the design’s pixel steps is a good companion for spacing. The same numbering works for Sass `$variables` and CSS custom properties.

**Example**:
```css
html {
  --color-gray-100: hsl(220deg 20% 96%);
  --color-gray-900: hsl(220deg 25% 12%);
  --fs-400: 1.125rem;
}
.input { min-height: var(--min-tap-height, 36px); }
```

**Avoid**: Defining global CSS variables on `*` or naming tokens `--gray-light`/`--gray-lighter` that run out of names as a palette grows.

**Source**: [CSS Variables — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/08-css-variables), [Variable Fragments — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/09-variable-fragments), [Variable Fonts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/11-variable-fonts), [Setting up our variables and how I name mine — Beyond CSS](https://module-1.beyondcss.dev/lessons/setting-up-our-variables-and-how-i-name-mine)

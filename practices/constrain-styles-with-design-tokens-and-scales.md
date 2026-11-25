> Full index: [index.md](index.md)

# Constrain component styles to shared design tokens and scales

**When to use**: When defining font sizes, spacing steps, colors, or radii across components.

**Rule**: Choose values from a constrained scale of design tokens (sizes, spacing, semantic colors) shared between design mockups and code rather than inventing arbitrary pixel values per component. Pull the palette, type sizes, and spacing out of the design first and name them before styling. A token that is useful in code but absent from the mock (for example a `$size-12` mid-step) is fine—label it as such—so you still avoid one-off magic numbers.

**Example**:
```scss
$fs-400: 1.125rem;
$fs-500: 1.3125rem;
$size-8: 0.5rem;
$size-12: 0.75rem; // not in the design, but needed
$size-16: 1rem;
.card { padding: $size-16; font-size: $fs-400; }
```

**Avoid**: Hardcoding near-duplicate magic numbers like `13px`, `14px`, and `15px` across different buttons and cards.

**Source**: [Component Libraries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/10-component-libraries), [Setting up our variables and how I name mine — Beyond CSS](https://module-1.beyondcss.dev/lessons/setting-up-our-variables-and-how-i-name-mine), [Panda CSS](https://panda-css.com/), [Tailwind CSS](https://tailwindcss.com/)

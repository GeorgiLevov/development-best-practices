> Full index: [index.md](index.md)

# Constrain component styles to shared design tokens and scales

**When to use**: When defining font sizes, spacing steps, colors, or radii across components.

**Rule**: Choose values from a constrained scale of design tokens (sizes, spacing, semantic colors) shared between design mockups and code rather than inventing arbitrary pixel values per component.

**Example**:
```js
export const FONT_SIZES = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
};
```

**Avoid**: Hardcoding near-duplicate magic numbers like `13px`, `14px`, and `15px` across different buttons and cards.

**Source**: [Component Libraries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/10-component-libraries), [Panda CSS](https://panda-css.com/), [Tailwind CSS](https://tailwindcss.com/)

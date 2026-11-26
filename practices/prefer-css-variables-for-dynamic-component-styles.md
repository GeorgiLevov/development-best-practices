> Full index: [index.md](index.md)

# Pass dynamic per-instance values via CSS custom properties

**When to use**: When component styles depend on runtime props such as widths, colors, or icon sizes, or when choosing between a Sass `$variable` and a CSS custom property.

**Rule**: Pass continuous or per-instance dynamic values from JavaScript via CSS custom properties on `style={{ '--var': value }}` (or `element.style.setProperty('--var', value)` / `getComputedStyle(el).getPropertyValue('--var')`) while keeping structural rules, pseudo-classes, and media queries in CSS. Native custom properties are live and inherited at computed-value time — unlike Sass/Less variables, which compile away, cannot be updated from JS or animated as keyframe targets, and must be declared inside a selector if used as custom properties (Sass `$vars` may be top-level). Sass variables remain the practical choice for **media-query breakpoints**, which generally still cannot use custom properties, and for compile-time color functions. For discrete states, prefer `data-*` attributes or `$`-prefixed transient props so styling props do not generate excess CSS classes or leak onto HTML attributes.

**Example**:
```jsx
function ProgressBar({ percent }) {
  return <Track style={{ '--progress': `${percent}%` }} />;
}

const Track = styled.div`
  width: var(--progress, 0%);
  @media (prefers-reduced-motion: no-preference) {
    transition: width 150ms ease;
  }
`;
```

**Avoid**: Splitting static and dynamic rules across `style={{ color }}` and stylesheets, forwarding raw styling props like `color` directly onto DOM elements, or expecting a custom property to work as a `@media` breakpoint.

**Source**: [Dynamic Styles — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/08-dynamic-styles), [Custom Properties — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-primer/03-custom-properties), [Variables vs Custom Properties — Beyond CSS](https://module-1.beyondcss.dev/lessons/variables-vs-custom-properties), [Use cases for variables — Beyond CSS](https://module-1.beyondcss.dev/lessons/use-cases-for-variables), [CSS Variables — Can I use](https://caniuse.com/css-variables), [styled-components Basics](https://styled-components.com/docs/basics)

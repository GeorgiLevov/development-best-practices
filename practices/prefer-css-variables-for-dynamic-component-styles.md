> Full index: [index.md](index.md)

# Pass dynamic per-instance values via CSS custom properties

**When to use**: When component styles depend on runtime props such as widths, colors, or icon sizes.

**Rule**: Pass continuous or per-instance dynamic values from JavaScript via CSS custom properties on `style={{ '--var': value }}` while keeping structural rules, pseudo-classes, and media queries in CSS. For discrete states, prefer `data-*` attributes or `$`-prefixed transient props so styling props do not generate excess CSS classes or leak onto HTML attributes.

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

**Avoid**: Splitting static and dynamic rules across `style={{ color }}` and stylesheets, or forwarding raw styling props like `color` directly onto DOM elements.

**Source**: [Dynamic Styles — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/08-dynamic-styles), [CSS Variables — Can I use](https://caniuse.com/css-variables), [styled-components Basics](https://styled-components.com/docs/basics)

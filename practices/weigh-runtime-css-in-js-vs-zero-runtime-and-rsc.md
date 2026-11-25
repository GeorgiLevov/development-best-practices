> Full index: [index.md](index.md)

# Weigh runtime CSS-in-JS against zero-runtime and RSC constraints

**When to use**: When selecting a CSS-in-JS solution or adopting React Server Components (RSC).

**Rule**: Measure actual bundle and mount performance under SSR rather than trusting stale assumptions, and check RSC compatibility and maintainer status before adopting a runtime library for new projects. In RSC, React Context (`ThemeProvider`) does not run on the server—use CSS custom properties (e.g., `createTheme`) for theming, avoid `@import` inside global style components, and prefer `:first-of-type`/`:nth-of-type()` over `:first-child`/`:nth-child()` if inline `<style>` tags are emitted as siblings.

**Example**:
```jsx
// RSC-safe theming via CSS variables instead of JS context interpolations
const Card = styled.div`
  background: var(--color-surface, #ffffff);
  &:first-of-type { margin-top: 0; }
`;
```

**Avoid**: Assuming runtime `ThemeProvider` context works in Server Components, or rewriting a large working app purely over micro-benchmarks without measuring real user UX.

**Source**: [CSS in React Server Components — Josh W. Comeau](https://www.joshwcomeau.com/react/css-in-rsc/), [styled-components Advanced / RSC](https://styled-components.com/docs/advanced), [styled-components Maintenance Update](https://opencollective.com/styled-components/updates/thank-you)

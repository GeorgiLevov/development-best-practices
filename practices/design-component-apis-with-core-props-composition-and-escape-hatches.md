> Full index: [index.md](index.md)

# Design component APIs with core props, composition, and escape hatches

**When to use**: When adding variants or overrides to reusable UI components.

**Rule**: Expose a small set of core props (`variant`, `size`, `mood`) for common needs; extract rare one-off designs via wrapper composition (`styled(Button)`) instead of bloating the base component with flags; and forward `className` plus `{...delegated}` props intentionally (placing `{...delegated}` before props you must lock down, and explicitly merging `className` or `style` when needed) so conventions are effortless while exceptions remain possible.

**Example**:
```jsx
function Button({ variant = 'fill', className, children, ...delegated }) {
  return (
    <BaseButton {...delegated} data-variant={variant} className={className}>
      {children}
    </BaseButton>
  );
}

const PromoButton = styled(Button)`
  background: orange;
`;
```

**Avoid**: Adding dozens of single-use boolean/style props to a base component, or swallowing `className` and ARIA/data attributes passed by callers.

**Source**: [Escape Hatches — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/14-escape-hatches), [In Summary — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/16-summary), [Spread Syntax — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

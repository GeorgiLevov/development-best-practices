> Full index: [index.md](index.md)

# Design component APIs with core props, composition, and escape hatches

**When to use**: When adding variants or overrides to reusable UI components.

**Rule**: Expose a small set of core props (`variant`, `size`, `mood`) for common needs; extract rare one-off designs via wrapper composition (`styled(Button)`) instead of bloating the base component with flags; and forward `className` plus `{...delegated}` props intentionally to the primary interactive element inside multi-node wrappers (not a layout `<div>`). Place `{...delegated}` before attributes you must lock down (`type`, `id`), default `className = ''` when interpolating template strings (``className={`toggle ${className}`}``), and merge `className` or `style` explicitly so conventions are effortless while exceptions remain possible.

**Example**:
```jsx
function Toggle({ label, checked, onClick, className = '', ...delegated }) {
  const id = React.useId();
  return (
    <div className="wrapper">
      <label htmlFor={id}>{label}</label>
      <button
        {...delegated}
        id={id}
        className={`toggle ${className}`}
        type="button"
        aria-pressed={checked}
        onClick={onClick}
      >
        <span className="ball" />
      </button>
    </div>
  );
}
```

**Avoid**: Adding dozens of single-use boolean/style props to a base component, spreading `{...delegated}` onto an outer wrapper `<div>` instead of the `<input>`/`<button>`, or omitting `className = ''` in template strings (rendering `"undefined"`).

**Source**: [Escape Hatches — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/14-escape-hatches), [Delegating Props Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/03.01-delegating-props-exercises), [In Summary — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/16-summary), [Spread Syntax — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

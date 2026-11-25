> Full index: [index-react.md](index-react.md)

# Name components in `PascalCase` and destructure prop defaults

**When to use**: When defining React components and specifying optional prop defaults.

**Rule**: Start every React component name with an uppercase letter (`PascalCase`) so JSX compiles `<Tag />` as a component reference instead of a `'tag'` HTML tag string. Destructure props in the parameter list using JavaScript default values (`{ count = 0 }`) rather than `||` fallbacks (which clobber falsy values like `0`, `false`, or `''`), `??` noise inside JSX, or legacy `defaultProps`. Remember also that nested JSX placed between `<Comp>...</Comp>` tags overwrites any `children={...}` attribute on the opening tag.

**Example**:
```jsx
function RatingBadge({ score = 0, label = 'Rating', children }) {
  return (
    <div className="badge">
      <span>{label}: {score}</span>
      {children}
    </div>
  );
}
```

**Avoid**: Naming components in lowercase (`function card() {}`), using `score || 5` when `0` is valid, or passing both `children="a"` and inner tag content.

**Source**: [Basic Syntax — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/03.02-basic-syntax), [Props — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/03.03-props), [Children — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/03.04-children), [ReactJSXElement.js — React](https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js)

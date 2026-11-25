> Full index: [index.md](index.md)

# Group sibling JSX elements with React Fragments (`<>...</>`) instead of extra `<div>`s

**When to use**: When a React component needs to return multiple top-level elements (such as `<GlobalStyles />` alongside `<App />`, or multiple table cells, flex items, or grid children).

**Rule**: Wrap sibling JSX nodes in a React Fragment (`<>...</>` or `<React.Fragment key={...}>`) rather than introducing a throwaway `<div>`. Fragments satisfy JSX's single-root requirement without adding real DOM nodes that break Flexbox/Grid parent-child relationships or invalid HTML nesting like `<div>` inside `<tr>` or `<ul>`.

**Example**:
```jsx
function AppShell() {
  return (
    <>
      <WallArt src="..." alt="..." caption="..." width={250} />
      <GlobalStyles />
    </>
  );
}
```

**Avoid**: Wrapping every multi-node return in an extra `<div>` that interferes with Flexbox/Grid children, `nth-child` selectors, or table/list markup.

**Source**: [Exercises (pt. 2) — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/09-exercises-pt2)

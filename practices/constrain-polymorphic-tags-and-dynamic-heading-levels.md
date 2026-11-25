> Full index: [index-react-patterns.md](index-react-patterns.md)

# Constrain polymorphic `as` tags and adapt heading levels to nesting depth

**When to use**: When exposing polymorphic tags (`as`), link-vs-button switching, or reusable `<Section>`/`<Heading>` components.

**Rule**: Keep polymorphism strictly semantic: validate a flexible `as` prop against a `VALID_TAGS` allowlist (e.g., `['ul', 'ol']`—or use a simple `ordered` boolean when only two tags make sense) so callers cannot inject arbitrary `<div>` or off-semantics tags. When switching between `<a>` and `<button>`, test `typeof href === 'string'` rather than truthy `href` so an empty `href=""` still renders an anchor. For reusable headings and sections, compute `<h1>`–`<h6>` levels from a `level` prop or nested React Context instead of hardcoding `<h2>` inside every section.

**Example**:
```jsx
const VALID_LIST_TAGS = ['ul', 'ol'];

function List({ as: Tag = 'ul', children, ...delegated }) {
  if (!VALID_LIST_TAGS.includes(Tag)) {
    throw new Error(`Invalid List tag: ${Tag}. Expected ul or ol.`);
  }
  return <Tag {...delegated}>{children}</Tag>;
}

const LevelContext = React.createContext(1);

function Heading({ children }) {
  const level = Math.min(React.useContext(LevelContext), 6);
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}
```

**Avoid**: Rendering `<Tag>` from an unchecked `as` prop without validation, using `href ? 'a' : 'button'` (which turns `href=""` into a `<button>`), or hardcoding `<h2>` inside nested card/section primitives.

**Source**: [Polymorphism — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/05-polymorphism), [Polymorphism Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/05.01-polymorphism-exercises), [Passing Data Deeply with Context — React Docs](https://react.dev/learn/passing-data-deeply-with-context)

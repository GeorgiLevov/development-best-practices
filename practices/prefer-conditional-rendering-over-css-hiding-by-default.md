> Full index: [index-react.md](index-react.md)

# Prefer conditional rendering over CSS `display: none` by default

**When to use**: When deciding whether to omit React elements from JSX or toggle `display: none` with CSS.

**Rule**: Default to conditional rendering (`&&`, ternary, or early return) so inactive UI does not consume DOM memory or mount unused subtrees. Switch to toggling `display: none` (e.g., `style={isOpen ? undefined : { display: 'none' }}` or a utility class) only when you explicitly need to preserve internal DOM/scroll state across toggles or when testing on low-end devices proves remounting causes perceptible lag. Both approaches remove content from visual display, keyboard tabbing, and screen readers.

**Example**:
```jsx
function DetailsPanel({ isOpen, children }) {
  if (!isOpen) return null;
  return <section className="panel">{children}</section>;
}
```

**Avoid**: Rendering dozens of heavy hidden DOM trees with `display: none` everywhere up front, or switching to CSS hiding without measuring an actual toggle bottleneck.

**Source**: [Showing and Hiding — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/07.04-vs-hiding)

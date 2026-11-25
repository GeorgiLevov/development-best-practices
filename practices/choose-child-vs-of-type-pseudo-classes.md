> Full index: [index.md](index.md)

# Choose `:first-of-type` vs `:first-child` intentionally

**When to use**: When targeting the first or last instance of a specific tag inside a container.

**Rule**: Use `:first-child` / `:last-child` only when the element must literally be the first or last node in its parent. Use `:first-of-type` / `:last-of-type` when other tag types (like an `<h1>` before `<p>`) are siblings.

**Example**:
```css
/* Works even when <h1> precedes the first <p> */
section p:first-of-type {
  font-weight: 600;
}
```

**Avoid**: Using `p:first-child` inside a section that starts with a heading, causing the rule never to match.

**Source**: [Pseudo-classes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.01-pseudo-classes)

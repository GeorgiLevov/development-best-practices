> Full index: [index.md](index.md)

# Keep a single source of styles with child-owned contextual rules

**When to use**: When a low-level primitive needs an automatic style tweak inside another common component (such as a link inside a quote or a button inside a group).

**Rule**: Co-locate common contextual overrides inside the target child component (for example `${QuoteContent} & { ... }`) rather than letting parent components reach inside and mutate child styles. Reserve parent-referencing selectors for frequent, small primitives so you do not pull heavy one-off parent pages into every bundle.

**Example**:
```jsx
const TextLink = styled.a`
  color: blue;
  text-decoration: none;

  ${QuoteContent} & {
    color: inherit;
    text-decoration: underline;
  }
`;
```

**Avoid**: Scattering overrides for `<TextLink>` across `<Aside>`, `<Quote>`, and `<Footer>`, or importing a heavy feature page component into a base `<Button>` file.

**Source**: [Single Source of Styles — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/15-single-source), [In Summary — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/16-summary)

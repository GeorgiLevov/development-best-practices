> Full index: [index-sass.md](index-sass.md)

# Nest Sass selectors shallowly and always inspect the compiled CSS

**When to use**: When grouping related rules in Sass, including property nesting.

**Rule**: Nesting is a writing convenience that compiles to descendant (or, with `&`, compound) selectors. Prefer about **two levels**, and never emit a selector you would not type in plain CSS (`nav ul li a` is a smell). After every non-trivial nest, look at the compiled CSS—Sass can turn five source lines into a much more specific rule. Property nesting (`font: { size: 1rem; family: sans-serif; }`) needs the colon after the property name or Sass will treat it as a selector. If the output looks wrong, flatten the nest rather than “fixing” it with more specificity.

**Example**:
```scss
.primary-nav {
  ul { margin: 0; }          // compiles to .primary-nav ul
  a { color: inherit; }      // .primary-nav a — not nav ul li a
}
```

**Avoid**: Nesting three or four levels by default, or assuming the Sass you wrote is what the browser will see.

**Source**: [Nesting — Beyond CSS](https://module-1.beyondcss.dev/lessons/nesting-cerulean), [A word of caution — Beyond CSS](https://module-1.beyondcss.dev/lessons/a-word-of-caution), [Nesting properties — Beyond CSS](https://module-1.beyondcss.dev/lessons/nesting-properties)

> Full index: [index.md](index.md)

# Apply vertical Flow margins in a single consistent direction

**When to use**: When spacing stacked typography or block elements in Flow layout without Flexbox/Grid `gap`.

**Rule**: Push adjacent Flow siblings in one direction only—such as always using `margin-bottom` (zeroed on `:last-child`) or `margin-top` on `* + *`—instead of mixing top and bottom margins on different elements so spacing stays predictable and easy to audit.

**Example**:
```css
.prose > * + * {
  margin-top: 1rem;
}

.prose > h2 {
  margin-top: 2rem;
}
```

**Avoid**: Scattering both `margin-top` and `margin-bottom` arbitrarily across sibling components, forcing readers to calculate collapse interactions everywhere.

**Source**: [Rules of Margin Collapse — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/12-rules-of-margin-collapse), [Layout Best Practices — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/14-best-practices)

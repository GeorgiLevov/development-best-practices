> Full index: [index-sass.md](index-sass.md)

# Nest media queries inside the selector and place them last

**When to use**: When a component’s layout or type changes at a breakpoint.

**Rule**: Nest `@media` inside the rule it belongs to so you do not retype the selector, and you can nest further selectors inside that query. Repeated media-query blocks in the compiled CSS are usually fine—servers compress repeated text extremely well; optimize images and JS first. Keep the rule organized: declarations for the element, then shallow child nests, then media queries at the end (including queries that restyle those children). Scattered mid-rule queries become harder to scan than the extra compiled bytes they save.

**Example**:
```scss
.hero {
  padding: 1rem;
  .title { font-size: 1.5rem; }

  @media (min-width: 45em) {
    padding: 2rem;
    .title { font-size: 2.5rem; }
  }
}
```

**Avoid**: Redeclaring the same selector in a file-level `@media` just to avoid a nested query, or sprinkling queries between declarations so the component’s default and breakpoint styles are no longer in one place.

**Source**: [Nesting media queries — Beyond CSS](https://module-1.beyondcss.dev/lessons/nesting-media-queries), [Staying organized with nesting — Beyond CSS](https://module-1.beyondcss.dev/lessons/staying-organized-with-nesting), [Repeated CSS compression demo](https://server-size-optimizations-for-repeated-css.netlify.app/)

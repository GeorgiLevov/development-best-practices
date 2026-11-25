> Full index: [index.md](index.md)

# Prefer simple, readable code over clever CSS or JS tricks

**When to use**: When deciding between a terse layout or data-munging trick and a slightly longer, explicit implementation.

**Rule**: Optimize shared codebases for quick human comprehension rather than brevity. Choose explicit properties, clear selectors, and well-contained complexity over fragile CSS hacks or overly terse abstractions, and make sure you can trace and explain every line you ship (even when AI tools assist).

**Example**:
```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 48rem) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
```

**Avoid**: Packing clever `flex-basis: calc((45rem - 100%) * 999)` or cryptic shorthand tricks into shared stylesheets where teammates struggle to debug them.

**Source**: [Clever code considered harmful — Joshua Comeau](https://medium.com/@joshuawcomeau/clever-code-considered-harmful-a1fb1054e8a1), [Fluid Design — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/17-fluid-design), [The Post-Developer Era — Josh W. Comeau](https://www.joshwcomeau.com/blog/the-post-developer-era/)

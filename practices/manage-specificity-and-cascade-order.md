> Full index: [index.md](index.md)

# Keep CSS specificity flat and rely on cascade order

**When to use**: When authoring selectors or resolving competing style rules.

**Rule**: Keep selector specificity low and uniform (single class or component-scoped rule) rather than escalating to IDs or deep chains. When rules tie on specificity, the last rule declared in the stylesheet wins—not the order of names in the HTML `class` attribute—and `!important` should be reserved for temporary debugging or rare utility overrides.

**Example**:
```css
/* Both have specificity (0, 1, 0); source order decides */
.btn { background: slategray; }
.btn-primary { background: royalblue; }
```

**Avoid**: Reordering classes in `class="btn-primary btn"` expecting HTML attribute order to override earlier stylesheet rules, or stacking `!important` to win specificity wars.

**Source**: [The Cascade — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/02-the-cascade)

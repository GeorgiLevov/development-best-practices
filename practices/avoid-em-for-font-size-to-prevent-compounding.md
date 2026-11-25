> Full index: [index.md](index.md)

# Avoid `em` for `font-size` to prevent compounding

**When to use**: When setting `font-size` on components or nested HTML elements.

**Rule**: Do not use `em` for `font-size` in component architectures. Because `font-size` is inherited, nested `em` values multiply together (`1.125 × 0.9 × 1.25`) and make a component's size depend on where it is mounted. Use `rem` instead.

**Example**:
```css
article p {
  font-size: 1.125rem; /* Always 1.125x root, regardless of parent */
}
```

**Avoid**: Setting `font-size: 0.9em` on containers or reusable components.

**Source**: [Units — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/06-units), [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)

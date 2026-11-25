> Full index: [index.md](index.md)

# Map `px` to `rem` with CSS variables or `calc()`

**When to use**: When translating pixel-based design specs (e.g., Figma) into accessible `rem` values.

**Rule**: Keep the root `1rem = 16px` baseline intact and make `rem` ergonomic by defining a CSS variable scale (`--font-size-md: 1rem`, `--18px: 1.125rem`) or calculating inline with `calc(18rem / 16)`.

**Example**:
```css
:root {
  --14px: 0.875rem;
  --16px: 1rem;
  --18px: 1.125rem;
  --24px: 1.5rem;
}
h2 { font-size: var(--24px); }
```

**Avoid**: Guessing decimal `rem` values inconsistently or changing `html` font-size to `62.5%`.

**Source**: [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)

> Full index: [index.md](index.md)

# Never set `html` `font-size` in `px` or `62.5%`

**When to use**: When configuring global base typography in root stylesheets.

**Rule**: Never set `html { font-size: 16px; }`, which overrides user browser font preferences. Also avoid the `html { font-size: 62.5%; }` trick, which shrinks third-party packages and browser extensions that assume `1rem` is readable text.

**Example**:
```css
/* Leave html font-size untouched (100% of user's browser preference) */
body {
  font-size: 1.125rem;
}
```

**Avoid**: Redefining `1rem` to `10px` with `html { font-size: 62.5%; }` just to simplify mental math.

**Source**: [Units — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/06-units), [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)

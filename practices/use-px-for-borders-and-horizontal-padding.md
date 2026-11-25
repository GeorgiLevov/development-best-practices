> Full index: [index.md](index.md)

# Use `px` for borders and horizontal padding

**When to use**: When setting border thickness or horizontal padding around text containers.

**Rule**: Use `px` for borders and horizontal container padding. Scaling horizontal gutters in `rem` squeezes available line width precisely when users crank up their font size, leaving only a few awkward words per line.

**Example**:
```css
.card {
  border: 1px solid hsl(0deg 0% 80%);
  padding-inline: 16px;
}
```

**Avoid**: Setting `padding: 2rem` horizontally on narrow mobile containers.

**Source**: [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)

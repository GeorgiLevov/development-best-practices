> Full index: [index.md](index.md)

# Use `rem` for typography and reading margins

**When to use**: When sizing text (`font-size`) and functional vertical spacing between headings or paragraphs.

**Rule**: Set `font-size` in `rem` so users who configure a larger browser baseline font size get larger text automatically without having to zoom every site. Use `rem` or `em` for vertical margins that separate paragraphs and headings.

**Example**:
```css
h2 {
  font-size: 1.5rem;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
```

**Avoid**: Setting `font-size: 16px`, which ignores the user's browser default font-size setting.

**Source**: [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)

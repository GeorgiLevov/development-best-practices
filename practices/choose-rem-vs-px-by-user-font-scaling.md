> Full index: [index.md](index.md)

# Choose `rem` vs `px` by user font-scaling intent

**When to use**: When deciding between `rem` and `px` for any CSS length property.

**Rule**: Ask: 'Should this value grow when a user increases their browser's default font size?' If yes, use `rem` (or `em`); if no, use `px`. Test ambiguous cases by setting your browser's default font size to 32px–48px.

**Example**:
```text
Font size, vertical reading margins, media queries -> rem (scales with user preference)
1px hairlines, horizontal card padding -> px (preserves line width)
```

**Avoid**: Blanket rules like 'never use px' or 'use px everywhere'.

**Source**: [Units — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/06-units), [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)

> Full index: [index.md](index.md)

# Debug CSS surprises from first principles

**When to use**: When CSS behaves unexpectedly and the root cause is unclear.

**Rule**: Treat surprising layout behavior as an opportunity to fix a gap in your mental model: check MDN or the CSSWG spec for the exact property rules, and test a minimal isolated reproduction rather than throwing random declarations until it looks close.

**Example**:
```text
1. Strip unrelated styles into a minimal repro.
2. Read the MDN specification summary for the property's layout mode and edge cases.
3. Verify the mental model change with one targeted edit.
```

**Avoid**: Piling on compensatory margins, negative offsets, or `!important` guesses that make stylesheets brittle.

**Source**: [Color Formats in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/color-formats/)

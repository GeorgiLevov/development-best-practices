> Full index: [index.md](index.md)

# Separate CSS multi-value tokens with whitespace

**When to use**: When writing shorthand or multi-token CSS declarations.

**Rule**: Never put spaces inside a CSS property name, and always separate distinct values in a multi-value declaration with at least one space so the parser does not discard the declaration.

**Example**:
```css
.card {
  margin: 0 auto;
  padding-left: 16px;
}
```

**Avoid**: Writing `margin: 0auto;` or `padding- left: 16px;`, which makes the declaration invalid.

**Source**: [Getting started with CSS — MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

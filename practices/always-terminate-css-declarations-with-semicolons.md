> Full index: [index.md](index.md)

# Always terminate CSS declarations with semicolons

**When to use**: When writing or editing any CSS declaration block.

**Rule**: Include a trailing semicolon (`;`) on every CSS declaration, including the last one in a rule. CSS does not perform automatic semicolon insertion like JavaScript, so a missing semicolon breaks the following declaration.

**Example**:
```css
a {
  color: deeppink;
  text-decoration: none;
}
```

**Avoid**: Omitting `;` on a declaration and then adding another property underneath it.

**Source**: [Exercises — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.04-exercises)

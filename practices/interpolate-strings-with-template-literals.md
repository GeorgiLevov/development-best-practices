> Full index: [index-javascript.md](index-javascript.md)

# Interpolate and write multiline strings with template literals

**When to use**: When composing strings from expressions, or when a string spans more than one line (including small HTML or SQL snippets).

**Rule**: Prefer backtick template literals over quote concatenation. Embed expressions with `${...}` and keep multiline text in a single literal so you do not manage `\n`, escaped quotes, or chains of `+`. Keep interpolated expressions short and readable; pull complex work into a named binding first.

**Example**:
```js
const name = 'Ada';
const message = `Hello, ${name}.
Your invoice is ready.`;
```

**Avoid**: Building strings with `'Hello, ' + name + '.'` or escaping quotes and newlines by hand when a template literal would be clearer.

**Source**: [Template Literals — Fireship Modern JavaScript](https://fireship.dev/c/modern-javascript/template-literals)

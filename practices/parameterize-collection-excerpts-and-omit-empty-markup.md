> Full index: [index-astro.md](index-astro.md)

# Parameterize collection excerpts and omit empty markup

**When to use**: When article cards need a preview of body text that varies from several lines to none at all.

**Rule**: Prefer one preview component with an `excerptLength` prop (default `0`) over a family of near-identical card components. Slice the body with that length, and render the excerpt element only when the length is greater than zero so you never ship an empty `<p>…</p>`. If Prettier breaks a `&&` expression across lines, wrap the JSX in parentheses. If previews truly diverge in layout, compose through a slot instead of growing a length prop.

**Example**:
```astro
---
const { excerptLength = 0, body } = Astro.props;
const excerpt = body.substring(0, excerptLength);
---
{excerptLength > 0 && <p>{excerpt}…</p>}
```

**Avoid**: Duplicating the card component once per excerpt length, or always rendering a paragraph that is empty when the length is zero.

**Source**: [Creating the excerpts — Beyond CSS](https://module-5.beyondcss.dev/lessons/creating-the-excerpts), [Controlling the excerptLength — Beyond CSS](https://module-5.beyondcss.dev/lessons/controlling-the-excerptlength), [How to create excerpts with Astro — Paulie Scanlon](https://www.paulie.dev/posts/2023/09/how-to-create-excerpts-with-astro/)

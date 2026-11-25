> Full index: [index.md](index.md)

# Reserve underlines for links

**When to use**: When emphasizing prose text or styling anchor elements.

**Rule**: Do not use `text-decoration: underline` on non-interactive text for visual emphasis, because users expect underlines to be clickable links. Conversely, keep underlines on inline prose links (only removing them on unmistakable UI nav links).

**Example**:
```css
nav a {
  text-decoration: none;
}
article a {
  text-decoration: underline;
}
```

**Avoid**: Underlining headings or important sentences that are not links, or stripping underlines from inline article links.

**Source**: [Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/07-typography), [Getting started with CSS — MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

> Full index: [index.md](index.md)

# Use `<blockquote>`, `<q>`, and `<cite>` strictly for real quotations

**When to use**: When marking up pull quotes, inline quotations, testimonials, or work attributions.

**Rule**: Use `<blockquote>` for standalone quotations and `<q>` for inline quotes (never as decorative callout boxes, since screen-reader users jump directly between blockquotes), use `<cite>` for the title of a quoted work (not the author's name unless citing a handle/work), and wrap a quote plus its attribution in `<figure>` and `<figcaption>`.

**Example**:
```html
<figure>
  <blockquote>
    <p>Make the common case easy and exceptions possible.</p>
  </blockquote>
  <figcaption>
    — <cite>Component Architecture Notes</cite>
  </figcaption>
</figure>
```

**Avoid**: Wrapping styled info banners or tips in `<blockquote>` just to reuse quote styling.

**Source**: [Quoting in HTML: Quotations, Citations, and Blockquotes — CSS-Tricks](https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/), [styled-components 101 — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/03-styled-components-101)

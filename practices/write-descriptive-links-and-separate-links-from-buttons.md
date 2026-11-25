> Full index: [index.md](index.md)

# Write descriptive link text and separate `<a href>` from `<button>`

**When to use**: When adding navigation links or interactive triggers in markup.

**Rule**: Use `<a href="...">` exclusively for navigation (links activate with Enter, not Space, and omit `href` becomes non-focusable) and use `<button>` for in-page actions. Give every link self-explanatory text that makes sense out of context rather than "click here" or "read more", and avoid redundant `title` attributes on links.

**Example**:
```html
<a href="/pricing">Compare team pricing plans</a>
<button type="button" onclick="openFilters()">Filter results</button>
```

**Avoid**: Rendering `<a onClick={...}>` without an `href` for modal triggers, or writing ambiguous links like `<a href="/docs">Read more</a>`.

**Source**: [Creating Valid and Accessible Links — The A11Y Project](https://www.a11yproject.com/posts/2019-02-15-creating-valid-and-accessible-links/), [Flow Layout — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/09-flow-layout)

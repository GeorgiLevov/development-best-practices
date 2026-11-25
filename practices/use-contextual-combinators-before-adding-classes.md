> Full index: [index.md](index.md)

# Use contextual combinators before adding extra classes

**When to use**: When styling standard tags like `<a>` differently across semantic regions (e.g. `<nav>`, `<article>`, `<aside>`).

**Rule**: Style region-specific variations using semantic ancestor combinators (such as `nav a` or `.recipe aside a`) rather than modifying every inner HTML tag with redundant utility classes.

**Example**:
```css
.recipe a { color: deeppink; text-decoration: none; }
.recipe a:hover { text-decoration: underline; }
.recipe aside a { color: black; text-decoration: underline; }
.recipe aside a:hover { text-decoration: none; }
```

**Avoid**: Adding custom classes to every inline anchor inside markdown or CMS-authored HTML.

**Source**: [Exercises — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.04-exercises)

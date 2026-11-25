> Full index: [index.md](index.md)

# Keep a single `<h1>` per page for the main title, never on site logos

**When to use**: When building global site headers, navbars, and page title templates.

**Rule**: Use exactly one `<h1>` per page to identify the primary content heading (article title, product name, or view heading). Never wrap a recurring navbar brand logo in `<h1>`, which forces every route to announce the site name as its top-level document heading instead of the page's actual topic.

**Example**:
```html
<header><a href="/" class="brand-logo">Acme Store</a></header>
<main><h1>Running Shoes</h1></main>
```

**Avoid**: Placing `<h1><a href="/">Brand</a></h1>` in the shared navbar component across every route.

**Source**: [Exercises: Header Logo — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/04-exercises)

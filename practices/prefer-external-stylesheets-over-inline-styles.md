> Full index: [index.md](index.md)

# Prefer external stylesheets over inline styles

**When to use**: When styling multi-page sites or production web applications.

**Rule**: Keep CSS in external `.css` files (linked via `<link rel="stylesheet">` or imported by your bundler) rather than inline `style` attributes or duplicated `<style>` tags. Reserve inline styles for dynamic runtime values from JavaScript or restrictive environments like HTML email.

**Example**:
```html
<link rel="stylesheet" href="styles.css" />
<span class="highlight">Important</span>
```

**Avoid**: Hardcoding presentational `style="..."` attributes across HTML elements, which scatters changes and mixes content with styling.

**Source**: [Getting started with CSS — MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

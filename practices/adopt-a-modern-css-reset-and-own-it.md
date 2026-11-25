> Full index: [index.md](index.md)

# Adopt a modern CSS reset and own every rule

**When to use**: When bootstrapping a new web application or component library stylesheet.

**Rule**: Start with a concise, modern CSS reset whose rules you understand and maintain rather than copying a legacy reset verbatim. Reset margins without stripping `<dialog>` centering (`*:not(dialog)`), make replaced media `display: block; max-width: 100%` (with `max-width: revert` as an inline escape hatch), prevent text overflow with `overflow-wrap: break-word` and `text-wrap: pretty`/`balance`, isolate the app root stacking context, and gate keyword height transitions behind `prefers-reduced-motion: no-preference`.

**Example**:
```css
*, *::before, *::after { box-sizing: border-box; }
*:not(dialog) { margin: 0; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
#root, #__next { isolation: isolate; }
```

**Avoid**: Pasting giant third-party reset files you cannot explain or blindly zeroing `dialog { margin: 0 }`, which breaks native modal centering.

**Source**: [A Modern CSS Reset — Josh W. Comeau](https://www.joshwcomeau.com/css/custom-css-reset/), [Built-in Styles and Inheritance — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/01-built-ins-and-inheritance)

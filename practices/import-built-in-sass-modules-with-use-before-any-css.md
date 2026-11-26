> Full index: [index-sass.md](index-sass.md)

# Import built-in Sass modules with `@use` before any compiled CSS

**When to use**: When calling built-in Sass functions other than the few remaining globals, or when replacing a deprecated `@import`.

**Rule**: `@import` is deprecated; `@use` and `@forward` replace it (`@forward` barrels belong to later architecture work). Built-in modules are loaded as `@use "sass:color"` (also `math`, `map`, `list`, `string`, `selector`, `meta`). Every `@use` must appear **before any compiled CSS**. Call members through the namespace (`color.scale()`, `math.div()`, `map.get()`), not a bare `lighten()` / `mix()`—those global color helpers are deprecated. The only functions that stay global are `rgb()`/`hsl()` (the Sass wrappers) and `if()`. User modules will not use the `sass:` prefix. Load what you need; do not assume a module is already in scope.

**Example**:
```scss
@use "sass:color";
@use "sass:math";

.button:hover {
  background: color.scale($clr-primary, $lightness: -15%);
}
```

**Avoid**: Calling `lighten()` or other deprecated globals in new code, or placing `@use` below a CSS rule (Sass will error).

**Source**: [Built-in Sass functions — Beyond CSS](https://module-2.beyondcss.dev/lessons/built-in-sass-functions), [Introduction to @use — Beyond CSS](https://module-2.beyondcss.dev/lessons/introduction-to-use), [Sass color module](https://sass-lang.com/documentation/modules/color)

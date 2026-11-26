> Full index: [index-design-systems.md](index-design-systems.md)

# Theme by swapping palettes into CSS custom properties, not by baking Sass variables

**When to use**: When one codebase should support light/dark (or more) themes, a compile-time client skin, or a user toggle—and when a site should be able to opt out of a forced dark theme.

**Rule**: Sass `$variables` cannot change at runtime. Keep theme palettes as maps (`$light`, `$dark`) that invert roles while preserving a consistent scale, point `$active-theme` at one map for compile-time skins, and emit those entries as CSS custom properties on `:root`. For a live switch, override the same custom properties under `prefers-color-scheme: dark` and/or a class on `body`/`html` (a toggle can also persist to `localStorage` and offer a “system” option). Gate automatic dark CSS with a token such as `$enable-media-query-dark-mode` so a single-theme project does not compile the query—or break by deleting `$dark`. Utility classes and logos must use those custom properties (or `currentColor` / a `--logo-fill` on an SVG `<symbol>` + `href`) or they will stay stuck on the compile-time theme. This is the vanilla/Sass path; Next.js SSR still needs a cookie (or blocking script) to avoid flicker—see that practice.

**Example**:
```scss
$enable-media-query-dark-mode: true;
$active-theme: $light;

:root {
  @each $color, $shades in $active-theme {
    @each $shade, $value in $shades {
      --#{$color}-#{$shade}: #{$value};
    }
  }
  @if $enable-media-query-dark-mode {
    @media (prefers-color-scheme: dark) { /* same loop over $dark */ }
  }
}
.dark { /* same loop over $dark for a manual toggle */ }
```

**Avoid**: Serving a second compiled stylesheet per theme when custom properties would do, baking utility colors to hex, or removing `$dark` and leaving a compile error.

**Source**: [Switching between themes — Beyond CSS](https://module-4.beyondcss.dev/lessons/switching-between-themes), [Fixing the utility classes — Beyond CSS](https://module-4.beyondcss.dev/lessons/fixing-the-utility-classes), [Manually toggling the themes — Beyond CSS](https://module-4.beyondcss.dev/lessons/manually-toggling-the-themes), [What if you don't want a theme? — Beyond CSS](https://module-4.beyondcss.dev/lessons/what-if-you-don-t-want-a-theme), [Making the logo change with the color scheme — Beyond CSS](https://module-4.beyondcss.dev/lessons/making-the-logo-change-with-the-color-scheme), [website-starter-template-v3](https://github.com/kevin-powell/website-starter-template-v3)

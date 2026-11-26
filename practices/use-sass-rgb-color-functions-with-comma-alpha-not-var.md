> Full index: [index-sass.md](index-sass.md)

# Use Sass `rgb()` color tricks with a comma alpha, never with `var()`

**When to use**: When deriving a transparent or adjusted color from a Sass token at compile time.

**Rule**: In a Sass file, `rgb()`/`hsl()` are **Sass** functions, not the CSS ones. `rgb()` can take a hex, keyword, or even an `hsl()` color plus an alpha (`rgb($clr-primary, 0.7)`). That mix-and-match does not work with `hsl()` as the wrapper, and a no-alpha `rgb($hex)` is not rewritten. When an alpha is present, use a **comma** (`rgb($clr, 0.5)`); `rgb($clr / 0.5)` fails for a variable even though modern space-separated CSS syntax is otherwise valid. Never wrap a custom property: `rgb(var(--brand), 0.5)` **compiles with no error**, but the browser sees `rgb(#32301a, .5)` and the declaration is invalid. Store channels in custom properties instead (see [Compose dynamic color tokens with CSS variables](compose-dynamic-color-tokens-with-css-variables.md)), or keep the token as a Sass `$variable` if you need this compile-time `rgb()` helper. Older Sass also used to emit `hsl()` as hex; do not depend on that.

**Example**:
```scss
$color-neutral-900: #1f3049;
.button:hover {
  background: rgb($color-neutral-900, 0.7);
}
```

**Avoid**: `rgb(var(--token), .5)`, slash-separated alphas on Sass variables, or assuming a successful compile means the color is valid CSS.

**Source**: [Sass and colors — Beyond CSS](https://module-1.beyondcss.dev/lessons/sass-and-colors), [Problems to avoid — Beyond CSS](https://module-1.beyondcss.dev/lessons/problems-to-avoid), [Color functions with variables — Beyond CSS](https://module-1.beyondcss.dev/lessons/color-functions-with-variables), [Color functions with custom properties — Beyond CSS](https://module-1.beyondcss.dev/lessons/color-functions-with-custom-properties)

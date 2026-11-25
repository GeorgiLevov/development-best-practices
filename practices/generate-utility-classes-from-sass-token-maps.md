> Full index: [index-css-architecture.md](index-css-architecture.md)

# Generate utility classes from Sass token maps

**When to use**: When a token scale should be available as one-off classes (color, type size, spacing) without hand-writing each rule.

**Rule**: Loop maps with `@each` (and interpolation for the class name) so utilities stay in lockstep with the tokens. Prefer a predictable naming scheme—`.clr-primary-400`, `.fs-400`, `.margin-block-start-16`—and fix awkward names in the generator rather than living with them. Composition helpers such as `.container` and `.flow` can live beside generated utilities. If themes will switch at runtime, utilities must emit `var(--token)` rather than a baked Sass hex, or they will not follow the theme.

**Example**:
```scss
@use "../abstracts" as *;

@each $name, $value in $font-sizes {
  .fs-#{$name} { font-size: var(--fs-#{$name}); }
}
```

**Avoid**: Hard-coding a parallel set of utility values that can drift from the token maps, or compiling theme utilities to static colors that ignore custom properties.

**Source**: [A good starting point — Beyond CSS](https://module-3.beyondcss.dev/lessons/a-good-starting-point), [Fixing the utility classes — Beyond CSS](https://module-4.beyondcss.dev/lessons/fixing-the-utility-classes), [website-starter-template-v3](https://github.com/kevin-powell/website-starter-template-v3)

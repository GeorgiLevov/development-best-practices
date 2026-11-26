> Full index: [index-sass.md](index-sass.md)

# Interpolate identifiers with `#{}` and avoid slash division in Sass math

**When to use**: When a variable must appear in a selector, property name, or URL, or when you need compile-time arithmetic.

**Rule**: `$var` is only a **value**. To use it as (or inside) a selector or property, wrap it in `#{$var}` (`.text-#{$name}`, `.#{$color}`). Sass can multiply, add, and subtract at compile time without `calc()`; attaching a unit works as `$n * 2px`. The `/` division operator is **deprecated** because `/` is also CSS (for example `rgb(0 0 0 / .2)`). Prefer `math.div()`, `calc()`, or multiplying by a fraction (`* 0.5`). Look at the compiled CSS: a unitless `width: 200` is invalid, and a selector that still says `100` while the value is `200` is a missed interpolation.

**Example**:
```scss
@use "sass:math";
$i: 3;
.col-#{$i} { flex-basis: math.div(100%, 12) * $i; }
```

**Avoid**: Writing `$name { ... }` as if a variable were a selector, or using `/` for Sass division in new code.

**Source**: [Interpolation — Beyond CSS](https://module-1.beyondcss.dev/lessons/interpolation-coffee), [Interpolation and math — Beyond CSS](https://module-1.beyondcss.dev/lessons/interpolation-and-math)

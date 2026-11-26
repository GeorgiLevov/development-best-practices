> Full index: [index-sass.md](index-sass.md)

# Extract repeated Sass calculations into `@function`s that `@return` a value

**When to use**: When the same compile-time calculation (contrast color, spacing step, clamped number) is needed in more than one rule or loop.

**Rule**: `@function` looks like a mixin but **must** `@return` a value; a bare expression inside the function is discarded. Call it as a value (`color: high-contrast($bg)`), not with `@include`. Use `$args...` for a variable-length argument list (it must be last). Pull logic out of a loop into a function once you want it in other contexts—often during a refactor, not on the first draft. Keep functions for values; keep mixins for declarations and `@content` blocks.

**Example**:
```scss
@use "sass:color";
@function high-contrast($color) {
  @if color.lightness($color) < 50 { @return white; }
  @else { @return black; }
}
.badge { color: high-contrast($bg); background: $bg; }
```

**Avoid**: Writing a `@function` that never `@return`s, or using a mixin when you only needed a computed value.

**Source**: [Functions — Beyond CSS](https://module-2.beyondcss.dev/lessons/functions), [Functions in action — Beyond CSS](https://module-2.beyondcss.dev/lessons/functions-orange)

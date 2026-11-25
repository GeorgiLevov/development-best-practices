> Full index: [index-sass.md](index-sass.md)

# Validate mixin arguments with maps, `sass:meta`, and `@error`

**When to use**: When a mixin such as `mq()` should accept a named token *or* a raw length, and fail loudly on typos or unitless numbers.

**Rule**: Store named tokens in a map (`$breakpoints: (small: 30em, medium: 45em)`). Look up with `map.get` / `map.has-key` after `@use "sass:map"`. If the argument is not a key, use `meta.type-of($size) == number` and `math.is-unitless($size)` to accept only unit-bearing lengths; `@error` with a clear message for unknown keywords or unitless numbers (plain `500` is not a width). Finish with a final `@else` so no invalid input silently compiles. Emit the caller’s block through `@content`. This pattern is more useful than a mixin that only accepts one hard-coded keyword.

**Example**:
```scss
@use "sass:map";
@use "sass:math";
@use "sass:meta";
$breakpoints: (small: 30em, medium: 45em, large: 65em);
@mixin mq($size) {
  @if map.has-key($breakpoints, $size) {
    @media (min-width: map.get($breakpoints, $size)) { @content; }
  } @else if meta.type-of($size) == number {
    @if math.is-unitless($size) {
      @error "mq() needs a unit, got #{$size}";
    } @else {
      @media (min-width: $size) { @content; }
    }
  } @else {
    @error "#{$size} is not a $breakpoints key or a length";
  }
}
```

**Avoid**: Letting `@include mq(reallysmall)` or `@include mq(500)` compile into an empty or invalid query.

**Source**: [Maps — Beyond CSS](https://module-2.beyondcss.dev/lessons/maps), [Challenge solution — Beyond CSS](https://module-2.beyondcss.dev/lessons/challenge-solution), [Sass math.is-unitless](https://sass-lang.com/documentation/modules/math#is-unitless), [sass:meta](https://sass-lang.com/documentation/modules/meta), [beyond-css-course-material](https://github.com/kevin-powell/beyond-css-course-material)

> Full index: [index-sass.md](index-sass.md)

# Write mixins with arguments, defaults, nested selectors, `@content`, and varargs last

**When to use**: When a reusable Sass pattern needs parameters, hover/focus rules, or a caller-supplied block (for example a media-query wrapper).

**Rule**: Declare `@mixin name($required, $optional: default)` and call it with `@include`. Nested selectors and `&` work inside the mixin. `@content` pastes the caller’s block at the `@content` site—use this for `mq()`-style wrappers. Put **required parameters first** and defaults last so callers can pass positional values without naming every argument. Arbitrary arguments (`$colors...`) must be last, and **cannot** be combined with optional parameters in the same mixin. Pass `@include mixin($values...)` when forwarding a list. Mixins emit nothing until included.

**Example**:
```scss
@mixin mq($size, $minmax: min-width) {
  @media screen and ($minmax: $size) {
    @content;
  }
}
.hero {
  @include mq(45em) { font-size: 2rem; }
}
```

**Avoid**: Putting optional parameters before required ones (callers then have to name arguments), or mixing `$args...` with defaulted parameters in one mixin.

**Source**: [Mixins — Beyond CSS](https://module-1.beyondcss.dev/lessons/mixins), [Selectors inside of mixins — Beyond CSS](https://module-1.beyondcss.dev/lessons/selectors-inside-of-mixins), [Mixin arguments — Beyond CSS](https://module-1.beyondcss.dev/lessons/mixin-arguments), [Optional arguments — Beyond CSS](https://module-1.beyondcss.dev/lessons/optional-arguments), [Advanced mixins — Beyond CSS](https://module-2.beyondcss.dev/lessons/advanced-mixins)

> Full index: [index-sass.md](index-sass.md)

# Generate repeated rules with `@for` and `@each`, and interpolate the loop variable

**When to use**: When a scale of utilities, columns, or icons can be derived from a count or a list instead of being pasted by hand.

**Rule**: `@for $i from 1 through 12` includes the end; `to` stops **before** the end—use `through` when “12 columns” should actually emit `.col-12`. Name the loop variable for the domain (`$column-count`), and interpolate it into selectors (`.col-#{$column-count}`). `@each $item in $list` walks comma lists; nested lists unpack as `@each $name, $color in $pairs`. Parameterize totals (`$total-columns`) so the same loop can grow. Use Sass math or `calc()`/`math.div()` for widths, not deprecated `/`. Loops without interpolation emit identical selectors, which is wasted output.

**Example**:
```scss
$total-columns: 12;
@for $column-count from 1 through $total-columns {
  .col-#{$column-count} {
    flex-basis: calc(100% / #{$total-columns} * #{$column-count});
  }
}
```

**Avoid**: Using `to` when you meant to include the last step, or forgetting `#{}` so every iteration overwrites the same class.

**Source**: [Loops — Beyond CSS](https://module-2.beyondcss.dev/lessons/loops), [@for — Beyond CSS](https://module-2.beyondcss.dev/lessons/for), [@each — Beyond CSS](https://module-2.beyondcss.dev/lessons/each-lavender)

> Full index: [index-sass.md](index-sass.md)

# Add Sass control flow with `@if` / `@else` and the global `if()` function

**When to use**: When compiled output should change based on a token, a color’s lightness, or a mixin argument.

**Rule**: `@if expression { }` compiles its block only when the expression is true; chain `@else if` and `@else`. Parentheses are optional. Combine conditions with `and` / `or`, **not** `&&` / `||`. Prefer a general test (`color.lightness($color) < 50`) over hard-coding a name (`$name == secondary`). The global `if()` function (no `@use` required) is a ternary for expressions: `if($cond, $if-true, $if-false)`. Use `@if` for blocks of rules; use `if()` when you need a single value inside a property or argument.

**Example**:
```scss
@use "sass:color";
@each $name, $color in $colors {
  .clr-#{$name} {
    background: $color;
    color: if(color.lightness($color) < 50, white, black);
  }
}
```

**Avoid**: Writing `||` / `&&` in Sass, or special-casing token names when a module function can test the value itself.

**Source**: [@if, @else, and if() — Beyond CSS](https://module-2.beyondcss.dev/lessons/if-else-if-else-and-if), [@if — Beyond CSS](https://module-2.beyondcss.dev/lessons/if)

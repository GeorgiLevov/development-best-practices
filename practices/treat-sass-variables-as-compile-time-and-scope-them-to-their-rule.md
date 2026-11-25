> Full index: [index-sass.md](index-sass.md)

# Treat Sass variables as compile-time values and scope them to their rule

**When to use**: When naming tokens, composing values, or putting a breakpoint in a `@media` query.

**Rule**: `$variables` are replaced at compile time. They may be declared at the top level (custom properties cannot). A `$var` declared inside a rule is visible only in that rule and its Sass nests—not in a sibling selector—unlike CSS custom properties, which inherit on the live DOM. Alias raw hues into semantic names (`$red` → `$clr-primary`) so a palette can change without leaving `$clr-dark-gray: firebrick`. Sass variables are the right tool for **media-query breakpoints**, which generally still cannot use custom properties. Prefer custom properties when a value must change in the browser (theming, JS). See [Pass dynamic per-instance values via CSS custom properties](prefer-css-variables-for-dynamic-component-styles.md).

**Example**:
```scss
$bp-medium: 45em;
$red: #da3f0b;
$clr-primary: $red;

.header {
  $accent: $clr-primary; // only this rule and its nests
  color: $accent;
}

@media (min-width: $bp-medium) {
  .hero { padding: 2rem; }
}
```

**Avoid**: Expecting a `$var` declared in `.header` to work in a sibling `.title`, or trying to use a custom property as a breakpoint.

**Source**: [Variables — Beyond CSS](https://module-1.beyondcss.dev/lessons/variables), [Using a variable inside another variable — Beyond CSS](https://module-1.beyondcss.dev/lessons/using-a-variable-inside-another-variable), [Variables and the cascade — Beyond CSS](https://module-1.beyondcss.dev/lessons/variables-and-the-cascade), [Use cases for variables — Beyond CSS](https://module-1.beyondcss.dev/lessons/use-cases-for-variables), [Variables vs Custom Properties — Beyond CSS](https://module-1.beyondcss.dev/lessons/variables-vs-custom-properties)

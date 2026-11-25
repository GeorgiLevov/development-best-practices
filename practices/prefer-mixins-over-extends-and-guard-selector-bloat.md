> Full index: [index-sass.md](index-sass.md)

# Prefer mixins over `@extend`, and treat placeholder extends as a specificity hazard

**When to use**: When several selectors should share a chunk of declarations.

**Rule**: `@extend .class` merges selectors into one rule; `%placeholder` rules emit nothing until they are extended (write `@extend %shadow`). That sharing looks efficient, but extending a selector that is already nested, or switching `&-alert` to `&.alert`, can invent unexpected compounds (`.alert.tooltip-warning`) and high-specificity descendant lists. Mixins (`@mixin` / `@include`) **repeat** the declarations instead of merging selectors. Repeated text compresses well on the server, so “extends produce less CSS” is rarely a real download win—the Sass docs say to pick the feature that fits the use case. Default to mixins (they also take arguments, nested selectors, and errors). Keep extends for small, well-isolated placeholders, and always inspect the compiled selector list. In indented Sass, avoid the legacy `=` / `+` mixin aliases.

**Example**:
```scss
%shadow { box-shadow: 0.25rem 0.25rem 1rem rgb(0 0 0 / 0.15); }
.card { @extend %shadow; } // OK if %shadow is never used in nested/descendant form
```

**Avoid**: `@extend`ing a class that already appears in descendant selectors, or choosing extends just to shave repeated declarations from the compiled file.

**Source**: [Extends — Beyond CSS](https://module-1.beyondcss.dev/lessons/extends), [Placeholders — Beyond CSS](https://module-1.beyondcss.dev/lessons/placeholders), [Nesting with extends — Beyond CSS](https://module-1.beyondcss.dev/lessons/nesting-with-extends), [Why extends can be dangerous — Beyond CSS](https://module-1.beyondcss.dev/lessons/why-extends-can-be-dangerous), [Mixins vs. Extends — Beyond CSS](https://module-1.beyondcss.dev/lessons/mixins-vs-extends)

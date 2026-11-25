> Full index: [index-sass.md](index-sass.md)

# Use `&` for pseudos, BEM-style suffixes, and trailing parent context

**When to use**: When a nested rule should attach to the parent itself, build a modifier, or react to an ancestor.

**Rule**: Bare nesting always creates a **descendant** selector. Prefix with `&` to build a compound or suffix selector (`.card { &__title { } }` → `.card__title`, `&:hover`, `&.is-active`). Nested `:hover` **without** `&` compiles to a useless descendant (`a :hover`). A **trailing** `&` (`.inverted &`) keeps a child’s styles next to that child while qualifying them under another parent—useful for inverted sections or theme wrappers. `&-title` is a fine lighter alternative to strict BEM `__` if you do not want the double underscore. Be careful if the parent is an element selector, which can concatenate into invalid or overly broad output.

**Example**:
```scss
.button {
  &:hover, &:focus { filter: brightness(0.9); }
  .inverted & { background: white; color: var(--brand); }
}
.card {
  &__title { font-weight: 700; }
}
```

**Avoid**: Writing nested `:hover` without `&`, or concatenating `&` onto an element parent without checking the compiled selector.

**Source**: [The parent selector — Beyond CSS](https://module-1.beyondcss.dev/lessons/the-parent-selector-amp), [Avoiding specificity issues with nesting — Beyond CSS](https://module-1.beyondcss.dev/lessons/avoiding-specificity-issues-with-nesting), [Using a trailing & — Beyond CSS](https://module-1.beyondcss.dev/lessons/using-a-trailing-amp), [BEM](http://getbem.com/)
